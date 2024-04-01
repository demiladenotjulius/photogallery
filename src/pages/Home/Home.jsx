import react, {useState} from 'react';
import { Link }from 'react-router-dom'
import img2 from '../Home/img.jpeg'
import img3 from '../Home/profile.jpeg'
import './Home.css'
import { FiAlignJustify } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { TbTransferVertical } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { MdBrowserNotSupported } from "react-icons/md";
import { CiLogout } from "react-icons/ci";









function Home () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // setIsContentBlurred(!isContentBlurred); 

  };




    return(
       <div className={`maincontainer`}>
        <div className='head'>
                <img id='head1' src={img2} alt="" />

                <div className="side">
                    <img id='head2' src={img3} alt="" />
                    <FiAlignJustify id='menuicon' onClick={toggleSidebar} />
                   

                </div>
            </div>


            <div className="middle">
                <h1>Welcome,</h1>
                <p>Jasmine Karmen Mo</p>
            </div>

            <div className="simple">
                <h1>Hi, What would you like to do ?</h1>
            </div>

            <div className="subhead">
                <button id='one'>+ Cash Top Up</button>
                <button id='two'>Send Money</button>
            </div>

            <div className="balance">

                <h1>Available Balance</h1>
                <p>$80,678 USD</p>

            </div>
 

            <div className="accdiv">
               <div className="account">
                
                <h1>Your Account Number</h1>
                <p>0876785566</p>
                <button id='three'> Transactions</button>
                <button id='four'>Top up balanace</button>

               </div>
            </div>


            <div className="limit">
              <h1>Transaction Limit</h1>
              <p>Your current transaction limit</p>
              <h2>$500,000,00</h2>

            </div>
            <div className="pending">
              <h1>Pending Transaction</h1>
              <p>Total pending transactions currently</p>
              <h2>$0.00</h2>

            </div>
            <div className="transaction">
              <h1>Transaction Volume</h1>
              <p>Total Volume of transactions made</p>
              <h2>$239,780.00</h2>

            </div>
       
            

             {/* Sidebar */}
      
        {isSidebarOpen && (
            <>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <img id='sidebarimg' src={img2} alt="" />
              <Link to="/home" className="link-with-icon" ><HiOutlineHome className='icon' /> Dashboard</Link>
              <Link to="/transactions" className="link-with-icon"><GrTransaction className='icon'  />  Transactions</Link>
              <Link to="/local-transfer" className="link-with-icon"><TbTransferVertical className='icon'  /> Local Transfer</Link>
             <Link to="/settings"className="link-with-icon"> <CiSettings className='icon' />Settings</Link>
              <Link to="/deposits"className="link-with-icon"> <CiSaveDown2 className='icon' /> Deposits</Link>
              <Link to="/support" id='support' className="link-with-icon"> <MdBrowserNotSupported className='icon' />Support Ticket</Link>
              <Link to="/logout" className="link-with-icon"> <CiLogout className='icon' />Logout</Link>

              <Link to="/user-upload" className="link-with-icon"> <CiLogout className='icon' />Logout</Link>

            </div>
            </>
      )}
            


        </div>

        
        











)


}

export default Home;