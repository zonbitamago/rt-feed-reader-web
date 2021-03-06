import React from "react";
import { storiesOf } from "@storybook/react";

import Menus from "./Menus";
import { store } from "../../../../__mocks__/storeSettings";

storiesOf("Molecules/Menus", module)
  .addDecorator(story => (
    <div style={{ backgroundColor: "#01579B", height: "18em", width: "3em" }}>
      {story()}
    </div>
  ))
  .add("Side Menu", () => <Menus store={store} />);
