import { useState } from "react";

import { Button, Card, Typography,TextField } from "@mui/material";
function Course() {
    const [title,setTitle] = useState('')
    const [description,setdescription] = useState('')
    const [imgLink,setImgLink] = useState('')
    const [status,setStatus] = useState('')
return <>
 <div style={{
                paddingTop:300,
                paddingLeft:1100
            }} >
                <Typography component={'span'}>
                    <div style={{
                    }}>
                        <h2>Add a Course to Course Marketplace</h2>
                    </div>
                </Typography>
                <div>
                    <Card variant="outlined" style={{
                        padding: 20,
                        width:300
                    }}>
                        <div >

                            <TextField id="title" 
                                       fullWidth={true}
                                       label="Title of Course"
                                       variant="outlined"
                                       onChange={(e)=>{
                                        setTitle(e.target.value);
                                       }}
                                       ></TextField>
                            <br /><br />
                            <TextField  id="Description"
                                        fullWidth={true}
                                        label="Description of course"
                                        variant="outlined" 
                                        
                                        onChange={(e)=>{
                                            setdescription(e.target.value);
                                       }}
                                       ></TextField>
                            <br /><br />                            <TextField  id="Image Source"
                                        fullWidth={true}
                                        label="Link of Image Source"
                                        variant="outlined" 
                                        
                                        onChange={(e)=>{
                                            setImgLink(e.target.value);
                                       }}
                                       ></TextField>
                            <br /><br />
                            <Button
                                size='large'
                                variant="contained"
                                onClick={
                                    () => {
                                        const url = "http://127.0.0.1:3000/api/v1/courses/add"
                                        fetch(url, {
                                            method: 'POST',
                                            body: JSON.stringify(
                                                {
                                                    title:title,
                                                    description:description,
                                                    imgSrc:imgLink
                                                }),
                                            headers: {
                                                'Content-type': 'application/json',
                                                "Authorization": "Bearer " + localStorage.getItem("token")
                                            }
                                        }).then((res) => {
                                            const data = res.json();

                                            return data;
                                        }).then((data) => {
                                             setStatus(data.message)
                                        })
                                    }
                                }
                            >Add Course</Button>
                            <br />
                        </div>
                    </Card>
                    {status}
                </div>
            </div>
</>
}

export default Course