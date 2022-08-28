import React from "react";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <Box
      p="20px"
      width="95%"
      m="auto"
      height="auto"
      // border="1px solid red"
      color="gray"
    >
      <Flex justify="space-evenly" gap="0">
        <Box width="20%" height="40px" border="1px black">
          <Flex>
            <img
              src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
              alt="logoImg"
            />
          </Flex>
          <Flex><Text fontSize='md' marginTop="8%" >Connect with us</Text></Flex>
          
          <Flex  marginTop="4%" gap="8px">
          
            
            <a href="https://www.facebook.com/Naukri"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg" alt="logo"  /></a>
            <a href="https://instagram.com/naukridotcom/"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg" alt="logo"  /></a>
            
            <a href="https://twitter.com/naukri" ><img src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg" alt="logo" /></a>
            <a href="http://www.linkedin.com/company/naukri.com"><img src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg" alt="logo"  /></a>
          </Flex>
        </Box>
{/*   ///////    */}
        <Box height="150px " width="40%" lineHeight='2.5rem'>
          <Flex align="center"  gap="2rem" fontSize="md">
            <Box height="120px" width="30%" >
              <a href="http://infoedge.in/"> <Text > About us  </Text> </a>
              <a href="http://careers.infoedge.in/"> <Text > Careers </Text> </a>
              
              <a href="https://www.naukri.com/recruit/login"> <Text > Emaployer home </Text> </a>
              <a href="https://www.naukri.com/sitemap/sitemap.php"> <Text > Sitemaa  </Text> </a>
            </Box>
            <Box height="120px" width="30%">
              <a href="https://www.naukri.com/faq/job-seeker?utm_source=footer"> <Text > Help center </Text> </a>
              <a href="https://w5.naukri.com/summons-notices-form/"> <Text > Summons/Notices  </Text> </a>
              <a href="https://w5.naukri.com/grievances-form/"> <Text > Grievances </Text> </a>
              <a href="https://w5.naukri.com/fdbck/main/feedback.php?app_id=15"> <Text > Rea ort issue </Text> </a>
            </Box>
            <Box height="120px" width="30%">
              <a href="https://www.naukri.com/privacypolicy"> <Text > privacy policy </Text> </a>
              <a href="https://www.naukri.com/termsconditions"> <Text > Terms & conditions </Text> </a>
              <a href="https://www.naukri.com/imposter/report-fake-job-recruiter"> <Text > Fraud alert </Text> </a>
              <a href="https://www.naukri.com/jobsearch/trust-safety"> <Text > Trust & safety  </Text> </a>
            </Box>
          </Flex>
        </Box>

        <Flex marginTop='1.5rem'
        width="25%" height="100px" border="1px solid gray" borderRadius='10px' bgColor='silver'>
       <Box padding='4px '>
        <Text fontSize='18px' color="black">Apply on the go</Text>
        <Text color="black" fontSize='xs'>Get real-time job updates on our App</Text>
        <Flex justifyContent='space-between' marginTop='15px' marginLeft='25px'> 
        <a href="" >
        <img   width='70%'   src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png"  alt="logo"/></a> 
        <a href="">
        <img width='70%' src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png"  alt="logo"/></a> 

</Flex>
       
       </Box>


        </Flex>
      </Flex>
    </Box>
    <Flex
    ml='5rem'
     width="90%"
     height="130px"
    
     color="gray"
    //  justifyItems='center'
     justifyContent='space-between'
     gap='5%'>

<Box width='15%'><img src="https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg" alt="logo2" /></Box>

<Box width='30%'><Text fontSize='md'> All trademarks are the property of their respective
        owners</Text> 
         <Text fontSize='md'>All rights reserved © 2022 Info Edge (India) Ltd.</Text></Box>

         <Flex width='65%'marginTop='1rem'><Text fontSize='md' color='black'>Our businesses 
        
         </Text>
          </Flex>
    </Flex>
    </>
  );
};

export default Footer;
