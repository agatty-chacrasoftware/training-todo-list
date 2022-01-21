import useTodoStore from '@/store/useTodoStore'
import { Button, Input, Stack, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { Todo } from './TODO'

const TODOForm = () => {
  const [todoData, setTodoData] = useState<Todo>({
    id: '',
    title: '',
    description: '',
  })

  const setTodoListArray = useTodoStore((state) => state.setTodoListArray)

  const handleClick = () => {
    setTodoListArray(todoData)
    setTodoData({ id: '', title: '', description: '' })
  }

  return (
    <Stack spacing={4}>
      <Input
        w={'md'}
        placeholder="title"
        onChange={(e) => {
          setTodoData((prev) => ({ ...prev, title: e.target.value }))
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
  )
}

export default TODOForm
