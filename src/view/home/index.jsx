
import { useAuth } from "../../context/authContext";
import LoginPage from '../../component/loginPage'
import MainPage from '../../component/mainPage';

function AppContent() {
  const { authState } = useAuth();
  
  return authState.isAuthenticated ? <MainPage /> : <LoginPage />;
}

function Home() {
  
  return (

      <AppContent />
    );
}

export default Home;