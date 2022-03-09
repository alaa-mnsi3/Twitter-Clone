// Import Swiper React components
import React,{useMemo} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

// for swiper Images
function SwiperComp ({dataSwiping})
{
  let Images= useMemo(()=> {return dataSwiping},[dataSwiping])
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {Images.map(swipe => (<SwiperSlide key={Math.random()}><img src={swipe} alt=''/></SwiperSlide>))}
    </Swiper>
  );
};

export default React.memo(SwiperComp);