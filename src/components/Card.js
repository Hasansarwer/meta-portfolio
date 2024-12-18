import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg='gray.50' rounded='md'>
      <Image 
        src={imageSrc}
        alt={title}
        rounded="md"
      />
      <VStack align='flex-start' padding='10px'>
        <Heading as='h2' color='black' size='sm'>{title}</Heading>
        <Text color='gray.500' fontSize='xs'>{description}</Text>
        <Text color='gray.900' fontSize='xs' fontWeight='normal'>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </VStack>
    </VStack>
  );
};

export default Card;
