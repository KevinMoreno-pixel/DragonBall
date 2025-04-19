import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterDropdown = ({ handleFilter }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const filters = [
        { label: 'Saiyan', value: 'Saiyan' },
        { label: 'Namekian', value: 'Namekian' },
        { label: 'Raza Frieza', value: 'Frieza Race' },
        { label: 'Humano', value: 'Human' },
        { label: 'Androide', value: 'Android' },
        { label: 'Majin', value: 'Majin' },
        { label: 'Dios', value: 'God' },
        { label: 'Angel', value: 'Angel' },
        { label: 'Raza Jiren', value: 'Jiren Race' },
        { label: 'Desconocido', value: 'Unknown' },
        { label: 'Demonio', value: 'Evil' },
        { label: 'Kaio', value: 'Nucleico benigno' },
        { label: 'Kaio-Shin', value: 'Nucleico' },
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                onClick={handleClick}
                className="item"
                endIcon={<ExpandMoreIcon />}
                sx={{
                    textTransform: 'none',
                    color: 'white',
                    fontSize: '1.2rem',
                    padding: '8px 16px',
                    minWidth: '160px',

                }}
            >
                Filtro por raza
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        backgroundColor: 'black',
                        color: 'white',
                        mt: 1,
                        maxHeight: 'none',
                        borderRadius: 1,
                        boxShadow: 3,
                        zIndex: 2000,
                    }
                }}
                MenuListProps={{ disablePadding: true }}
            >
                {filters.map(({ label, value }) => (
                    <MenuItem
                        key={value}
                        onClick={() => {
                            handleFilter(value);
                            handleClose();
                        }}
                        sx={{
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: '#d88a0b',
                            }
                        }}
                    >
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default FilterDropdown;
