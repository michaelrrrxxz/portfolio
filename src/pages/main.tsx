import { useEffect, useState } from 'react';
import Hero from './hero';
// import About from './about';
import Skills from './skills';
import Stacks from './stacks';
import Blog from './blog';
import Contact from './contact';
import Cos from './completed-projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Main() {
const [audio] = useState(() => new Audio('/audio/otlom.mp3'));


  useEffect(() => {
    // Block right-click context menu
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Block common devtools shortcuts
    const disableDevToolsShortcuts = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || // Ctrl+Shift+I/J/C
        e.key === 'F12' // F12
      ) {
        e.preventDefault();
      }
    };

    // Play audio on first click
    const handleClick = () => {
      audio.play().catch((err) => {
        console.warn('Audio play failed:', err);
      });
      window.removeEventListener('click', handleClick);
    };

    window.addEventListener('contextmenu', disableContextMenu);
    window.addEventListener('keydown', disableDevToolsShortcuts);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('contextmenu', disableContextMenu);
      window.removeEventListener('keydown', disableDevToolsShortcuts);
      window.removeEventListener('click', handleClick);
    };
  }, [audio]);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Stacks />
      <Cos />
      {/* <About /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
