import Footer from './components/footer/footer';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Confession from './components/pages/Confession';
import Layout from './components/layouts/Layout';
import NotFound from './components/pages/NotFound';
import Misdemeanour from './components/pages/Misdemeanour';
import Form from './components/form/Form';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='misdemeanours' element={<Misdemeanour />} />
      <Route path='confession' element={<Form />} />
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
