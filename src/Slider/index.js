import Card from './Card'
import SwiperCore, { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const SliderWrapper = styled.section`
       padding: 0 0 0 2rem;
       margin-top: 1rem;
    `
const Title = styled.h1`
    font-family: 'Roboto', sans-serif;;
    font-size: 40px;
    font-weight: 300;
`

SwiperCore.use([ Scrollbar]);

function Index(){
    return (
        <SliderWrapper>
            <Title> Nominees </Title>
            <Swiper
                allowTouchMove
                freeMode
                grabCursor
                breakpoints= {{
                    1440: {
                        slidesPerView: 3.2,
                        spaceBetween: 10
                    },
                    
                    1280: {
                        slidesPerView: 3.1,
                        spaceBetween: 10
                    },
                    
                    1024: {
                        slidesPerView: 2.8,
                        spaceBetween: 10
                    },
                    
                    768: {
                        slidesPerView: 1.6,
                        spaceBetween: 10
                    },
                    
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 10
                    },   
                    375: {
                        slidesPerView: 1.2,
                        spaceBetween: 10
                    },    
                    200: {
                        slidesPerView: 0.8,
                        spaceBetween: 10
                    },                   
                }}
                scrollbar={{
                    "hide": false,
                    "draggable": true,
                    "dragSize": 100,
                  }}
            >
                
                <SwiperSlide> 
                    <Card />
                </SwiperSlide>
                <SwiperSlide>         
                    <Card />
                </SwiperSlide>
                <SwiperSlide> 
                    <Card />
                </SwiperSlide>
                <SwiperSlide> 
                    <Card />
                </SwiperSlide>
                <SwiperSlide> 
                    <Card />
                </SwiperSlide>
                <SwiperSlide> 
                    <Card />
                </SwiperSlide>
                <SwiperSlide> 
                    <Card />
                </SwiperSlide>
                <SwiperSlide> 
                    <Card />
                </SwiperSlide>
                <SwiperSlide> 
                    <Card />
                </SwiperSlide>
            </Swiper>             
        </SliderWrapper>
    )
}



export default Index