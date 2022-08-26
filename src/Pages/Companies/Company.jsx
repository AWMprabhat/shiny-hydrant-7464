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
      dispatch(getCompanyRecords(queryParams));
    }
  }, [company.length, searchParams, dispatch]);
  return (
    <>
      <Flex gap="5%">
        <Box w="10%" border="1px solid blue">
          <FilterData />
        </Box>
        <Box w="85%" display="flex" flexWrap="wrap" gap="10px" border="1px solid green">
          {company.length > 0 &&
            company.map((t) => (
              <Flex key={t.id} border="1px solid red" direction="column" w="20%" gap="1rem">
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
