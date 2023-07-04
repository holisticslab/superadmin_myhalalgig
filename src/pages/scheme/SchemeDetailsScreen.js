import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  IconButton,
  HStack,
  VStack,
  Icon,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
  Center,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Header } from "../layout/header";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiChevronLeft,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiEye,
  FiArchive,
  FiCheck,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";
import { VscChromeClose, VscFilePdf } from "react-icons/vsc";
import { AiOutlineFileImage } from "react-icons/ai";
import { CustomTable } from "../../component/table";
import styled from "styled-components";

const StylesVersion = styled.div`
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
        width: 10%;
        border-top-left-radius: 10px;
      }
      :last-child {
        width: 25%;
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

const StylesChecklist = styled.div`
  padding-y: 1rem;

  table {
    min-width: 100%;
    border-spacing: 0;
    text-align: center;

    th {
      height: 40px;
      font-weight: bold;
      background-color: #a1ceb5;
      :nth-child(1) {
        width: 5%;
        border-top-left-radius: 10px;
      }
      :nth-child(2) {
        width: 45%;
      }
      :nth-child(3) {
        width: 30%;
      }
      :last-child {
        width: 20%;
        border-top-right-radius: 10px;
      }
    }

    td {
      padding: 7px 20px;
      height: 40px;
      :nth-child(2) {
        text-align: left;
        font-weight: bold;
      }
      :nth-child(3) {
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

function SchemeDetailsScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const title = `Scheme / ${state.name}`;
  const addCLmodal = useDisclosure();
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(false);
  const [version, setVersion] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formInput) => {
    if (addCLmodal.isOpen) {
      addCLmodal.onClose();
    }
  };

  const dummyData = [
    {
      version: "1.0.0",
      date: "07 November 2017, 2:52 AM",
    },
    {
      version: "1.0.1",
      date: "11 November 2017, 8:03 AM",
    },
  ];

  const dummyData2 = [
    {
      item: "Employee Appointment Letter",
      date: "27 September 2023 8:25 AM",
    },
    {
      item: "Employee Information Records",
      date: "27 September 2023 8:25 AM",
    },
    {
      item: "Employee Appointment Letter",
      date: "27 September 2023 8:25 AM",
    },
    {
      item: "Employee Information Records",
      date: "27 September 2023 8:25 AM",
    },
  ];

  const columnsVersion = [
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
      accessorFn: (data) => {
        return data;
      },
      header: "Version",
      cell: ({ cell }) => (
        <>
          <Text
            fontWeight="bold"
            style={{ cursor: "pointer" }}
            _hover={{ textDecoration: "underline" }}
            onClick={() => {
              setSelected(true);
              setVersion(cell.getValue(cell.column.id).version);
            }}
          >
            {cell.getValue(cell.column.id).version}
          </Text>
          <Text color="grey">{cell.getValue(cell.column.id).date}</Text>
        </>
      ),
    },
    {
      header: "Action",
      cell: () => (
        <>
          <IconButton
            icon={<FiEye />}
            variant="ghost"
            _hover={{ bgColor: "transparent" }}
            onClick={() => {}}
          />
          <IconButton
            color="#2E8756"
            icon={<FiEdit />}
            variant="ghost"
            _hover={{ bgColor: "transparent" }}
            onClick={() => {}}
          />
          <IconButton
            color="red"
            icon={<FiTrash2 />}
            variant="ghost"
            _hover={{ bgColor: "transparent" }}
            onClick={() => {}}
          />
        </>
      ),
    },
  ];

  const columnsChecklist = [
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
      header: "Checklist's Item",
      accessorKey: "item",
    },
    {
      header: "Uploaded",
      accessorKey: "date",
      cell: (cell) => <Text color="grey">{cell.getValue(cell.row.id)}</Text>,
    },
    {
      header: "Action",
      cell: () => (
        <>
          <IconButton
            color="#2E8756"
            icon={<FiEdit />}
            variant="ghost"
            _hover={{ bgColor: "transparent" }}
            onClick={() => {}}
          />
          <IconButton
            color="red"
            icon={<FiTrash2 />}
            variant="ghost"
            _hover={{ bgColor: "transparent" }}
            onClick={() => {}}
          />
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
              onClick={() => navigate("/scheme", { replace: false })}
            />
            <Box borderBottom="1px" width="100%" ml="30px" p="0px 10px">
              <Flex>
                <Text fontSize="30px" fontWeight="bold">
                  {state.name}
                </Text>
                <Spacer />
                <IconButton
                  color="#33945F"
                  icon={<FiEdit2 />}
                  fontSize="30px"
                  variant="ghost"
                  _hover={{ bgColor: "transparent" }}
                />
              </Flex>
            </Box>
          </HStack>
        </Box>
        <Box p="30px 40px 0px 40px">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem w="100%" p="10px">
              <Flex>
                <Text fontSize="30px" color="#33945F" fontWeight="bold">
                  Version
                </Text>
                <Spacer />
                <Button
                  h="50px"
                  w="50%"
                  bgColor="#33945F"
                  color="white"
                  onClick={() => {}}
                >
                  <Icon as={FiPlus} />
                  &nbsp;Add Version
                </Button>
              </Flex>
              <Box
                borderWidth="2px"
                borderColor="#2E8756"
                borderRadius="10px"
                mt="30px"
              >
                <StylesVersion>
                  <CustomTable data={dummyData} columns={columnsVersion} />
                </StylesVersion>
              </Box>
            </GridItem>
            {selected && (
              <GridItem w="100%" p="10px">
                <Flex>
                  <Text
                    fontSize="30px"
                    color="#33945F"
                    fontWeight="bold"
                    onClick={() => {
                      if (show) {
                        setShow(false);
                      } else {
                        setShow(true);
                      }
                    }}
                  >
                    <span style={{ color: "black", fontSize: "20px" }}>
                      Version {version}
                      {" >"}
                    </span>{" "}
                    Checklist
                  </Text>
                  <Spacer />
                  <Button
                    h="50px"
                    w="50%"
                    bgColor="#33945F"
                    color="white"
                    onClick={() => {
                      addCLmodal.onOpen();
                    }}
                  >
                    <Icon as={FiPlus} />
                    &nbsp;Add Checklist
                  </Button>
                </Flex>
                {show ? (
                  <Box
                    borderWidth="2px"
                    borderColor="#2E8756"
                    borderRadius="10px"
                    mt="30px"
                  >
                    <StylesChecklist>
                      <div>
                        <CustomTable
                          data={dummyData2}
                          columns={columnsChecklist}
                        />
                      </div>
                    </StylesChecklist>
                  </Box>
                ) : (
                  <Box
                    mt="30px"
                    p="30px"
                    borderWidth="1px"
                    borderRadius="8px"
                    borderColor="#33945F"
                    overflow="auto"
                    maxH="100vh"
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
                          You do not have any checklist information.
                        </Text>
                      </CardBody>
                    </Card>
                  </Box>
                )}
              </GridItem>
            )}
          </Grid>
        </Box>
      </Container>

      {/* -----------------------------------------------start add checklist modal--------------------------------- */}
      <Modal size="xl" isOpen={addCLmodal.isOpen} onClose={addCLmodal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader borderBottom="1px solid grey">
              <HStack>
                <Icon as={FiArchive} />
                <Text>Add Checklist</Text>
              </HStack>
            </ModalHeader>

            <ModalBody>
              <FormControl padding="20px 10px">
                <FormLabel fontSize="13px" fontWeight="bold">
                  CHECKLIST'S NAME
                </FormLabel>
                <Input placeholder="checklist name" />
              </FormControl>
              <FormControl padding="20px 10px">
                <FormLabel fontSize="13px" fontWeight="bold">
                  UPLOAD FOLDER
                </FormLabel>
                <Box padding="5px" borderWidth="1px" borderRadius="10px">
                  <input
                    type="file"
                    multiple
                    directory=""
                    mozdirectory=""
                    webkitdirectory=""
                  />
                </Box>
                <Text fontSize="15px" textAlign="center" my="20px">
                  OR
                </Text>
                <FormLabel fontSize="13px" fontWeight="bold">
                  UPLOAD FILE
                </FormLabel>
                <Box
                  borderStyle="dashed"
                  borderWidth="2px"
                  borderRadius="10px"
                  p="50px 20px"
                >
                  <Center>
                    <Icon as={AiOutlineFileImage} boxSize={10} />
                    <Icon as={FiFileText} boxSize={10} />
                    <Icon as={VscFilePdf} boxSize={10} />
                  </Center>
                </Box>
                <Box
                  padding="5px"
                  borderWidth="1px"
                  borderRadius="10px"
                  mt="10px"
                >
                  <input type="file" multiple />
                </Box>
              </FormControl>

              {/* <FormControl padding="20px 10px">
                <FormLabel fontSize="13px" fontWeight="bold">
                  PLEASE UPLOAD THE TEMPLATE
                </FormLabel>
                <Box padding="10px">
                  <HStack>
                    <Text fontSize="13px">Type of upload: </Text>
                    <Select
                      w="50%"
                      size="sm"
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                    >
                      <option value="single">Single file</option>
                      <option value="multi">Multi file</option>
                      <option value="folder">Folder</option>
                    </Select>
                  </HStack>
                </Box>
                <HStack>
                  <Box padding="5px" borderWidth="1px" borderRadius="10px">
                    {inputType === "single" ? (
                      <input type="file" />
                    ) : inputType === "multi" ? (
                      <input type="file" multiple />
                    ) : (
                      <input
                        type="file"
                        multiple
                        directory=""
                        mozdirectory=""
                        webkitdirectory=""
                      />
                    )}
                  </Box>
                  <Button
                    w="100%"
                    variant="ghost"
                    color="#509FCA"
                    borderColor="#509FCA"
                    borderWidth="1px"
                  >
                    Upload
                  </Button>
                </HStack>
              </FormControl> */}
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
                  addCLmodal.onClose();
                }}
              >
                <Icon as={VscChromeClose} />
                &nbsp;Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      {/* -----------------------------------------------end add checklist modal--------------------------------- */}
    </>
  );
}

export { SchemeDetailsScreen };
