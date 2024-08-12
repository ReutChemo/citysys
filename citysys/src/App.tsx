import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/common/header"
import { Col, Row } from 'antd';
import Rightpannel from './components/common/rightpannel';

function App() {
  return (
    <div className="App">
     
      <>
   
    <Row>
   
      <Col span={12}><Header/></Col>
      <Col span={12}style={{backgroundColor:'#0973E7'}} ><Rightpannel/></Col>
     
    </Row>
   
  </>
      
    </div>
  );
}

export default App;
