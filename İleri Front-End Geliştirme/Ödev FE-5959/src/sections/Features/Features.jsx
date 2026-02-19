import Card from "../../components/Card/Card";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Features() {
    const card1 = {
        iconClassName: "bi bi-collection",
        cardHeader: "Fresh new layout",
        cardParagraph: "With Bootstrap 5, we've created a fresh\n new layout for this template!"
    }

    const card2 = {
        iconClassName: "bi bi-cloud-download",
        cardHeader: "Free to download",
        cardParagraph: "As always, Start Bootstrap has a\n powerful collectin of free templates.",
    }

    const card3 = {
        iconClassName: "bi bi-card-heading",
        cardHeader: "Jumbotron hero header",
        cardParagraph: "The heroic part of this template is the\n jumbotron hero header!",
    }

    const card4 = {
        iconClassName: "bi bi-bootstrap",
        cardHeader: "Feature boxes",
        cardParagraph: "We've created some custom feature\n boxes using Bootstrap icons!",
    }

    const card5 = {
        iconClassName: "bi bi-code",
        cardHeader: "Simple clean code",
        cardParagraph: "We keep our dependencies up to date\n and squash bugs as they come!",
    }

    const card6 = {
        iconClassName: "bi bi-patch-check",
        cardHeader: "A name you trust",
        cardParagraph: "Start Bootstrap has been the leader in\n free Bootstrap templates since 2013!",
    }
    

   
    return (
        <>
           <div className="features">
            <Container>
                <Row>
                    <Col md={4}>
                        <Card
                        iconClassName={card1.iconClassName}
                        cardHeader={card1.cardHeader}
                        cardParagraph={card1.cardParagraph}
                        />
                    </Col>
                    <Col md={4}>
                        <Card 
                        iconClassName={card2.iconClassName}
                        cardHeader={card2.cardHeader}
                        cardParagraph={card2.cardParagraph}
                        />
                    </Col>
                    <Col md={4}>
                        <Card 
                        iconClassName={card3.iconClassName}
                        cardHeader={card3.cardHeader}
                        cardParagraph={card3.cardParagraph}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card
                        iconClassName={card4.iconClassName}
                        cardHeader={card4.cardHeader}
                        cardParagraph={card4.cardParagraph}
                        />
                    </Col>
                    <Col md={4}>
                        <Card 
                        iconClassName={card5.iconClassName}
                        cardHeader={card5.cardHeader}
                        cardParagraph={card5.cardParagraph}
                        />
                    </Col>
                    <Col md={4}>
                        <Card 
                        iconClassName={card6.iconClassName}
                        cardHeader={card6.cardHeader}
                        cardParagraph={card6.cardParagraph}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Features;