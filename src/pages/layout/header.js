import React from "react";
import {
  Avatar,
  Box,
  Container,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { LuBell, LuSearch } from "react-icons/lu";

function Header({ title, color }) {
  return (
    <div style={{ padding: "40px 60px" }}>
      <HStack>
        <Box width="50%">
          <Text
            pr="5px"
            noOfLines="1"
            fontSize="30px"
            fontWeight="700"
            color={color && color}
          >
            {title}
          </Text>
        </Box>
        <Box width="50%">
          <HStack>
            <InputGroup>
              <InputLeftElement>
                <LuSearch />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
            <IconButton
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              icon={<LuBell />}
              width="20%"
              size="lg"
            />
            <Avatar src="https://bit.ly/dan-abramov" />
            <Container width="40%">
              <Text fontSize="15px" fontWeight="bold">
                Wan Mohd Izzuddin
              </Text>
              <Text fontSize="13px">Position</Text>
            </Container>
          </HStack>
        </Box>
      </HStack>
    </div>
  );
}

export { Header };
