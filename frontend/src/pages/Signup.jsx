import React, { useState } from 'react'
import logo from "../images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import image from "../images/loginimg.jpg"

const Signup = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const submitForm = (e)=>{
        e.preventDefault();
    }
  return (
    <>
        <div className="w-screen h-screen flex">
            <div className="left w-1/3 flex flex-col items-center justify-center p-10">
                <img className='w-[200px] ' src={logo} alt="" /> 
                <form onSubmit={submitForm} className='w-full mt-[-25px]' action="">
                    <div className="inputBox">
                        <input required onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder='Username'/>
                    </div>

                    <div className="inputBox">
                        <input required onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder='Name'/>
                    </div>

                    <div className="inputBox">
                        <input required onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Email'/>
                    </div>

                    <div className="inputBox">
                        <input required onChange={(e)=>{setPwd(e.target.value)}} value={pwd} type="password" placeholder='Password'/>
                    </div>

                    <p className='text-[gray]'>Already have an account <Link to="/login" className='text-[#00AEEF]'>Login</Link></p>

                    <button className="btnBlue w-full mt-[20px]">SIGN UP</button>
                </form>
            </div>     
            <div className="right w-2/3 h-full">
                <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
        </div> 
    </>
  )
}

export default Signup