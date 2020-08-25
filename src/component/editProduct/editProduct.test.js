
import React from "react";

import { mount, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import { configure } from "enzyme";





configure({ adapter: new Adapter() });


it("calls  when add form is submitted", () => {

  const onEditSubmit = jest.fn();

  const wrapper = mount(<button onClick={onEditSubmit}></button>);

  const button = wrapper.find("button");

  button.simulate("click");

  expect(onEditSubmit).toHaveBeenCalledTimes(1);

});



describe("Content input", () => {
    it("Should capture content correctly onChange", () => {
        const changeHandler = jest.fn();
        const wrapper = mount(<input type="text" onChange={changeHandler}></input>);
        const content = wrapper.find("input").at(0);
        content.instance().value = "Testing";
        content.simulate("change");
        expect(changeHandler).toHaveBeenCalledTimes(1);
    });
});

it('productname value', () => {
    const wrapper = mount(<input type="text" name="productname" />);
  const input = wrapper.find("input");
  expect("input").toHaveLength(5);
  expect(input.prop("type")).toEqual("text");
  });