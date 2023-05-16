import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { PostsUser } from './pages/PostsUser';
import ErrorPage from './pages/ErrorPage';
import UsersApp from './selectedpages/UsersApp';
// import LoginPage from './components/Login/LoginPage';
// import Elem from './ANTD/Elem';
import Tables from './components/AntDesign/Tables';
import Navbar from './components/AntDesign/Navbar';
import MyForm from './components/AntDesign/MyForm';
import LoginAnt from './components/Auth/LoginAnt';
import { useState } from 'react';
import Login from './components/Auth/Login';
import MyFormik from './components/AntDesign/MyFormik';
function App() {
  const [user,setUser] =useState(false)
  const [pswd,setPswd] =useState(false)
  return (
    // <>
    //   <Routes>
    //     <Route path='/login' element={<LoginPage/>}/>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/users' element={<Users/>}/>
    //     <Route path='/userPosts/:id' element={<PostsUser/>}/>
    //     <Route path='*' element={<ErrorPage/>}/>
    //   </Routes>
    // </>
    // <Routes>
    //   <Route path='/' element={<UsersApp}></Route>
    // </Routes>

    // <Elem>
      
    // </Elem>
    <>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<MyForm/>}></Route>
      <Route path='/forms'  element={<LoginAnt user={user} pswd={pswd}><MyForm/></LoginAnt>}></Route>
      <Route path='/formik'  element={<LoginAnt user={user} pswd={pswd}><MyFormik/></LoginAnt>}></Route>
      <Route path='/login'  element={<Login setUser={setUser} setPswd={setPswd}/>}></Route>
      <Route path='/tables' element={<LoginAnt user={user} pswd={pswd}><Tables/></LoginAnt>}></Route>
    </Routes>
    </>
  );
}

export default App;
