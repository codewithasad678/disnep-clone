import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const ImageSlider = () => {

    let settings = {
        dots: true,
        infinity:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1,
        autoplay:true
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src='./images/slider-badag.jpg' />
        </Wrap>
        <Wrap>
            <img src='./images/slider-badging.jpg' />
        </Wrap>
        <Wrap>
            <img src='./images/slider-scale.jpg' />
        </Wrap>
    </Carousel>
  )
}

export default ImageSlider;


const Carousel = styled(Slider)`
margin-top: 20px;
    .slick-list{
    overflow: visible;
    }
    ul li button {
        &:before {
            font-size: 10px;
            color: white;
        }
    }
    button {
        z-index: 1;
    }
    li.slick-active button:before{
        color: white;
    }
`

const Wrap = styled.div`
    img{
        border-radius: 4px;
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgba(249,249,249,0.8);
        }
    }
`