import logo from './logo.svg';
import './App.css';
import NavBar from './common/navbar';
import Layout from './common/layout';
import HomePage from './homePage';

function App() {
  return (
    <Layout>
      <NavBar />
      <HomePage />
    </Layout>
  );
}

export default App;
