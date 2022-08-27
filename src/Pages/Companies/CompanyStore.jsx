import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

import { AiFillStar, GrFormLocation } from "react-icons/ai";

import {
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Text,
  Button,
} from "@chakra-ui/react";
import { getCompanyRecords } from "../../Redux/AppReducer/action";

const CompanyStore = () => {
  const dispatch = useDispatch();
  const company = useSelector((store) => store.AppReducer.company);
  const { id } = useParams();
  const [currentState, setCurrentState] = useState([]);
  console.log("currentState: ", currentState);

  const jobs = currentState.jobs;
  console.log("jobs: ", jobs);
  // console.log("hello" ,currentState.jobs)
  useEffect(() => {
    if (company.length === 0) {
      dispatch(getCompanyRecords());
    }
  }, [dispatch, company.length]);

  useEffect(() => {
    if (id) {
      const cur = company.find((item) => item.id === id);
      cur && setCurrentState(cur);
    }
  }, [id, company]);

  // console.log(company);

  return (
    <>
      {/* company data */}
      <Box position="relative" maxheight="auto" width="100%">
        <img src={currentState.backgroundImg} alt="logo" />
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
            <Box
              height="120px"
              width="120px"
              border="1px solid gray"
              borderRadius="15px"
            >
              <img src={currentState.image} alt="logo" />
            </Box>
            <Box>
              <Heading margin="1rem" fontSize="40px">
                {currentState.name}
              </Heading>

              <Box
                margin="1rem"
                fontSize="md"
                border="1px solid gray"
                borderRadius="15px"
              >
                {currentState.description}
              </Box>
            </Box>
            <Box padding="2rem">
              <Flex>
                <div>
                  <AiFillStar />
                </div>
                <div>
                  {` `} {currentState.rating}
                </div>
              </Flex>
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
      <Box width="95%" margin="auto">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {/* start jobs card  */}

          {jobs?.length > 0 &&
            jobs.map((e, i) => (
              <GridItem colSpan={3} h="auto">
                <Box
                  key={i}
                  height="auto"
                  width="99%"
                  border="1px solid black"
                  borderRadius="15px"
                  bgColor="thunder"
                >
                  {/* 1 */}
                  <Flex justifyContent="space-between">
                    <Box width="70%">
                      <Flex justifyContent="space-between">
                        <Box
                          height="60px"
                          border="1px solid gray"
                          borderRadius="15px"
                          width="70px"
                          margin="1rem"
                        >
                          <img src={currentState.image} alt="logo" />
                        </Box>
                        <Box>
                          <Box color="gray" fontSize="25px">
                            {e.jobName}
                          </Box>
                          <Box color="black" fontSize="18px">
                            {currentState.name}
                          </Box>
                        </Box>
                        <Box>
                          <AiFillStar /> {` `} {currentState.rating} | Reviews{" "}
                          {"( "} {currentState.reviews} {")"}{" "}
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Button
                        padding="16px"
                        backgroundColor="green"
                        margin="2rem"
                        color="blue"
                      >
                        {" "}
                        Apply
                      </Button>
                    </Box>
                  </Flex>
                  {/* 2 */}
                  <Box fontSize="14px" margin="1rem">
                    <Flex justifyContent="flex-start" gap="1rem">
                      <Box border="1px solid gray" borderRadius="15px">
                        {" "}
                        Experince-{e.experince}
                      </Box>
                      <Box border="1px solid gray" borderRadius="15px">
                        {" "}
                        Location-{e.location}
                      </Box>
                      <Box border="1px solid gray" borderRadius="15px">
                        {" "}
                        Package-{e.$}
                      </Box>
                    </Flex>
                  </Box>
                  <Flex
                    justifyContent="flex-start"
                    fontSize="14px"
                    margin="1rem"
                  >
                    Skills-{e.skilss}
                  </Flex>
                </Box>
              </GridItem>
            ))}

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
                <Link to="/register">
                  <Button
                    borderRadius="40px"
                    size="sm"
                    color="white"
                    bgColor="#fe7554"
                  >
                    Register
                  </Button>
                </Link>
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
// {currentState.jobs.map((d)=>())}
