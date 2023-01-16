import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import Users from "./Pages/Dashboard/Users";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
// import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Homes/Home";
import Profiles from "./Pages/Profiles/Profiles";
import PaymentSuccess from "./Pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "./Pages/PaymentFailed/PaymentFailed";
import Course from "./Pages/Course/Course";
import Blog from "./Pages/Blog/Blog";
import Comments from "./comments/Comments";
import MainScreen from "./screens/MainScreen";
// import Contact from "./Pages/Home/Contact";
import Payment from "./Pages/Payment/Payment";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/Abouts/About";
import Post from "./Pages/Forum/Post";
import Posts from "./Pages/Forum/Posts";
import Profile from "./Pages/Profiles/Profile";
import Modules from "./Pages/Modules";
import DoctorProfile from "./Pages/DoctorProfile";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post></Post>} />
        <Route path="/posts" element={<Posts></Posts>} />
        {/* <Route path="/payment/:price" element={<Payment />} /> */}
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

        {/* <Route path="about" element={<About />} /> */}
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:price" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              // <RequireAdmin>
              <AddDoctor></AddDoctor>
              // </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              // <RequireAdmin>
              <ManageDoctors></ManageDoctors>
              // </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="module/:id" element={<Modules></Modules>} />
        <Route path="doctorprofile/:id" element={<DoctorProfile></DoctorProfile>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
