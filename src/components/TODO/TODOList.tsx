import { Flex, Heading } from '@chakra-ui/react'
import { Section } from '@/layouts'
import TODOItem from './TODOItem'
import { Todo } from './TODO'

export interface ItemProps {
  data: Todo[]
}

const TODOList = (props: ItemProps) => {
  const todoItems = props.data.map((item, index) => (
    <TODOItem key={index} {...item} />
  ))
  return (
    <Section>
      <Flex direction={'column'} mt={6}>
        <Heading fontFamily={'mono'}>My Todos</Heading>
        {todoItems}
      </Flex>
    </Section>
  )
}

export default TODOList
