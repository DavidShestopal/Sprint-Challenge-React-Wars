import React from 'react';
import { CardTitle, CardText, Card, Button } from 'reactstrap';
import { Container, Row } from 'reactstrap';
function StarWarsCard(props) {
  return (
    <div>
      <Container>
        <Row>
          <Card body>
            <CardTitle>
              <h2>Name: {props.name}</h2>
            </CardTitle>
            <CardText style={{ color: 'red' }}>Birth Year: {props.birth_year}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <Button outline color="primary" style={{ margin: '2rem' }} href="https://www.starwars.com/databank">
              Find More Information On the Character Here
            </Button>{' '}
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default StarWarsCard;
