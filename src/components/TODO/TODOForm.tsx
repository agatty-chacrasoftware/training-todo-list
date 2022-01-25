import useTodoStore from '@/store/useTodoStore'
import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { Todo } from './TODO'

const TODOForm = () => {
  const [todoData, setTodoData] = useState<Todo>({
    id: '',
    title: '',
    description: '',
    isCompleted: false,
  })

  const addTodoItem = useTodoStore((state) => state.addTodoItem)

  const InputElement = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    InputElement.current?.focus()
    addTodoItem(todoData)
    setTodoData({ id: '', title: '', description: '', isCompleted: false })
  }

  return (
    <Flex justify={'space-around'}>
      <Stack spacing={4}>
        <Input
          w={'md'}
          placeholder="title"
          ref={InputElement}
          onChange={(e) => {
            setTodoData((prev) => ({
              ...prev,
              title: InputElement.current!.value,
            }))
          }}
          value={todoData.title}
        />
        <Textarea
          mt={4}
          mb={2}
          w={'md'}
          placeholder="description"
          onChange={(e) => {
            setTodoData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }}
          value={todoData.description}
        />
        <Button size={'md'} w={'min-content'} onClick={handleClick}>
          Add todo
        </Button>
      </Stack>
    </Flex>
  )
}

export default TODOForm
