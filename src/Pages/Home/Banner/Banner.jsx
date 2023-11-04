import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from "../../../assets/images/banner.png"
import banner2 from "../../../assets/images/banner3.png"
import banner3 from "../../../assets/images/banner4.jpg"
import banner4 from "../../../assets/images/towerBanner.png"
import banner5 from "../../../assets/images/bannerCouple.png"

const Banner = () => {
    return (
    
      <div className='my-20'>
                  
                  <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>

                  <div className='relative'>
                    <img className=' hidden md:block' src={banner1} alt="" />
                    <img className='absolute top-16 right-80 h-2/3' src={banner4} alt="" />
                    <img className='absolute top-24 right-[108px]  h-[200px]' src={banner5} alt="" />

                    <div className='absolute  top-1/4  lg:left-40 space-y-4'>
                <h2 className='lg:text-3xl font-bold lg:w-1/2'>We Love Litarature </h2>
                <p className='text-gray-600 lg:w-1/2' > Welcome to [Your Book Site Name], your gateway to a world of  literary wonders.  We believe that every book is a journey waiting to be explored, and our  library is a treasure trove of stories, a sanctuary of knowledge,  and a gateway to boundless imagination. With a \</p>
                    </div>

                  </div>
                  

              </SwiperSlide>
              <SwiperSlide>
            
           <div className='flex'>
            <div className='relative'>
                <img className='h-full ' src={banner3} alt="" />
         
                <img className='absolute top-12 w-16 right-2'  src={banner2} alt="" />
            </div>
            <div className='bg-[#282828] lg:pl-12 lg:w-full flex items-center text-white'>
               <div className='space-y-5'>
               <h1 className='text-xl lg:text-3xl '>Uncover Literary Treasures</h1>
                <p className='text-gray-400 hidden lg:block'>Dive into the world of books, where adventure, knowledge, and imagination await. <br />  <span className='hidden'>Explore our extensive collection and embark on a reading journey that knows no bounds. <br /> Your next  captivating story is just a click away</span></p>
               </div>
            </div>
           </div>
                  

              </SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
      </div>

 

          
    
    );
};

export default Banner;