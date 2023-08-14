import { Outlet } from 'react-router-dom';
import Nav from './components/navbar'
//how to get footer in here??
  export default function App() {
    return (
      <>
      <Nav />
      <Outlet />
      </>
    );
  }
