import React, {Component, Fragment} from 'react';
import {Row} from 'react-bootstrap';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    // untukk merubah state siapkan function untuk merubha state
    handleCounterChange = (newValue) => {
        this.setState({
            number: newValue,
        });
    }

    render() {
        return(
            <Fragment>
                <Row>
                    <h1><b>{this.state.number}</b></h1>
                </Row>
                <Row>
                    <CardProduct OnCounterChange={ (value) => this.handleCounterChange(value) } />
                </Row>
            </Fragment>
        );
    }
}

export default Product;