import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Services';
import Header from './Components/Header';
import ServiceDetails from './Pages/ServiceDetails';
import Team from './Pages/Team';
import Compliances from './Pages/Compliances';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Project from './Pages/Project';
import SafariRally from './Pages/SafariRally';

const services = [
  {
    id: '1',
    headerImage: 'path/to/environment-management.jpg',
    title: 'Environment Management',
    description: 'We provide environmental implementation and enforcement services and deliver environmental awareness programs to our clients',
  },
  {
    id: '2',
    headerImage: 'path/to/structural-engineering.jpg',
    title: 'Structural and Civil Engineering',
    description: 'Description for Structural and Civil Engineering',
  },
  {
    id: '3',
    headerImage: 'path/to/water-supply.jpg',
    title: 'Water Supply & Sanitation Engineering',
    description: 'Description for Water Supply & Sanitation Engineering',
  },
  {
    id: '4',
    headerImage: 'path/to/water-supply.jpg',
    title: 'Transportation Engineering',
    description: 'Jokin Consortium Limited is interested in various aspects of transport engineering design, including the dimensioning of transport facilities (how many lanes or how much capability the facility has), the determination of the materials and thickness used in the geometry design of the roadway geometry (vertical and horizontal alignment) (or track).',
  },
  {
    id: '5',
    headerImage: 'path/to/water-supply.jpg',
    title: 'Urban and Rural Development',
    description: 'Description for Water Supply & Sanitation EngineeringWe provide solutions for residential, commercial, manufacturing, healthcare and hospitality construction projects around the world with experience in civil, structural and building services engineering design. Our expertise ranges from urban land developments of low density to high-density high-rise projects for clients of the government and private sector.',
  },
  // Add more services as needed
];

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home services={services} />} />
      <Route path="/about-us" element={<AboutUs services={services} />} />
      <Route path="/services" element={<Service services={services} />} />
      <Route path="/service/:id" element={<ServiceDetails services={services} />} />
      <Route path="/team" element={<Team services={services} />} />
      <Route path="/compliances" element={<Compliances services={services} />} />
      <Route path="/contact" element={<Contact services={services} />} />
      <Route path="/projects" element={<Project services={services} />} />
      <Route path="/project/safari-rally" element={<SafariRally services={services} />} />
    </Routes>
  </Router>
);

export default App;
