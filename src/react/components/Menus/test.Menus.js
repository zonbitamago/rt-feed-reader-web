import React from "react";
import { shallow } from "enzyme";
import Menus from "./Menus";
import { store } from "../../../../__mocks__/storeSettings";

describe("Menus", () => {
  let component, props;

  beforeEach(() => {
    props = {
      store: store
    };
    component = shallow(<Menus {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
