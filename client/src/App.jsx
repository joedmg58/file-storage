import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route 
            // path = "/files/:dir?"
            path = "/files/*" 
            // loader = { ({params}) => { console.log(params.dir)}}
            // action = { ({params}) => {}}
            element = {<HomePage/>}/>
          <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
