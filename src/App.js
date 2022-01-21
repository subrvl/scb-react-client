import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DashboardList from './components/DashboardList'
import Otp from "./components/Otp";
import HeaderHome from './components/headers/HeaderHome';
import HeaderDashboard from './components/headers/HeaderDashboard';
import HeaderCompany from "./components/headers/HeaderCompany";
import HeaderAccounts from "./components/headers/HeaderAccounts";
import HeaderGeneral from './components/headers/HeaderGeneral';
import HeaderSignatories from './components/headers/HeaderSignatories';
import HeaderOnline from './components/headers/HeaderOnline';
import HeaderReview from "./components/headers/HeaderReview";
import HeaderDocument from './components/headers/HeaderDocument'
import SideBar from './components/Sidebar';
import CompanyPage from './components/pages/CompanyPage';
import AccountsPage from "./components/pages/AccountsPage";
import GeneralPage from "./components/pages/GeneralPage";
import SignatoriesPage from "./components/pages/SignatoriesPage";
import DocumentPage from "./components/pages/DocumentPage";
import OnlinePage from "./components/pages/OnlinePage";
import ReviewPage from "./components/pages/ReviewPage";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";

export default () => {
  const [header, setHeader] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Otp setHeader={setHeader} />} />
        <Route
          path="/home"
          element={
            <>
              <Header /> <HeaderHome /><SideBar /> <HomePage />
            </>
          }
        />
      
         <Route
          path="/dashboard"
          element={
            <>
              <Header /> <HeaderDashboard /><SideBar /> <DashboardList />
            </>
          }
        />
          <Route
          path="/company"
          element={
            <>
              <Header /> <HeaderCompany /><SideBar /> <CompanyPage /> <Footer />
            </>
          }
        />
          <Route
          path="/accounts"
          element={
            <>
              <Header /> <HeaderAccounts /><SideBar /> <AccountsPage /> <Footer />
            </>
          }
        />
         <Route
          path="/signatories"
          element={
            <>
              <Header /> <HeaderSignatories /><SideBar /> <SignatoriesPage /> <Footer />
            </>
          }
        />
         <Route
          path="/online"
          element={
            <>
              <Header /> <HeaderOnline /><SideBar /> <OnlinePage /> <Footer />
            </>
          }
        />
         <Route
          path="/general"
          element={
            <>
              <Header /> <HeaderGeneral /><SideBar /> <GeneralPage /> <Footer />
            </>
          }
        />
         <Route
          path="/documents"
          element={
            <>
              <Header /> <HeaderDocument /><SideBar /> <DocumentPage /> <Footer />
            </>
          }
        />
         <Route
          path="/review"
          element={
            <>
              <Header /> <HeaderReview /><SideBar /> <ReviewPage /> <Footer />
            </>
          }
        />
       
      </Routes>
    </Router>
  );
};
