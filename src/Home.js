import { Card } from 'react-bootstrap';

const Home = ({ articles }) => {
    console.log(articles)
    let mappedArticles = articles.map((article) => { return (
        <Card className='article' key={article.title}>
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.article}</Card.Text>
            </Card.Body>
        </Card>
    )})
    return(
        <div className='home'>
            <h1>Home</h1>
            {mappedArticles}
        </div>
    )
}

export default Home;