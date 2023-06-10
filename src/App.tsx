import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Users from './components/contents/Users';
import Search from './components/contents/Search';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <hr />
        <div className="container">
          <Nav></Nav>
          <hr />
          <section className="contents">
            <Routes>
              <Route path="/users" element={<Users />} />
              <Route path="/search" element={<Search />} />
              {/* Root로 들어왔을 땐 /users로 보내기 */}
              <Route path="*" element={<Navigate replace to="/users" />} />
            </Routes>
          </section>
          <hr />
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
