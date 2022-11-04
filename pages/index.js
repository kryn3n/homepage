import {
  Box,
  Text,
  HStack,
  Image,
  Heading,
  VStack,
  Link,
  Highlight
} from '@chakra-ui/react'
import { CheckIcon, EmailIcon } from '@chakra-ui/icons'
import { useState } from 'react';

export default function Home() {
  const image1 = '/avatar_bw.jpeg';
  const image2 = '/avatar.jpeg';
  const [image, setImage] = useState(image1);

  return (
    <>
    <Box bg='gray.200' h='100vh' w='150px' position='absolute' shadow='lg'>
      <VStack spacing='50px' mt={10}>
        <Text fontSize='xl' color='gray.600' fontWeight='semibold' _hover={{color:'orange.400'}} textAlign='right'>experience</Text>
        <Text fontSize='xl' color='gray.600' fontWeight='semibold' _hover={{color:'orange.400'}}>skills</Text>
        <Text fontSize='xl' color='gray.600' fontWeight='semibold' _hover={{color:'orange.400'}}>projects</Text>
        <Text fontSize='xl' color='gray.600' fontWeight='semibold' _hover={{color:'orange.400'}}>contact</Text>
        <Link href='https://github.com/krynens/homepage/' isExternal> 
          <Text fontSize='xl' color='gray.600' fontWeight='semibold' _hover={{color:'orange.400'}}>
            source code
          </Text>
        </Link>
      </VStack>
    </Box>
    <Box bg='gray.50' w='100%' h='100vh' pl={200} pr={200}>      
      <HStack spacing='15px'>
        <Text
            bgGradient='linear(to-r, gray.200, gray.500)'
            _hover={{
              bgGradient: 'linear(to-r, gray.200, orange.500)',
            }}
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
            >
            thom krynen
        </Text>
        <Box>
        <Image 
          alt='Thom Krynen' 
          boxSize='60px' 
          src={image}
          onMouseEnter={() => setImage(image2)}
          onMouseOut={() => setImage(image1)}
          border='2px'
          borderRadius='full'
          borderColor='orange.300' 
          align='bottom'
        />
        </Box>
      </HStack>
      <Text
        mt={-3}
        mb={3}
        fontSize='2xl'
        color='gray.400'
        fontWeight='light'
        fontStyle='italic'
      >data analyst / data ops / more...
      </Text>
      <Box mt={5} mb={5} mr={250} bg='orange.100' rounded='lg'>
      <Text fontSize='lg' p={1.5}>
        Hi, my name is Thom! Welcome to my home on the internet. I'm a data analyst with a passion for geospatial data
      </Text>
      </Box>
   
      <Heading color='gray.600' mb={5}>
        <Highlight
          query={['year, experience', 'thom']}
          styles={{ px: '0.5', py: '0.5', rounded: 'lg', bg: 'orange.200' }}
        >
        SELECT year, experience FROM thom ;
        </Highlight>
      </Heading>
      <HStack align='top' spacing='20px' mr={250} mb={5}>
      <Text fontSize='xl' fontWeight='black'>2020</Text>
      <Text fontSize='lg'>Graduate RMIT University, BA Urban & Regional Planning (BURP, lol) with 1st Class Honours</Text>
      </HStack>

      <HStack align='top' spacing='20px' mr={250} mb={5}>
      <Text fontSize='xl' fontWeight='black'>2020</Text>
      <Text fontSize='lg'>Hired as Statutory Planner for Casey City Council.</Text>
      </HStack>

      <HStack align='top' spacing='20px' mr={250} mb={5}>
      <Text fontSize='xl' fontWeight='black'>2021</Text>
      <Text fontSize='lg'>Hired as Graduate Planner for LandTech (second Aus employee). Begin working on Australian expansion with a keen focus on spatial data, ranging from land zoning to hazards such as bushfire and flood.</Text>
      </HStack>

      <HStack align='top' spacing='20px' mr={250} mb={5}>
      <Text fontSize='xl' fontWeight='black'>2021</Text>
      <Text fontSize='lg'>Promoted to Associate Data Analyst at LandTech. Focus shifts from Australian expansion to launching in the United States.</Text>
      </HStack>

      <HStack align='top' spacing='20px' mr={250} mb={5}>
      <Text fontSize='xl' fontWeight='black'>2022</Text>
      <Text fontSize='lg'>Promoted to Data Analyst at LandTech. Responsible for zoning data in the United States.</Text>
      </HStack>
      </Box>
      </>
  )
}
