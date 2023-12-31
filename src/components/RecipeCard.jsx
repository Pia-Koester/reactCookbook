import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Card maxW="sm">
      <Image
        src={recipe.image}
        alt={recipe.title}
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
      />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{recipe.title}</Heading>
          <Link to={`/recipes/${recipe.id}`}>
            <Text>{recipe.shortdescription}</Text>
            <Button colorScheme="orange" variant="solid" size="md" mt="1rem">
              Cook me
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
