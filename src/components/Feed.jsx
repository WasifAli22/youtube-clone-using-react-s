import React from 'react'
import { useState,useEffect } from 'react'
import { Typography,Box,Stack } from '@mui/material';
import Sidebar from './Sidebar';
 const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:"auto",md:"92vh"},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
      <Sidebar />
      </Box>
    <Typography className="copyright" variant='body2' sx={{mt:1.5,color:"#fff"}}>
  Copyright Wasfi 2023
    </Typography>
    </Stack>
  )
}
export default Feed