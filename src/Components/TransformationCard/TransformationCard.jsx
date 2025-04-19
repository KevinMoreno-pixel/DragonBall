import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const TransformationCard = ({ transformation }) => {
    return (
        <Card
            sx={{
                width: 200,
                margin: 2,
                backgroundColor: '#222',
                color: 'white',
                borderRadius: 2,
                boxShadow: 4,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)'
                }
            }}
        >
            <CardMedia
                component="img"
                image={transformation.image}
                alt={transformation.name}
                sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'contain',

                }}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: 'orange', mb: 1 }}
                >
                    {transformation.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TransformationCard

