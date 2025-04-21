import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cards from '../../Components/Cards/Card';

const RaceFilterPage = () => {
    const { race, gender } = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        const fetchAllCharacters = async () => {
            let allCharacters = [];
            let currentPage = 1;
            let hasNextPage = true;

            while (hasNextPage) {
                const response = await fetch(`https://dragonball-api.com/api/characters?page=${currentPage}`);
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    allCharacters = [...allCharacters, ...data.items];
                    currentPage++;
                } else {
                    hasNextPage = false;
                }
            }

            const filtered = allCharacters.filter((character) => {
                const matchesRace = race === "All" || character.race === race;
                const matchesGender = gender === "All" || character.gender === gender;
                return matchesRace && matchesGender;
            });

            setCharacters(filtered);
        };

        fetchAllCharacters();
    }, [race, gender]);

    return (

        <center>
            <h1
                style={{
                    fontSize: '2.5rem',
                    margin: '2rem 0',
                    textAlign: 'center',
                    background: 'linear-gradient(to right, rgb(0, 0, 0),rgb(233, 9, 9))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                {race === "All" ? "Todas las razas" : race} - {gender === "All" ? "Todos los géneros" : gender}

            </h1>

            <main
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '30px',
                    padding: '40px'
                }}>
                {characters.length > 0 ? (
                    characters.map((user) => (
                        <Link to={`/details/${user.id}`} key={user.id}>
                            <Cards user={user} />
                        </Link>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                        No se encontraron personajes de la raza {race} del genero {gender}.
                    </p>
                )}
            </main>
        </center>
    );

};

export default RaceFilterPage;
