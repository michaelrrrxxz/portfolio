import { useEffect, useState } from 'react';
import Hero from '../components/page/hero';
// import About from './about';
import Skills from '../components/page/skills';
import Stacks from '../components/page/stacks';
import { Certifications as Certificate } from '../components/page/certificate';

import Blog from '../components/page/blog';
import Contact from '../components/page/contact';
import Cos from '../components/page/completed-projects';
import Navbar from '../components/core/Navbar';
import Footer from '../components/core/Footer';

export default function Main() {
const [audio] = useState(() => new Audio('/audio/otlom.m3'));


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
  setTimeout(() => {
    audio.play().catch((err) => {
      console.warn('Audio play failed:', err);
    });
  }, 5000); // Delay of 5000 milliseconds (5 seconds)

 
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
 <Certificate></Certificate>
     {/* <Cos /> */}
      {/* <About /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
