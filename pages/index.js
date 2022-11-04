import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <List>
      <ListItem>
        <ListIcon as={CheckIcon} color='green.500' />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>

      <ListItem>Test 2</ListItem>
      <ListItem>Test 3</ListItem>
    </List>
  )
}
