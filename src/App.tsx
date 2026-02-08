import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListDetail from './pages/ListDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main route for listing all TodoLists */}
        <Route path="/" element={<Home />} />
        
        {/* Dynamic route for a specific TodoList and its items */}
        <Route path="/lists/:id" element={<ListDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;