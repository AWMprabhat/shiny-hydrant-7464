
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { ViewJobsData } from "../../Redux/AppReducer/ViewJobsData";
import FilterData from "../../filter/FilterData";
import { AiFillStar , GrFormLocation } from "react-icons/ai";

import {
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Text,
  Button,
} from "@chakra-ui/react";


const CompanyStore = () => {
  // const dispatch = useDispatch();
  // const company = useSelector((store) => store.AppReducer.company);
  const { companyId } = useParams();
 const { isloading, data, iserror, error} = ViewJobsData(companyId)
// console.log(company)
if(isloading){
 return <Text>loading....</Text>
}
if(iserror){
  return <Text>error 404 not found</Text>
}

  return (
    <>
      <Box position="relative" maxheight="auto" width="100%">
        <img
          src="{data?.data.backgroundImg}"
          alt="logo"
        />
      </Box>
      <Flex
        justifyContent="space-evenly"
        margin="auto"
        width="100%"
        borderTop="5px solid gray"
        bgColor="thunder"
        borderTopRadius="30px"
      >
        <Box width="80%" height="150px">
          <Flex margin="1rem">
            <Box height="120px" width="120px" borderRadius="4px">
              <img
                src=""
                alt="logo"
              />
            </Box>
            <Box>
              <Heading margin="1rem" fontSize="40px">
                Heading
              </Heading>

              <Text margin="1rem" fontSize="md">
                details
              </Text>
            </Box>
            <Box padding="2rem">
              <AiFillStar/>
            </Box>
          </Flex>
        </Box>
        <Box width="10%" height="150px" fontSize="xs">
          <Button
            padding="22px"
            backgroundColor="skyBlue"
            marginTop="2rem"
            color="salmon"
          >
            + Follow
          </Button>
          <Text>64.7 k Folowers</Text>
        </Box>
      </Flex>
      <Box width="90%" margin="auto">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem colSpan={3} h="auto">
            <Flex
              justifyContent="space-evenly"
              margin="5px"
              width="100%"
              border="1px solid black"
              bgColor="thunder"
              borderRadius="10px"
            >
              <Box width="100%" height="auto" bg="smoke">
                <Flex margin="1rem">
                  <Box height="50px" width="50px" borderRadius="4px">
                    <img
                      src="https://img.naukimg.com/logo_images/groups/v1/5491006.gif"
                      alt="logo"
                    />
                  </Box>
                  <Box>
                    <Text margin="1rem" fontSize="xxl">
                      Senior Engineer
                    </Text>

                    <Text margin="1rem" fontSize="s">
                      Companys Name
                    </Text>
                  </Box>
                  <Box padding="2rem">
                    <AiFillStar/>
                  </Box>
                  {/* <Box padding='2rem'><p>Reviwe</p></Box> */}
                </Flex>
              </Box>
              <Box width="20%" height="150px" fontSize="xs">
                <Button
                  padding="6px"
                  backgroundColor="green"
                  marginTop="2rem"
                  color="blue"
                >
                  Apply
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <Flex
              border="2 px solid black"
              minH="150px"
              width="95%"
              justifyContent="space-between"
              bgColor="gray"
              borderRadius="15px"
            >
              <Box>
                <Text fontSize="22px">Love Jobs by Naukri</Text>
                <Text fontSize="md">Register with us and we will find you</Text>
                <Button bgColor="orange" color="blue" marginTop="15px">
                  Rejister Now
                </Button>
              </Box>
              <Box margin="15px">
                <img
                  src="https://static.naukimg.com/s/7/109/assets/images/cp-register.8e37ccd8.png"
                  alt=""
                />
              </Box>{" "}
            </Flex>

            <Box> </Box>

            <Box>
              <Text>Contect with us</Text>
              <Flex width="200px" justifyContent="space-evenly">
                <img
                  src="https://static.naukimg.com/s/7/109/assets/images/twitter.c81b7cd2.svg"
                  alt=""
                />
                <img
                  src="https://static.naukimg.com/s/7/109/assets/images/facebook.3c34cbc4.svg"
                  alt=""
                />
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyStore;
