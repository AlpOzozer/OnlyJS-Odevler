import { Container, Row, Col, Button } from 'react-bootstrap';
import FooterText from '../../../src/components/FooterText/FooterText';

function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={12}>
                            <FooterText />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;