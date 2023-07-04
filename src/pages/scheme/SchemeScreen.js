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
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  Icon,
  Input,
  FormControl,
  FormLabel,
  Flex,
  VStack,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { Header } from "../layout/header";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../component/table";
import {
  FiArchive,
  FiCheck,
  FiPlus,
  FiCheckCircle,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Styles = styled.div`
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
      :nth-child(2) {
      }
      :nth-child(3) {
        width: 10%;
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
      :nth-child(3) {
        font-weight: bold;
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

function SchemeScreen() {
  // const [data, setData] = useState();
  const addScheme = useDisclosure();
  const editScheme = useDisclosure();
  const deleteScheme = useDisclosure();
  const successModal = useDisclosure();
  const navigate = useNavigate();

  const navSchemeDetails = (value) => {
    console.log(value);
    navigate("./details", {
      replace: false,
      state: { name: value },
    });
  };

  const data = [
    { name: "Consumer Good", version: "1.0.0" },
    { name: "Cosmetic", version: "1.0.0" },
  ];

  const columns = [
    {
      header: "No",
      id: "rows",
      cell: ({ row }) => (
        <>
          <Text>{parseInt(row.id) + 1}</Text>
        </>
      ),
    },
    {
      accessorKey: "name",
      header: "Scheme Name",
      cell: (cell) => (
        <>
          <Text
            style={{ cursor: "pointer" }}
            _hover={{ textDecoration: "underline" }}
            color="#0072B1"
            fontWeight="bold"
            onClick={() => {
              navSchemeDetails(cell.getValue(cell.column.id));
            }}
          >
            {cell.getValue(cell.column.id)}
          </Text>
        </>
      ),
    },
    {
      accessorKey: "version",
      header: "Version",
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
              color="#2E8756"
              icon={<FiEdit />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {
                editScheme.onOpen();
              }}
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
              onClick={() => {
                deleteScheme.onOpen();
              }}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (input) => {
    // setData(input.schemeName);
    if (addScheme.isOpen) {
      addScheme.onClose();
    } else if (editScheme.isOpen) {
      editScheme.onClose();
    }
  };

  return (
    <>
      <Header title="Scheme" />
      <Container maxW="100vw" maxH="100%">
        <Box p="0px 40px">
          <Flex justify="flex-end">
            <Button
              bgColor="#33945F"
              color="white"
              w="25%"
              onClick={() => {
                addScheme.onOpen();
              }}
            >
              <Icon as={FiPlus} />
              &nbsp;Add Scheme
            </Button>
          </Flex>
          {data ? (
            <Box
              borderWidth="2px"
              borderColor="#2E8756"
              borderRadius="10px"
              mt="30px"
            >
              <Styles>
                <div>
                  <CustomTable data={data} columns={columns} />
                </div>
              </Styles>
            </Box>
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
                    You do not have any scheme information.
                  </Text>
                </CardBody>
              </Card>
            </Box>
          )}
        </Box>
      </Container>

      {/* ------------------------------------start add modal---------------------------------------- */}
      <Modal
        isCentered
        size="lg"
        isOpen={addScheme.isOpen}
        onClose={addScheme.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid grey">
            <HStack>
              <Icon as={FiArchive} />
              <Text>Add Scheme</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody my="30px">
              <FormControl>
                <FormLabel fontWeight={"bold"} fontSize="13px">
                  SCHEME NAME
                </FormLabel>
                <Input autoFocus {...register("schemeName")} />
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
                &nbsp;Add
              </Button>
              <Button
                mx="15px"
                width="100%"
                onClick={() => {
                  reset();
                  addScheme.onClose();
                }}
              >
                <Icon as={VscChromeClose} />
                &nbsp;Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      {/* ------------------------------------end add modal---------------------------------------- */}

      {/* ------------------------------------start edit modal---------------------------------------- */}
      <Modal
        isCentered
        size="lg"
        isOpen={editScheme.isOpen}
        onClose={editScheme.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid grey">
            <HStack>
              <Icon as={FiArchive} />
              <Text>Edit Scheme</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody my="30px">
              <FormControl>
                <FormLabel fontWeight={"bold"} fontSize="13px">
                  SCHEME NAME
                </FormLabel>
                <Input autoFocus {...register("schemeName")} />
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
                  reset();
                  editScheme.onClose();
                }}
              >
                <Icon as={VscChromeClose} />
                &nbsp;Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      {/* ------------------------------------end edit modal---------------------------------------- */}
    </>
  );
}

export { SchemeScreen };
