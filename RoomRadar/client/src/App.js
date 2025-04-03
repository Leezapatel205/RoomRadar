// import React from 'react'
// import {BrowserRouter,Route, Routes} from 'react-router-dom'
// import Home from './Pages/Home'
// import Signin from './Pages/Signin'
// import Signup from './Pages/Signup'
// import About from './Pages/About'
// import Profile from './Pages/Profile'
// import Header from './Components/Header'
// import CreateListing from './Pages/createlisting'
// import PrivateRoute from './Components/PrivateRoute'
// import ListingDetails from './Pages/ListingDetails';
// import UpdateListing from './Pages/UpdateListing';
// import Listing from './Pages/Listing'
// import Search from './Pages/Search'



// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/sign-in' element={<Signin />}></Route> 
//         <Route path='/sign-up' element={<Signup />}> </Route> 
//         <Route path='/search' element={<Search />}></Route>
//         <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

//         <  Route path='/about' element={<About />}></Route>
//         <Route path='/create-listing' element={<CreateListing />} />
//         <Route path='/listing/:listingId' element={<Listing />} />
//         {/* <Route path='/listing/:id' element={<ListingDetails />} /> */}
//       <Route   path='/update-listing/:listingId' element={<UpdateListing/>} />
//          </Routes>
  
//     </BrowserRouter>
//   )
// }

// export default App

import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './Components/Header'
import CreateListing from './Pages/createlisting'
import PrivateRoute from './Components/PrivateRoute'

import UpdateListing from './Pages/UpdateListing';
import Listing from './Pages/Listing'
import Search from './Pages/Search'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
