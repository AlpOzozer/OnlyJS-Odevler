import NavbarText1 from "../../../src/components/NavbarText1/NavbarText1";
import NavbarText2 from "../../../src/components/NavbarText2/NavbarText2";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Navbar = function () {
    return (
        <>
        <div className="navbar">
            <Container>
                <Row>
                    <Col md={6}>
                        <NavbarText1 />
                    </Col>
                    <Col md={6}>
                        <NavbarText2 />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Navbar;