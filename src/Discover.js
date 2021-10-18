import { Button, Card, Container } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import "./App.css";
import Profiles from "./Profiles";

const Discover = ({add, potentialFriends}) => {


    let pokemonCards = potentialFriends.map((pokemon)=>{
        return (        
            <Card className='pokemon-profiles' border="info" style={{ width: '18rem' }} key={pokemon.name}>
                <Card.Body>
                    <Button variant='outline-info'>
                        <Link onClick={()=>add(pokemon)}to={`/profiles`}>Add to Profiles</Link></Button>
                    <Card.Text>{pokemon.name}: {pokemon.type}</Card.Text>
                    <Card.Img src={pokemon.profileImage}></Card.Img>
                </Card.Body>
            </Card>
        )
    })

    return(
        <Container>
            <h1>Discover New Friends</h1>
            {pokemonCards}
            <Route path='/profiles'>
                <Profiles />
            </Route>
        </Container>
    )
}

export default Discover;