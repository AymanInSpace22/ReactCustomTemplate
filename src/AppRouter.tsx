import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import NotFound from "./components/NotFound";
import AI from "./components/AI";
import Footer from "./components/Footer";

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
          <Navigation />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

export default AppRouter;
