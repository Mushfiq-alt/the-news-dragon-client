import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {

    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="Logo" />
                <p className="text-secondary">
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="" >
                <div className="d-flex justify-content-between" style={{ backgroundColor: '#F3F3F3', padding: '10px' }}>
                    <Button variant="danger">Latest</Button>
                    <Marquee className="text-danger" speed={100}>
                        Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...
                    </Marquee>
                </div> 
                
           
            </div>
            
        </Container>
    );
};

export default Header;
