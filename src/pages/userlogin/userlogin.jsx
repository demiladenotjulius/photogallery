// import React, { useState } from 'react';
// import './userLogin.css';
// import {useNavigate} from 'react-router-dom'

// import axios from 'axios'

// function UserLogin() {
//   const [ surname, setSurname ] = useState ('')
//   const [ firstname, setFirstname ] = useState ('')
//   const [ othername, setOthername ] = useState ('')
//   const [ email, setEmail ] = useState ('')
//   const [ password, setPassword ] = useState ('')
//   const [ phoneNumber, setPhoneNumber ] = useState ('')

//   const navigate = useNavigate()

//   const handleRegister = async (e) =>{

//     e.preventDefault()
//     try {
//       const response = await axios.post ('http://localhost:3700/user-register', {
//         surname,
//         firstname,
//         othername,
//         email,
//         password,
//         phoneNumber
//       })

//       console.log(response?.data?.message)
//       navigate('/login')
//     }
//     catch(err){
//       console.log(err)
//     }


//   }

//     return(
//       <div className='container'>
//       <div className='Header'>
//         <h1>Account Information</h1>
//         <p>Please enter your information and proceed to the next step so we can build your accounts.</p>
//       </div>

//       <div className='primary'>
//         <form onSubmit={handleRegister}>
//           <div>
//             <label htmlFor='surname'>Legal Last Name</label> <br />
//             <input type='text' name='surname' id='surname' placeholder='Surname' value={surname} onChange={(e) => setSurname(e.target.value)} />
//           </div>

//           <div>
//             <label htmlFor='firstname'>Legal First Name</label> <br />
//             <input type='text' name='firstname' id='firstname' placeholder='Firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
//           </div>

//           <div>
//             <label htmlFor='othername'>Legal Middle Name</label> <br />
//             <input type='text' name='othername' id='othername' placeholder='Othername' value={othername} onChange={(e) => setOthername(e.target.value)} />
//           </div>

//           <div>
//             <label htmlFor='email'>Email</label> <br />
//             <input type='email' name='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>

//           <div>
//             <label htmlFor='password'>Password</label> <br />
//             <input type='text' name='password' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>

//           <div>
//             <label htmlFor='phoneNumber'>Phone </label> <br />
//             <input type='number' name='phoneNumber' id='phoneNumber' placeholder='Phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//           </div>

// <            input id='submitform' type="submit" value="Submit" />        
//          </form>
//       </div>
//     </div>

//     )


// }

// export default UserLogin;