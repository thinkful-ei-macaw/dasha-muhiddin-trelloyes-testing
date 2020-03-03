import React from "react";
import renderer from "react-test-renderer";

import List from "./List";

describe("<List />", () => {
  it("renders this UI as expected", () => {
    // Render the component, as JSON
    const tree = renderer
      .create(
        <List
          header="First list"
          cards={[
            { id: 1, title: "First card", content: "Lorem ipsum" },
            { id: 2, title: "Second card", content: "Lorem ipsum bla bla" }
          ]}
        />
      )
      .toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot();
  });
});
