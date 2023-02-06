import { Card, Container, Row, Col, Image } from "react-bootstrap"
import axios from 'axios'
import { useEffect, useState } from "react"

const Trending = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMBD_KEY
            }
        }).then((respone) => {
            setMovies(respone.data.results)
        })
    }, [])

    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING</h1>
                <br />
                <Row>
                    {movies.map((result, index) => {
                        return (
                            <Col md={4} className="movieWrapper" id="trending" key={index}>
                                <Card className="movieImage">
                                    <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="NJAJAL" className="Image" />
                                    <div className="bg-dark">
                                        <div className="p-2 m-1 text-white">
                                            <Card.Title className="text-center">{result.title}</Card.Title>
                                            <Card.Text className="text-left">
                                                {result.overview}
                                            </Card.Text>
                                            <Card.Text className="text-left">
                                                {result.release_date}
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            // {/* <Col md={4} className="movieWrapper" id="trending">
                            //     <Card className="movieImage">
                            //         <Image src={everythingImage} alt="Dune Movies" className="Image" />
                            //         <div className="bg-dark">
                            //             <div className="p-2 m-1 text-white">
                            //                 <Card.Title className="text-center">everything</Card.Title>
                            //                 <Card.Text className="text-left">
                            //                     This is a wider card with natural lead-in to additional content
                            //                 </Card.Text>
                            //                 <Card.Text className="text-left">
                            //                     Last updated 3 mins ago
                            //                 </Card.Text>
                            //             </div>
                            //         </div>
                            //     </Card>
                            // </Col>

                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Trending