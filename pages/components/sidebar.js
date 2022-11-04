import {
    Box,
    Text,
    VStack,
    Link
  } from '@chakra-ui/react'
  import SidebarLink from './link'

export default function Sidebar(props) {
    const links = ['experience', 'skills', 'projects', 'contact', 'source code']
    return (
        <Box bg='gray.200' h='100vh' w='150px' position='absolute' shadow='lg'>
            <VStack spacing='50px' mt={10}>
                {links.map(link => {return(
                    <SidebarLink 
                        key={link} 
                        id={link} 
                        page={props.page}
                        setPage={props.setPage}/>
                    )})}
            </VStack>
        </Box>
    )
}
