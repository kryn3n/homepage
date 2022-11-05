import {
    Text,
    HStack,
    Heading,
    Link,
    Highlight
  } from '@chakra-ui/react'

export default function Skills(){
    return(
        <>
        <Heading color='gray.600'>
            <Highlight
                query={['*', 'thom.skills']}
                styles={{ color: 'orange.400', fontStyle: 'italic' }}
            >
            SELECT *  FROM thom.skills
            </Highlight>
        </Heading>
        <Heading color='gray.600' mb={5}>
            <Highlight
                query={['relevance']}
                styles={{ color: 'orange.400', fontStyle: 'italic' }}
            >
            ORDER BY relevance DESC ;
            </Highlight>
        </Heading>

        <HStack align='top' spacing='20px' mr={250} mb={5}>
            <Text fontSize='xl' fontWeight='black'>dbt</Text>
            <Text fontSize='lg'>Graduate RMIT University, BA Urban & Regional Planning (BURP 😉) with 1st Class Honours</Text>
        </HStack>
        </>
    )
}