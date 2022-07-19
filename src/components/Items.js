import React from "react";
import {data, two} from '../utils/dummy'

function Items({item}) {

    console.log(item.foods)

    if (item.foods === undefined ){
        return (
            <div className='mt-10 text-4xl'>لطفا دسته ی مورد نظر را انتخاب کنید</div>
        )
    }else{
        return (
            <>
                {item.foods.map((f) => (
                    <div key={Math.random()} className='mt-10 food-box w-screen md:w-1/2 bg-gray-200 mx-auto rounded p-5 shadow-xl'>
                        <img src={f.images} className='mx-auto rounded-full h-[100px]' width='100px' height='100px' alt="logo"/>
                        <p className='text-3xl mt-5'>{f.name}</p>
                        <p className='text-1xl mt-5 text-gray-500'>{f.description}</p>
                        <p className='text-2xl mt-5 text-blue-900'>{f.price}</p>
                    </div>
                ))}
            </>
        );
    }

}

export default Items;
