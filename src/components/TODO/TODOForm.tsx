import { Button, Input, Stack, Textarea } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import useTodoStore from '@/store/useTodoStore'

export interface FormInput {
  title: string
  description: string
}

const TODOForm = () => {
  const addTodoItem = useTodoStore((state) => state.addTodoItem)

  const { register, handleSubmit } = useForm<FormInput>()

  const onSubmit = (formInputs: FormInput) => {
    addTodoItem(formInputs)
  }
  return (
    <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <Input
        w="md"
        placeholder="title"
        {...register('title', { required: true })}
      />
      <Textarea
        mt={4}
        mb={2}
        w="md"
        placeholder="description"
        {...register('description', { required: true })}
      />
      <Button type="submit" size="md" w="min-content">
        Add todo
      </Button>
    </Stack>
  )
}

export default TODOForm
