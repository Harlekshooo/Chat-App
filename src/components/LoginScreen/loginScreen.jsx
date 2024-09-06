import React, { useState } from "react";
import "./loginscreen.css";
import { useNavigate } from "react-router-dom";

const loginScreen = () => {

    const navigate = useNavigate()
    const [present, setPresent] = useState(true)
    const [absent, setAbsent] = useState(false)
    const [inputValue, setInputValue] = useState('')


    const handleLoginClick = (e) => {
        e.preventDefault()
        if(inputValue == ''){
            console.log('IT IS EMPTY!!!!!!!!!!!');
            setAbsent(true)
            navigate('/login')
        }
        else{
            navigate('/chatscreen')
        }
    }

    const handleNameChange = (e) => {
        let result = e.target.value
        setInputValue(result)
        console.log(result);
    }

    const handlePasswordChange = (e) => {
        // const result = e.target.value
        setInputValue(inputValue)
        console.log(inputValue  );
    }

  return (
    <div className="loginContainer">
      <form className="innerLoginContainer">
        <div className="userNameContainer">
            {absent && (<h4 className="mustInput">Input username</h4>)}
          <input onChange={handleNameChange} value={inputValue} className="usernameInput" placeholder="Input your Username" type="text" />
        </div>

        <div className="passwordContainer">
            {absent && (<h4 className="mustInput">Input password</h4>)}
          <input onChange={handlePasswordChange} className="passwordInput" placeholder="Input your Password" type="password" />
        </div>

        <button onClick={handleLoginClick} className="loginBtn">login</button>
      </form>
    </div>
  );
};

export default loginScreen;
