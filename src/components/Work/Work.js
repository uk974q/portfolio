import './Work.css'
import Carousel from 'react-bootstrap/Carousel'

export default function Work(){

    const workData = [
        {
            company:"Gramener Pvt Ltd",
            role:"Senior Data Science Engineer",
            year:"1st Oct 2021 - Present",
            location: "Hyderabad"
        },
        {
            company:"Palnar Transmedia",
            role:"Software Engineer",
            year:"Aug 2020 - Sep 2021",
            location: "Trivandrum"
        },
        {
            company:"Self",
            role:"Freelancing",
            year:"Apr 2020 - Aug 2020",
            location: "Home"
        },
        {
            company:"Scott Moncrieff",
            role:"Intern",
            year:"May 2019 - Nov 2019",
            location: "Glasgow, UK"
        },
        {
            company:"Infosys Ltd",
            role:"Senior Systems Engineer",
            year:"Aug 2015 - Aug 2018",
            location: "Pune"
        },
    ]

    let workExperiences = workData.map(el => (
        <Carousel.Item>
            <div className='d-card'>
                <h1>{el.company}</h1>
                <h2>{el.role}</h2>
                <p>{el.year}</p>
                <p>{el.location}</p>
            </div>
            
        </Carousel.Item>
    ))


    return(
        <Carousel fade className="carousel-container">
            {workExperiences}
        </Carousel>
    )
}