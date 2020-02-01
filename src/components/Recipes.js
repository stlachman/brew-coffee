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
    { name: "French Press" }
  ];
  return (
    <>
      <Text as="h2" textAlign="center">
        Recipes
      </Text>
      <Flex mx={-2}>
        {brews.map(brew => {
          return (
            <Card width={1 / 2} px={2} key={brew.name}>
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
          <h3>Please select a recipe.</h3>
        </Route>
      </Switch>
    </>
  );
};

export default Recipes;
