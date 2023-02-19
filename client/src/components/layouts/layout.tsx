import { NavLink, Outlet } from 'react-router-dom';

export default function layout() {
  return (
    <div className='layout'>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='misdemeanours'>Misdemeanours</NavLink>
          <NavLink to='confession'>Confes To Us</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
