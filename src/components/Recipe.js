import React from "react";
import { Flex, Text, Link } from "rebass";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const convertToName = name =>
    name
      .split("-")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  let { recipeId } = useParams();

  return (
    <Flex justifyContent="center">
      <Text>{convertToName(recipeId)}</Text>
    </Flex>
  );
};

export default Recipe;
