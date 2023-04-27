import ProtectRoutes from './hooks/ProtectedRoutes';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="app">
     <ProtectRoutes> 
      <Layout /> 
     </ProtectRoutes>
    </div>
  );
}
export default App;
