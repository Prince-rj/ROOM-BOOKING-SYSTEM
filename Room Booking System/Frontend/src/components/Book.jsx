import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "./CSS/Book.css"

function Book(props) {
    const Navigate=useNavigate()
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [aadhaar,setAadhaar]=useState('');
    const [mobile,setMobile]=useState('');
    const [address,setAddress]=useState('');
    const nameChangeHandler=(e)=>{
        setName(e.target.value);
    }
    const ageChangeHandler=(e)=>{
        setAge(e.target.value);
    }
    const aadhaarChangeHandler=(e)=>{
        setAadhaar(e.target.value);
    }
    const mobileChangeHandler=(e)=>{
        setMobile(e.target.value);
    }
    const addressChangeHandler=(e)=>{
        setAddress(e.target.value);
    }
    const data={
        name:name,
        email:props.data.email,
        roomName:props.data.roomName,
        roomPrice:props.data.roomPrice,
        age:age,
        aadhaar:aadhaar,
        mobile:mobile,
        userAddress:address
    }
    const bookSubmitHandler=(e)=>{
        e.preventDefault()
        axios
        .post("http://localhost:2000/booksubmit", data)
        .then((res) => {
          // props.setLogin(true);
          console.log(res)
          Navigate('/bookingsuccess')
          // props.setName(res.data.user.name);
          // console.log(res.data.user.name);
          // props.setEmail(res.data.user.email)
          // navigate('/')
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return (
        <>
        <form onSubmit={bookSubmitHandler} className='book-form' action="post">
            
        <h1 className='book-name'>{props.data.roomName}</h1>
        <h2 className='book-address'>{props.data.roomAddress}</h2>
        <label className='book-name-label' htmlFor="Name">Name</label>
        <input className='boook-name-input' type="text" onChange={nameChangeHandler} name="name"  required/>
        <label className='book-age-label' htmlFor="age">Age</label>
        <input  min='18' max='100' className='book-age-input' onChange={ageChangeHandler} type="number" name="age"  />
        <label className='book-aadhar-label' htmlFor="aadhaar">aadhar Number</label>
        <input required minLength='12' maxLength='12' className='book-aadhar-input' onChange={aadhaarChangeHandler} type="text" pattern="\d*" name="aadhaar" />
        <label className='book-mobile-label' htmlFor=""> Mobile Number</label>
        <input required minLength='10' maxLength='10' className='book-mobile-input' onChange={mobileChangeHandler} type="text" pattern="\d*" name="Mobile" />
        <label className='book-address-label' htmlFor="address">Address</label>
        <input required className='book-address-input' onChange={addressChangeHandler} type="text" name="address" id="address"/>
        <input className='book-submit'  type="submit" placeholder="submit"/>
        </form>
        </>
    )
}

export default Book