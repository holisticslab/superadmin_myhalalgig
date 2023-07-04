import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../../assets/logohlsb.png";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const nav = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (input) => {
    console.log(input);
    reset();
    nav("/dashboard");
  };

  return (
    <div>
      <Container
        maxWidth="100vw"
        minHeight="100vh"
        p="100px 0px"
        bgGradient="linear(#959ba3, #ffffff, #ffffff, #ffffff, #ffffff)"
      >
        <Center>
          <VStack>
            <Image src={logo} w="30%" mb="40px" />
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize="25px" mb="-10px">
                Welcome to
              </Text>
              <Text fontWeight="1000" fontSize="50px" color="#1C5134">
                MyHalalGig
              </Text>
            </Box>
            <Text fontWeight="semibold" mt="10px" color="#9FA2B4">
              Please login to your account.
            </Text>
            <Box minWidth="30%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mt="20px" isRequired>
                  <FormLabel fontWeight="bold">Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <AiOutlineMail />
                    </InputLeftElement>
                    <Input
                      type="email"
                      placeholder="name@email.com"
                      {...register("username")}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl mt="20px" isRequired>
                  <FormLabel fontWeight="bold">Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <BiLockAlt />
                    </InputLeftElement>
                    <Input
                      type="password"
                      placeholder="**********"
                      {...register("password")}
                    />
                  </InputGroup>
                </FormControl>
                <SimpleGrid columns={2} spacing="300px" mt="30px">
                  <Checkbox>Remember me</Checkbox>
                  <Link
                    color="#33945F"
                    onClick={() => {
                      nav("./forgotpassword");
                    }}
                  >
                    Forgot Password?
                  </Link>
                </SimpleGrid>
                <Button
                  type="submit"
                  mt="50px"
                  bgColor="#33945F"
                  color="white"
                  width="100%"
                >
                  Login
                </Button>
                <Center>
                  <HStack mt="20px">
                    <Text>Not a member?</Text>
                    <Link
                      isExternal
                      color="#33945F"
                      href="https://myhalalgig.com/"
                    >
                      Register now
                    </Link>
                  </HStack>
                </Center>
              </form>
            </Box>
          </VStack>
        </Center>
      </Container>
    </div>
  );
}

function Logout() {
  window.location.pathname = "/login";
}

function ResetPassword() {
  const nav = useNavigate();
  const [sent, setSent] = useState(false);
  const [reset, setReset] = useState(false);

  return (
    <div>
      <Container
        maxWidth="100vw"
        minHeight="100vh"
        p="100px 0px"
        bgGradient="linear(#959ba3, #ffffff, #ffffff, #ffffff, #ffffff)"
      >
        <Center>
          <VStack>
            <Image src={logo} w="30%" mb="40px" />
            <Box textAlign="center">
              <Text fontWeight="1000" fontSize="50px" color="#1C5134">
                MyHalalGig
              </Text>
            </Box>

            {sent ? (
              reset ? (
                <>
                  <Text fontWeight="bold" fontSize="25px" mt="40px">
                    Set new password
                  </Text>
                  <Text fontWeight="semibold" color="#9FA2B4">
                    Your new password must be different to previously used
                    passwords.
                  </Text>
                  <Box minWidth="30%">
                    <FormControl mt="20px" isRequired>
                      <FormLabel fontWeight="bold">Password</FormLabel>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <BiLockAlt />
                        </InputLeftElement>
                        <Input type="password" placeholder="**********" />
                      </InputGroup>
                    </FormControl>
                    <FormControl mt="20px" isRequired>
                      <FormLabel fontWeight="bold">Confirm Password</FormLabel>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <BiLockAlt />
                        </InputLeftElement>
                        <Input type="password" placeholder="**********" />
                      </InputGroup>
                    </FormControl>
                    <Button
                      // type="submit"
                      mt="50px"
                      bgColor="#33945F"
                      color="white"
                      width="100%"
                      onClick={() => {
                        setSent(false);
                        setReset(false);
                        nav("/login");
                      }}
                    >
                      Reset password
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Text fontWeight="bold" fontSize="25px" mt="40px">
                    Check your email
                  </Text>
                  <Text fontWeight="semibold" color="#9FA2B4">
                    We sent a password reset link to name@gmail.com
                  </Text>
                  <Box minWidth="30%">
                    <Button
                      // type="submit"
                      mt="50px"
                      bgColor="#33945F"
                      color="white"
                      width="100%"
                      onClick={() => {
                        setReset(true);
                      }}
                    >
                      Open email
                    </Button>
                    <Center>
                      <HStack m="20px">
                        <Text>Didn't receive the email?</Text>
                        <Link color="#33945F" href="/login/resetpassword">
                          Click to resend
                        </Link>
                      </HStack>
                    </Center>
                  </Box>
                </>
              )
            ) : (
              <>
                <Text fontWeight="bold" fontSize="25px" mt="40px">
                  Forgot password?
                </Text>
                <Text fontWeight="semibold" color="#9FA2B4">
                  No worries. We'll send you reset instructions to your email
                </Text>
                <Box minWidth="30%">
                  <FormControl my="60px" isRequired>
                    <FormLabel fontWeight="bold">Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <AiOutlineMail />
                      </InputLeftElement>
                      <Input type="email" placeholder="name@email.com" />
                    </InputGroup>
                  </FormControl>

                  <Button
                    // type="submit"
                    mt="50px"
                    bgColor="#33945F"
                    color="white"
                    width="100%"
                    onClick={() => {
                      setSent(true);
                    }}
                  >
                    Send reset link
                  </Button>
                </Box>
              </>
            )}

            <Box minWidth="30%" position="fixed" bottom="15%">
              <Center>
                <HStack mt="20px">
                  <FiChevronLeft color="#33945F" />
                  <Link color="#33945F" href="../login">
                    Back to login
                  </Link>
                </HStack>
              </Center>
            </Box>
          </VStack>
        </Center>
      </Container>
    </div>
  );
}

export { LoginScreen, Logout, ResetPassword };
