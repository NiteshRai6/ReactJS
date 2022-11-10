import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbar-container">
            <Container fluid>

                <MenuIcon className="ms-4 side-navbar-icon" />

                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Form className="d-flex ms-4">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 global-search-input-box"
                            aria-label="Search"
                        />

                    </Form>

                </Nav>

                <ReportProblemIcon className="margin-right-side" />
                <NotificationsIcon className="margin-right-side" />
                <div className="user-img-container">
                    <img className="img-fluid user-img" src='./images/nitesh.jpeg' alt="User Profile" />
                </div>
                <ExpandMoreIcon className="margin-right-side" />

            </Container>
        </Navbar>
    );
}
export default NavBar;