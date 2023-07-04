import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";

function Layout() {
  return (
    <Grid
      templateAreas={`"nav main" 
                      "nav footer"`}
      // gridTemplateRows={"100px 1fr 50px"}
      gridTemplateRows={"1fr 50px"}
      gridTemplateColumns={"250px 1fr"}
      w="100%"
      minH="100vh"
    >
      <GridItem area={"nav"} colSpan="1" boxShadow="lg">
        <Sidebar />
      </GridItem>
      {/* <GridItem area={"header"} colSpan="1">
        <Header />
      </GridItem> */}
      <GridItem
        area={"main"}
        colSpan={9}
        ml="0"
        // pb="3%"
        zIndex="1"
        style={{ transition: "0.3s ease" }}
      >
        <Outlet />
      </GridItem>
      <GridItem
        colSpan={9}
        ml="0"
        area={"footer"}
        zIndex="1"
        style={{ transition: "0.3s ease" }}
        bgColor={`rgba(235, 244, 239, 0.5)`}
      >
        <Footer />
      </GridItem>
    </Grid>
  );
}

export { Layout };
