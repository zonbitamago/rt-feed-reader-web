import React from "react";
import { storiesOf } from "@storybook/react";
import RegistedListItem from "./RegistedListItem";
import List from "@material-ui/core/List";
import { store } from "../../../../__mocks__/storeSettings";

storiesOf("Atoms/RegistedListItem", module)
  .addDecorator(story => <List>{story()}</List>)
  .add("RegistedListItem", () => (
    <RegistedListItem
      name="sample"
      url="https://www.google.co.jp/"
      store={store}
    />
  ));
