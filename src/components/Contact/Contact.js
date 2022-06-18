import './Contact.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faGift, faEgg} from '@fortawesome/free-solid-svg-icons'

export default function Contact(){
    return(
        <div className='form-page'>
            <h1 className='heading'>Throw at me ? Gifts<span><FontAwesomeIcon icon={faGift} /></span> 
             or Eggs<span><FontAwesomeIcon icon={faEgg} /></span>?</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>What should I call you?</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>How to reach you by mail?</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    I won't share this with anyone!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicComment">
                    <Form.Label>Okay. Please feel free to comment anything! </Form.Label>
                    <Form.Control as="textarea" placeholder="Feedback" />
                    <Form.Text className="text-muted">
                    Negative ones help me improve. Positive ones motivates me. Enough of my philosophy. Write!  
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}