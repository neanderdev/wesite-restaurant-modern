import { Navbar } from './components';
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  Menu
} from './container';

import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />

      <Header />

      <AboutUs />

      <Menu />

      <Chef />

      <Intro />

      <Laurels />

      <Gallery />

      <FindUs />

      <Footer />
    </div>
  );
}
