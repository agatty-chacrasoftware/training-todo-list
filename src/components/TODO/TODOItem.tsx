import { Box, Checkbox, IconButton, Text } from '@chakra-ui/react'

import { DeleteIcon } from '@chakra-ui/icons'
import { MotionFlex } from '..'
import { Todo } from './TODO'
import { Variants } from 'framer-motion'
import useTodoStore from '@/store/useTodoStore'

type TODOItemProps = Todo

const TODOItem = (props: TODOItemProps) => {
  const removeTodoItem = useTodoStore((state) => state.removeTodoItem)
  const markTodoComplete = useTodoStore((state) => state.markTodoComplete)

  const slideIn: Variants = {
    initial: {
      x: '150%',
    },
    animate: {
      x: '0%',
    },
    exit: {
      x: '-150%',
    },
  }
  return (
    <MotionFlex
      key={props.id}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideIn}
      w="full"
      rounded="md"
      bg={props.isCompleted ? 'green.50' : 'gray.50'}
      py={4}
      px={6}
    >
      <Box flex={1} color={props.isCompleted ? 'gray.400' : 'black'}>
        <Checkbox
          colorScheme={'green'}
          size={'lg'}
          onChange={() => markTodoComplete(props.id)}
        >
          {props.isCompleted ? (
            <Text fontFamily="mono" fontWeight="bold" as="s">
              {props.title}
            </Text>
          ) : (
            <Text fontFamily="mono" fontWeight="bold">
              {props.title}
            </Text>
          )}
        </Checkbox>
        <Text
          fontFamily={'mono'}
          ml={8}
          as={props.isCompleted ? 's' : 'p'}
          display="block"
        >
          {props.description}
        </Text>
      </Box>
      <IconButton
        aria-label="Delete"
        size="xs"
        icon={<DeleteIcon />}
        onClick={() => {
          removeTodoItem(props.id)
        }}
      />
    </MotionFlex>
  )
}

export default TODOItem
