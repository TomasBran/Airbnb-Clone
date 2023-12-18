import { AuthProvider } from '../../context/AuthContext.jsx';
import { Header } from '../header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <AuthProvider>
          <Header/>
          <Outlet/>        
      </AuthProvider>
    </>
  )
};

export default Root;