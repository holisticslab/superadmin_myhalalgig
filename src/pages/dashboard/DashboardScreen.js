import React from "react";
import { Header } from "../layout/header";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function DashboardScreen() {
  return (
    <>
      <Header title="Dashboard" />
      <Container maxW="100vw" maxH="100%">
        <Grid p="0px 40px" templateColumns="repeat(3, 1fr)" gap={20}>
          <GridItem>
            <Card
              borderWidth="1px"
              bgColor="#E6F1F7"
              borderColor="#0072B1"
              boxShadow="md"
            >
              <CardBody textAlign="center">
                <Text fontSize="24px" fontWeight="bold">
                  Scheme
                </Text>
                <Text color="#0072B1" fontSize="80px">
                  58
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              borderWidth="1px"
              bgColor="#E6F1F7"
              borderColor="#0072B1"
              boxShadow="md"
            >
              <CardBody textAlign="center">
                <Text fontSize="24px" fontWeight="bold">
                  Company
                </Text>
                <Text color="#0072B1" fontSize="80px">
                  257
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              borderWidth="1px"
              bgColor="#E6F1F7"
              borderColor="#0072B1"
              boxShadow="md"
            >
              <CardBody textAlign="center">
                <Text fontSize="24px" fontWeight="bold">
                  Subscription
                </Text>
                <Text color="#0072B1" fontSize="80px">
                  12
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
        <Card
          m="80px 40px"
          p="20px"
          borderWidth="1px"
          bgColor="#E6F1F7"
          borderColor="#0072B1"
          boxShadow="md"
        >
          <CardHeader>
            <Text fontWeight="bold" fontSize="24px">
              No information
            </Text>
          </CardHeader>
          <CardBody>
            <Text color="#0072B1">You do not have any scheme information.</Text>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export { DashboardScreen };
