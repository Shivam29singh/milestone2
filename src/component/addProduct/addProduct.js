import React, { Component } from "react";
import "./addProduct.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import addProductBroadcast from "../../actions/newProductBroadcast";
import { Row, Col, Container, Form, Button, Card } from "react-bootstrap";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryname: "Electronics",
      productname: "",
      productquantity: "",
      productprice: "",
      instock: "YES",
      img: "",
    };
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
      category: this.state.categoryname,
      name: this.state.productname,
      price: this.state.productprice,
      quantity: this.state.productquantity,
      instock: this.state.instock,
      img: this.state.img,
    };

    console.log(newProduct);
    this.props.sendNewProduct(newProduct);
    this.props.history.push("/");
  };
  render() {
    return (
      <Container>
        <Card>
          <Card.Body className="body">
            <Card.Title>ADD PRODUCT</Card.Title>

            <Form onSubmit={this.contactSubmit}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Category Name:</Form.Label>
                  </Col>

                  <Col>
                    <Form.Control
                      className="form-control"
                      as="select"
                      custom
                      name="categoryname"
                      onChange={this.changeHandler}
                    >
                      <option>Electronics</option>
                      <option>Accessories</option>
                      <option>Clothing</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Product Name:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className="form-control"
                      type="text"
                      id="productname"
                      name="productname"
                      autoComplete="off"
                      placeholder="Enter Product Name.."
                      onChange={this.changeHandler}
                      title="Name should consists of letters and greater than length 3"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Quantity</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className="form-control"
                      type="number"
                      id="productquantity"
                      name="productquantity"
                      autoComplete="off"
                      placeholder="Enter Product Quantity.."
                      onChange={this.changeHandler}
                      title="Quantity should be a number"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Price</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className="form-control"
                      type="number"
                      id="productprice"
                      name="productprice"
                      autoComplete="off"
                      placeholder="Enter Product Price.."
                      onChange={this.changeHandler}
                      title="Price should be a number"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label htmlFor="instock">In Stock:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className="form-control"
                      as="select"
                      custom
                      name="instock"
                      onChange={this.changeHandler}
                    >
                      <option>YES</option>
                      <option>NO</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>imgUrl</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      className="input-text"
                      id="img"
                      name="img"
                      autoComplete="off"
                      placeholder="Enter image Url"
                      onChange={this.changeHandler}
                      title="imgUrl should be a link"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Row className="justify-content-md-center">
                <Button variant="primary" type="submit">
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
      sendNewProduct: addProductBroadcast,
    },
    dispatch
  );
}

export default connect(null, convertPropToEventAndBroadcast)(AddProduct);
