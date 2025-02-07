import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import Card from './components/Card'
import RoomInfo from './components/RoomInfo'
import RoomProfile from './components/RoomProfile'
import Register from './components/Register'
import Login from './components/Login'
import Cards from './components/Cards'
import AddRoom from './components/AddRoom'
import AddRoomForm from './components/AddRoomForm'
import Rent from './components/Rent'
import Lodging from './components/Lodging'
import GoogleAuth from './components/GoogleAuth'
import Profile from './components/Profile'
import Book from './components/Book'
import BookingSuccess from './components/BookingSuccess'
import Footer from './components/Footer'
import {
  BrowserRouter,
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes
  // useLocation
} from "react-router-dom";


function App() {
  const [chunkedData,setChunkedData]=useState([])
  const [login, setLogin] = useState(() => {
    // Get data from local storage on initial render
    const storedName = localStorage.getItem('login');
    return storedName || false;  // Set default value if not found
  })
  const [name, setName] =useState(() => {
    // Get data from local storage on initial render
    const storedName = localStorage.getItem('name');
    return storedName || '';  // Set default value if not found
  })
  const [email, setEmail] = useState(() => {
    // Get data from local storage on initial render
    const storedName = localStorage.getItem('email');
    return storedName || '';  // Set default value if not found
  })
  const [profileName, setProfileName] = useState('')
  const [profileEmail, setProfileEmail] = useState('')
  const [data, setData] = useState({
    name:'',
    email:'',
    roomName:'',
    roomAddress:'',
    roomPrice:'',
    roomDescription:'',
    roomType:''
  })
  useEffect(() => {
    // Update local storage whenever name state changes
    localStorage.setItem('login',login)
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }, [login]);


    return (
    <>
      <BrowserRouter>
      
      <Navbar login={login} name={name} setName={setName}/>
      {!login?
      <Routes>
          
      <Route path='/login' element={<Login setEmail={setEmail} setName={setName} setLogin={setLogin} />}/>
      <Route path='/register' element={<Register setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
      <Route path='/' element={<Login setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
      <Route path='/rent' element={<Login setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
      <Route path='/lodging' element={<Login setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
      <Route path='/profile' element={<Login setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
      <Route path='/addroom' element={<Login setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
      <Route path='/roominfo' element={<Login setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
      <Route path='/googleauth' element={<GoogleAuth setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
      
    </Routes>
      :
      <Routes>
          <Route path='/book' element={<Book data={data}/>}/>
          <Route path='/bookingsuccess' element={<BookingSuccess data={data}/>}/>
          <Route path='/googleauth' element={<GoogleAuth setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
          <Route path='/roomprofile' element={<RoomProfile setData={setData} chunkedData={chunkedData} profileEmail={profileEmail} profileName={profileName}/>}/>
          
          <Route path='/login' element={<Login setEmail={setEmail} setName={setName} setLogin={setLogin} />}/>
          <Route path='/register' element={<Register setEmail={setEmail} setName={setName} setLogin={setLogin}/>}/>
          <Route path='/' element={<Cards setData={setData} chunkedData={chunkedData} setChunkedData={setChunkedData} />}/>
          <Route path='/rent' element={<Rent setData={setData} chunkedData={chunkedData} setChunkedData={setChunkedData} />}/>
          <Route path='/lodging' element={<Lodging setData={setData} chunkedData={chunkedData} setChunkedData={setChunkedData} />}/>
          <Route path='/profile' element={<Profile setData={setData} chunkedData={chunkedData} setChunkedData={setChunkedData} setLogin={setLogin} email = {email} name={name}/>}/>
          <Route path='/addroom' element={<AddRoomForm email={email} />}/>
          <Route path='/roominfo' element={<RoomInfo 
          data={data}
          setProfileName={setProfileName}
          setProfileEmail={setProfileEmail}
          />}/>
        </Routes>
        }
        <AddRoom/>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
