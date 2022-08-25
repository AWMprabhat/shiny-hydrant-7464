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
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../../Redux/AuthReducer/action";
import { FcGoogle } from "react-icons/fc";
import { MdDone } from "react-icons/md";
//#445578
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((store) => store.AuthReducer.token);
  const [isSmallerthan] = useMediaQuery("(min-width: 650px)");
  const loginHandler = () => {
    dispatch(login()).then(() => {
      if (token) {
        for (let i = 0; i < token.length; i++) {
          if (
            (token[i].name === username || token[i].email === username) &&
            token[i].password === password
          ) {
            alert("login success");
            navigate("/", { replace: true });
            break;
          } else {
            continue;
          }
        }
      } else {
        alert("login failed");
      }
    });
  };
  const registerPage = () => {
    navigate("/register");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      direction={isSmallerthan ? "row" : "column-reverse"}
    >
      <Stack
        spacing={8}
        lineHeight="3rem"
        mx={"auto"}
        maxW={"lg"}
        py={isSmallerthan ? 12 : 0}
        px={isSmallerthan ? 6 : 0}
        mr="0"
        w="100%"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Box textAlign="left">
          <Heading size={isSmallerthan ? "4xl" : "2xl"} color="#445578">
            New to Naukri?
          </Heading>
          <Text display="flex" alignItems="center">
            <MdDone color="royalblue" />
            One click apply using naukri profile.
          </Text>
          <Text display="flex" alignItems="center">
            <MdDone color="royalblue" />
            Get relevant job recommendations.
          </Text>
          <Text display="flex" alignItems="center">
            <MdDone color="royalblue" />
            Showcase profile to top companies and consultants.
          </Text>
          <Text display="flex" alignItems="center">
            <MdDone color="royalblue" />
            Know application status on applied jobs.
          </Text>
          <Button
            border="1px solid royalblue"
            p="1rem 3rem"
            fontWeight="lighter"
            bg="transparent"
            color="royalblue"
            onClick={registerPage}
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
        w="100%"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color="#445578">
            Login to your account
          </Heading>
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
                <Link color={"blue.400"} to="/register">
                  Forgot password?
                </Link>
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
