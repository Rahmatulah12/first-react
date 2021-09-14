import React, {Component, Fragment} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

class FormBlogModal extends Component {

    state = {
        form: {
            id: null,
            userId: null,
            title: '',
            body: '',
        }
    };

    handleSave = () => {
        console.log(this.state.form.title);
    }

    handleFormChange = (event) => {
        // salin data form ke temproray data
        let formTemp = {...this.state.form};

        // memasukan nilai input kedalam variable tempForm
        // access object
        formTemp[event.target.name] = event.target.value;
        this.setState({
            form: formTemp,
        }, () => {
            console.log(this.state);
        });
    }

    handleSave = () => {
        console.log(this.state.form);
    }

    render(){
        return(
            <Fragment>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="title">
                                    Title
                                </Form.Label>
                                <Form.Control type="text" name="title" 
                                    placeholder="please add you title bolg here"
                                    id="title" onChange={this.handleFormChange}
                                />
                                <Form.Text className="text-muted">
                                    <i>example: The Big O</i>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="body">Blog Content</Form.Label>
                                <Form.Control as="textarea" rows={5} value={this.state.form.content} 
                                    id="body" name="body" onChange={this.handleFormChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSave}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default FormBlogModal;