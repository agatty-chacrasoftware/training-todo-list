import useTodoStore from '@/store/useTodoStore'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Flex, Checkbox, Box, Text, IconButton } from '@chakra-ui/react'
import { Todo } from './TODO'

type TODOItemProps = Todo

const TODOItem = (props: TODOItemProps) => {
  const removeTodoItem = useTodoStore((state) => state.removeTodoItem)
  const markTodoComplete = useTodoStore((state) => state.markTodoComplete)

  return (
    <Flex direction={'column'}>
      <Flex>
        <Checkbox
          colorScheme={'green'}
          onChange={() => markTodoComplete(props.id)}
        >
          {props.isCompleted ? (
            <Text fontFamily={'mono'} fontSize={'x-large'} as="s">
              {props.title}
            </Text>
          ) : (
            <Text fontFamily={'mono'} fontSize={'x-large'}>
              {props.title}
            </Text>
          )}
        </Checkbox>
        <Box ml={10}>
          <IconButton
            aria-label="Delete"
            icon={<DeleteIcon />}
            onClick={() => {
              removeTodoItem(props.id)
            }}
          />
        </Box>
      </Flex>
      <Text fontFamily={'mono'}>{props.description}</Text>
    </Flex>
  )
}

export default TODOItem
