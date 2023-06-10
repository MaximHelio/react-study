import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <hr />
      <div className="container">
        <Nav></Nav>
        <hr />
        <section className="contents">
          <div>
            <h3>Users</h3>
            <p>Contents</p>
          </div>
        </section>
        <hr />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
