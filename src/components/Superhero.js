import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from '../assets/images/superhero/antman.jpg'
import avengerImage from '../assets/images/superhero/avenger.jpg'
import batmanImage from '../assets/images/superhero/batman.jpg'
import robinhoodImage from '../assets/images/superhero/robinhood.jpg'
import spidermanImage from '../assets/images/superhero/spiderman-cover.jpg'
import supermanImage from '../assets/images/superhero/superman.jpg'

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SuperHero</h1>
                <br />
                <Row>
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={antmanImage} alt="Dune Movies" className="Image" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Ant man</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={avengerImage} alt="Dune Movies" className="Image" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">avenger</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={batmanImage} alt="Dune Movies" className="Image" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">batman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={robinhoodImage} alt="Dune Movies" className="Image" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">robinhood</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={spidermanImage} alt="Dune Movies" className="Image" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">spiderman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={supermanImage} alt="Dune Movies" className="Image" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">superman</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                </Row>
            </Container>  
        </div>
    )
}

export default Superhero