import React, { useState } from "react";
import {
  Button,
  Container,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  useDisclosure,
  Icon,
  Flex,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { Header } from "../layout/header";
import { FiPlus, FiArchive, FiCheck, FiTrash2 } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import styled from "styled-components";
import { CustomTable } from "../../component/table";
import { useNavigate } from "react-router-dom";

const StylesCompany = styled.div`
  padding-y: 1rem;

  table {
    min-width: 100%;
    border-spacing: 0;
    text-align: center;

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
    }

    tr {
      border-bottom: 1px solid;
      :last-child {
        border-bottom: none;
      }
    }
  }
`;

function CompanyScreen() {
  const [data, setData] = useState();
  const addCompany = useDisclosure();
  const deleteCompany = useDisclosure();
  const navigate = useNavigate();

  const navCompanyDetails = (value) => {
    console.log(value);
    navigate("./details", {
      replace: false,
      state: { name: value.name, address: value.address },
    });
  };

  const dummyData = [
    {
      name: "Halal Certification Bodies",
      address: "Sama sama Hotel KLIA, Sepang Malaysia",
    },
    {
      name: "Holistics Lab Sdn Bhd",
      address: "S45, Universiti Teknologi Malaysia, Johor",
    },
    {
      name: "Professional Certificate in Halal Exec",
      address: "Aras 2, Block S45, Universiti Teknologi Malaysia (UTM)",
    },
    {
      name: "Jabatan Hal Ehwal Agama Islam Negeri",
      address: "Medini 18",
    },
  ];

  const columnsCompany = [
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
      accessorFn: (data) => {
        return data;
      },
      header: "Company Name",
      cell: ({ cell }) => (
        <>
          <Text
            fontWeight="bold"
            style={{ cursor: "pointer" }}
            _hover={{ textDecoration: "underline" }}
            color="#0072B1"
            onClick={() => {
              navCompanyDetails(cell.getValue(cell.column.id));
            }}
          >
            {cell.getValue(cell.column.id).name}
          </Text>
          <Text color="#959BA3">{cell.getValue(cell.column.id).address}</Text>
        </>
      ),
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
                deleteCompany.onOpen();
              }}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <Header title="Company" />
      <Container maxW="100vw" maxH="100%">
        <Box p="0px 40px">
          <Flex justify="flex-end">
            <Button
              bgColor="#33945F"
              color="white"
              w="25%"
              onClick={addCompany.onOpen}
            >
              <Icon as={FiPlus} />
              &nbsp;Add Company
            </Button>
          </Flex>
          {dummyData ? (
            <>
              <Box
                borderWidth="2px"
                borderColor="#2E8756"
                borderRadius="10px"
                mt="30px"
              >
                <StylesCompany>
                  <CustomTable data={dummyData} columns={columnsCompany} />
                </StylesCompany>
              </Box>
            </>
          ) : (
            <Box
              mt="30px"
              p="30px"
              borderWidth="1px"
              borderRadius="8px"
              borderColor="#33945F"
              overflow="auto"
              height="650px"
            >
              <Card
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
                  <Text color="#0072B1">
                    You do not have any company information.
                  </Text>
                </CardBody>
              </Card>
            </Box>
          )}
        </Box>
      </Container>

      {/* --------------------------------------------------------------start add company-------------------------------------------- */}
      <Modal size="xl" isOpen={addCompany.isOpen} onClose={addCompany.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid grey">
            <HStack>
              <Icon as={FiArchive} />
              <Text>Add Company</Text>
            </HStack>
          </ModalHeader>

          <ModalBody>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                COMPANY NAME
              </FormLabel>
              <Input placeholder="Company name" />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                COMPANY ADDRESS
              </FormLabel>
              <Textarea placeholder="Company address" />{" "}
            </FormControl>
          </ModalBody>

          <ModalFooter my="30px">
            <Button
              type="submit"
              mx="10px"
              width="100%"
              bgColor="#33945F"
              color="white"
              _hover={{ bgColor: "green" }}
            >
              <Icon as={FiCheck} />
              &nbsp;Add
            </Button>
            <Button
              mx="10px"
              width="100%"
              onClick={() => {
                addCompany.onClose();
              }}
            >
              <Icon as={VscChromeClose} />
              &nbsp;Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* --------------------------------------------------------------end add company---------------------------------------------- */}
    </>
  );
}

export { CompanyScreen };
