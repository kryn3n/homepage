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
  Image,
  Heading
} from '@chakra-ui/react'
import { CheckIcon, EmailIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Box bg='gray.50' w='100%' h='100vh' pl={200} pr={200}>
      <HStack>
        <Text
            bgGradient='linear(to-r, gray.200, gray.500)'
            _hover={{
              bgGradient: 'linear(to-r, gray.200, orange.500)',
            }}
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
            >
            Thom Krynen
        </Text>
        <Image 
          alt='Thom Krynen' 
          boxSize='60px' 
          src='/avatar.jpg'
          border='2px'
          // borderWidth='2px'
          borderRadius='full'
          borderColor='orange.300' 
        />
      </HStack>
      <Text
        mt={-3}
        mb={3}
        fontSize='2xl'
        color='gray.400'
        fontWeight='light'
        fontStyle='italic'
      >Data Analyst, Data Ops, More...
      </Text>
      {/* </Center> */}

      {/* <Center>
        <HStack>
          <EmailIcon color='gray.600'/>
          <Image 
            boxSize='20px'
            color='gray.600'
            alt='LinkedIn Logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png'/>
        </HStack>
      </Center> */}
      
      <Heading color='gray.600' mb={5}>
        Experience
      </Heading>
      <HStack align='top' spacing='20px' mr={250} mb={5}>
      <Text fontSize='xl' fontWeight='black'>2020</Text>
      <Text fontSize='lg'>Hired as Statutory Planner for Casey City Council.</Text>
      </HStack>

      <HStack align='top' spacing='20px' mr={250} mb={5}>
      <Text fontSize='xl' fontWeight='black'>2021</Text>
      <Text fontSize='lg'>Hired as Graduate Planner for LandTech (second Aus employee). Begin working on Australian expansion with a keen focus on spatial data, ranging from land zoning to hazards such as bushfire and flood.</Text>
      </HStack>

      <HStack align='top' spacing='20px' mr={250}>
      <Text fontSize='xl' fontWeight='black'>2021</Text>
      <Text fontSize='lg'>Promoted to Associate Data Analyst at LandTech. Focus shifts from Australian expansion to launching in the United States.</Text>
      </HStack>

      <Text fontSize='xl'>2021 - Associate Data Analyst, LandTech</Text>
      <Text fontSize='xl'>2022 - Data Analyst, LandTech</Text>

    </Box>
  )
}
