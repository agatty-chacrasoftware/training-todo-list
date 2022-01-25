import { Center, Flex, Heading } from '@chakra-ui/react'
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
      <Flex direction={'column'} justify={'space-around'} boxShadow={'inner'}>
        <Center>
          <Heading fontFamily={'cursive'} color={'red.500'} py={5}>
            My Todos
          </Heading>
        </Center>
        {todoItems}
      </Flex>
    </Section>
  )
}

export default TODOList
