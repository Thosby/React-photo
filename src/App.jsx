import Todo from './Composants/todo';
import PhotoComponent from './Composants/PhotoComponent';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
function App() {
  return (
    <Routes>
      <Route path = "/photo" element={<PhotoComponent/>}/>
      <Route path = "/todo" element={<Todo/>}/>
      <Route path = "/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
