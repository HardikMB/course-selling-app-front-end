import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Card, Typography, TextField, Button, FormControl, InputLabel, OutlinedInput, CardMedia } from "@mui/material";
import Course from "./Courses";
import { Link } from "react-router-dom";


function CourseDetails() {
    let { courseId } = useParams()
    const [course, setCourse] = useState([])
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [imgSrc, setImgLink] = useState()
    const [status, setStatus] = useState()
    useEffect(() => {
        console.log("Fetch course" + courseId);
        fetch("http://localhost:3000/api/v1/courses/" + courseId,
            {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then(res => {
                return res.json()
            }
            )
            .then(data => {
                setCourse(data.course) //data is object that is received, hence we need to set the array i.e. courses
                setTitle(data.course.title)
                setDescription(data.course.description)
                setImgLink(data.course.imgSrc)
                console.log(data.course)
            }
            )
    }, [])
    return (
        <>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                <div>
                    <Link to={`/CourseDetails/${course._id}`} style={{ textDecoration: 'none' }}>
                        <Card style={
                            {
                                display: "flex", justifyContent: "space-between", alignContent: "center", flexDirection: "column",
                                border: "1px black solid", width: 500
                            }}>
                            <CardMedia

                                component="img"
                                alt="Image"

                                image={imgSrc}
                            />
                            <Typography variant="h4" fontFamily="fantasy" textAlign={"center"}>{course.title}</Typography>
                            <Typography variant="subtitle2" textAlign={"center"}>{course.description}</Typography>


                        </Card>
                    </Link>
                </div>
                <br /><br />
                <Card variant="outlined" value="{title}" style={{
                    padding: 10,
                    width: 500
                }}>

                    <div style={{ display: "flex", flexDirection: "column" }}     >
                        <FormControl style={{ margin: 5 }} >
                            <InputLabel htmlFor="component-outlined">Title of Course</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                fullWidth
                                label="Title of Course"
                                value={title ?? ' '}
                                onChange={(e) => setTitle(e.target.value)}
                                margin="dense"
                            />

                        </FormControl>
                        <FormControl style={{ margin: 5 }} >
                            <InputLabel htmlFor="component-outlined">Description of Course</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                fullWidth
                                label="Description of Course"
                                value={description ?? ' '}
                                onChange={(e) => setDescription(e.target.value)}
                                multiline
                                rows={5}
                            />

                        </FormControl>
                        <FormControl style={{ margin: 5 }} >
                            <InputLabel htmlFor="component-outlined">Image Link of Course</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                fullWidth={true}
                                label="Image Link of Course"
                                value={imgSrc ?? ' '}
                                onChange={(e) => setImgLink(e.target.value)}
                                multiline
                                rows={2}
                            />

                        </FormControl>
                        
                    </div>

                    <Button
                            size='large'
                            variant="contained"

                            onClick={
                                () => {
                                    const url = "http://127.0.0.1:3000/api/v1/courses/" + courseId
                                    fetch(url, {
                                        method: 'PUT',
                                        body: JSON.stringify(
                                            {
                                                title: title,
                                                description: description,
                                                imgSrc: imgSrc
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
                        >Update Course</Button>

                        <Button
                            size='large'
                            variant="contained"

                            onClick={
                                () => {
                                    const url = "http://127.0.0.1:3000/api/v1/courses/" + courseId
                                    fetch(url, {
                                        method: 'DELETE',
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
                                    window.location("/courses")
                                }
                            }
                        >Delete Course</Button>
                </Card>
                {status}
            </div>

        </>
    )

}


export default CourseDetails