import { Flex } from '@chakra-ui/react'
import { MainLayout } from '@/layouts'
import { NextPageWithLayout } from '@/typings/app'
import { ReactElement } from 'react'
import { TODO } from '@/components'
import TODOCompletedCount from '@/components/TODO/TODOCompletedCount'
import TODOCount from '@/components/TODO/TODOCount'

const Home: NextPageWithLayout = () => {
  return (
    <Flex h="full" w="full">
      <TODOCount />
      <TODO />
      <TODOCompletedCount />
    </Flex>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Home
