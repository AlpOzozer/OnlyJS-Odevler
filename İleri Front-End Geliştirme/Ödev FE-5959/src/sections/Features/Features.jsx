import Card from "../../components/Card/Card";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Features() {
    const card1 = {
        iconClassName: "feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4",
        cardHeader: "Fresh new layout",
        cardParagraph: "With Bootstrap 5, we've created a fresh new layout for this template!",
    }
    return (
        <>
           <div className="features">
            <Container>
                <Row>
                    <Col md={12}>
                        <Card
                        iconClassName={card1.iconClassName}
                        cardHeader={card1.cardHeader}
                        cardParagraph={card1.cardParagraph}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Features;