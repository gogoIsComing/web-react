import Banner from '../Banner/Banner';
import Nav from '../../containers/Nav/Nav';
import Features from '../Features/Features';
import More from '../More/More';
import Footer from '../Footer/Footer';

function App(props) {
  return (
    <div>
      <header>
        <Nav />
        <Banner />
      </header>
      <main>
        <Features />
        <More />
      </main>
      <Footer />
    </div>
  );
}

export default App;
