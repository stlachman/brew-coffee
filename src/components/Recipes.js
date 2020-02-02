import React from "react";
import {
  Switch,
  Route,
  Link as LinkText,
  useRouteMatch
} from "react-router-dom";
import { Flex, Card, Link, Text } from "rebass";
import Recipe from "./Recipe";

const convertToSlug = name =>
  name
    .toLowerCase()
    .split(" ")
    .join("-");

const Recipes = () => {
  let match = useRouteMatch();
  const brews = [
    { name: "Chemex" },
    { name: "Hario V60" },
    { name: "French Press" },
    { name: "Clever" }
  ];
  return (
    <>
      <Flex mx={-2} flexWrap="wrap" marginBottom={4}>
        {brews.map(brew => {
          return (
            <Card
              width={[1, 1, 1 / 2]}
              display="flex"
              justifyContent="center"
              alignItems="center"
              px={2}
              key={brew.name}
            >
              <Text as="h3">
                <Link
                  as={LinkText}
                  to={`${match.url}/${convertToSlug(brew.name)}`}
                >
                  {brew.name}
                </Link>
              </Text>
            </Card>
          );
        })}
      </Flex>
      <Switch>
        <Route path={`${match.path}/:recipeId`}>
          <Recipe />
        </Route>
        <Route path={match.path}>
          <Text>Please select a recipe.</Text>
        </Route>
      </Switch>
    </>
  );
};

export default Recipes;
