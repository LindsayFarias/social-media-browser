import { Button, Card, Container, Col, Row, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import Home from "./Home";

const Profiles = ({deleteFunc, profiles}) => {
    console.log(profiles)

    const [selected, setSelected] = useState();
    useEffect(() => {
    }, [selected])

    let { path, url } = useRouteMatch();

    let pokemonCards = profiles.map((pokemon)=>{
        return (        
            <Card className='pokemon-profiles' border="info" style={{ width: '18rem' }} key={pokemon.name}>
                <Card.Body>
                    <Link onClick={()=>{setSelected(pokemon)}}to={`${path}/${pokemon.name}`}>{pokemon.name}</Link>
                    <Card.Text>{pokemon.type}</Card.Text>
                    <Card.Img src={pokemon.profileImage}></Card.Img>
                    <Button variant='outline-info'><Link onClick={()=>{deleteFunc(pokemon)}} to='./'>unFriend</Link></Button>
                </Card.Body>
            </Card>
        )
    })

    return(
        <Container>
            <Row>
                <h1>Pokemon Friends</h1>
                <Col md={4}>{pokemonCards}</Col>
                <Col md={{span:4, offset:2}}>
                    <Route path={`${url}/:name`}>
                        <ActivePokemon pokemon={selected} />
                    </Route>
                </Col>
            </Row>
            <Route path='/discover'>
                <Home />
            </Route>
        </Container>
    )
}

const ActivePokemon = ({ pokemon }) =>{
    let { url, path } = useRouteMatch();
    console.log(pokemon)
    // let { name } = useParams()
    // let selectedPokemon = pokemon.filter((pokemon) => pokemon.name === name)
    return(
        <Container className='selectedPokemon'>
            <Card style={{ width: '18rem' }}>
                <Link to={`${path}/profile-image/`}>
                    <Card.Img className="profile-image"variant="top" src={ pokemon.profileImage } />
                </Link>
                <Card.Body>
                    <Card.Title>{ pokemon.name }</Card.Title>
                    <Card.Text>
                        { pokemon.favorite }
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Type: { pokemon.type }</ListGroupItem>
                    <ListGroupItem>Weakness: { pokemon.weakness }</ListGroupItem>
                    <ListGroupItem>Evolution: { pokemon.evolution }</ListGroupItem>
                </ListGroup>  
            </Card>
            <Route path={`${url}/profile-image/`}>
                <PokeImg image={ pokemon.enlargedImg } />
            </Route> 
        </Container>
    )
}

const PokeImg = ({ image }) => {
    return(
        <Container className='expanded-image'>
            <Image src={ image }/>
        </Container>
    )
}
export default Profiles;