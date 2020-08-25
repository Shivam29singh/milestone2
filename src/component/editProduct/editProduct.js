import React, { Component } from "react";
import "./editProduct.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import editProductBroadcast from "../../actions/editProductBroadcast";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      categoryname: "Electronics",
      productname: "",
      productquantity: "",
      productprice: "",
      instock: "YES",
      img: "",
    };
  }

  componentWillMount() {
    console.log(this.props.history.location.state);
    let tempState = this.props.history.location.state;
    this.setState({
      id: tempState.id,
      categoryname: tempState.category,
      productname: tempState.name,
      productquantity: tempState.quantity,
      productprice: tempState.price,
      instock: tempState.instock,
      img: tempState.img,
    });
  }

  changeHandler = (event) => {
    // console.log(event.target.name)
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
    // console.log(this.state)
    // this.handleValidation();
  };

  contactSubmit = (event) => {
    event.preventDefault();
    let newProduct = {
      id: this.state.id,
      category: this.state.categoryname,
      name: this.state.productname,
      price: this.state.productprice,
      quantity: this.state.productquantity,
      instock: this.state.instock,
      img: this.state.img,
    };

    console.log(newProduct);
    this.props.editProduct(newProduct);
    this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Body className="body">
            <Card.Title className="title">EDIT PRODUCT</Card.Title>
            <Form onSubmit={this.contactSubmit}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Category Name:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      name="categoryname"
                      as="select"
                      className="input-select"
                      onChange={this.changeHandler}
                      value={this.state.categoryname}
                    >
                      <option>Electronics</option>
                      <option>Accessories</option>
                      <option>Clothing</option>
                    </Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Product Name:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      className="input-text"
                      id="productname"
                      name="productname"
                      autoComplete="off"
                      value={this.state.productname}
                      placeholder="Enter Product Name.."
                      onChange={this.changeHandler}
                      title="Name should consists of letters and greater than length 3"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Quantity</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="number"
                      className="input-text"
                      id="productquantity"
                      name="productquantity"
                      autoComplete="off"
                      value={this.state.productquantity}
                      placeholder="Enter Product Quantity.."
                      onChange={this.changeHandler}
                      title="Quantity should be a number"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Price</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="number"
                      className="input-text"
                      id="productprice"
                      name="productprice"
                      autoComplete="off"
                      value={this.state.productprice}
                      placeholder="Enter Product Price.."
                      onChange={this.changeHandler}
                      title="Price should be a number"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>In Stock:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      name="instock"
                      className="input-select"
                      onChange={this.changeHandler}
                      as="select"
                      value={this.state.instock}
                    >
                      <option>YES</option>
                      <option>NO</option>
                    </Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>imgUrl:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      className="input-text"
                      id="img"
                      name="img"
                      autoComplete="off"
                      value={this.state.img}
                      placeholder="Enter imgUrl"
                      onChange={this.changeHandler}
                      title="url should be a link"
                      required
                    />
                    {/* <span style={{ color: "red", fontSize: "14px" }}>{this.state.errors["productname"]}</span> */}
                  </Col>
                </Row>
              </Form.Group>
              <Row className="justify-content-md-center">
                <Button className="btn" variant="primary" type="submit">
                  Submit
                </Button>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

function convertPropToEventAndBroadcast(dispatch) {
  return bindActionCreators(
    {
      editProduct: editProductBroadcast,
    },
    dispatch
  );
}

export default connect(null, convertPropToEventAndBroadcast)(EditProduct);
