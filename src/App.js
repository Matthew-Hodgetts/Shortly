import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import LinkForm from './components/linkForm';
import Reasons from './components/reasons';
import Cta from './components/cta';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LinkForm />
      <Reasons />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
