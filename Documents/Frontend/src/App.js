// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/Chat.js";
import Create from "./components/Create.js";
import FooterMenu from "./components/FooterMenu.js";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Home from "./components/Home.js";
import Notification from "./components/Notification.js";
import ReceiveProfile from "./components/ReceiveProfile.js";
import SearchBar from "./components/Search.js";
import SendProfile from "./components/SendProfile.js";
import SignIn from "./components/Signin.js";
import SignUp from "./components/Signup.js";
import Auth from "./components/Auth.js";
import PersonalCard from "./components/PersonalCard.js";
import ProfessionalCard from "./components/ProfessionalCard.js";
import EducationCard from "./components/EducationCard.js";
import MedicalCard from "./components/MedicalCard.js";
import CreateProfile from "./components/CreateProfile.js";
import PersonalForm from "./components/PersonalForm.js";
import ProfessionalForm from "./components/ProfessionalForm.js";
import EducationalForm from "./components/EducationalForm.js";
import MedicalForm from "./components/MedicalForm.js";
import AccordionUsage from "./components/Accordions.js";
import SP from "./components/sp.js";
import SI from "./components/si.js";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route
          path="/home"
          element={
            // <Auth>
            <Home />
            // </Auth>
          }
        />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/createProfile" element={<CreateProfile />} />
        <Route path="/personal-form" element={<PersonalForm />} />
        <Route path="/professional-form" element={<ProfessionalForm />} />
        <Route path="/educational-form" element={<EducationalForm />} />
        <Route path="/medical-form" element={<MedicalForm />} />
        <Route path="/accord" element={<AccordionUsage />} />
        <Route path="/sp" element={<SP/>}/>
        <Route path="/" element={<SI/>}/>
        
      </Routes>
    </>
  );
}

export default App;
