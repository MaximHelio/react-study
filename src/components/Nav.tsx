import { NavLink } from 'react-router-dom';

function Nav(props: any) {
  console.log(props);
  return (
    <nav className="nav">
      <ul>
        <li><h2><NavLink to="users" className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink></h2></li>
        <li><h2><NavLink to="search" className={({ isActive }) => isActive ? 'active' : ''}>Search</NavLink></h2></li>
      </ul>
    </nav>
  );
}

export default Nav;