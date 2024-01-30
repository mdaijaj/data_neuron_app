import { Route, Routes } from 'react-router';
import './App.css'; 
import Navbar from './components/navbar';
import AddContent from './components/add_content';
import ShowContent from './components/show_content';
import Home from './components/home'
import UpdateContent from './components/edit_data'

const App=()=>{
    return (
      <>
      <div className='main'>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />  
          <Route path="/add_content" element={<AddContent/>} />  
          <Route path="/show_content" element={<ShowContent/>} />
          <Route path="/edit_content/:id" element={<UpdateContent/>} />
          <Route path="/error" element={<ShowContent/>} />
        </Routes>
      </div>
      </>
    )
}

export default App;

