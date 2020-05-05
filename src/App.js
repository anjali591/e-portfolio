import React from 'react';
import Main from './main';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="E-Portfolio" scroll>
            <Navigation>
            <Link to="/landing">Anjali</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="E-Portfolio">
            <Navigation>
            <Link to="/landing">Anjali</Link>
            <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    </div>
  
  );
}

export default App;
