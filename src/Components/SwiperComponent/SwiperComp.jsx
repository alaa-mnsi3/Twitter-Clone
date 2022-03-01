// Import Swiper React components
import React,{useMemo} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

// for swiper Images
function SwiperComp (props)
{
  let Images= useMemo(()=> props.dataSwiping,[props.dataSwiping])
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {Images.map(swipe => (<SwiperSlide key={Math.random()}><img src={swipe} alt=''/></SwiperSlide>))}
    </Swiper>
  );
};

export default React.memo(SwiperComp);