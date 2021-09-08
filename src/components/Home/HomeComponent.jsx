import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
// import Product from './components/Product/Product';
// import LifeCycle from '../LifeCycle/LifeCycleComponent';
import BlogPost from '../BlogPost/BlogPostComp';
import {get} from '../../functions/Fetch';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            posts: [],
        }
    }

    componentDidMount() {
        get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts: response,
            })
        }).catch(error => {
            console.log(error);
        })
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

                    {
                        this.state.posts.map(post => {
                            return <BlogPost key={post.id} alt={post.title} 
                                        title={post.title} body={post.body}
                                    />
                        })
                    }
                    
                </Row>
            </Container>
        );
    }
}
export default HomeComponent;