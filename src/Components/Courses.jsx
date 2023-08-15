import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Courses() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        console.log("Fetch all courses");
        fetch("http://localhost:3000/api/v1/courses",
            {
                method: 'GET',
                headers: {
                    "content-type": "text/plain",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then(res => {
                return res.json()
            }
            )
            .then(data => {
                setCourses(data.courses) //data is object that is received, hence we need to set the array i.e. courses
                console.log(data.courses)
            }
            )
    }, [])

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

            {
                courses.map(
                    course => {
                        return <Course course={course} />
                    }
                )
            }
            {/* {JSON.stringify(courses)} */}
        </div>
    )
}

export function Course(props) {
    return <>
 <Link to={`/CourseDetails/${props.course._id}`} style={{ textDecoration: 'none' }}> 
        <Card style={
            {
                display: "flex", justifyContent: "space-between", alignContent: "center", flexDirection: "column",
                border: "1px black solid", margin: 40, padding: 20, width: 300, minHeight: 300
            }}>
            <Typography variant="h4" fontFamily="fantasy" textAlign={"center"}>{props.course.title}</Typography>
            <Typography variant="subtitle2" textAlign={"center"}>{props.course.description}</Typography>
            <img src={props.course.imgSrc} width={300} />
           
        </Card>
        </Link>

    </>
}
export default Courses