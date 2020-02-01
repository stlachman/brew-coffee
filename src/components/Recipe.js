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
  const convertSeconds = time => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (minutes < 1) {
      minutes = "00";
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (seconds === 0) {
      seconds = "00";
    }

    return `${minutes}:${seconds}`;
  };

  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState("");
  const [grams, setGrams] = useState(20);
  const [ratio, setRatio] = useState(15);
  const [time, setTime] = useState(2);
  const [currentTime, setCurrentTime] = useState(null);
  const [toggleTimer, setToggleTimer] = useState(false);

  useEffect(() => {
    setRecipe(convertToName(recipeId));
  }, [recipeId]);

  useEffect(() => {
    let id;
    if (toggleTimer) {
      if (currentTime === null) {
        setCurrentTime(time * 60);
      } else if (currentTime > 0) {
        id = setInterval(() => {
          setCurrentTime(currentTime - 1);
        }, 1000);
      } else {
        setTime(time);
        setToggleTimer(!toggleTimer);
        setCurrentTime(null);
        clearInterval(id);
      }
    }
    return () => clearInterval(id);
  }, [toggleTimer, currentTime, time]);

  const startTimer = e => {
    e.preventDefault();
    setToggleTimer(!toggleTimer);
  };

  return (
    <>
      <Flex flexDirection="column" my={3} alignItems="center">
        <Text as="h2">{recipe}</Text>
        {currentTime && <Text my={2}>Time: {convertSeconds(currentTime)}</Text>}
        <Text my={2}>Water Needed: {grams * ratio}ml</Text>
      </Flex>
      <Flex justifyContent="center">
        <Box as="form" onSubmit={startTimer} py={3}>
          <Flex flexDirection={["column", "column", "row"]} mx={-2} mb={3}>
            <Box width={[1, 1, 1 / 3]} px={2}>
              <Label htmlFor="grams">Grams (coffee)</Label>
              <Input
                id="grams"
                onChange={e => setGrams(e.target.value)}
                grams="grams"
                min="10"
                type="number"
                value={grams}
              />
            </Box>
            <Box width={[1, 1, 1 / 3]} px={2}>
              <Label htmlFor="ratio">Ratio (Water to Coffee)</Label>
              <Input
                id="ratio"
                ratio="ratio"
                min="8"
                onChange={e => setRatio(e.target.value)}
                type="number"
                value={ratio}
              />
            </Box>
            <Box width={[1, 1, 1 / 3]} px={2}>
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
              <Button bg="black">{toggleTimer ? "Stop" : "Start"} Brew</Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Recipe;
