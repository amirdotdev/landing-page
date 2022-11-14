import * as React from 'react'
import styles from './CustomContainer.module.css'
import Box from '@mui/material/Box'

const CustomContainer = (props) => {
  return (
    <Box className={`${styles.container} ${props.classes}`}>
      {props.children}
    </Box>
  )
}

export default CustomContainer
