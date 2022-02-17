import { Heading, Text, VStack } from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'
import TODOItem from './TODOItem'
import useTodoStore from '@/store/useTodoStore'

const TODOList = () => {
  const todoListArray = useTodoStore((state) => state.todoListArray)

  const todoItems = todoListArray.map((item, index) => (
    <TODOItem key={index} {...item} />
  ))
  return (
    <VStack w="full" align="stretch" spacing={8}>
      <Heading
        textAlign="center"
        size="lg"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        My Todo&apos;s
      </Heading>
      <AnimatePresence>{todoItems}</AnimatePresence>
      {todoListArray.length === 0 && (
        <Text textAlign="center">You don&apos;t have any todo</Text>
      )}
    </VStack>
  )
}

export default TODOList
