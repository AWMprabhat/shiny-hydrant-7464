import {
  Box,
  FormLabel,
  Checkbox,
  Text,
  Radio,
  Stack,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTypeParams = searchParams.getAll("type");
  const [category, setCategory] = useState(initialTypeParams || []);
  const handleOnChange = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ type: category });
    }
  }, [category, setSearchParams]);
  return (
    <Box>
      <Box
        border="1px solid red"
        bgImage="linear-gradient(red,orange)"
        mt="2rem"
        color="whitesmoke"
      >
        <Text fontSize="2xl">Filter</Text>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <FormLabel>IT Services</FormLabel>
        <Checkbox
          type="checkbox"
          defaultChecked={category.includes("IT-Services")}
          value="IT-Services"
          onChange={handleOnChange}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <FormLabel>Technology</FormLabel>
        <Checkbox
          value="Technology"
          type="checkbox"
          onChange={handleOnChange}
          defaultChecked={category.includes("Technology")}
        />
      </Box>
    </Box>
  );
};

export default FilterData;
