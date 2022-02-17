import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';

import { GetServerSideProps } from 'next';
import { ReactNode } from 'react';
import theme from '@/styles/theme';

export interface ChakraProps {
  cookies?: string;
  children?: ReactNode;
}

const Chakra = ({ cookies, children }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  };
};

export default Chakra;
