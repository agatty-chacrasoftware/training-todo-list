import { Section } from '@/layouts'
import useTodoStore from '@/store/useTodoStore'
import { Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import TODOForm from './TODOForm'
import TODOList from './TODOList'

export interface Todo {
  id: String
  title: string
  description: string
  isCompleted: Boolean
}

const TODO = () => {
  const todoListArray = useTodoStore((state) => state.todoListArray)

  return (
    <Section>
      <Flex direction={'column'}>
        <Heading fontFamily={'mono'} color={'teal.700'}>
          TODO List
        </Heading>
        <TODOForm />
        {console.log(todoListArray)}
        <TODOList data={todoListArray} />
      </Flex>
    </Section>
  )
}

export default TODO
