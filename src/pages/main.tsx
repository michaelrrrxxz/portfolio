import Hero from './hero';
import About from './about';
import Skills from './skills';
import Stacks from './stacks';
// import Blog from './blog';
import Contact from './contact';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';




export default function Main() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Skills></Skills>
    <Stacks></Stacks>
    <About></About>
    {/* <Blog></Blog> */}
    <Contact></Contact>
    <Footer></Footer>
   
    </>
    );
}

