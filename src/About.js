import { Card } from 'react-bootstrap';

const About = () => {
    return(
        <Card>
            <Card.Img variant="top" src="https://media0.giphy.com/media/iBANmdIlMNJVC/100.webp?cid=ecf05e47npihmhksvob0kqdob2he8nkl4hat9qld61vt4fr4&rid=100.webp&ct=g" />
            <Card.Body>
                <h1>
                    Hanging out on Poke Friends is like hanging out with your 
                    friends in real life. See what they are up to and discover new friends!
                </h1>
            </Card.Body>
        </Card>
    )
}

export default About;