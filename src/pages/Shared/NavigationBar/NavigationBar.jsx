import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from './../../../providers/AuthProvider';


const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/category/0" className='text-decoration-none text-secondary'>Home</Link>
                            <Link to="/" className='text-decoration-none text-secondary ms-2'>About</Link>
                            <Link to="/" className='text-decoration-none text-secondary ms-2'>Career</Link>
                        </Nav>
                        <Nav>
                            {
                            user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            
                            {
                            user ?
                                <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;