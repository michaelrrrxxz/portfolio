import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import NotFound from './pages/not-found'
import Chatbot from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        {/* Add more routes as needed */}
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
