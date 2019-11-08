import React from "react";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Person = (props) => {
  return (
    <Card style={{marginTop: 10}}>
      {/* <CardImg top width="100%" src="#" alt="random"/> */}
      <CardBody>
        <CardTitle>{props.data.name}</CardTitle>
        <CardText>Height: {props.data.height}</CardText>
        <CardText>Mass: {props.data.mass}</CardText>
        <CardText>Hair color: {props.data.hair_color}</CardText>
        <CardText>skin color: {props.data.skin_color}</CardText>
        <CardText>Eye color: {props.data.eye_color}</CardText>
        <CardText>Birth year: {props.data.birth_year}</CardText>
        <CardText>Gender: {props.data.gender}</CardText>
      </CardBody>
    </Card>
  )
}

export default Person;