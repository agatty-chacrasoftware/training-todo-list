import {
  AnimatePresence,
  Variants,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Flex, Text } from '@chakra-ui/react'

import { MotionFlex } from '..'
import { useEffect } from 'react'
import useTodoStore from '@/store/useTodoStore'

const TODOCount = () => {
  const items = useTodoStore((state) => state.todoListArray)

  const todo = items.filter((item) => item.isCompleted === false)

  const length = useSpring(todo.length)

  const height = useTransform(length, [0, items.length], ['0%', '100%'])

  useEffect(() => {
    length.set(todo.length)
  }, [length, todo.length])

  const slideIn: Variants = {
    initial: {
      x: '-100%',
    },
    animate: {
      x: '0%',
    },
  }
  return (
    <Flex w="80px" align="flex-end">
      <AnimatePresence>
        {todo.length > 0 && (
          <MotionFlex
            w="full"
            bg="orange.400"
            h="80%"
            align="center"
            // @ts-ignore chakra overrides the types
            style={{ height }}
            variants={slideIn}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <Text
              w="full"
              fontWeight="semibold"
              fontSize="2xl"
              textAlign="center"
              color="white"
            >
              {todo.length}
            </Text>
          </MotionFlex>
        )}
      </AnimatePresence>
    </Flex>
  )
}

export default TODOCount
