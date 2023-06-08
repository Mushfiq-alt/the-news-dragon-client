import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../../assets/1.png'
import second from '../../../../assets/2.png'
import third from '../../../../assets/3.png'
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <div className='d-flex '>
                            <FaRegCalendar className='mt-1'></FaRegCalendar>
                            <p className='ps-4'>jan 4, 2022</p>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <div className='d-flex '>
                            <FaRegCalendar className='mt-1'></FaRegCalendar>
                            <p className='ps-4'>jan 4, 2022</p>
                        </div>   
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <div className='d-flex '>
                            <FaRegCalendar className='mt-1'></FaRegCalendar>
                            <p className='ps-4'>jan 4, 2022</p>
                        </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
};

export default EditorsInsights;