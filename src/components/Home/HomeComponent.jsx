import React, {Component} from 'react';
import {Container, Row, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BlogPost from '../BlogPost/BlogPostComp';
import {get, destroy} from '../../functions/Fetch';
import FormBlogModal from '../BlogPost/FormBlogModal';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            showModal: false,
        }
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleShowModal = () => {
        this.setState({ showModal: true });
    }

    handleHideModal = () => {
        this.setState({ showModal: false });
    }

    handleRemove = (id) => {
        const dialog = withReactContent(Swal);
        dialog.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((response) => {
            if(response.isConfirmed) {
                destroy(`http://localhost:9090/posts/${id}`)
                .then(response => {
                    this.fetchData();
                    dialog.fire(
                        "Deleted",
                        `Post with id :${id}, has been deleted!`,
                        'success',
                    );
                }).catch(error => {
                    dialog(
                        "Error",
                        `${error}`,
                        'error',
                    )
                });
                
            }
        });
    }

    fetchData = () => {
        get('http://localhost:9090/posts?_page=1&_limit=10')
        .then(response => {
            if(response.length > 0){
                this.setState({
                    posts: response,
                })
            }
            
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return(
            <Container className="mt-5">
                <Button variant="outline-primary"
                    className="my3"
                    onClick={this.handleShowModal}
                >Add New</Button>
                <FormBlogModal show={this.state.showModal} onClose={this.handleHideModal} />
            {/* <Product /> */}
                <Row className="mt-5">

                    {
                        this.state.posts.map(post => {
                            return <BlogPost key={post.id} data={post}
                                    remove={this.handleRemove}
                            />
                        })
                    }
                    
                </Row>
            </Container>
        );
    }
}
export default HomeComponent;