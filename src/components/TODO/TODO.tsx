import { Section } from '@/layouts'
import useTodoStore from '@/store/useTODOStore'
import { Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import TODOForm from './TODOForm'
import TODOList from './TODOList'

export interface Todo {
  title: string
  description: string
}

const TODO = () => {
  const { todoListArray } = useTodoStore()
  return (
    <Section>
      <Flex direction={'column'}>
        <Heading fontFamily={'mono'} color={'teal.700'}>
          TODO List
        </Heading>
        <TODOForm />
        <TODOList data={todoListArray} />
      </Flex>
    </Section>
  )
}

export default TODO
