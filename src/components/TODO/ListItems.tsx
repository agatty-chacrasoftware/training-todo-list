import {
  Center,
  Flex,
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
  propNames,
  Box,
  Checkbox,
  Heading,
} from '@chakra-ui/react'
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Todo } from './AddTodoListItem'
import { Section } from '@/layouts'

export interface ItemProps {
  data: Todo[]
}

const ListItems = ({ ...props }: ItemProps) => {
  const data = props.data.map((item, index) => (
    <>
      <Flex direction={'column'}>
        <Flex>
          <Checkbox colorScheme={'green'}>
            <Text fontFamily={'mono'} fontSize={'x-large'}>
              {item.title}
            </Text>
          </Checkbox>
          <Box ml={10}>
            <DeleteIcon color="red.500" mr="2" />
            <EditIcon color="green" />
          </Box>
        </Flex>
        <Text fontFamily={'mono'}>{item.description}</Text>
      </Flex>
    </>
  ))
  return (
    <Section>
      <Flex direction={'column'} mt={6}>
        <Heading fontFamily={'mono'}>My Todos</Heading>
        <UnorderedList>{data}</UnorderedList>
      </Flex>
    </Section>
  )
}

export default ListItems
