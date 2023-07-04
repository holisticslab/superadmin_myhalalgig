import React from "react";
import { Header } from "../layout/header";
import {
  Container,
  Box,
  Flex,
  Button,
  Icon,
  Card,
  CardHeader,
  CardBody,
  Text,
  IconButton,
  HStack,
  Center,
  Tooltip,
} from "@chakra-ui/react";
import { FiPlus, FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
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
      :nth-child(2) {
        width: 25%;
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

function FileScreen() {
  const dummyData = [
    {
      name: "File Has",
      noScheme: "12",
      country: "Malaysia",
      uploaded: "27 September 2023 8:25AM",
    },
    {
      name: "File Has",
      noScheme: "10",
      country: "Thailand",
      uploaded: "27 September 2023 8:25AM",
    },
    {
      name: "File Halal",
      noScheme: "5",
      country: "South Korea",
      uploaded: "27 September 2023 8:25AM",
    },
    {
      name: "File Has",
      noScheme: "2",
      country: "Japan",
      uploaded: "27 September 2023 8:25AM",
    },
    {
      name: "File Halal",
      noScheme: "6",
      country: "United States",
      uploaded: "27 September 2023 8:25AM",
    },
    {
      name: "File Halal",
      noScheme: "22",
      country: "Malaysia",
      uploaded: "27 September 2023 8:25AM",
    },
    {
      name: "File Halal",
      noScheme: "19",
      country: "Australia",
      uploaded: "27 September 2023 8:25AM",
    },
  ];

  const columnsFile = [
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
      header: "File Name",
      accessorKey: "name",
    },
    {
      header: "Number of Scheme",
      accessorFn: (data) => {
        return data.noScheme;
      },
      cell: (cell) => (
        <Center>
          <Box w="50px">
            <Text mr="20px">{cell.getValue(cell.column.id)}</Text>
          </Box>
          <Tooltip
            hasArrow
            placement="top"
            gutter={2}
            label="View"
            fontSize="md"
          >
            <IconButton
              color="#0575B3"
              icon={<FiEye />}
              variant="ghost"
              _hover={{ bgColor: "transparent" }}
              onClick={() => {}}
            />
          </Tooltip>
        </Center>
      ),
    },
    {
      header: "Country",
      accessorFn: (data) => {
        return data.country;
      },
      cell: (cell) => (
        <Text textAlign="left">{cell.getValue(cell.column.id)}</Text>
      ),
    },
    {
      header: "Uploaded",
      accessorFn: (data) => {
        return data.uploaded;
      },
      cell: (cell) => (
        <Text color="#959BA3">{cell.getValue(cell.column.id)}</Text>
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
      <Header title="File" />
      <Container maxW="100vw" maxH="100%">
        <Box p="0px 40px">
          <Flex justify="flex-end">
            <Button bgColor="#33945F" color="white" w="25%">
              <Icon as={FiPlus} />
              &nbsp;Add File
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
                  <CustomTable data={dummyData} columns={columnsFile} />
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
                    You do not have any file information.
                  </Text>
                </CardBody>
              </Card>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
}
export { FileScreen };
