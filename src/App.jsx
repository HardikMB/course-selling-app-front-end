import './App.css'
import SignUp from './Signup';
import AppBar from './Components/AppBar'
import ManageCourse from './Components/ManageCourses'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { rgbToHex } from '@mui/material';

function App() {

  return (
    <div style={{
      // backgroundColor: 'lightsalmon',
}}>
      <AppBar />
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/managecourse" element={<ManageCourse/>} />
        </Routes>
      </Router>
    </div >
  )
}

export default App
