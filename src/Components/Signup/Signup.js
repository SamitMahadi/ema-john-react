import React, { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
const [error,setError]=useState(null)


const handleSubmit = (event)=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email,password,confirm);

 if(password <6){
    setError('password must be 6 characters or more')
    return
 }

 if(password!==confirm){
 setError('Your Password Did not match');
 return
 }

}



    return (
        
<div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
               <div className="form-control">
                 <label htmlFor="email">Email</label>
                 <input type="email" name='email' required/>
               </div>

               <div className="form-control">
                 <label htmlFor="password">Password</label>
                 <input type="password" name='password' required/>
               </div>
               <div className="form-control">
                 <label htmlFor="confirm">Confirm Password</label>
                 <input type="password" name='confirm' required/>
               </div>
               <input className='btn-submit' type="submit" name="" id="" value='Login' />
            </form>
            <p>Already have an account? <Link to='/login'>Login now</Link></p>
            <p className='text-error'>{error}</p>
        </div>       
    );
};

export default Signup;