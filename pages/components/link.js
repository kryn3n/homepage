import {
    Text,
    Link,
    useColorModeValue
  } from '@chakra-ui/react'

export default function SidebarLink(props) {
    return(
        <Link 
            href={props.id === 'source code' ? 
            'https://www.github.com/krynens/homepage/'
            : null}
            isExternal>
            <Text 
                id={props.id}
                fontSize='xl'
                color={useColorModeValue(
                    props.page === props.id
                    ? 'orange.400'
                    : 'gray.600',
                    props.page === props.id
                    ? 'purple.600'
                    : 'gray.600'
                )}
                fontWeight='bold' 
                _hover={{color: useColorModeValue('orange.400','purple.600')}} 
                textAlign='right'
                onClick={
                    props.id === 'source code' ? null
                    : () => props.setPage(props.id)}
                >{props.id}
            </Text>
        </Link>
    )
}