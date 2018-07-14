import React from "react";
import { shallow } from "enzyme";

import RegistedListItem from "./RegistedListItem";
import { store } from "../../../../__mocks__/storeSettings";

describe("RegistedListItem", () => {
  let component, props;

  beforeEach(() => {
    props = {
      name: "test",
      url: "https://google/co.jp",
      store: store
    };
    component = shallow(<RegistedListItem {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
