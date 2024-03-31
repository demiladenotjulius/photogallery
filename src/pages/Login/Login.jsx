// import React, { useState } from 'react';
// import './Login.css';
// import img1 from '../Login/img.jpeg'

// import {useNavigate} from 'react-router-dom'

// import axios from 'axios'

// function Login() {
  
//   const [ email, setEmail ] = useState ('')
//   const [ password, setPassword ] = useState ('')


//   const navigate = useNavigate()

//   const handleLogin = async (e) =>{

//     e.preventDefault()
//     try {
//       const response = await axios.post ('http://localhost:3700/user-login', {
      
//         email,
//         password,

//       })

//       console.log(response?.data?.message)
//       navigate('/home')
//     }
//     catch(err){
//       console.log(err)
//     }


//   }

//     return(
//       <div className='logincontainer'>
//         <div className='imagediv'>
//           <img src={img1} alt="" />

//         </div>
//       <div className='Header'>
//         <h1>Sign In to Digital Banking</h1>
//         <p>Access the Digital Banking panel using your email and password.</p>
//       </div>

//       <div className='secondary'>
//         <form onSubmit={handleLogin}>

//         <div>
//             <label htmlFor='email'>Email</label> <br />
//             <input type='email' name='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
        
//         <div>
//             <label htmlFor='password'>Password</label> <span>Forgot Password ?</span> <br />
//             <input type='text' name='password' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <input id='loginform' type="submit" value="Sign In" />
//         </form>
//       </div>

//       <button id='redirect' > Not enrolled? Create Account</button>
//     </div>

//     )


// }

// export default Login;