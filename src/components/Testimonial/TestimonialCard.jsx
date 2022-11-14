import * as React from 'react'
import styles from './TestimonialCard.module.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { selectUnstyledClasses } from '@mui/base'

const TestimonialCard = (props) => {
  return (
    <Box className={styles.container}>
      <Avatar alt={props.name} src={props.img} className={styles.avatar} />
      <Box className={styles['card-content']}>
        <Typography className={styles.name}>{props.name}</Typography>
        <Typography className={styles['job-title']}>
          {props.jobTitle}
        </Typography>
        <Typography className={styles['comment']}>{props.comment}</Typography>
      </Box>
    </Box>
  )
}

export default TestimonialCard
