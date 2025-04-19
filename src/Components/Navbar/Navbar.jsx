import React from "react";
import '../Navbar/Navbar.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Accordionfun from "../Acordeon/Acordeon";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extraer raza actual de la URL si existe
    const pathParts = location.pathname.split("/");
    const currentRace = pathParts.includes("filter") ? pathParts[2] : "All";

    const handleGenderFilter = (gender) => {
        navigate(`/filter/${currentRace}/${gender}`);
    };

    return (
        <nav className="navbar">
            <ul>
                <li className="item">
                    <Link to="/">
                        <HomeIcon fontSize="large"
                            sx={{
                                color: 'white',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    color: 'action.active'
                                }
                            }} />
                    </Link>
                </li>

                <li className="item">
                    <Link to="/info">
                        <InfoIcon fontSize="large"
                            sx={{
                                color: 'white',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    color: 'action.active'
                                }
                            }} />
                    </Link>
                </li>

                <Accordionfun handleFilter={(race) => navigate(`/filter/${race}/All`)} />

                <li className="item">
                    <button onClick={() => handleGenderFilter("Male")}>Masculino</button>
                </li>
                <li className="item">
                    <button onClick={() => handleGenderFilter("Female")}>Femenino</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

