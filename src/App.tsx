import React from 'react';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import MyProjects from './myProjects/MyProjects';
import Skills from './skills/Skills';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Skills />
      <MyProjects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
