import { Section } from '@/layouts'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Flex,
  Checkbox,
  Box,
  Heading,
  UnorderedList,
  Text,
} from '@chakra-ui/react'
import { Todo } from './TODO'
import { ItemProps } from './TODOList'

type TODOItemProps = Todo

const TODOItem = (props: TODOItemProps) => {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Checkbox colorScheme={'green'}>
          <Text fontFamily={'mono'} fontSize={'x-large'}>
            {props.title}
          </Text>
        </Checkbox>
        <Box ml={10}>
          <DeleteIcon color="red.500" mr="2" />
          <EditIcon color="green" />
        </Box>
      </Flex>
      <Text fontFamily={'mono'}>{props.description}</Text>
    </Flex>
  )
}

export default TODOItem
