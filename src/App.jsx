import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";



function App() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AuthRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route> */}

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* user profile  cart etc pages */}
         
         
            {/* <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/user/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
            </Route> */}


            {/* <Route path="*" element={<NotFound />} />
            <Route path="/error/:code" element={<Error />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;