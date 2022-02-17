import { Heading } from '@chakra-ui/react'
import { MotionVStack } from '..'
import React from 'react'
import TODOForm from './TODOForm'
import TODOList from './TODOList'

export interface Todo {
  id: string
  title: string
  description: string
  isCompleted: boolean
}

const TODO = () => {
  return (
    <MotionVStack
      layout
      bg="white"
      shadow="md"
      rounded="lg"
      p={12}
      m="auto"
      minW="300px"
      spacing={12}
      overflow="hidden"
    >
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        textAlign="center"
      >
        Todo List
      </Heading>
      <TODOForm />
      <TODOList />
    </MotionVStack>
  )
}

export default TODO
