import { useState } from 'react';
import {
    Box,
    Text,
    HStack,
    Image
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
                <Image 
                alt='Thom Krynen' 
                boxSize='60px' 
                src={image}
                border='2px'
                borderRadius='full'
                borderColor='orange.300' 
                align='bottom'
                />
        </HStack>
      </Box>

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
            Hi, my name is Thom! Welcome to my home on the internet. I&apos;m a data analyst with a passion for geospatial data
        </Text>
      </Box>
      </>
    )
}