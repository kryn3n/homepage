import {
    Text,
    Link
  } from '@chakra-ui/react'

export default function SidebarLink(props) {
    return(
        <Link>
            <Text 
                id={props.id}
                fontSize='xl'
                color={props.page === props.id ? 'orange.400' : 'gray.600'}
                fontWeight='semibold' 
                _hover={{color:'orange.400'}} 
                textAlign='right'
                onClick={() => props.setPage(props.id)}
                >{props.id}
            </Text>
        </Link>
    )
}