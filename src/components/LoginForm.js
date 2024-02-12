import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialLogin = {
    first: null,
    second: null,
    third: null,
    fourth: null,
};

const LoginForm = (() => {
    const [login, setLogin] = useState(initialLogin);

    const [isBtnDisabled, setBtnDisabled] = useState(true)
    const navigate = useNavigate();
    
    const numberClick = (event) => {
        event.preventDefault();
        for (const [key, value] of Object.entries(login)){
          if(!value){
            setLogin({...login, [key]: event.target.value})
            if(key === 'fourth'){
              setBtnDisabled(false);
            }
            return login
          }
        }
      };
    
      const loginClear = (event) => {
        event.preventDefault();
        setLogin(initialLogin);
      };

      const onSubmit = (event) => {
        event.preventDefault();
        navigate('/main')
        console.log('logged in')
      };

    return (
        <div id="login-form">
            <h2 style={{border:'solid', marginBottom:'0'}}>{login.first}{login.second}{login.third}{login.fourth}</h2>
            <form onSubmit={onSubmit}>
                <div className='row'>
                <button className='keypad-btns' value={1} onClick={numberClick}>1</button>
                <button className='keypad-btns' value={2} onClick={numberClick}>2</button>
                <button className='keypad-btns' value={3} onClick={numberClick}>3</button>
                </div>
                <div className='row'>
                <button className='keypad-btns' value={4} onClick={numberClick}>4</button>
                <button className='keypad-btns' value={5} onClick={numberClick}>5</button>
                <button className='keypad-btns' value={6} onClick={numberClick}>6</button>
                </div>
                <div className='row'>
                <button className='keypad-btns' value={7} onClick={numberClick}>7</button>
                <button className='keypad-btns' value={8} onClick={numberClick}>8</button>
                <button className='keypad-btns' value={9} onClick={numberClick}>9</button>
                </div>
                <div className='row'>
                <button className='keypad-btns' onClick={loginClear}>CLEAR</button>
                <button className='keypad-btns' value={0} onClick={numberClick}>0</button>
                <button className='keypad-btns'type='submit' disabled={isBtnDisabled}>GO</button>
                </div>
            </form>
        </div>
    )
})

export default LoginForm;