import React, { useState } from "react";
import '../Navbar/Navbar.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Accordionfun from "../Acordeon/Acordeon";

const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const pathParts = location.pathname.split("/");
    const currentRace = pathParts.includes("filter") ? pathParts[2] : "All";

    const handleGenderFilter = (gender) => {
        navigate(`/filter/${currentRace}/${gender}`);
        setDrawerOpen(false);
    };

    const handleRaceFilter = (race) => {
        navigate(`/filter/${race}/All`);
        setDrawerOpen(false);
    };

    const drawerContent = (
        <List sx={{ backgroundColor: '#1a1a1a', height: '100vh', color: 'white', padding: 0 }}>
            <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
                <HomeIcon fontSize="large" sx={{ color: 'white' }} />
                <ListItemText primary="Inicio" sx={{ color: 'white', padding: 1 }} />
            </ListItem>
            <ListItem button component={Link} to="/info" onClick={() => setDrawerOpen(false)}>
                <InfoIcon fontSize="large" sx={{ color: 'white' }} />
                <ListItemText primary="Info" sx={{ color: 'white', padding: 1 }} />
            </ListItem>
            <ListItem button onClick={() => handleGenderFilter("Male")}>
                <Button
                    className="item"
                    sx={{
                        textTransform: 'none',
                        color: 'white',
                        fontSize: '1.2rem',
                    }}
                >
                    Masculino
                </Button>
            </ListItem>
            <ListItem button onClick={() => handleGenderFilter("Female")}>
                <Button
                    className="item"
                    sx={{
                        textTransform: 'none',
                        color: 'white',
                        fontSize: '1.2rem',
                    }}
                >
                    Femenino
                </Button>
            </ListItem>
            <Accordionfun handleFilter={handleRaceFilter} sx={{ padding: 2 }} />
        </List >
    );

    return (
        <>
            {isMobile ? (
                <>
                    <AppBar position="static" sx={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                        <Toolbar >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setDrawerOpen(true)}
                            >
                                <MenuIcon sx={{ color: 'white' }} />
                            </IconButton>
                            <h3 style={{ marginLeft: 10 }}>Menú</h3>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        {drawerContent}
                    </Drawer>
                </>
            ) : (
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
                        <Accordionfun handleFilter={handleRaceFilter} />
                        <li className="item">
                            <button onClick={() => handleGenderFilter("Male")}>Masculino</button>
                        </li>
                        <li className="item">
                            <button onClick={() => handleGenderFilter("Female")}>Femenino</button>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default NavBar;