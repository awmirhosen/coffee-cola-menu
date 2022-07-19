import './App.css';
import {data} from './utils/dummy'
import { Swiper, SwiperSlide } from 'swiper/react';
import Items from "./components/Items";
import {useState} from "react";

function App() {

    const [item, setItem] = useState({});


    return (
    <div className="App">
        <div>
            <h1 className='text-6xl mt-5'>کافه کولا</h1>
            <Swiper
                className='flex mt-20'
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log(item)}
                onSwiper={(swiper) => console.log(item)}
            >
                {data.category.map((item) => (
                    <SwiperSlide className='flex flex-col  p-10 rounded-xl mx-5 bg-gray-100 shadow-md text-center justify-center' onClick={() => setItem(item)} key={item.id}>
                        <img src={item.image} className='mx-auto' width='100px' alt="logo"/>
                        <p className='text-3xl mt-5'>{item.category}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Items  item={item}/>

        </div>
    </div>
  );
}

export default App;
