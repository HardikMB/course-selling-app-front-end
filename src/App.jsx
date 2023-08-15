import './App.css'
import SignUp from './Components/Signup';
import AppBar from './Components/AppBar'
import Courses from './Components/Courses'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import AddCourse from './Components/AddCourse.jsx';
import CourseDetails from './Components/CourseDetails.jsx';
function App() {

  return (
    <div style={{
      // backgroundColor: 'lightsalmon',
}}>
      <AppBar />
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/addCourse" element={<AddCourse/>} />
          <Route path="/courseDetails/:courseId" element={<CourseDetails/>} />
        </Routes>
      </Router>
      
    </div >
  )
}

export default App
