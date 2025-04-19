import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from '../../Components/DetailsCard/DetailCard'

const DetailsPage = () => {
    const [character, setCharacter] = useState({})
    let { id } = useParams()

    useEffect(() => {
        fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data))
    }, [id]);

    return (

        <div className="details-container">
            <DetailCard character={character} />
        </div>
    )
}

export default DetailsPage
