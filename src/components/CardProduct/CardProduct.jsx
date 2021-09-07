import React, {Component} from 'react';
import {Card, Col, Button, Form} from 'react-bootstrap';
import logo from '../../logo.svg';

class CardProduct extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            number: 0,
        }
    }

    handleIncrement = () => {
        this.setState({
            number: this.state.number + 1,
        }, () => {
            // memanggil callback 
            this.handleCounterChange(this.state.number);
        });
    }

    handleDecrement = () => {
        if(this.state.number > 0) {
            this.setState({
                number: this.state.number - 1,
            }, () => {
                // memanggil callback 
                this.handleCounterChange(this.state.number);
            });
        }
        
    }

    handleCounterChange = (number) => {
        // call props onCounterChange, and send value
        this.props.OnCounterChange(number);
    }

    render() {
        return(
            <Col sm={3} md={3}>
                <Card>
                    <Card.Img variant="top" src={logo} className="img-fluid" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div className="mx-auto">
                            <Button variant="success" className="d-inline" onClick={this.handleIncrement}>
                                <i class="fas fa-plus"></i>
                            </Button>  
                            <Form.Control type="text" value={this.state.number} className="text-center mx-1 d-inline" style={{ width: "60%" }} />
                            <Button variant="success" className="d-inline" onClick={this.handleDecrement}>
                                <i class="fas fa-minus"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default CardProduct;