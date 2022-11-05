import {
  Box, useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react';
import Experience from './components/experience';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Skills from './components/skills';

export default function Home() {
  const [page, setPage] = useState('experience')
  return (
    <>
      <Sidebar page={page} setPage={setPage} />
      <Box 
        bg={useColorModeValue("gray.50", "gray.500")}
        w='100vw' 
        h='100vh' 
        pl={200} 
        pr={200}>      
        <Header />
        {page === 'experience' ?
          <Experience />
        : page === 'skills' ?
          <Skills />
        : null
        }
      </Box>
    </>
  )
}
