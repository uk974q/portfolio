import './Experience.css'
import stratchlydePic from "../../images/strathclyde250.png"
import witPic from "../../images/wit250.png"

import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Confetti from 'react-confetti'



export default function Experience(){
    // function callNext(){
    //     document.getElementById('carouselExampleIndicators').carousel('next')
    // }


    return(
        <section>
            <Carousel fade className="carousel-container">
                <Carousel.Item>
                    <div className='d-block'>
                        <h1>Gramener Pvt Ltd</h1>
                        <h2>Senior Data Science Engineer</h2>
                        <p>1st Oct - Present</p>
                        <p>Hyderabad, India</p>
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div className='d-block'>
                        <h1>This is demo2</h1>
                        <h2>Date</h2>
                        <h3>Location</h3>
                        <p>I did something</p>
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div className='d-block'>
                        <h1>This is demo3</h1>
                        <h2>Date</h2>
                        <h3>Location</h3>
                        <p>I did something</p>
                    </div>
                    
                </Carousel.Item>
                
            </Carousel>
            <div className="university-section strath">
                <Card className="card strath">
                    <Card.Img variant="top" src={stratchlydePic} />
                    <Card.Body>
                        <Card.Title>MSc, Data Analytics</Card.Title>
                        <Card.Text>
                        abcd
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="card wit">
                    <Card.Img variant="top" src={witPic} />
                    <Card.Body>
                        <Card.Title>BE, Comp Sci and Engg</Card.Title>
                        <Card.Text>
                        ads
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}