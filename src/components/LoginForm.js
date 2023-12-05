import React from "react";
import { useState } from "react";

const initialLogin = {
    first: null,
    second: null,
    third: null,
    fourth: null,
};

const LoginForm = (() => {
    const [login, setLogin] = useState(initialLogin);
    
    const numberClick = (event) => {
        event.preventDefault();
        for (const [key, value] of Object.entries(login)){
          if(!value){
            setLogin({...login, [key]: event.target.value})
            return login
          }
        }
      };
    
      const loginClear = (event) => {
        event.preventDefault();
        setLogin(initialLogin);
      };

    return (
        <div id="login-form">
            <h2 style={{border:'solid', marginBottom:'0'}}>{login.first}{login.second}{login.third}{login.fourth}</h2>
            <form>
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
                <button className='keypad-btns'type='submit'>GO</button>
                </div>
            </form>
        </div>
    )
})

export default LoginForm;