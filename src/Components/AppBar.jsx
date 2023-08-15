import { Button, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import React from "react"
import { useEffect, useState } from 'react';
import logo from '../assets/Logo.svg'
import spinner from '../assets/Spinner.gif'
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
function AppBar() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/admin/me", {

            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((data) => {

            data.json().then((data2) => {
                console.log(data2.user);
                if (data2.user) {
                    setEmail(data2.user)
                    setIsLoading(true)
                }
            })

        })
    })
   
    if (email) {
 
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "violet",
        }}>
            <div >
                <a href="/" >
                    <img src={logo} width={80} border="1px" alt="" />
                </a> </div>
            <div style={{ display: "flex" }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <div style={{ display: "flex" }} >
                    <div style={{ border: "1px solid", Width: "100px" }}>
                        <Typography variant="overline">
                            {email}
                        </Typography> </div>
                <Button variant="contained"
                        onClick={() => {
                            window.location = "/addCourse"
                        }}>
                        Add Course
                    </Button>
                    <Button variant="contained"
                        onClick={() => {
                            window.location = "/courses"
                        }}>
                        View Courses
                    </Button>
           

                    <Button variant="contained"
                        onClick={() => {
                            localStorage.setItem('token', null);
                            window.location = "/signup"
                        }}>
                        Logout
                    </Button>

                </div>
            </div>
        </div>

    }

    return (

        <div style={{
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "violet",
        }}>
            <div style={{ border: "1px solid", Width: "100px" }}> <Typography variant="overline"> {email} </Typography> </div>
            <div style={{ display: "flex" }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <div >
                    <Button 
                    variant="contained"
                    href="/signin"
                    >Sign In</Button>
                    </div>
                <div ><Button variant="contained"
                    href="/signup"
                >Sign Up</Button></div>
            </div>
        </div>
    )

}


export default AppBar