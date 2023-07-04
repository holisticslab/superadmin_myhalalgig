import React, { useState } from "react";
import { Header } from "../layout/header";
import {
  Container,
  Box,
  Card,
  CardHeader,
  CardBody,
  Text,
  Flex,
  Button,
  Icon,
  useDisclosure,
  Tooltip,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  HStack,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { FiPlus, FiTrash2, FiEdit, FiArchive, FiCheck } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { CustomTable } from "../../component/table";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

function SubscriptionScreen() {
  const addSubscription = useDisclosure();
  const editSubscription = useDisclosure();
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);

  const navSubsDetails = (value) => {
    console.log(value);
    navigate("./details", {
      replace: false,
      state: { info: value },
    });
  };

  const handleStorage = (value) => {
    setSliderValue(value);
  };

  const dummyData = [
    {
      compName: "Holistics Lab Sdn Bhd",
      startDate: "07 November 2017",
      endDate: "07 November 2017",
      noUser: 40,
      noPremise: 10,
      noScheme: 12,
      storage: "20GB",
    },
    {
      compName: "Fraser & Neave Holdings Sdn Bhd",
      startDate: "07 November 2017",
      endDate: "07 November 2017",
      noUser: 5,
      noPremise: 10,
      noScheme: 2,
      storage: "20GB",
    },
    {
      compName: "Jabatan Agama Islam Sarawak",
      startDate: "07 November 2017",
      endDate: "07 November 2017",
      noUser: 100,
      noPremise: 1000,
      noScheme: 20,
      storage: "20GB",
    },
    {
      compName: "QuikHalal Admin Company",
      startDate: "07 November 2017",
      endDate: "07 November 2017",
      noUser: 4,
      noPremise: 20,
      noScheme: 20,
      storage: "20GB",
    },
    {
      compName: "Consultation Holistics Lab",
      startDate: "07 November 2017",
      endDate: "07 November 2017",
      noUser: 5,
      noPremise: 100,
      noScheme: 10,
      storage: "20GB",
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
      header: "Company Name",
      accessorFn: (data) => {
        return data;
      },
      cell: ({ cell }) => (
        <>
          <Text
            fontWeight="bold"
            style={{ cursor: "pointer" }}
            _hover={{ textDecoration: "underline" }}
            color="#0072B1"
            onClick={() => {
              navSubsDetails(cell.getValue(cell.column.id));
            }}
          >
            {cell.getValue(cell.column.id).compName}
          </Text>
        </>
      ),
    },
    {
      header: "Start Date",
      accessorKey: "startDate",
    },
    {
      header: "End Date",
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
      header: "Storage Used",
      accessorKey: "storage",
    },
    {
      header: "Action",
      cell: ({ cell }) => (
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
                console.log(cell.row.id);
                editSubscription.onOpen();
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
              onClick={() => {}}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <Header title="Subscription" />
      <Container maxW="100vw" maxH="100%">
        <Box p="0px 40px">
          <Flex justify="flex-end">
            <Button
              bgColor="#33945F"
              color="white"
              w="25%"
              onClick={() => {
                addSubscription.onOpen();
              }}
            >
              <Icon as={FiPlus} />
              &nbsp;Add Subscription
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
                <Styles>
                  <CustomTable data={dummyData} columns={columns} />
                </Styles>
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
                    You do not have any subscription information.
                  </Text>
                </CardBody>
              </Card>
            </Box>
          )}
        </Box>
      </Container>

      {/* -------------------------------------------------start add subs modal---------------------------------------------------------- */}
      <Modal
        size="2xl"
        isOpen={addSubscription.isOpen}
        onClose={addSubscription.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid grey">
            <HStack>
              <Icon as={FiArchive} />
              <Text>Add Subscription</Text>
            </HStack>
          </ModalHeader>

          <ModalBody>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                SELECT COMPANY
              </FormLabel>
              <Select placeholder="Select company">
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
                <option value="company3">Company 3</option>
              </Select>
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                SELECT FILE
              </FormLabel>
              <Select placeholder="Select file">
                <option value="file1">File 1</option>
                <option value="file2">File 2</option>
                <option value="file3">File 3</option>
              </Select>
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                DATE SUBSCRIPTION
              </FormLabel>
              <HStack>
                <Input type="date" />
                <Input type="date" />
              </HStack>
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                NUMBER OF USER
              </FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                NUMBER OF PREMISE
              </FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                NUMBER OF SCHEME
              </FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                SIZE OF STORAGE
              </FormLabel>
              <HStack>
                <Slider
                  w="50%"
                  mx="10px"
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={handleStorage}
                  focusThumbOnChange={false}
                >
                  <SliderTrack borderRadius="10px" h="15px">
                    <SliderFilledTrack bgColor="#33945F" />
                  </SliderTrack>
                  <SliderThumb bgColor="#45C14B" boxSize={6} />
                </Slider>
                <NumberInput
                  m="0px 30px"
                  w="15%"
                  value={sliderValue}
                  onChange={handleStorage}
                >
                  <NumberInputField />
                </NumberInput>
                <Text>GB</Text>
              </HStack>
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
                addSubscription.onClose();
              }}
            >
              <Icon as={VscChromeClose} />
              &nbsp;Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* --------------------------------------------------end add subs modal----------------------------------------------------------- */}

      {/* --------------------------------------------------start edit subs modal----------------------------------------------------------- */}
      <Modal
        size="2xl"
        isOpen={editSubscription.isOpen}
        onClose={editSubscription.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom="1px solid grey">
            <HStack>
              <Icon as={FiArchive} />
              <Text>Edit Subscription</Text>
            </HStack>
          </ModalHeader>

          <ModalBody>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                SELECT COMPANY
              </FormLabel>
              <Select placeholder="Select company">
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
                <option value="company3">Company 3</option>
                <option value="company4">Company 3</option>
              </Select>
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                SELECT FILE
              </FormLabel>
              <Select placeholder="Select file">
                <option value="file1">File 1</option>
                <option value="file2">File 2</option>
                <option value="file3">File 3</option>
              </Select>
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                DATE SUBSCRIPTION
              </FormLabel>
              <HStack>
                <Input type="date" />
                <Input type="date" />
              </HStack>
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                NUMBER OF USER
              </FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                NUMBER OF PREMISE
              </FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                NUMBER OF SCHEME
              </FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl padding="10px">
              <FormLabel fontSize="13px" fontWeight="bold">
                SIZE OF STORAGE
              </FormLabel>
              <HStack>
                <Slider
                  w="50%"
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={handleStorage}
                >
                  <SliderTrack borderRadius="10px" h="15px">
                    <SliderFilledTrack bgColor="#33945F" />
                  </SliderTrack>
                  <SliderThumb bgColor="#45C14B" boxSize={6} />
                </Slider>
                <NumberInput
                  m="0px 30px"
                  w="15%"
                  value={sliderValue}
                  onChange={handleStorage}
                >
                  <NumberInputField />
                </NumberInput>
                <Text>GB</Text>
              </HStack>
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
                editSubscription.onClose();
              }}
            >
              <Icon as={VscChromeClose} />
              &nbsp;Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* --------------------------------------------------end edit subs modal----------------------------------------------------------- */}
    </>
  );
}

export { SubscriptionScreen };
