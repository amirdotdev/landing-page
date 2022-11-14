import * as React from 'react'
import styles from './Sidenav.module.css'
import { useState } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CloseIcon from '@mui/icons-material/Close'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import MenuIcon from '@mui/icons-material/Menu'

const Sidenav = ({ links, handleSidenav }) => {
  const menuItems = links.map((link) => {
    return (
      <Link key={link} className={styles.link}>
        <Typography className={styles.text}>{link}</Typography>
      </Link>
    )
  })
  return (
    <StyledEngineProvider>
      <Stack className={styles.container}>
        <MenuIcon
          className={styles.icon}
          onClick={() => {
            handleSidenav()
          }}
        />
        {menuItems}
      </Stack>
    </StyledEngineProvider>
  )
}

export default Sidenav
