import './Uni.css'
import stratchlydePic from "../../images/strathclyde250.png"
import witPic from "../../images/wit250.png"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Uni(){

    const uniData = [{
        image:stratchlydePic,
        title:"MSc, Data Analytics",
        location: "Glasgow, UK",
        year: "2018 - 2020",
        link: ""
    },{
        image:witPic,
        title:"B.E. Computer Sci & Engg",
        location: "Solapur, India",
        year: "2011 - 2015",
        link: ""
    }]

    let universities = uniData.map(el =>(
        <Card className="card">
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                {el.location}
                </Card.Text>
                <Card.Text>
                {el.year}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    ))

    return(
        <div className="university-section">
            {universities}
        </div>
    )
}