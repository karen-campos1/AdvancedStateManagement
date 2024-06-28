// src/components/Home.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1 className="my-4">Welcome to Fitness Tracker</h1>
      <p>Track your daily exercises and stay fit!</p>
      <img
        src="https://assets.clevelandclinic.org/transform/26568096-7fcc-4713-898d-ca1ed6c84895/exerciseHowOften-944015592-770x533-1_jpg"
        alt="Exercise Illustration"
        className="img-fluid"
      />
    </Container>
  );
};

export default Home;
