// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Transaction() {
//     const [uploads, setUploads] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3700/uploads');
//                 console.log(response.data); 
//                 setUploads(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Transactions</h1>
//             {uploads.map(upload => (
//                 <div key={upload._id}>
//                     {/* <img src={`/uploads/${upload.Image}`} alt="Uploaded" /> */}
//                     {/* <img src={upload.Image} alt="Uploaded" /> */}
//                     <img src={`http://localhost:3700/${upload.Image}`} alt="Uploaded" />
//                     <p>{upload.Caption}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }