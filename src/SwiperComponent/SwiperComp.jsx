// Import Swiper React components
import React,{useEffect, useMemo} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function SwiperComp (props)
{
  let x= useMemo(()=> props.dataSwiping,[props.dataSwiping])
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {x.map(swipe => (<SwiperSlide key={Math.random()}><img src={swipe} alt=''/></SwiperSlide>))}
    </Swiper>
  );
};

export default React.memo(SwiperComp);