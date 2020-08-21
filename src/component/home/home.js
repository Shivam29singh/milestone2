import React, { Component } from "react";
import "./home.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import deleteProductBroadcast from "../../actions/deleteProductBroadcast";
import NotificationBar from "../notificationBar/notificationBar";
import { Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }
  componentWillMount() {
    this.setState({ productList: this.props.allproducts });
  }
  componentWillReceiveProps(newProps) {
    if (newProps.allproducts !== this.props.allproducts) {
      console.log("prop updateds");
      this.setState({ productList: newProps.allproducts });
    }
  }
  updateProduct = (product) => {
    // console.log(this.props)
    // console.log("update clicked!!")
    this.props.history.push({
      pathname: "/editProduct",
      state: product,
    });
  };

  deleteProduct = (id) => {
    // console.log(id)
    this.props.deleteProduct(id);
    console.log(this.props.deleteProduct(id));
  };

  addProductClick = () => {
    this.props.history.push("/addProduct");
  };
  getSearch = (e) => {
    let searchV = e.target.value;
    console.log(searchV);
    if (searchV !== " ") {
      let searchP = this.props.allproducts.filter((f) => {
        return f.name.toLowerCase().includes(searchV);
      });

      this.setState({ productList: searchP });
    } else {
      this.displayProducts();
    }
  };
  categoryFilter = (event) => {
    let categoryV = event.target.value;
    if (categoryV !== " ") {
      this.setState({ categoryValue: categoryV });
      let categoryP = this.props.allproducts.filter((f) => {
        return f.category.match(categoryV);
      });
      this.setState({ productList: categoryP });
    } else {
      this.displayProducts();
    }
  };

  displayProducts = () => {
    if (this.state.productList.length !== 0) {
      return this.state.productList.map((product) => {
        return (
          <tr key={product.id}>
            <td>
              <Row>
                <Col>
                  <img
                    style={{ width: "200px", height: "150px" }}
                    src={product.img}
                    alt="pic"
                  />
                </Col>
              </Row>
              <Row>
                <Col>{product.name}</Col>
              </Row>
            </td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.instock}</td>
            <td>
              <button
                className="button button1"
                onClick={() => this.updateProduct(product)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className="button button2"
                onClick={() => this.deleteProduct(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    } else {
      console.log("hereeee");
      return (
        <tr>
          <td colSpan="6"> No Product Found!!!</td>
        </tr>
      );
    }
  };

  render() {
    return (
      <div>
        <NotificationBar
          total={this.state.productList.length}
        ></NotificationBar>
        <div style={{ textAlign: "center" }}>
          <button className="addbutton button1" onClick={this.addProductClick}>
            Add Product
          </button>

          <label>Search:</label>
          <input
            className="search-bar"
            value={this.state.searchValue}
            onChange={this.getSearch}
            name="search"
          ></input>
          <select
            id="category"
            name="Category :"
            onChange={this.categoryFilter}
          >
            <option value="" selected="true">
              Select
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Mobile">Mobile</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <table id="product-table" className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>InStock</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>{this.displayProducts()}</tbody>
        </table>
      </div>
    );
  }
}

function convertStoreToProps(store) {
  //   console.log("Received complete store....in home container");
  //   console.log(store);
  return {
    allproducts: store.getProduct,
  };
}

function convertPropToEventAndBroadcast(dispatch) {
  return bindActionCreators(
    {
      deleteProduct: deleteProductBroadcast,
    },
    dispatch
  );
}

export default connect(
  convertStoreToProps,
  convertPropToEventAndBroadcast
)(Home);
