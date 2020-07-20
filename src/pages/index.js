import React from 'react';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Sidebar from '../components/common/Sidebar';

import Landing from '../components/landing/Landing';
import About from '../components/about/About';
import Classes from '../components/classes/Classes';
import Dances from '../components/dances/Dances';
import Contact from '../components/contact/Contact';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <Landing />
      <About />
      <Classes />
      <Dances />
      <Contact />
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
