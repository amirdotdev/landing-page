import * as React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import styles from './MainServices.module.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CustomContainer from '../../custom-styled-components/CustomContainer'
import travelImage from '../../assets/main-services/travel.png'
import HealthImage from '../../assets/main-services/health.png'
import SportImage from '../../assets/main-services/sport.png'

const services = [
  { name: 'گردشگری و سفر', image: travelImage },
  {
    name: 'درمانی و بیمه',
    image: HealthImage,
  },
  {
    name: 'خدمات ورزشی',
    image: SportImage,
  },
  {
    name: 'سبد کالا و ارزاق',
    image: travelImage,
  },
]

const servicesItems = services.map((service) => {
  return (
    <Grid
      item
      key={service.name}
      xs={10}
      sm={5}
      md
      className={styles['service-container']}
    >
      <Card className={styles['service-card']}>
        <Box className={services['image-container']}>
          <CardMedia
            component="img"
            src={service.image}
            className={styles.image}
          />
        </Box>
        <Typography className={styles['image-title']}>
          {service.name}
        </Typography>
      </Card>
    </Grid>
  )
})

const MainServices = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CustomContainer classes={styles.container}>
        <Grid container className={styles['grid-container']}>
          <Grid item className={styles['title-container']} md={3} sm={12}>
            <Typography component="h3" className={styles.title}>
              خدمات
            </Typography>
            <Typography component="h3" className={styles.title}>
              دیجی رفاهی
            </Typography>
          </Grid>
          {servicesItems}
        </Grid>
      </CustomContainer>
    </StyledEngineProvider>
  )
}

export default MainServices
