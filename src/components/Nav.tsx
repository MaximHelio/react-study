function Nav(props: any) {
  console.log(props);
  return (
    <nav className="nav">
      <ul>
        <li><h2>Users</h2></li>
        <li><h2>Search</h2></li>
      </ul>
    </nav>
  );
}

export default Nav;