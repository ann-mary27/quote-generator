import './App.css';
import Home from './pages/Home';
import Bookmark from './pages/Bookmark';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
       <Routes>
          <Route exact path="/" element={<Home />} />
            
          <Route path="/bookmarks" element={<Bookmark />}>
        
          </Route>
       </Routes>
      </Router>
      
    </div>
  );
}

export default App;
