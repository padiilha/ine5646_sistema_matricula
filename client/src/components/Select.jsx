import { Select, Text, VFlow } from "bold-ui";
import React, { useState } from "react";

const items = [
  "Carbonara",
  "Gnocchi",
  "Lasagna",
  "Macaroni and Cheese",
  "Pesto",
  "Pizza",
];

function SelectE() {
  const [value, setValue] = useState();

  const handleChange = (item) => setValue(item);

  const itemToString = (item) => item;

  return (
    <VFlow>
      <Text>Selected item: {value || "[none]"}</Text>
      <Select
        label="Favorite pasta"
        items={items}
        value={value}
        onChange={handleChange}
        itemToString={itemToString}
        name="favorite pasta"
        required
      />
    </VFlow>
  );
}

export default SelectE;
