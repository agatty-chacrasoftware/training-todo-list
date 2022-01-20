import { Section } from '@/layouts'
import { Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import TODOForm from './TODOForm'
import TODOList from './TODOList'

export interface Todo {
  title: string
  description: string
}

const TODO = () => {
  const [todoListArray, setTodoListArray] = useState<Todo[]>([])

  return (
    <Section>
      <Flex direction={'column'}>
        <Heading fontFamily={'mono'} color={'teal.700'}>
          TODO List
        </Heading>
        <TODOForm
          onAddTodo={(data) => setTodoListArray((prev) => [...prev, data])}
        />
        <TODOList data={todoListArray} />
      </Flex>
    </Section>
  )
}

export default TODO
