import { Section } from '@/layouts'
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import ListItems from './ListItems'

export interface Todo {
  title: string
  description: string
}

const TODO = () => {
  const [todoData, setTodoData] = useState<Todo>({ title: '', description: '' })
  const [todoListArray, setTodoListArray] = useState<Todo[]>([])

  const handleClick = () => {
    setTodoListArray((prev) => [...prev, todoData])
    setTodoData({ title: '', description: '' })
  }

  return (
    <Section>
      <Flex direction={'column'}>
        <Heading fontFamily={'mono'} color={'teal.700'}>
          TODO List
        </Heading>
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
          <ListItems data={todoListArray} />
        </Stack>
      </Flex>
    </Section>
  )
}

export default TODO
