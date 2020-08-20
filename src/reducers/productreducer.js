const productreducer = function getProduct(state = null, action) {
  var products = [
    {
      id: 1,
      category: "Electronics",
      name: "MI HD TV",
      price: "220",
      quantity: "9",
      instock: "YES",
      img:
        "https://rukminim1.flixcart.com/image/312/312/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg?q=70",
    },
    {
      id: 2,
      category: "Electronics",
      name: "OnePlus QLED TV",
      price: "230",
      quantity: "9",
      instock: "NO",
      img:
        "https://rukminim1.flixcart.com/image/312/312/k7nnrm80/television/v/h/t/kodak-50ca7077-original-imafpug2mfpe3mdj.jpeg?q=70",
    },
    {
      id: 3,
      category: "Electronics",
      name: "Micromax UHD LED",
      price: "120",
      quantity: "4",
      instock: "YES",
      img:
        "https://rukminim1.flixcart.com/image/312/312/k7nnrm80/television/v/h/t/kodak-50ca7077-original-imafpug2mfpe3mdj.jpeg?q=70",
    },
    {
      id: 4,
      category: "Accessories",
      name: " HandBag",
      price: "150",
      quantity: "4",
      instock: "NO",
      img:
        "https://rukminim1.flixcart.com/image/580/696/k4n2avk0/hand-messenger-bag/g/g/j/new-styles-01710-hand-held-bag-shopangel-original-imafn99gxbhazmue.jpeg?q=50",
    },
    {
      id: 5,
      category: "Accessories",
      name: "Typify Leather Bag",
      price: "165",
      quantity: "3",
      instock: "YES",
      img:
        "https://rukminim1.flixcart.com/image/612/612/bowl/q/t/p/square-dish-with-lid-set-500-ml-800ml-1-6-l-borosil-original-imaeyq7db2yf3dth.jpeg?q=70",
    },
    {
      id: 6,
      category: "Electronics",
      name: "Typify Leather Bag",
      price: "165",
      quantity: "3",
      instock: "YES",
      img:
        "https://rukminim1.flixcart.com/image/312/312/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70  ",
    },
  ];
  // console.log(action);
  switch (action.type) {
    case "NEW_PRODUCT":
      // console.log("Action with payload received in reducer with case new_product!")
      // console.log(action.payload);
      let tempProd = action.payload;
      tempProd.id = state.length + 1;
      let newProduct = [...state, tempProd];
      return newProduct;

    case "EDIT_PRODUCT":
      console.log(
        "Action with payload received in reducer with case edit_product!"
      );
      // console.log(action.payload);
      // let temp = action.payload
      var editProduct = state.map((obj) => {
        if (obj.id === action.payload.id) {
          console.log("before", obj);
          obj = action.payload;
          console.log("after", obj);
        }
        return obj;
      });
      return editProduct;

    case "DELETE_PRODUCT":
      // let temp = action.payload
      let filteredProducts = state.filter((prod) => {
        return prod.id !== action.payload;
      });
      // console.log(filteredProducts);
      return filteredProducts;

    default:
      break;
  }

  return products;
};

export default productreducer;
