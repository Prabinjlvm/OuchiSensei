import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import StudentLandingpage from './Student/LandingPage';
import AboutFeesPage from './Student/AboutFeesPage';
import CourseFlowPage from './Student/CourseFlowPage';
import SampleEmailPage from './Student/SampleEmailPage';
import StFaqPage from './Student/StFaqPage';
import StContactPage from './Student/StContact';
import CompanyProfilePage from './Student/CompanyProfile';
import TermsOfUsePage from './Student/TermsOfUse';
import PrivacyPolicyPage from './Student/PrivacyPage';
import TeacherLandingpage from './Teacher/TeacherLandingPage';
import TeacherFindingStudentsTips from './Teacher/TeacherFindingStudentsTips';
import TeacherTerms from './Teacher/TeacherTermsPage';
import TeacherSignupPage from './Teacher/TeacherSignupPage';
import TeacherFaqPage from './Teacher/TeacherFaqPage';
import TeContactPage from './Teacher/TeContact';
import TeacherLoginPage from './Teacher/TeacherLoginPage';
import TeacherPassword from './Teacher/TeacherPassword';
import TeacherListPage from './Student/TeacherListPage';
import TeacherProfilePage from './Student/TeacherProfilePage';
import TeacherProfileManage from './Teacher/Components/TeacherProfileManage';
import TeacherProfileEdit from './Teacher/Components/TeacherProfileManage';
import ProtectedRoute from './Teacher/Components/ProtectedRoute';
import StudentProfileManage from './Student/StudentProfileManage';
import StudentLogin from './Student/Components/studentlogin';
import StudentPasswordReset from './Student/Components/StudentPassword';
import StudentCardPage from './Student/StudentCardPage';
import i18n from './i18n/i18n';
import ScrollToTop from './ScrollToTop';




function LanguageRouter() {
  const location = useLocation();

  useEffect(() => {
    // List of teacher routes (prefix or exact match)
    const teacherRoutes = [
      '/teacher',
      '/student-finding-tips',
      '/teacher-terms',
      '/teacher-signup',
      '/teacherfaq',
      '/teacher-contact',
      '/teacher-login',
      '/teacher-password',
      '/teacher-profile-manage'
    ];
    const isTeacherRoute = teacherRoutes.some(route =>
      location.pathname.startsWith(route)
    );
    if (isTeacherRoute) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('ja');
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<StudentLandingpage />} />
      <Route path="/AboutFees" element={<AboutFeesPage/>} />
      <Route path="/CourseFlow" element={<CourseFlowPage/>} />
      <Route path="/SampleEmail" element={<SampleEmailPage/>} />
      <Route path="/StFaq" element={<StFaqPage/>} />
      <Route path="/StContact" element={<StContactPage/>} />
      <Route path="/CompanyProfile" element={<CompanyProfilePage/>} />
      <Route path="/TermsOfUse" element={<TermsOfUsePage/>} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage/>} />
      <Route path="/TeacherList" element={<TeacherListPage/>} />
      <Route path="/teacherprofile" element={<TeacherProfilePage/>} />
      <Route path="/student-profile-manage" element={<StudentProfileManage/>} />
      <Route path="/student-login" element={<StudentLogin/>} />
      <Route path="/student-password" element={<StudentPasswordReset/>} />
      <Route path="/techer-cart" element={<StudentCardPage/>} />
      {/* *****************************************Teacher*********************************** */}
      <Route path="/teacher" element={<TeacherLandingpage />} />
      <Route path="/student-finding-tips" element={<TeacherFindingStudentsTips/>} />
      <Route path="/teacher-terms" element={<TeacherTerms />} />
      <Route path="/teacher-signup" element={<TeacherSignupPage />} />
      <Route path="/teacherfaq" element={<TeacherFaqPage />} />
      <Route path="/teacher-contact" element={<TeContactPage/>} />
      <Route path="/teacher-login" element={<TeacherLoginPage/>} />
      <Route path="/teacher-password" element={<TeacherPassword/>} />
      <Route path="/teacher-profile-manage" element={
        <ProtectedRoute>
          <TeacherProfileEdit/>
        </ProtectedRoute>
      } />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <LanguageRouter />
    </Router>
  );
}

export default App;
