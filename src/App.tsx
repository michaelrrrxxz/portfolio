import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main';
import NotFound from './components/page/not-found';
import Chatbot from './components/func/Chatbot';
import Documents from './components/page/documents';
import { Toaster } from 'sonner';
import { Loader2 } from "lucide-react"; // Spinner icon from lucide-react

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="h-10 w-10 animate-spin text-black" />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Chatbot />

        <Toaster
          position="bottom-right"
          theme="light"
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
    </Suspense>
  );
}

export default App;
