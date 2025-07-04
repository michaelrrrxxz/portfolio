import Hero from './hero';
import About from './about';
import Skills from './skills';
import Stacks from './stacks';
import { Navbar } from '../components/Navbar';




export default function Main() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Skills></Skills>
    <Stacks></Stacks>
    <About></About>
   
    </>
    );
}

