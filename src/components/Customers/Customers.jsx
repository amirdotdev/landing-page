import * as React from 'react'
import styles from './Customers.module.css'
import { StyledEngineProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import logoImages from '../../assets/Customers/logos.png'

const Customers = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={styles.container}>
        <Typography className={styles.title}>
          سازمان‌هایی که همکاری با دیجی رفاهی را انتخاب کرده‌اند
        </Typography>
        <Box className={styles['logos-container']}>
          <img
            src={logoImages}
            alt="customers logos"
            className={styles['logos']}
          />
        </Box>
      </Box>
    </StyledEngineProvider>
  )
}

export default Customers
