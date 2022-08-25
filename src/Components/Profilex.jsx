import React, { useEffect } from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../Redux/AuthReducer/action";

const Profilex = () => {
  const dispatch = useDispatch();
  const profileStore = useSelector((state) => state.AuthReducer.profileStore);
  useEffect(() => {
    if (profileStore.length === 0) {
      dispatch(profile({}));
    }
  }, [dispatch, profileStore.length]);
  //console.log(profileStore);
  return (
    <Box border="1px solid red" w="25%" m="auto">
      <Box width="30%">
        <Avatar
          name={profileStore[0]?.name}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGInoSocySBIg/profile-displayphoto-shrink_100_100/0/1646467268654?e=1666828800&v=beta&t=pecG-WrtIJZlCAf7sBuPg4CkYa14xBdzxUTnreO9uwU"
        />
      </Box>
      <Text fontWeight="bold" fontSize="18px">
        {profileStore[0]?.name}
      </Text>
      <Text>{profileStore[0]?.description}</Text>
    </Box>
  );
};

export default Profilex;
