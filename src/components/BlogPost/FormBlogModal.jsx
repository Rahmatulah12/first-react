import React, {Component, Fragment} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import $axios from '../../api';

class FormBlogModal extends Component {

    state = {
        form: {
            id: null,
            userId: null,
            title: '',
            body: '',
        }
    };

    handleFormChange = (event) => {
        // salin data form ke temproray data
        let formTemp = {...this.state.form};

        // memasukan nilai input kedalam variable tempForm
        // access object
        formTemp[event.target.name] = event.target.value;
        this.setState({
            form: formTemp,
        });
    }

    handleSave = () => {
        // salin data form ke temproray data
        let formTemp = null;
        if(this.props.status == "add") {
            formTemp = {...this.state.form};
        } else if(this.props.status == "edit") {
            formTemp = {...this.props.data};
        }
        console.log(formTemp);
        console.log(formTemp);return false;
        // Generate random id
        formTemp['id'] = new Date().getTime();

        // generate random userId
        formTemp['userId'] = Math.floor(Math.random() * 11);
        this.setState({
            form: formTemp,
        }, () => {
            $axios.post('posts', formTemp).then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error);
                alert(error);
            });
        });
    }

    render(){
        return(
            <Fragment>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.props.judul}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Control type="hidden" name="id"
                                id="id" onChange={this.handleFormChange}
                                value={
                                    this.props.data? this.props.data.id : ''
                                }
                            />
                            <Form.Control type="hidden" name="userId"
                                id="userId" onChange={this.handleFormChange}
                                value={
                                    this.props.data ? this.props.data.userId : ''
                                }
                            />
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="title">
                                    Title
                                </Form.Label>
                                <Form.Control type="text" name="title" 
                                    placeholder="please add you title bolg here"
                                    id="title" onChange={this.handleFormChange}
                                    value={
                                        this.props.data ? this.props.data.title : ''
                                    }
                                />
                                <Form.Text className="text-muted">
                                    <i>example: The Big O</i>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="body">Blog Content</Form.Label>
                                <Form.Control as="textarea" rows={5} value={
                                    this.props.data? this.props.data.body : ''
                                } 
                                    id="body" name="body" onChange={this.handleFormChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleSave()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default FormBlogModal;