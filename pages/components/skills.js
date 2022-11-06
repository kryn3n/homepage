import {
    Text,
    HStack,
    Heading,
    Link,
    Highlight,
    VStack
  } from '@chakra-ui/react'

export default function Skills(){
    function skill(name, description, highlight) {
        return (
            <HStack>
                <Text fontSize='xl' fontWeight='black'>{name}</Text>
                <Text fontSize='lg'>
                    <Highlight
                    query={highlight}
                    styles={{ bgColor: 'orange' }}>
                    {description}
                    </Highlight>
                </Text>
            </HStack>
        )
    }


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
        <VStack alignItems='right' alignContent='right' position='absolute'>
            {skill('dbt', 'Proficient in Fishtown Analytics\'', ['in'])}
        </VStack>
{/* 
        <HStack align='top' spacing='20px' mr={250} mb={5}>
            <Text fontSize='xl' fontWeight='black'>dbt</Text>
            <Text fontSize='lg'>Proficient in Fishtown Analytics&apos;  
                <Link href='https://www.getdbt.com/' isExternal>
                <Highlight 
                    query={['data build tool (dbt)']}
                    styles={{ bgColor: 'orange' }}
                    > data build tool (dbt)
                </Highlight>    
                </Link> 
                .
            </Text>
        </HStack>

        <HStack align='top' spacing='20px' mr={250} mb={5}>
            <Text fontSize='xl' fontWeight='black'>Prefect</Text>
            <Text fontSize='lg'>Proficient in
                <Link href='https://www.prefect.io/' isExternal>
                <Highlight 
                    query={['Prefect']}
                    styles={{ bgColor: 'orange' }}
                    > Prefect.
                </Highlight>    
                </Link> 
                 Experience in large-scale transforms.
            </Text>
        </HStack> */}

        </>
    )
}