import React from 'react'
import Card from '@mui/material/Card'
import '../InfoPage/InfoPage.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


const AboutPage = () => {

    const photosJuan = [
        'https://i.imgur.com/iFyjUYr.png',
        'https://i.imgur.com/lDiUppW.jpeg',
        'https://i.imgur.com/8u5q4mP.jpeg',
    ]

    const photosKevin = [
        'https://i.imgur.com/1cTP17o.png',
        'https://i.imgur.com/4huyl8Z.jpeg',
        'https://i.imgur.com/7rdmYMR.jpeg',
    ]

    return (

        <Card
            sx={{
                maxWidth: '100%',
                margin: '2rem auto',
                display: 'grid',
                backgroundColor: 'currentcolor',
                boxShadow: 5,
                borderRadius: 3,
            }}
        >

            <h1>Acerca de nosotros</h1>

            {/* JUAN */}

            <div className="about-content">
                <div className="about-info">
                    <p><strong>Nombre:</strong> Juan David Ramirez Alvarez</p>
                    <p><strong>Teléfono:</strong> 3138838085</p>
                    <p><strong>Correo:</strong> claresclaro2015@gmail.com</p>
                    <p><strong>Edad:</strong> 20 años</p>
                    <p><strong>Estudiante:</strong> Universidad de la Amazonia</p>
                    <p><strong>Facultad:</strong> Ingeniería de Sistemas</p>
                    <p style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>

                        <a href="https://github.com/KevinMoreno-pixel">
                            <GitHubIcon fontSize="large"
                                sx={{
                                    color: 'white',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'action.active'
                                    }

                                }} />
                        </a>

                        <a href="https://www.instagram.com/juan_ramirez004">
                            <InstagramIcon fontSize="large"
                                sx={{
                                    color: 'white',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'action.active'
                                    }

                                }} />
                        </a>

                    </p>
                </div>
                <div className="about-carousel">
                    <div className="carousel">
                        {photosJuan.map((url, index) => (
                            <img key={index} src={url} alt={`Juan ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>

            {/* KEVIN */}
            <div className="about-content">
                <div className="about-info">
                    <p><strong>Nombre:</strong> Kevin Andres Moreno Perez</p>
                    <p><strong>Teléfono:</strong> 3229432147</p>
                    <p><strong>Correo:</strong> kevinmorenogg2003gmail.com</p>
                    <p><strong>Edad:</strong> 22 años</p>
                    <p><strong>Estudiante:</strong> Universidad de la Amazonia</p>
                    <p><strong>Facultad:</strong> Ingeniería de Sistemas</p>

                    <p style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>

                        <a href="https://github.com/KevinMoreno-pixel">
                            <GitHubIcon fontSize="large"
                                sx={{
                                    color: 'white',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'action.active'
                                    }

                                }} />
                        </a>

                        <a href="https://www.instagram.com/kevin_ampz">
                            <InstagramIcon fontSize="large"
                                sx={{
                                    color: 'white',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'action.active'
                                    }

                                }} />
                        </a>

                    </p>

                </div>
                <div className="about-carousel">
                    <div className="carousel">
                        {photosKevin.map((url, index) => (
                            <img key={index} src={url} alt={`Kevin ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>


        </Card >

    )
}

export default AboutPage