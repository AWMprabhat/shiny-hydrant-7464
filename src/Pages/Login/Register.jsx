import React, { useReducer } from "react";
import {
  Flex,
  Box,
  Select,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Editable,
  EditablePreview,
  EditableTextarea,
  Image,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/AuthReducer/action";
import { FcApproval } from "react-icons/fc";

const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: 0,
  description: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "mobile":
      return { ...state, mobile: action.payload };
    case "work":
      return { ...state, mobile: action.payload };

    default:
      return state;
  }
};

const Register = () => {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandle = () => {
    dispatch(register(state)).then((r) => {
      navigate("/login", { replace: true });
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack h="90vh"   spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} >
       <Box  position="fixed" >
       <Box
          minh="45vh"
          borderRadius={"1rem"}
          border="1px dashed grey"
          p="4rem 3rem 2rem 3rem"
          fontSize={"sm"}
          fontWeight="lighter"
          color="darkgrey"
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          position="relative"
          textAlign={"left"}
        >
          <Image
            m="auto"
            bottom="200"
            left="130"
            position="absolute"
            src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
            alt="chomu"
          />
          <Heading size="md" color="black">
            On registering, you can
          </Heading>
          <br />
          <Text display="flex">
            <FcApproval size="20px" /> Build your profile and let recruiters
            find you
          </Text>
          <br />
          <Text display="flex">
            <FcApproval size="20px" /> Get job postings delivered right to your
            email
          </Text>
          <br />
          <Text display="flex">
            <FcApproval size="20px" /> Find a job and grow your career
          </Text>
        </Box>
       </Box>
      </Stack>
      <Stack border="1px solid red" spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Find a job & grow your career
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
     
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box w={"100%"}>
                <FormControl id="Name" isRequired>
                  <FormLabel>FullName</FormLabel>
                  <Input
                    type="text"
                    value={state.name}
                    onChange={(e) =>
                      setState({ type: "name", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={state.email}
                onChange={(e) =>
                  setState({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                type={"password"}
                <Input
                  value={state.password}
                  onChange={(e) =>
                    setState({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button variant={"ghost"}>
                    <ViewIcon />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile</FormLabel>
                <Input
                  type="number"
                  value={state.mobile}
                  onChange={(e) =>
                    setState({ type: "mobile", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="work" isRequired>
                <FormLabel>Work Status</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={(e) =>
                    setState({ type: "work", payload: e.target.value })
                  }
                >
                  <option value="I'm Experienced">I'm Experienced</option>
                  <option value="I'm a Fresher">I'm a Fresher</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Editable defaultValue="Description">
                <EditablePreview />
                <EditableTextarea
                  value={state.description}
                  onChange={(e) =>
                    setState({ type: "description", payload: e.target.value })
                  }
                />
              </Editable>
            </Box>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                borderRadius="2rem"
                onClick={RegisterHandle}
              >
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
