import React from 'react'

const Register = () => {
    return (
        <div className='login w-screen h-screen flex items-center justify-center bg-stone-100'>
            <div className="loginWrapper w-3/4 h-3/4 flex">
                <div className="loginLeft flex-1 flex flex-col justify-center">
                    <h3 className="loginLogo font-bold text-5xl mb-3 text-blue-500  ">Lamasocial</h3>
                    <span className='loginDesc text-lg'>Connect with friends and the world arround you on Lamasocial.</span>
                </div>
                <div className="loginRight flex-1 flex flex-col justify-center">
                    <div className="loginBox h-96 p-5 bg-white rounded-xl flex flex-col justify-between">
                    <input type="Email" placeholder='Username' className='loginInput focus:outline-none h-12 rounded-xl border-solid  border-gray-400 text-xl pl-5 border-2' />
                        <input type="Email" placeholder='Email' className='loginInput focus:outline-none h-12 rounded-xl border-solid  border-gray-400 text-xl pl-5 border-2' />
                        <input type="Email" placeholder='Password' className='loginInputfocus:outline-none h-12 rounded-xl border-solid border-gray-400 text-xl pl-5 border-2' />
                        <input type="Email" placeholder='Password Again' className='loginInput focus:outline-none h-12 rounded-xl border-solid  border-gray-400 text-xl pl-5 border-2' />

                        
                        
                        <button className="loginBtn h-12 rounded-xl border-none bg-blue-500 text-white text-xl font-medium cursor-pointer">Sign Up</button>
                        <button className="loginREgisterBtn w-3/5 self-center h-12 rounded-xl border-none bg-lime-400 text-white text-xl font-medium cursor-pointer">Log into Account</button>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Register
