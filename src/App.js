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
function App() {
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
      <Route path='/forms'  element={<MyForm/>}></Route>
      <Route path='/tables' element={<Tables/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
