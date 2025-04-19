import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../../Components/Cards/Card'
import Header from '../../Components/Header/header'
const HomePage = ({ characters }) => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target) // para que no siga observando después
                }
            })
        }, {
            threshold: 0.2
        })

        const cards = document.querySelectorAll('.card')
        cards.forEach(card => observer.observe(card))

        return () => {
            cards.forEach(card => observer.unobserve(card))
        }
    }, [characters]) //importante: que se ejecute cada vez que cambian los personajes

    return (

        <main


            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '30px',
                padding: '40px',
            }}>
                
            <Header/>

            {characters.map((user) => (
                <Link to={`/details/${user.id}`} key={user.id} style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <Cards user={user} />
                    </div>
                </Link>
            ))}
        </main>
    )
}

export default HomePage
