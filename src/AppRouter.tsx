import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';


function AppRouter() {
  return (
    <>
    <Navigation /> {/* This will render the navigation bar on every page */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<CreateAccount />} /> {/* Add the route for creating an account */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>

    </>
  );
}

export default AppRouter;
