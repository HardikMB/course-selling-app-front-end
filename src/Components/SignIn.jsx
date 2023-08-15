import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

import { Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function SignIn() {

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState("");

    
    return (
        <>
      
            <div style={{
                paddingTop:300,
                paddingLeft:1100
            }} >
                <Typography>
                    <div style={{
                    }}>
                        <h2>Sign In to Course Marketplace</h2>
                    </div>
                </Typography>
                <div>
                    <Card variant="outlined" style={{
                        padding: 20,
                        width:300
                    }}>
                        <div >

                            <TextField id="username" 
                                       fullWidth={true}
                                       label="Username"
                                       variant="outlined"
                                       onChange={(e)=>{
                                            setEmail(e.target.value);
                                       }}
                                       ></TextField>
                            <br /><br />
                            <TextField  id="password"
                                        fullWidth={true}
                                        label="Password"
                                        variant="outlined" 
                                        type='password'
                                        onChange={(e)=>{
                                            setPassword(e.target.value);
                                       }}
                                       ></TextField>
                            <br /><br />
                            <Button
                                size='large'
                                variant="contained"
                                onClick={
                                    () => {
                                        // const username = document.getElementById('username').value;
                                        // const password = document.getElementById('password').value;
                                        const url = "http://127.0.0.1:3000/api/v1/admin/login"

                                        // console.log(JSON.stringify({username,password}))
                                        fetch(url, {
                                            method: 'POST',
                                            body: JSON.stringify(
                                                {
                                                    username:email,
                                                    password:password
                                                }),
                                            headers: {
                                                'Content-type': 'application/json'
                                            }
                                        }).then((res) => {
                                            const data = res.json();

                                            return data;
                                        }).then((data) => {
                                            if (data.token) {
                                                localStorage.setItem('token', data.token)
                                                window.location="/courses"
                                            }
                                            else {
                                                alert("Error while logging in");
                                            }
                                        })
                                    }
                                }
                            >Sign In</Button>
                            <br />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}


export default SignIn