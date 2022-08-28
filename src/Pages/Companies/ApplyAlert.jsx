import React, { useState } from 'react'
import {
  Button,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
   Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'



export const ApplyAlert=()=> {
  //const [checkApply,setCheckApply]=useState(true);
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
// const handleC=()=>{
//   if(checkApply==true){
//     setCheckApply(false)
//   }else{
//     setCheckApply(true)
//   }
// }

  return (
    <>
      <Button colorScheme='green'  onClick={onOpen}>
    
        Apply
      
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            
            <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Application submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your application. Our team will get back to you soon.
    <AlertTitle mt={4} mb={1} fontSize='lg'>
     <Link to="/">
     <Button>ok</Button>
     </Link> 
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
    ok redirect to home page
    </AlertDescription>
    
  </AlertDescription>
</Alert>
            
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}