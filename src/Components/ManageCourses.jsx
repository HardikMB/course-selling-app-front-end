import { useState } from "react"

function ManageCourse(){
    const [email, setName] = useState("bhangalehardik@gmail.com")
    return (
        <>
        <h2>{email}</h2>
            <h2>Welcome to Course Marketplace</h2>
        </>
    )
}

export default ManageCourse