import * as React from 'react'
import { useState } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import styles from './Navbar.module.css'
import logo from '../../assets/main-logo.png'
import diamond from '../../assets/diamond.png'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CustomContainer from '../../custom-styled-components/CustomContainer'
import Sidenav from './Sidenav'
import MenuIcon from '@mui/icons-material/Menu'

const links = ['ثبت نام', 'ورود', 'خدمات', 'اخبار']
const linksComponents = links.map((link) => {
  return (
    <Grid item xs="auto" className={styles['grid-item']} key={link}>
      <Link underline="none">
        <Typography className={styles['link-text']}> {link}</Typography>
      </Link>
    </Grid>
  )
})
const Navbar = () => {
  const [showSidenav, setShowSidenav] = useState(false)
  const toggleSideNav = () => {
    setShowSidenav((prev) => !prev)
  }
  return (
    <StyledEngineProvider injectFirst>
      <CustomContainer>
        {showSidenav && <Sidenav links={links} handleSidenav={toggleSideNav} />}
        <Grid container spacing={5} className={styles['grid-container']}>
          <Grid item xs="auto" className={styles['logo']}>
            <img
              src={logo}
              alt="main logo"
              className={(styles.img, styles['logo-img'])}
            />
            <Typography className={styles['logo-text']}>دیجی رفاهی</Typography>
          </Grid>
          {linksComponents}
          <Grid item xs className={styles.demo}>
            <Stack className={styles['demo-container']}>
              <Typography className={styles['demo-text']}>
                دمو رایگان
              </Typography>
              <img
                src={diamond}
                alt="diamond"
                className={(styles.img, styles['demo-image'])}
              />
            </Stack>
          </Grid>
          <Grid item xs={2} className={styles['menu-icon-container']}>
            <MenuIcon className={styles['menu-icon']} onClick={toggleSideNav} />
          </Grid>
        </Grid>
      </CustomContainer>
    </StyledEngineProvider>
  )
}

export default Navbar
