import {
    Box,
    VStack,
    useColorMode,
    useColorModeValue,
    IconButton
  } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import SidebarLink from './link'

export default function Sidebar(props) {
    const { toggleColorMode } = useColorMode();
    const itemBackground = useColorModeValue("gray.100", "gray.700");
    const links = ['experience', 'skills', 'projects', 'contact', 'source code']
    return (
        <Box bg='gray.200' h='100vh' w='150px' position='absolute' shadow='lg'>
            <VStack spacing='50px' mt={10}>
                <IconButton
                    colorScheme={useColorModeValue("orange", "purple")}
                    onClick={toggleColorMode}
                    icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
                    isRound={true}
                />
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
