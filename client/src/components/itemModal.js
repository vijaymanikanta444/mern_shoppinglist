import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { v4 as uuidv4 } from 'uuid';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
  };

  toogle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      name: this.state.name,
    };

    //add item via action
    this.props.addItem(newItem);

    //close modal
    this.toogle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toogle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toogle={this.toogle}>
          <ModalHeader toogle={this.toogle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping Item"
                  onChange={this.Onchange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
