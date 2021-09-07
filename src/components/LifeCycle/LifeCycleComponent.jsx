import React, {Component, Fragment} from 'react';
import {Button} from 'react-bootstrap';

class LifeCycleComponent extends Component {

   constructor(props) {
        super(props); // is must, if extends Component
        this.state = { //deklarasi objek
            count: 1,
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1,
            });
        }, 3000)
    }

   shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
        // return false; // kembalikan false jika komponen tidak ingin diupdate
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return this;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    handleClickedMe = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render(){
        console.log("render");
        return(
            <Fragment>
                <Button variant="primary" type="button" onClick={this.handleClickedMe}>Clicked Me {this.state.count}</Button>
            </Fragment>
        );
    }

}

export default LifeCycleComponent;