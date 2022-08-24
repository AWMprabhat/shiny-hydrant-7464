import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../../Redux/AuthReducer/action";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (username && password) {
      const params = {
        username,
        password,
      };

      dispatch(login(params)).then((r) => {
        navigate("/", { replace: true });
      });
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={12}
        lineHeight="3rem"
        mr="0"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Box textAlign="left">
          <Heading size={"md"}>New to Naukri?</Heading>
          <Text>One click apply using naukri profile.</Text>
          <Text>Get relevant job recommendations.</Text>
          <Text>Showcase profile to top companies and consultants.</Text>
          <Text>Know application status on applied jobs.</Text>
          <Button
            border="1px solid royalblue"
            p="1rem 3rem"
            fontWeight="lighter"
            bg="transparent"
            color="royalblue"
          >
            Register for Free
          </Button>
          <Image
            w="200px"
            float="right"
            src="https://static.naukimg.com/s/5/105/i/register.png"
            alt="logo"
          />
        </Box>
      </Stack>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        ml="1"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Email ID / Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={loginHandler}
              >
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <RouterLink to="/register" color={"blue.400"}>
                  Register
                </RouterLink>
              </Text>
            </Stack>
            <hr />
            <Box
              display="flex"
              alignItems="center"
              boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
              borderRadius="1rem"
              justifyContent="space-evenly"
              p="0.5rem"
            >
              <FcGoogle />
              <Text>Sign in with Google</Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
