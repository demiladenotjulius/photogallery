// import React, { useState } from 'react';
// import { TfiSupport } from "react-icons/tfi";
// import { IoChevronBack } from "react-icons/io5";
// import './support.css';



// function Support (){
//     const [selectedOption, setSelectedOption] = useState(''); 


//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value); 

//   }

//     return (

//             <div className="supportcontain">
//                 <div className="header">
//                 <IoChevronBack className='back' />

//                 </div>

//                 <div className="middle">
//                 <TfiSupport className='supporticon' />

//                 </div>

//             <div className="takesupport">
//                     <form action="">

//                 <label id='titlelabel' htmlFor='title'>Title</label> <br />
//                <input type='text' name='email' id='title' placeholder='Title of complaint' /> <br />
              
//             <label id='prioritylabel' htmlFor="priority">Select Priority:</label> <br />
//                 <select id="priority" value={selectedOption} onChange={handleOptionChange}>
//                   <option value="">Select Priority</option> 
//                   <option value="low">Low</option> 
//                   <option value="high">High</option> 
//               </select> <br />
//               <label id='descriptionlabel' htmlFor="description">Description</label> <br />
//               <input type='text' name='description' id='description' placeholder='Whats your complaint?' /> <br />
              
//               <input type="submit" name="submit" id="submit"  value="Submit Ticket"/>

            



//             </form>

//           </div>








//     </div>





//     )




// }


// export default Support