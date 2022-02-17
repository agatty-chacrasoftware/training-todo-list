import { Heading } from '@chakra-ui/react'
import { LayoutGroup } from 'framer-motion'
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
    <LayoutGroup>
      <MotionVStack
        layout
        bg="white"
        shadow="md"
        rounded="lg"
        p={12}
        m="auto"
        minW="300px"
        maxH="96vh"
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
    </LayoutGroup>
  )
}

export default TODO
