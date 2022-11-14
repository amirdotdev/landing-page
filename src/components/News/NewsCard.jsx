import * as React from 'react'
import styles from './NewsCard.module.css'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'

const NewsCard = (props) => {
  return (
    <Grid item className={styles.container} xs={9} md={3}>
      <Box className={styles.card}>
        <CardMedia component="img" src={props.imageSrc} />
        <CardContent className={styles['card-content']}>
          <Typography className={styles.title}>{props.title}</Typography>
          <Typography className={styles.text}>{props.text}</Typography>
        </CardContent>
      </Box>
    </Grid>
  )
}

export default NewsCard
