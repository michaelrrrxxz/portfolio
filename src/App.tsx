import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import NotFound from './pages/not-found';
import Chatbot from './components/Chatbot';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Chatbot />

      {/* Sonner Toaster Configured */}
      <Toaster
        position="bottom-right"
        theme="light" // "light" makes it black on white by default
        closeButton
        toastOptions={{
          style: {
            background: "#fff",
            color: "#000",
            border: "1px solid #000",
            fontSize: "14px",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
