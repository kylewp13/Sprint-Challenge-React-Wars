import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from 'reactstrap';
import Person from "./person"

const Characters = (props) => {
  const [star, setStar] = useState([]);
  const [onPage, setPage] = useState(1);

  if (onPage === 10){
    setPage(1)
  } else if (onPage === 0){
    setPage(9)
  }
  
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${onPage}`)
    .then((response) => {
      // console.log(response.data.results)
      setStar(response.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [onPage])
  
  return (
    <div id="top">
    <h3>Page: {onPage}</h3>
      <Container>
        <Row>
          <Col xs="6" sm="6">
            {star.slice(0, 5).map((person, index) => {
              return <Person key={index} data={person}/>
            })}
          </Col>
          <Col xs="6" sm="6">
            {star.slice(5, 10).map((person, index) => {
              return <Person key={index} data={person}/>
            })}
          </Col>
        </Row>
      </Container>
      <Button href="#top" style={{margin: 20}} onClick={() => setPage(onPage - 1)}>Back</Button>
      <Button onClick={() => setPage(1)}>1</Button>
      <Button onClick={() => setPage(2)}>2</Button>
      <Button onClick={() => setPage(3)}>3</Button>
      <Button onClick={() => setPage(4)}>4</Button>
      <Button onClick={() => setPage(5)}>5</Button>
      <Button onClick={() => setPage(6)}>6</Button>
      <Button onClick={() => setPage(7)}>7</Button>
      <Button onClick={() => setPage(8)}>8</Button>
      <Button onClick={() => setPage(9)}>9</Button>
      <Button href="#top" style={{margin: 20}} onClick={() => setPage(onPage + 1)}>Next</Button>
    </div>
    )
  };
  
  export default Characters;