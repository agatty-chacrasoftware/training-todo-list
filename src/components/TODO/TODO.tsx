import { Section } from '@/layouts'
import useTodoStore from '@/store/useTodoStore'
import { Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
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
    <Section mt={5} boxShadow={'dark-lg'} borderRadius={'lg'}>
      <Flex direction={'column'} justify={'space-around'}>
        <Center>
          <Heading fontFamily={'cursive'} color={'red.500'} py={5}>
            TODO List
          </Heading>
        </Center>
        <TODOForm />
        {console.log(todoListArray)}
        <TODOList data={todoListArray} />
      </Flex>
    </Section>
  )
}

export default TODO
