import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";
import { getCompanyRecords } from "../../Redux/AppReducer/action";
import FilterData from "../../filter/FilterData";
import { AiFillStar } from "react-icons/ai";

const Company = () => {
  const dispatch = useDispatch();
  const company = useSelector((store) => store.AppReducer.company);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (company.length === 0) {
      const queryParams = {
        params: {
          type: searchParams.getAll("type"),
        },
      };
      dispatch(getCompanyRecords(queryParams))
    }
  }, [company.length, searchParams, dispatch]);
  return (
    <>
      <Flex gap="5%" mt="3rem" mb="3rem">
        <Box w="15%" borderRight="2px solid royalblue" >
          <FilterData />
        </Box>
        <Box w="80%" display="grid" gridTemplateColumns="repeat(4,1fr)" gap="15px">
          {company.length > 0 &&
            company.map((t) => (
              <Flex key={t.id} borderRadius="5px" direction="column" w="100%" gap="1.1rem" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" mt="10px" pb="5px">
                <Box>
                  <Image
                    w="200px"
                    m="auto"
                    h="150px"
                    src={t.image}
                    alt={t.name}
                  />
                </Box>
                <Box>{t.name} </Box>

                <Box>
                  <Box display="flex" m="auto" w="60%">
                    <Box
                      display="flex"
                      alignItems={"center"}
                      w="50%"
                      justifyContent="right"
                      pr="0.3rem"
                      borderRight="1px solid grey"
                    >
                      <AiFillStar color="gold" /> {t.rating}
                    </Box>
                    <Box>{t.reviews}K+ reviews</Box>
                  </Box>
                  <Box>{t.description} </Box>
                </Box>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "whitesmoke",
                    textDecoration: isActive ? "none" : "underline",
                    background: isActive ? "#7600dc" : "#f0f0f0",
                    fontSize: "25px",
                    backgroundImage: "linear-gradient(royalblue,blue)",
                    border: "1px solid blue",
                  })}
                  to={`/company/${t.id}`}
                >
                  View Jobs
                </NavLink>
              </Flex>
            ))}
        </Box>
      </Flex>
    </>
  );
};
export default Company;
