import React, { useState } from 'react'
import './Demologin.css'

const Demologin = () => {
  const [action,SetAction]=useState('Sign Up')
  return (
    <div className='demnologin'>
      <div className="demologin-wrapper">
        <div className="demologin-head">
          {action}
        </div>
        
        
        <div className="login-userentry">
        <input type="text" placeholder='enter your user name here' />
        <input type="email" placeholder='enter your email here' />
        <input type="password" placeholder='enter your password'/>
        </div>
         
         <div className="demologin-user-interaction">
            <button className={action==='Login'?'submit gery':'grey'} onClick={()=>SetAction('Sign Up')}>Sign up</button>
            <button className={action==='Sign Up'?'submit gery':'grey'} onClick={()=>SetAction('Login')}>Login</button>
         </div>
      </div>
    </div>
  )
}

export default Demologin
