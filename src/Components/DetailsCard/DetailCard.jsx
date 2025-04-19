import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import TransformationCard from '../TransformationCard/TransformationCard'
import Box from '@mui/material/Box'
import { useTheme, useMediaQuery } from '@mui/material'

const DetailCard = ({ character }) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Card
            sx={{
                minHeight: '100vh',
                maxWidth: '100%',
                margin: '2rem auto',
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                backgroundColor: 'currentcolor',
                boxShadow: 5,
                borderRadius: 3,
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    width: isSmallScreen ? '100%' : 400,
                    height: isSmallScreen ? '100%' : '100%',
                    objectFit: 'contain'

                }}
                image={character.image}
            />

            <CardContent
                sx={{
                    color: 'orange',
                    padding: 3,
                    flex: 1,
                }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    {character.name}
                    <Typography variant="subtitle1" sx={{ color: 'GrayText', marginBottom: 2 }}>
                        {character.race} - {character.gender}
                    </Typography>
                </Typography>

                <Typography variant="body1"><b>Base KI:</b> {character.ki}</Typography>
                <Typography variant="body1"><b>Total KI:</b> {character.maxKi}</Typography>
                <Typography variant="body1"><b>Afiliación:</b> {character.affiliation}</Typography>

                {character.originPlanet?.name && (
                    <Typography variant="body1"><b>Origen:</b> {character.originPlanet.name}</Typography>
                )}

                <Typography
                    sx={{
                        color: 'white',
                        display: 'grid',
                        marginTop: '20px',
                    }}
                    variant="body1"><b>Descripción:</b> {character.description}</Typography>

                {character.transformations?.length > 0 && (
                    <>
                        <Typography variant="body1" sx={{ mt: 4, color: 'white', fontWeight: 'bold' }}>
                            Transformaciones:
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: isSmallScreen ? 'center' : 'flex-start',
                                mt: 2
                            }}
                        >
                            {character.transformations.map((trans) => (
                                <TransformationCard key={trans.id} transformation={trans} />
                            ))}
                        </Box>
                    </>
                )}
            </CardContent>
        </Card>
    )
}

export default DetailCard
