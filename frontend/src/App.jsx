import { useUser } from '@clerk/clerk-react';
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import ProblemPage from './pages/ProblemPage';
import ProblemsPage from './pages/ProblemsPage';
import SessionPage from './pages/SessionPage';
import ResumeBuilder from './pages/ResumeBuilder';
import Preview from './pages/Preview';
import Layout from './pages/Layout';
import ResumeDashboard from './pages/ResumeDashboard';

function App() {
  
  const {isSignedIn,isLoaded}=useUser()

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        const isToastShown = sessionStorage.getItem('loginToastShown');
        if (!isToastShown) {
          toast.success("Successfully logged in");
          sessionStorage.setItem('loginToastShown', 'true');
        }
      } else {
        const wasSignedIn = sessionStorage.getItem('loginToastShown');
        if (wasSignedIn) {
          toast.success("Successfully logged out");
          sessionStorage.removeItem('loginToastShown');
        }
      }
    }
  }, [isSignedIn, isLoaded]);

  // this will get rid of the flickring effect
  if(!isLoaded) return null

  return (
    <>
    <Routes>
      <Route path="/" element={!isSignedIn ? <HomePage/> : <Navigate to={"/dashboard"}/>}/>
      <Route path="/dashboard" element={isSignedIn ? <DashboardPage/> : <Navigate to={"/"}/>}/>
      <Route path="/problems" element={isSignedIn ? <ProblemsPage/> : <Navigate to={"/"}/>}/>
      <Route path="/problem/:id" element={isSignedIn ? <ProblemPage/> : <Navigate to={"/"}/>}/>
      <Route path="/session/:id" element={isSignedIn ? <SessionPage/> : <Navigate to={"/"}/>}/>
      <Route path='app' element={isSignedIn ? <Layout/> : <Navigate to={"/"}/>}>
        <Route index element={<ResumeDashboard/>}/>
        <Route path="builder/:resumeId" element={<ResumeBuilder/>}/>
      </Route>
      
      <Route path="view/:resumeId" element={isSignedIn ? <Preview/> : <Navigate to={"/"}/>}/>
    </Routes>

    <Toaster toastOptions={{duration:3000}}/>
    </>
  );
}

export default App;
