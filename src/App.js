import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Conference from "./Pages/Conference/Conference";
import Home from "./Pages/Home/Home";
import Comments from "./comments/Comments";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Head from "./Pages/Shared/Head/Head";
import Course from "./Pages/Course/Course";
import Payment from "./Pages/Payment/Payment";
import PaymentSuccess from "./Pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "./Pages/PaymentFailed/PaymentFailed";
import Profiles from "./Pages/Profiles/Profiles";
import Profile from "./Pages/Profiles/Profile";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <div>
      {/* <Head></Head> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment/:coursePrice" element={<Payment />} />
        <Route path="/profile/:coursePrice" element={<Profiles />} />
        <Route
          path="/paymentsuccess/:transactionId"
          element={<PaymentSuccess />}
        />
        <Route
          path="/paymentfailed/:transactionId"
          element={<PaymentFailed />}
        />
        <Route
          path="/allcourse"
          element={
            <RequireAuth>
              <Course></Course>
            </RequireAuth>
          }
        />
        {/* <Route
          path="Purchase/:_id"
          element={
            <RequireAuth>
              <Purchasedetails></Purchasedetails>
            </RequireAuth>
          }
        /> */}
        <Route path="blog" element={<Blog></Blog>} />
        <Route
          path="forum"
          element={
            <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId="1"
            ></Comments>
          }
        />
        <Route path="conference" element={<MainScreen></MainScreen>} />

        <Route path="contact" element={<Contact></Contact>} />

        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<Signup></Signup>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
