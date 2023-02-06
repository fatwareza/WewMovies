import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"

const Tv = () => {
    const [tv,setTV] = useState([])
    useEffect(() => {
        axios.get( `${process.env.REACT_APP_BASE_URL}/discover/tv`, {
            params: {
                api_key: process.env.REACT_APP_TMBD_KEY
            }
        }).then((respone) => {
            setTV(respone.data.results)
        })
    }, [])
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TV</h1>
                <br />
                <Row>
                    {tv.map((result, index) => {
                        return (
                    
                <Col md={4} className="movieWrapper" id="tv" key={index}>
                    <Card className="movieImage">
                    <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="tv" className="Image" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">{result.name}</Card.Title>
                                <Card.Text className="text-left">Details:    
                                    {result.overview}
                                </Card.Text>
                                <Card.Text className="text-left">Popularity:    
                                    {result.popularity}
                                </Card.Text>
                                <Card.Text className="text-left">Release Date:
                                    {result.first_air_date}
                                </Card.Text>
                                <Card.Text className="text-left">Vote Average:
                                    {result.vote_average}
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                // {/* <Col md={4} className="movieWrapper" id="terbaru">
                //     <Card className="movieImage">
                //         <Image src={draculaImage} alt="Dune Movies" className="Image" />
                //         <div className="bg-dark">
                //             <div className="p-2 m-1 text-white">
                //                 <Card.Title className="text-center">Dracula</Card.Title>
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
                )})}
                </Row>
            </Container>  
        </div>
    )
}

export default Tv