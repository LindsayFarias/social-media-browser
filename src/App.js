import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";

function App() {
  const [articles, setArticles] = useState([
    {
      title: 'Pokémon at 25: How 151 fictional species took over the world',
      article: 'When the Game Boy titles "Pocket Monsters: Red" and "Pocket Monsters: Green" were first released in Japan in 1996, few could have predicted what came next.'
    },
    {
      title: 'Pokémon: The Japanese game that went viral',
      article: 'Our virtual lives have taken on a new significance amid seemingly endless quarantines and requests for social distancing. '
    },
    {
      title: 'What the weird world of Pokémon can teach us about storytelling',
      article: 'Since 1996, the Pokémon games have exerted a fascination for fans, telling imaginative stories and encouraging a generation of players to question everything they see.'
    }
  ])

  const[profiles, setProfiles] = useState([
    {
      name: 'Pikachu',
      type: 'Electric',
      profileImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
      favorite: "My favorite think to do is have shocking amounts of fun",
      weakness: "Ground",
      evolution: "Raichu"
    },
    {
      name: 'Bulbasaur',
      type: 'Grass, Poison',
      profileImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      favorite: "My favorite thing to do is dance in the rain!",
      weakness: "Fire, Psychic, Flying, Ice",
      evolution: "Ivysaur"
    },
    {
      name: 'Charmander',
      type: 'Fire',
      profileImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      favorite: "My favorite thing to do is roast S'mores with friends",
      weakness: "Water, Ground, Rock",
      evolution: "Charmeleon"
    }
  ])

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container flex>
            <Navbar.Brand>Poke Friends</Navbar.Brand>
            <Nav className="me-auto">
              <Button variant="outline-info"><Link to='/'>Home</Link></Button>{"   "}
              <Button variant="outline-info"><Link to='/about'>About</Link></Button>{"   "}
              <Button variant="outline-info"><Link to='/profiles'>Profiles</Link></Button>{"   "}
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path='/'> 
            <Home articles={ articles } />
          </Route>
          <Route exact path='/about'> 
            <About /> 
          </Route>
          <Route path='/profiles'> 
            <Profiles profiles={ profiles } />
          </Route>
        </Switch>
    </div>
  );
}

export default App;


//Need a home page w/ navbar: Home, About, Profiles to view own profile with news feed showing articles- done
///about route, directs to small blurb about social-networking company- done
//profiles, directs to profiles page with list of contacts- done
///profiles/:id, directs to independant profile alongside list- done
//profiles/:id/profile-image/, directs to enlarged version of profile pic

//data from home should contain the following: 
//{
//   newsArticles: [
//     { 
//         title: "Winning at Life!",
//         article: "There are many ways to do so...but the best is just try, try, try again!"
//     }
//     //add more stories here in this array!
// ],
// contactProfiles: [
//     {
//         firstName: "Willie",
//         lastName: "Dustice",
//         birthday: "01/01/1978 00:00:00",
//         profileImage: "/url-to-an-image.jpeg"
//     }
// ]
// }