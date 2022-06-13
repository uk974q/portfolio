import './Skills.css'
import Carousel from 'react-bootstrap/Carousel'


export default function Skills(){
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
        </section>
    )
}