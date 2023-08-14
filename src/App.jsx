import { Outlet } from 'react-router-dom';
import Nav from './components/navbar';
//how to get footer in here??
import Footer from './components/footer';
  export default function App() {
    return (
      <>
      <Nav />
      <Outlet />
      <Footer />
      </>
    );
  }
