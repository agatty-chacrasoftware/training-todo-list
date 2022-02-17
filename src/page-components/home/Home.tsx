import { Flex } from '@chakra-ui/react'
import { MainLayout } from '@/layouts'
import { NextPageWithLayout } from '@/typings/app'
import { ReactElement } from 'react'
import { TODO } from '@/components'

const Home: NextPageWithLayout = () => {
  return (
    <Flex h="full" w="full">
      <TODO />
    </Flex>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Home
