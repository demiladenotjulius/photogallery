import React from 'react';
import { Routes, Route} from 'react-router'
// import UserLogin  from './pages/userlogin/userlogin';
// import Login from './pages/Login/Login'
// import Home from './pages/Home/Home'
// import Support from './pages/support/support'
// import Deposits from './pages/deposits/deposits'
// import Transfer from './pages/transfer/transfer'
// import Settingss from './pages/settings/settings'
// import Transaction from './pages/transactions/transactions'
import UploadUser from './pages/userupload/useruplaod'


function App() {

  return (
    <>
    <Routes>

      <Route index element={<UploadUser/>}></Route>
      {/* <Route path='/login' element={<Login/>}></Route> */}
      {/* <Route path='/home' element={<Home/>}></Route> */}
      {/* <Route path='/support' element={<Support/>}></Route> */}
      {/* <Route path='/settings' element={<Settingss/>}></Route> */}
      {/* <Route path='/transaction' element={<Transaction/>}></Route> */}
      {/* <Route path='/local-transfer' element={<Transfer/>}></Route> */}
      {/* <Route path='/deposits' element={<Deposits/>}></Route> */}
      <Route path='/upload' element={<UploadUser/>}></Route>


    </Routes>
    </>
  )
}

export default App
