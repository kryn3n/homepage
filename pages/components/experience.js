import {
    Text,
    HStack,
    Heading,
    Link,
    Highlight
  } from '@chakra-ui/react'

export default function Experience() {
    return(
        <>
        <Text fontSize='md'>
        Download my CV 👇
        </Text>

        <Link>
            <Heading color='gray.600' mb={5}>
            <Highlight
                query={['year, experience', 'thom']}
                styles={{ color: 'orange.400', fontStyle: 'italic' }}
            >
            SELECT year, experience FROM thom ;
            </Highlight>
            </Heading>
        </Link>

        <HStack align='top' spacing='20px' mr={250} mb={5}>
            <Text fontSize='xl' fontWeight='black'>2020</Text>
            <Text fontSize='lg'>Graduate RMIT University, BA Urban & Regional Planning (BURP 😉) with 1st Class Honours</Text>
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
        </>
    )
}