import '@/styles/index.css'

import { AppPropsWithLayout } from '@/typings/app'
import { Chakra } from '@/components'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>Ashwini Todo App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 viewport-fit=cover"
        />
      </Head>
      <Chakra cookies={pageProps.cookies}>
        {getLayout(<Component {...pageProps} />)}
      </Chakra>
    </>
  )
}

export default MyApp
