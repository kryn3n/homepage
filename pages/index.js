import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  Center,
  Text,
  Avatar,
  HStack,
  IconButton,
  Image
} from '@chakra-ui/react'
import { CheckIcon, EmailIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Box bg='gray.50' w='100%' h='100vh'>

      <Center>
        <Text
          bgGradient='linear(to-r, gray.200, gray.400)'
          _hover={{
            bgGradient: 'linear(to-r, gray.200, orange.500)',
          }}
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
          >
          Thom Krynen
        </Text>
      </Center>

      <Center>
        <Avatar 
          name='Thom Krynen' 
          size='lg' 
          src='/avatar.jpg'
          mr={5}
          // border='1px'
          // borderWidth='2px'
          // borderRadius='1'
          borderColor='white' 
          />
        <Box>
          <Text
            p={3}
            fontSize='2xl'
            color='gray.400'
            fontWeight='bold'
          >All Things Data
          </Text>
        </Box>
      </Center>

      <Center>
        <HStack>
          <EmailIcon color='gray.600'/>
          <Image 
            boxSize='20px'
            color='gray.600'
            alt='LinkedIn Logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png'/>
        </HStack>
      </Center>
      
      <Box 
        shadow='inner' 
        ml={100} 
        mr={100} 
        mt={10}
        p={10} rounded='2xl'>
      <Center>
        <List>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>

          <ListItem>Test 2</ListItem>
          <ListItem>Test 3</ListItem>
        </List>
      </Center>
      </Box>

    </Box>
  )
}
