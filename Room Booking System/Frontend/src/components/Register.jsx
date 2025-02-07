import "./CSS/Register.css";
import { useState } from "react";
import google from "../assets/google.png";
import github from "../assets/github.png";
import { useNavigate } from "react-router";
import axios from "axios";
function Register(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [samePassword, setSamepassword] = useState(true);
  const [notsamePassword, setNotsamepassword] = useState(false);
  const loginClickHandler = () => {
    navigate("/login");
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
    
  };
  const emailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    
    if (e.target.value !== password) {
      setSamepassword(false);
    } else {
      setSamepassword(true);
    }
  };
  const cnfpasswordChangeHandler = (e) => {
    setCnfpassword(e.target.value);
    if (e.target.value !== password) {
      setSamepassword(false);
    } else {
      setSamepassword(true);
    }
  };

  const googleClickHandler = (e) => {
    navigate("/googleauth");
  };
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!samePassword) setNotsamepassword(true);
    else{ setNotsamepassword(false);
    axios
      .post("http://localhost:2000/registersubmit", {
        name: name,
        email: email,
        password: password
      })
      .then((res) => {
        props.setLogin(true);
        console.log(res)
        props.setName(res.data.user.name);
        console.log(res.data.user.name);
        props.setEmail(res.data.user.email)
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <>
      <form action="" method="post" id="register-form">
        <label htmlFor="name" id="register-name">
          Name
        </label>
        <input
          name="name"
          onChange={nameChangeHandler}
          type="text"
          id="in-name"
          placeholder="Enter Your Name"
        />

        <label htmlFor="email" id="email">
          Email
        </label>
        <input
          name="email"
          type="email"
          onChange={emailChangeHandler}
          id="in-email"
          placeholder="Enter Your Email"
        />

        <label htmlFor="password" id="password">
          Password
        </label>
        <input
          name="password"
          type="password"
          id="in-password"
          onChange={passwordChangeHandler}
          required
          placeholder="Enter Your password"
        />

        <label htmlFor="cnf-password" id="cnf-password">
          Confirm Password
        </label>
        <input
          required
          name="cnf-password"
          type="password"
          onChange={cnfpasswordChangeHandler}
          id={
            !notsamePassword ? "in-cnf-password" : "incorrect-in-cnf-password"
          }
          placeholder="Confirm Your password"
        />
        {notsamePassword ? (
          <span>Password and confirm password must be same</span>
        ) : (
          <span></span>
        )}
        <input
          type="submit"
          onClick={onSubmitHandler}
          id="submit"
          value="Register"
        />
      </form>
      <span id="existing-user">
        Existing User?{" "}
        <button onClick={loginClickHandler} id="existing-user-btn">
          Login
        </button>
      </span>

      <span id="register-with">
        Or you can register with
        <img
          id="register-with-google"
          onClick={googleClickHandler}
          height="20px"
          src={google}
          alt="google"
        />
        
      </span>
    </>
  );
}

export default Register;
