import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import { Col, Nav, Row } from 'react-bootstrap';
import './App.css';
import EducationApp from './components/EducationApp';

export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>


      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                {/* <Nav.Link eventKey="first" className='heading'><h4>Educational Data </h4></Nav.Link> */}

                <EducationApp/>
              </Nav.Item>
            </Nav>
          </Col>

        </Row>
      </Tab.Container>

    </div>
  );
}