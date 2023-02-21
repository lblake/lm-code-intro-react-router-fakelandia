import Footer from './components/footer/footer';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Misdemeanours from './components/pages/misdemeanours';
import Confession from './components/pages/confession';
import Layout from './components/layouts/layout';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='misdemeanours' element={<Misdemeanours />} />
      <Route path='confession' element={<Confession />} />
      <Route path="/404" element={ <NotFound /> } />

    </Route>
  )
);

const App: React.FC = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
