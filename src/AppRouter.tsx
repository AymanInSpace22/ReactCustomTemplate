import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import NotFound from "./components/NotFound";
import ChatAPIComponent from "./components/ChatAPIComponent ";
import ImageGeneration from "./components/ImageGeneration";

import Footer from "./components/Footer";

import VideoBackground from "./components/VideoBackground";


// function AppRouter() {
//   return (
//     <>
//     <Navigation /> {/* This will render the navigation bar on every page */}

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="login" element={<Login />} />
//       <Route path="create-account" element={<CreateAccount />} />
//       {/* <Route path="*" element={<NotFound />} /> */}
//     </Routes>

//     </>
//   );
// }

// export default AppRouter;





function AppRouter() {
  const isAuthenticated = true;

  return (
    <>
    
      {!isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <>
        <VideoBackground/>
          <Navigation />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/imageGeneration" element={<ImageGeneration />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<NotFound />} />
            
            <Route path="/chatApi" element={<ChatAPIComponent />} />
          </Routes>
          
          {/* <Footer /> */}
          
        </>
      )}
    </>
  );
}

export default AppRouter;
