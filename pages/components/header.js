import { useState } from 'react';
import {
    Box,
    Text,
    HStack,
    Image,
    Heading,
    useColorModeValue
  } from '@chakra-ui/react'

export default function Header(){
    const image1 = '/avatar_bw.jpeg';
    const image2 = '/avatar.jpeg';
    const [image, setImage] = useState(image1);
    return(
        <>
        <Box 
            onMouseEnter={() => setImage(image2)}
            onMouseOut={() => setImage(image1)}>
            <HStack spacing='15px'>
                <Heading
                    size='4xl'
                    bgGradient='linear(to-r, gray.200, gray.500)'
                    _hover={{
                    bgGradient: useColorModeValue('linear(to-r, gray.200, orange.500)', 'linear(to-r, gray.200, purple.400)'),
                    }}
                    bgClip='text'
                    fontWeight='extrabold'
                    >
                    thom krynen
                </Heading>
                <Image 
                alt='Thom Krynen' 
                boxSize='60px' 
                src={image}
                border='2px'
                borderRadius='full'
                borderColor={useColorModeValue('orange.300', 'purple.300')}
                align='bottom'
                />
            </HStack>
        </Box>

      <Text
        mb={3}
        fontSize='2xl'
        color={useColorModeValue('gray.400', 'white')}
        fontWeight='light'
        fontStyle='italic'
      >data analyst / data ops / more...
      </Text>

      <Box 
        mt={5} 
        mb={5} 
        mr={250} 
        bg={useColorModeValue("orange.100", "purple.400")}
        rounded='lg'>
        <Text fontSize='lg' p={1.5}>
            Hi, my name is Thom! Welcome to my home on the internet. 
            I&apos;m a data analyst with a passion for geospatial data
        </Text>
      </Box>
      </>
    )
}