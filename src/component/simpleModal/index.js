import React from "react";
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FiCheck, FiCheckCircle, FiTrash2 } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";

function SimpleModal({
  title,
  description,
  icon,
  trigger,
  trigger2,
  onSubmit,
  register,
  type,
}) {
  return (
    <>
      <Modal
        size="lg"
        isCentered
        isOpen={trigger.isOpen}
        onClose={() => {
          trigger.onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody mt="20px">
            <Box m="30px">
              <VStack textAlign="center">
                {type === "delete" ? (
                  <>
                    <HiOutlineExclamationCircle
                      color="#FF8A00"
                      fontSize="80px"
                    />
                    <Text fontSize="40px">Are you sure?</Text>
                    <Text fontSize="20px" color="#959BA3">
                      If deleted, cannot retrieve.
                    </Text>
                    <HStack>
                      <Button
                        mt="20px"
                        width="200px"
                        bgColor="red"
                        color="white"
                        _hover={{ bgColor: "red.400" }}
                        onClick={() => {
                          trigger.onClose();
                          trigger2 && trigger2.onOpen();
                        }}
                      >
                        <Icon as={FiTrash2} />
                        &nbsp;Delete
                      </Button>
                      <Button
                        mt="20px"
                        width="200px"
                        onClick={() => {
                          trigger.onClose();
                        }}
                      >
                        <Icon as={VscChromeClose} />
                        &nbsp;Cancel
                      </Button>
                    </HStack>
                  </>
                ) : (
                  <>
                    <FiCheckCircle color="#468c32" fontSize="80px" />
                    <Text fontSize="40px">{title}</Text>
                    <Text fontSize="20px" color="#959BA3">
                      {description}
                    </Text>
                    <Button
                      mt="20px"
                      width="200px"
                      bgColor="#33945F"
                      color="white"
                      _hover={{ bgColor: "green" }}
                      onClick={() => {
                        trigger.onClose();
                      }}
                    >
                      <Icon as={FiCheck} />
                      &nbsp;OK
                    </Button>
                  </>
                )}
              </VStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { SimpleModal };
