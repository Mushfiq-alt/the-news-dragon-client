import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div className='mt-3'>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            </div>
            <div>
                <h4 className='mt-5'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='py-3'><FaFacebook style={{ color: '#4267B2' }}></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item className='py-3'><FaTwitter style={{ color: '#1DA1F2' }}></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item className='py-3'><FaInstagram style={{ color: '#E1306C' }}></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-5' style={{ position: 'relative' }}>
                <img src={bg} alt="" />
                <div style={{ position: 'absolute', top: '40%', left: '45%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#ffffff' }}>
                    <h2>Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;