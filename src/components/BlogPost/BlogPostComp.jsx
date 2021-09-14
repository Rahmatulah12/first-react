import React, { Component } from 'react';
import {Card, Col, Image, Button} from 'react-bootstrap';

class BlogPostComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHover : false,
        }

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState(prevState => ({
            isHover : !prevState.isHover,
        }));
    }

    render() {
        const shadowCard = this.state.isHover ? "shadow" : '';
        return(
            <Col xs={12} sm={12}>
                <Card className={shadowCard}
                    onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
                    style={{ marginBottom: '25px' }}
                >
                    <Card.Body>
                        <Image 
                            src="https://media.suara.com/pictures/970x544/2020/06/24/16690-blog.jpg" 
                            alt={this.props.data.title} width="450" height="450"fluid rounded
                            className="shadow float-start me-3"
                        />
                        <Card.Title className="text-start">{this.props.data.title}</Card.Title>
                        <Card.Text className="text-start">
                            {this.props.data.body}
                        </Card.Text>
                        <Card.Link  href="#"
                            className="float-end"
                        >Read more</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-danger"
                            className="float-end my3"
                            onClick={() => this.props.remove(this.props.data.id)}
                        >Delete</Button>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }

}

export default BlogPostComp;