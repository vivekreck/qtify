import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { LandingPage } from './pages/LandingPage';

// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      { path: '', element: <LandingPage /> },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
