import { AnimatePresence, Variants } from 'framer-motion'
import { Heading, Text, VStack } from '@chakra-ui/react'

import { MotionBox } from '..'
import TODOItem from './TODOItem'
import useTodoStore from '@/store/useTodoStore'

const TODOList = () => {
  const todoListArray = useTodoStore((state) => state.todoListArray)

  const todoItems = todoListArray.map((item) => (
    <TODOItem key={item.id} {...item} />
  ))

  const fadeIn: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  }

  return (
    <VStack
      w="full"
      align="stretch"
      spacing={8}
      overflowY="auto"
      overflowX="hidden"
    >
      <Heading
        textAlign="center"
        size="lg"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        My Todo&apos;s
      </Heading>
      <VStack spacing={4}>
        <AnimatePresence>
          {todoItems}
          {todoListArray.length === 0 && (
            <MotionBox
              key="no-todo"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <Text textAlign="center">You don&apos;t have any todo</Text>
            </MotionBox>
          )}
        </AnimatePresence>
      </VStack>
    </VStack>
  )
}

export default TODOList
