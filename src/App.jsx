import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import ShareButton from './components/ShareButton';

const router=createBrowserRouter(
[
  {
    path:"/",
    element: 
    <>
      <Navbar/>
      <Home/>
    </>

  },
  {
    path:"/pastes",
    element: 
    <>
     <Navbar/>
     <Paste/>
    </>

  },
  {
    path:"/pastes/:id",
    element: 
    <>
    <Navbar/>
    <ViewPaste/>
    </>

  },
  {
    path:"/share",
    element:
    <>
      <ShareButton/>
    </>
  }
]

);


function App() {


  return (
    <>
      {/* <p className='text-center underline '>jai shree ram</p> */}
  <RouterProvider router={router}/>
     
      
    </>
  )
}

export default App
