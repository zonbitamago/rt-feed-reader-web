import React from "react";
import { mount } from "enzyme";
// import { createMount } from "material-ui/test-utils";

import RegistedListModal from "./RegistedListModal";
import { store } from "../../../../__mocks__/storeSettings";

describe("RegistedListModal", () => {
  let component, props, mockfn;

  beforeEach(() => {
    mockfn = jest.fn();
    props = {
      open: true,
      handleClose: mockfn,
      store: store
    };
    component = mount(<RegistedListModal {...props} />);
  });

  it("yesボタンクリック", () => {
    component.find(".Button > #yes").simulate("click");
    expect(mockfn.mock.calls.length).toBe(0);
  });

  it("noボタンクリック", () => {
    component.find(".Button > #no").simulate("click");
    expect(mockfn.mock.calls.length).toBe(1);
  });
});
