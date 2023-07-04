import React from "react";
import { Header } from "../layout/header";
import {
  Container,
  Box,
  HStack,
  IconButton,
  Text,
  Card,
  CardBody,
  Grid,
  GridItem,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  Icon,
  Flex,
  Spacer,
  Button,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiChevronLeft,
  FiFileText,
  FiPlus,
  FiTrash2,
  FiEdit,
} from "react-icons/fi";
import styled from "styled-components";
import { CustomTable } from "../../component/table";

const Styles = styled.div`
  padding-y: 1rem;

  table {
    min-width: 100%;
    border-spacing: 0;
    text-align: center;
    font-weight: bold;

    th {
      height: 40px;
      font-weight: bold;
      background-color: #ebf4ef;
      :nth-child(1) {
        width: 5%;
        border-top-left-radius: 10px;
      }
      :last-child {
        width: 10%;
        border-top-right-radius: 10px;
      }
    }

    td {
      padding: 7px 20px;
      height: 40px;
      :nth-child(2) {
        text-align: left;
      }
    }

    tr {
      border-bottom: 1px solid;
      :last-child {
        border-bottom: none;
      }
    }
  }
`;

function SubscriptionDetailsScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const title = `Subscription / ${state.info.compName}`;

  const dummyUser = [
    {
      name: "Mohamad Rahmat bin Harun",
      loginid: "rahmat",
      lastLogin: "24 May 2023, 10:45:12",
    },
    {
      name: "Farah Dalila binti Rodzuan",
      loginid: "farah",
      lastLogin: "04 March 2021, 10:37:01",
    },
    {
      name: "Dr Harisun Binti Ya'akop",
      loginid: "harisun",
      lastLogin: "",
    },
    {
      name: "Dr Razauden Bin Mohamed Zulfifli",
      loginid: "razauden",
      lastLogin: "",
    },
  ];

  const columnsUser = [
    {
      header: "No",
      id: "rows",
      cell: ({ row }) => (
        <>
          <Text fontWeight="bold">{parseInt(row.id) + 1}</Text>
        </>
      ),
    },
    {
      header: "User",
      accessorKey: "name",
    },
    {
      header: "Login ID",
      accessorKey: "loginid",
    },
    {
      header: "Last Login",
      accessorKey: "lastLogin",
    },
    {
      header: "Actions",
      cell: () => (
        <>
          <Tooltip
            hasArrow
            placement="top"
            gutter={2}
            label="Edit"
            fontSize="md"
          >
            <IconButton
              color="#33945F"
              icon={<FiEdit />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {}}
            />
          </Tooltip>
          <Tooltip
            hasArrow
            placement="top"
            gutter={2}
            label="Delete"
            fontSize="md"
          >
            <IconButton
              color="red"
              icon={<FiTrash2 />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {}}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const dummyPremise = [
    {
      name: "HQ",
      address:
        "B-GF-05, 6, Jln Medini Sentral 5, Medini, 79250 Iskandar Puteri, Johor",
    },
    {
      name: "Training Room",
      address:
        "C, Aras 5 Block S45, Universiti Teknologi Malaysia (UTM), 81310 Johor Bahru, Johor",
    },
    {
      name: "Growth Well Industry Sdn Bhd",
      address: "1, Jalan Seroja 53, Johor Jaya, 81100 Johor Bahru, Johor",
    },
    {
      name: "Grand Dorsett Labuan Hotel",
      address: "462, Jalan Merdeka, 87029 Wilayah Persekutuan Labuan",
    },
  ];

  const columnsPremise = [
    {
      header: "No",
      id: "rows",
      cell: ({ row }) => (
        <>
          <Text fontWeight="bold">{parseInt(row.id) + 1}</Text>
        </>
      ),
    },
    {
      header: "Premise Name",
      accessorFn: (data) => {
        return data;
      },
      cell: ({ cell }) => (
        <>
          <Text>{cell.getValue(cell.column.id).name}</Text>
          <Text fontSize="14px" color="#959BA3">
            {cell.getValue(cell.column.id).address}
          </Text>
        </>
      ),
    },
    {
      header: "Actions",
      cell: () => (
        <>
          <Tooltip
            hasArrow
            placement="top"
            gutter={2}
            label="Edit"
            fontSize="md"
          >
            <IconButton
              color="#33945F"
              icon={<FiEdit />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {}}
            />
          </Tooltip>
          <Tooltip
            hasArrow
            placement="top"
            gutter={2}
            label="Delete"
            fontSize="md"
          >
            <IconButton
              color="red"
              icon={<FiTrash2 />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {}}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const dummyScheme = [
    {
      file: "File Has",
      name: "Barang Gunaan",
    },
    {
      file: "File Has",
      name: "Consumer GoodS",
    },
    {
      file: "File Has",
      name: "Cosmetic",
    },
    {
      file: "File Has",
      name: "Farmaseutikal",
    },
  ];

  const columnsScheme = [
    {
      header: "No",
      id: "rows",
      cell: ({ row }) => (
        <>
          <Text fontWeight="bold">{parseInt(row.id) + 1}</Text>
        </>
      ),
    },
    {
      header: "File",
      accessorKey: "file",
    },
    {
      header: "Scheme Name",
      accessorKey: "name",
    },
    {
      header: "Actions",
      cell: () => (
        <>
          <Tooltip
            hasArrow
            placement="top"
            gutter={2}
            label="Delete"
            fontSize="md"
          >
            <IconButton
              color="red"
              icon={<FiTrash2 />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {}}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const dummySubsGroup = [
    {
      name: "Subscription Name",
      recipients: "Lincoln Philips",
      role: "Admin",
      accessibility: "Can Edit",
    },
    {
      name: "Subscription Name",
      recipients: "Cooper Kenter",
      role: "Account Manager",
      accessibility: "Can View",
    },
    {
      name: "Subscription Name",
      recipients: "Ann Baprista",
      role: "Halal Executive",
      accessibility: "Can View",
    },
    {
      name: "Subscription Name",
      recipients: "Cristofer Press",
      role: "Admin",
      accessibility: "Can Edit",
    },
  ];

  const columnsSubsGroup = [
    {
      header: "No",
      id: "rows",
      cell: ({ row }) => (
        <>
          <Text fontWeight="bold">{parseInt(row.id) + 1}</Text>
        </>
      ),
    },
    {
      header: "Group Name",
      accessorKey: "name",
    },
    {
      header: "Recipients",
      accessorKey: "recipients",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Accessibility",
      accessorKey: "accessibility",
    },
    {
      header: "Actions",
      cell: () => (
        <>
          <Tooltip
            hasArrow
            placement="top"
            gutter={2}
            label="Edit"
            fontSize="md"
          >
            <IconButton
              color="#33945F"
              icon={<FiEdit />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {}}
            />
          </Tooltip>
          <Tooltip
            hasArrow
            placement="top"
            gutter={2}
            label="Delete"
            fontSize="md"
          >
            <IconButton
              color="red"
              icon={<FiTrash2 />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {}}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <Header title={title} color="#959BA3" />
      <Container maxW="100vw" maxH="100vh">
        <Box p="0px 40px">
          <HStack>
            <IconButton
              icon={<FiChevronLeft />}
              fontSize="40px"
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => navigate("/subscription", { replace: false })}
            />
            <Text fontSize="30px" fontWeight="bold" ml="40px">
              {state.info.compName}
            </Text>
          </HStack>
        </Box>
        <Box
          m="20px 40px"
          p="20px 30px"
          h="auto"
          borderWidth="2px"
          borderTopWidth="5px"
          borderRadius="10px"
          borderColor="#33945F"
        >
          <Text color="#33945F" fontSize="30px" fontWeight="bold">
            Subscription Package
          </Text>
          <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5px">
            <GridItem colSpan={2}>
              <Card borderWidth="0px" bgColor="transparent" boxShadow="none">
                <CardBody textAlign="center">
                  <Text>SUBSCRIPTION PERIOD</Text>
                  <Text fontWeight="bold" mt="20px">
                    {state.info.startDate} - {state.info.endDate}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card borderWidth="0px" bgColor="transparent" boxShadow="none">
                <CardBody textAlign="center">
                  <Text>NUMBER OF USER</Text>
                  <Text fontWeight="bold" mt="20px">
                    {state.info.noUser}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card borderWidth="0px" bgColor="transparent" boxShadow="none">
                <CardBody textAlign="center">
                  <Text>NUMBER OF PREMISE</Text>
                  <Text fontWeight="bold" mt="20px">
                    {state.info.noPremise}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card borderWidth="0px" bgColor="transparent" boxShadow="none">
                <CardBody textAlign="center">
                  <Text>NUMBER OF SCHEME</Text>
                  <Text fontWeight="bold" mt="20px">
                    {state.info.noScheme}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Box>
        <Box m="20px 40px">
          <Tabs variant="unstyled" isFitted>
            <TabList>
              <Tab
                p="20px"
                fontSize="18px"
                fontWeight="700"
                width="200px"
                borderBottom="2px"
                borderColor="#33945F"
                _selected={{
                  color: "#33945F",
                  borderWidth: "2px",
                  borderTopRadius: "10px",
                  borderBottom: "none",
                  borderColor: "#33945F",
                }}
              >
                <Icon as={FiFileText} />
                User
              </Tab>
              <Tab
                p="20px"
                fontSize="18px"
                fontWeight="700"
                width="200px"
                borderBottom="2px"
                borderColor="#33945F"
                _selected={{
                  color: "#33945F",
                  borderWidth: "2px",
                  borderTopRadius: "10px",
                  borderBottom: "none",
                  borderColor: "#33945F",
                }}
              >
                <Icon as={FiFileText} />
                Premise
              </Tab>
              <Tab
                p="20px"
                fontSize="18px"
                fontWeight="700"
                width="200px"
                borderBottom="2px"
                borderColor="#33945F"
                _selected={{
                  color: "#33945F",
                  borderWidth: "2px",
                  borderTopRadius: "10px",
                  borderBottom: "none",
                  borderColor: "#33945F",
                }}
              >
                <Icon as={FiFileText} />
                Scheme
              </Tab>
              <Tab
                p="20px"
                fontSize="18px"
                fontWeight="700"
                width="200px"
                borderBottom="2px"
                borderColor="#33945F"
                _selected={{
                  color: "#33945F",
                  borderWidth: "2px",
                  borderTopRadius: "10px",
                  borderBottom: "none",
                  borderColor: "#33945F",
                }}
              >
                <Icon as={FiFileText} />
                Subscription Group
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel
                overflowY="auto"
                borderWidth="2px"
                borderColor="#33945F"
                borderTop="none"
                borderBottomRadius="10px"
              >
                <Box mx="10px">
                  <Flex align="center">
                    <Text fontSize="25px" color="#33945F" fontWeight="bold">
                      User
                    </Text>
                    <Spacer />
                    <Button
                      w="30%"
                      variant="ghost"
                      borderWidth="1px"
                      borderColor="#33945F"
                      color="#33945F"
                      fontWeight="bold"
                    >
                      <FiPlus color="#33945F" />
                      &nbsp; Add User
                    </Button>
                  </Flex>
                </Box>
                <Box
                  borderWidth="2px"
                  borderColor="#2E8756"
                  borderRadius="10px"
                  mt="30px"
                >
                  <Styles>
                    <CustomTable data={dummyUser} columns={columnsUser} />
                  </Styles>
                </Box>
              </TabPanel>
              <TabPanel
                overflowY="auto"
                borderWidth="2px"
                borderColor="#33945F"
                borderTop="none"
                borderBottomRadius="10px"
              >
                <Box mx="10px">
                  <Flex align="center">
                    <Text fontSize="25px" color="#33945F" fontWeight="bold">
                      Premise
                    </Text>
                    <Spacer />
                    <Button
                      w="30%"
                      variant="ghost"
                      borderWidth="1px"
                      borderColor="#33945F"
                      color="#33945F"
                      fontWeight="bold"
                    >
                      <FiPlus color="#33945F" />
                      &nbsp; Add Premise
                    </Button>
                  </Flex>
                </Box>
                <Box
                  borderWidth="2px"
                  borderColor="#2E8756"
                  borderRadius="10px"
                  mt="30px"
                >
                  <Styles>
                    <CustomTable data={dummyPremise} columns={columnsPremise} />
                  </Styles>
                </Box>
              </TabPanel>
              <TabPanel
                overflowY="auto"
                borderWidth="2px"
                borderColor="#33945F"
                borderTop="none"
                borderBottomRadius="10px"
              >
                <Box mx="10px">
                  <Flex align="center">
                    <Text fontSize="25px" color="#33945F" fontWeight="bold">
                      Scheme
                    </Text>
                    <Spacer />
                    <Button
                      w="30%"
                      variant="ghost"
                      borderWidth="1px"
                      borderColor="#33945F"
                      color="#33945F"
                      fontWeight="bold"
                    >
                      <FiPlus color="#33945F" />
                      &nbsp; Assign Scheme
                    </Button>
                  </Flex>
                </Box>
                <Box
                  borderWidth="2px"
                  borderColor="#2E8756"
                  borderRadius="10px"
                  mt="30px"
                >
                  <Styles>
                    <CustomTable data={dummyScheme} columns={columnsScheme} />
                  </Styles>
                </Box>
              </TabPanel>
              <TabPanel
                overflowY="auto"
                borderWidth="2px"
                borderColor="#33945F"
                borderTop="none"
                borderBottomRadius="10px"
              >
                <Box mx="10px">
                  <Flex align="center">
                    <Text fontSize="25px" color="#33945F" fontWeight="bold">
                      Subscription Group
                    </Text>
                    <Spacer />
                    <Button
                      w="30%"
                      variant="ghost"
                      borderWidth="1px"
                      borderColor="#33945F"
                      color="#33945F"
                      fontWeight="bold"
                    >
                      <FiPlus color="#33945F" />
                      &nbsp; Add Subscription
                    </Button>
                  </Flex>
                </Box>
                <Box
                  borderWidth="2px"
                  borderColor="#2E8756"
                  borderRadius="10px"
                  mt="30px"
                >
                  <Styles>
                    <CustomTable
                      data={dummySubsGroup}
                      columns={columnsSubsGroup}
                    />
                  </Styles>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
}

export { SubscriptionDetailsScreen };
