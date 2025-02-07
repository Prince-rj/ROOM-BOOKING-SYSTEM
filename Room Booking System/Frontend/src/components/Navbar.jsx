import { useNavigate } from 'react-router'
import './CSS/Navbar.css'

function Navbar(props) {
    const navigate=useNavigate();
    const homeClickHandler=()=>{
      navigate('/')
    }
    const rentClickHandler=()=>{
      navigate('/rent')
    }
    const lodgingClickHandler=()=>{
      navigate('/lodging')
    }
    const navLoginClickHandler=()=>{
      navigate('/login')
    }
    // const navRegisterClickHandler=()=>{
    //   navigate('/register')
    // }
    const profileDivClickHandler=()=>{
      navigate('/profile')
    }
    return (
      <>
        <div id="navbar">
            <ul id="nav-list">
                <li onClick={homeClickHandler}>Home</li>
                <li onClick={rentClickHandler}>Rent</li>
                <li onClick={lodgingClickHandler}>Lodging</li>

            </ul>
            <div id='login-section'>
                {!props.login ?(
                <span className='nav-login' onClick={navLoginClickHandler}>Login</span>)
                :(
                <div onClick={profileDivClickHandler} id='login-logo'><svg id='profile-image' height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fillRule="evenodd" transform="translate(-364 -1999)"/></svg><span id='nav-name'>{props.name}</span></div>
                )}
            </div>
        </div>
      </>
    )
  }
  
  export default Navbar
