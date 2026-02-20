import Card from "../../components/Card/Card";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Features() {
    const card1 = {
        iconClassName: "bi bi-pc-display",
        cardHeader: "Kolay kullanılabilir",
        cardParagraph: "Kodlar parça yani component halinde oluşturulduğu için aynı parçalar birçok yerde kullanılabilir."
    }

    const card2 = {
        iconClassName: "bi bi-cloud-download",
        cardHeader: "Açık kaynaklıdır",
        cardParagraph: "Herkes kullanabilir",
    }

    const card3 = {
        iconClassName: "bi bi-card-heading",
        cardHeader: "Mobil ve bilgisayar için geliştirilebilir.",
    }

    const card4 = {
        iconClassName: "bi bi-bootstrap",
        cardHeader: "Öğrenilmesi kolaydır",
    }

    const card5 = {
        iconClassName: "bi bi-code",
        cardHeader: "React, .jsx uzantılıdır",
        cardParagraph: "jsx Javascript ve XML'in kısaltmasıdır",
    }

    const card6 = {
        iconClassName: "bi bi-patch-check",
        cardHeader: "Büyük bir topluluğu vardır",
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