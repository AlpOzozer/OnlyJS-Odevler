import HeroText from "../../../src/components/HeroText/HeroText";
import HeroButton from "../../../src/components/HeroButton/HeroButton";
import { Container, Row, Col, Button } from 'react-bootstrap';


function Hero() {
    return (
        <>
        <div className="hero">
            <Container>
                <Row>
                    <Col md={12}>
                        <HeroText /> 
                    </Col>
                    <Col md={12}>
                        <HeroButton />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Hero;
