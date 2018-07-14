import React from "react";
import { storiesOf } from "@storybook/react";

import Side from "./Side";
import { store } from "../../../../__mocks__/storeSettings";

storiesOf("Organisms/Side", module).add("Side", () => <Side store={store} />);
