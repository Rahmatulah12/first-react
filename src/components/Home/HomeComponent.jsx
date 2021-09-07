import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
// import Product from './components/Product/Product';
// import LifeCycle from '../LifeCycle/LifeCycleComponent';
import BlogPost from '../BlogPost/BlogPostComp';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: false,
            });
        }, 5000);
    }

    render() {
        return(
            <Container className="mt-5">
            {/* <Product /> */}
                <Row className="mt-5">
                    
                    <BlogPost />
                </Row>
            </Container>
        );
    }
}
export default HomeComponent;