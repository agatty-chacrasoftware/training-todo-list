import { Box, BoxProps, forwardRef } from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'
import React from 'react'

export type MainLayoutProps = BoxProps

const MainLayout = forwardRef<MainLayoutProps, 'div'>(
  ({ children, ...props }, ref) => {
    return (
      <Box as="main" ref={ref} h="full" w="full" {...props}>
        <AnimatePresence exitBeforeEnter initial={false}>
          {children}
        </AnimatePresence>
      </Box>
    )
  }
)

export default MainLayout
