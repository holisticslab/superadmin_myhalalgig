import React from "react";
import { Box, Container, Flex, Icon, Image, Text } from "@chakra-ui/react";
import logoGig from "../../assets/logoGig.png";
import {
  FiHome,
  FiFile,
  FiClipboard,
  FiTrello,
  FiFileText,
  FiLogOut,
} from "react-icons/fi";
import { Link, useMatch } from "react-router-dom";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, src: "dashboard" },
  { name: "File", icon: FiFile, src: "file" },
  { name: "Scheme", icon: FiClipboard, src: "scheme" },
  { name: "Company", icon: FiTrello, src: "company" },
  { name: "Subscription", icon: FiFileText, src: "subscription" },
  { name: "Logout", icon: FiLogOut, src: "logout" },
];

function Sidebar() {
  return (
    <div>
      <Box p="50px 80px">
        <Image src={logoGig} />
      </Box>
      <Container>
        <Text mx="2" fontWeight="900" color="#33945F">
          MENU
        </Text>
        {LinkItems.map((item, i) => (
          <div key={i}>
            <NavItem icon={item.icon} to={item.src}>
              {item.name}
            </NavItem>
          </div>
        ))}
      </Container>
    </div>
  );
}

const NavItem = ({ children, icon, to }) => {
  let match = useMatch(to);
  return (
    <Link to={to}>
      <Flex
        p="2"
        m="2"
        borderRadius="md"
        role="group"
        cursor="pointer"
        color={match ? "white" : "black"}
        bgColor={match && "#33945F"}
        fontWeight="650"
        _hover={{
          bgColor: "#33945F",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            as={icon}
            color={match && "white#33945F"}
            m="3px 10px 3px 0px"
          />
        )}
        <Text>{children && children}</Text>
      </Flex>
    </Link>
  );
};

export { Sidebar };
