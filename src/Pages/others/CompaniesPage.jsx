

import { Heading } from '@chakra-ui/react'
import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CompaniesPage = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div style={{width:"90%",border:"1px solid red",margin:"auto",marginTop:"100px"}} >
       <div> <Heading fontWeight='600' fontFamily='sans-serif' fontSize='3xl' >
            Sponsored Companies
        </Heading></div>
        <div style={{width:"90%",border:"1px solid black",height:"1000px",margin:"auto"}} >
          
            <div style={{border:"1px solid red",width:"80%",height:"fit-content",margin:"auto"}} >
                    <Slider {...settings}>
                    {/* {[1,2,3,4,5,6,7,8,9,10,11,12].map((item,index)=>
                    {return <div style={{color:"red"}} key={index}><h3>{item}</h3></div>})} */}
                    <div style={{border:"1px solid black",color:"red"}} >slider 1</div>
                    <div style={{border:"1px solid black"}} >slider 2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    </Slider>
                </div>
            <div></div>
        </div>
    </div>
  )
}

export default CompaniesPage
