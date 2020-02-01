import React, { useState, useEffect } from "react";
import { Flex, Text, Box, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const convertToName = name =>
    name
      .split("-")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState("");
  const [grams, setGrams] = useState(20);
  const [ratio, setRatio] = useState(15);
  const [time, setTime] = useState(2);

  useEffect(() => {
    setRecipe(convertToName(recipeId));
  }, [recipeId]);

  return (
    <>
      <Flex flexDirection="column" my={3} alignItems="center">
        <Text as="h2">{recipe}</Text>
        <Text my={2}>Water Needed: {grams * ratio}ml</Text>
      </Flex>
      <Flex justifyContent="center">
        <Box as="form" onSubmit={e => e.preventDefault()} py={3}>
          <Flex mx={-2} mb={3}>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="ratio">Grams</Label>
              <Input
                id="grams"
                onChange={e => setGrams(e.target.value)}
                grams="grams"
                min="10"
                type="number"
                value={grams}
              />
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="ratio">Ratio</Label>
              <Input
                id="ratio"
                ratio="ratio"
                min="8"
                onChange={e => setRatio(e.target.value)}
                type="number"
                value={ratio}
              />
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor="time">Time (in minutes)</Label>
              <Input
                id="time"
                time="time"
                onChange={e => setTime(e.target.value)}
                type="number"
                step="0.5"
                min="0.5"
                value={time}
              />
            </Box>
          </Flex>
          <Flex mx={-2} flexWrap="wrap">
            <Box px={2} ml="auto">
              <Button bg="black">Start Brew</Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Recipe;
