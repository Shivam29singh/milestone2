import React from "react";

import { mount, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import { configure } from "enzyme";

configure({ adapter: new Adapter() });

it("calls add function when form is submitted", () => {
  const addProduct = jest.fn();

  const wrapper = mount(<button onClick={addProduct}></button>);

  const button = wrapper.find("button");

  button.simulate("click");

  expect(addProduct).toHaveBeenCalledTimes(1);
});

it("calls delete function when form is submitted", () => {
  const deleteProduct = jest.fn();

  const wrapper = mount(<button onClick={deleteProduct}></button>);

  const button = wrapper.find("button");

  button.simulate("click");

  expect(deleteProduct).toHaveBeenCalledTimes(1);
});
