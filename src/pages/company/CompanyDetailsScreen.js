import React from "react";
import { Header } from "../layout/header";
import {
  Container,
  Box,
  HStack,
  IconButton,
  Flex,
  Text,
  Spacer,
  Center,
  Image,
  Grid,
  GridItem,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiEdit2,
  FiChevronLeft,
  FiTrash2,
  FiArchive,
  FiCheck,
} from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { CustomTable } from "../../component/table";
import styled from "styled-components";

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
        width: 5%;
        border-top-right-radius: 10px;
      }
    }

    td {
      padding: 7px 20px;
      height: 40px;
      :nth-child(2) {
        text-align: left;
      }
      :nth-child(5) {
        width: 9%;
      }
      :nth-child(6) {
        width: 9%;
      }
      :nth-child(7) {
        width: 9%;
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

function CompanyDetailsScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const title = `Company / ${state.name}`;
  const editCompany = useDisclosure();
  const deleteCompDetails = useDisclosure();

  const dummyData = [
    {
      subsName: "MyHalalGig (Premium)",
      startDate: "07 November 2023",
      endDate: "07 November 2025",
      noUser: 40,
      noPremise: 4,
      noScheme: 4,
    },
    {
      subsName: "MyHalalGig (Basic)",
      startDate: "07 November 2020",
      endDate: "07 November 2022",
      noUser: 24,
      noPremise: 45,
      noScheme: 7,
    },
    {
      subsName: "MyHalalGig (Plus)",
      startDate: "07 November 2017",
      endDate: "07 November 2019",
      noUser: 8,
      noPremise: 1,
      noScheme: 9,
    },
    {
      subsName: "MyHalalGig (Premium)",
      startDate: "07 November 2023",
      endDate: "07 November 2025",
      noUser: 40,
      noPremise: 4,
      noScheme: 4,
    },
    {
      subsName: "MyHalalGig (Basic)",
      startDate: "07 November 2020",
      endDate: "07 November 2022",
      noUser: 24,
      noPremise: 45,
      noScheme: 7,
    },
    {
      subsName: "MyHalalGig (Plus)",
      startDate: "07 November 2017",
      endDate: "07 November 2019",
      noUser: 8,
      noPremise: 1,
      noScheme: 9,
    },
  ];

  const columns = [
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
      header: "Subscription Name",
      accessorKey: "subsName",
    },
    {
      header: "Date Start",
      accessorKey: "startDate",
    },
    {
      header: "Date End",
      accessorKey: "endDate",
    },
    {
      header: "No. User",
      accessorKey: "noUser",
    },
    {
      header: "No. Premise",
      accessorKey: "noPremise",
    },
    {
      header: "No. Scheme",
      accessorKey: "noScheme",
    },
    {
      header: "Action",
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
              onClick={() => {
                deleteCompDetails.onOpen();
              }}
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
              onClick={() => navigate("/company", { replace: false })}
            />
            <Text fontSize="30px" fontWeight="bold" ml="40px">
              {state.name}
            </Text>
          </HStack>
        </Box>
        <Box
          m="20px 40px"
          p="30px"
          borderWidth="2px"
          borderRadius="10px"
          borderColor="#33945F"
          overflowY="auto"
          h="700px"
        >
          <Box>
            <Flex>
              <Center>
                <Text color="#33945F" fontSize="20px" fontWeight="bold">
                  Details
                </Text>
              </Center>
              <Spacer />
              <IconButton
                color="#33945F"
                icon={<FiEdit2 />}
                fontSize="20px"
                variant="ghost"
                _hover={{ bgColor: "transparent" }}
                onClick={() => {
                  editCompany.onOpen();
                }}
              />
            </Flex>
          </Box>
          <Text fontWeight="bold" color="#959BA3" fontSize="20px">
            Logo
          </Text>
          <Box
            borderStyle="dotted"
            borderRadius="10px"
            borderWidth="2px"
            my="10px"
            h="150px"
          >
            <Center h="inherit">
              <Image
                src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
                h="inherit"
              />
            </Center>
          </Box>
          <Box mt="20px" h="150px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <Text fontWeight="bold" color="#959BA3" fontSize="20px">
                  Name
                </Text>
                <Text fontWeight="bold" fontSize="25px">
                  {state.name}
                </Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold" color="#959BA3" fontSize="20px">
                  Address
                </Text>
                <Text fontWeight="bold" fontSize="25px">
                  {state.address}
                </Text>
              </GridItem>
            </Grid>
          </Box>
          <Box mt="20px">
            <Text fontWeight="bold" color="#959BA3" fontSize="20px">
              Subscription History
            </Text>
            <Box
              borderWidth="2px"
              borderColor="#2E8756"
              borderRadius="10px"
              mt="30px"
            >
              <Styles>
                <CustomTable data={dummyData} columns={columns} />
              </Styles>
            </Box>
          </Box>
        </Box>
      </Container>

      <Modal
        size="xl"
        isOpen={editCompany.isOpen}
        onClose={editCompany.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid grey">
            <HStack>
              <Icon as={FiArchive} />
              <Text>Edit Company</Text>
            </HStack>
          </ModalHeader>

          <ModalBody>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                UPLOAD COMPANY LOGO
              </FormLabel>
              <Box borderWidth="1px" borderColor="black" my="10px" h="150px">
                <Center h="inherit">
                  <Image
                    src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
                    h="inherit"
                  />
                </Center>
              </Box>
              <input type="file" />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                COMPANY NAME
              </FormLabel>
              <Input defaultValue={state.name} />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                COMPANY ADDRESS
              </FormLabel>
              <Input defaultValue={state.address} />
            </FormControl>
          </ModalBody>

          <ModalFooter mb="30px">
            <Button
              type="submit"
              mx="15px"
              width="100%"
              bgColor="#33945F"
              color="white"
              _hover={{ bgColor: "green" }}
            >
              <Icon as={FiCheck} />
              &nbsp;Save
            </Button>
            <Button
              mx="15px"
              width="100%"
              onClick={() => {
                editCompany.onClose();
              }}
            >
              <Icon as={VscChromeClose} />
              &nbsp;Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { CompanyDetailsScreen };
