import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import './Card.css'

const Cards = ({ user }) => {
    return (
        <Card
            sx={{
                width: 280,
                height: 450,
                overflow: 'visible',
                position: 'relative',
                backgroundImage: `url("https://web.dragonball-api.com/images-compress/89980.webp")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                transition: 'transform 0.3s',
            }}>
            <CardActionArea>

                <Box
                    sx={{
                        position: 'relative',
                        top: '-25px',
                        width: '100%',
                        height: '250px',
                        transition: 'transform 0.4s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.3)'
                        }
                    }}
                >
                    <CardMedia
                        component="img"
                        image={user.image}
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '120%',
                            objectFit: 'contain',
                        }}
                    />
                </Box>

                <CardContent
                    sx={{
                        backgroundColor: 'rgb(60, 57, 57)',
                        color: 'orange',
                        zIndex: 1,
                        minHeight: '160px'
                    }}>
                    <Typography gutterBottom variant="h5"
                        sx={{
                            position: 'relative',
                            fontWeight: 'bold',
                            color: 'white',
                            '&:hover': {
                                color: 'orange',
                                transition: 'color 0.2s ease-in-out'
                            }
                        }} >
                        {user.name}
                        <Typography color='orange'>
                            {user.race + " - " + user.gender}
                        </Typography>
                    </Typography>

                    <Typography
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            fontWeight: 'bold',
                        }}>
                        <b>Base KI:</b> {user.ki}
                        <b>Total KI:</b> {user.maxKi}
                        <b>Afiliación:</b> {user.affiliation}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Cards
