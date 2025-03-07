import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>XrmBedrock - Professional Dataverse Development Framework</title>
        <meta name="description" content="XrmBedrock provides professional developers with powerful tools and streamlined workflows that go beyond Microsoft's standard offerings for Dataverse development." />
        <meta name="keywords" content="XrmBedrock, Dataverse, Microsoft Dynamics 365, CRM development, Power Platform, Developer tools" />
        <link rel="canonical" href="https://xrmbedrock.com" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Benefits />
          <Comparison />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;