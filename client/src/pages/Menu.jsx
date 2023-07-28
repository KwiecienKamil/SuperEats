import React, { useContext, useState } from 'react'
import { MenuData } from '../data/MenuData';
import { Context } from '../context/Context'

const Menu = (props) => {
  const [data, setData] = useState(MenuData);
  const {addToCart} = useContext(Context)

  const filterType = (category) => {
    setData(
      MenuData.filter((item) => {
        return item.category === category
      })
    )
  }
  
  const filterPrice = (price) => {
    setData(
      MenuData.filter((item) => {
        return item.price <= price;
      })
    )
  }

  return (
    <div  onClick={props.onCloseSideModal}>
    <div className="w-full flex items-center justify-center">
    <div className="w-[95%] flex items-center justify-center gap-4 sm:gap-8 text-[12px] sm:text-[15px] pt-[30px] pb-8 border-b border-darkerGray">
      <div className="flex flex-col items-center justify-center" >
        <img onClick={() => setData(MenuData)} src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png" className='max-h-[25px] sm:max-h-[40px] hover:bg-gray rounded-full cursor-pointer' alt="pizza" />
        <p>All</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img  onClick={() => filterType('pizza')} src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png" className='max-h-[25px] sm:max-h-[40px] hover:bg-gray rounded-full cursor-pointer' alt="pizza" />
        <p>Pizza</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img  onClick={() => filterType('burger')} src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/burger.png" className='max-h-[25px] sm:max-h-[40px] hover:bg-gray rounded-full cursor-pointer' alt="burger" />
        <p>Burger</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img  onClick={() => filterType('salad')} src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/healthy.png" className='max-h-[25px] sm:max-h-[40px] hover:bg-gray rounded-full cursor-pointer' alt="asian" />
        <p>Healthy</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img onClick={() => filterType('mexican')} src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/mexican.png" className='max-h-[25px] sm:max-h-[40px] hover:bg-gray rounded-full cursor-pointer' alt="mexican" />
        <p>Mexican</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img onClick={() => filterType('dessert')} src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/dessert.png" className='max-h-[25px] sm:max-h-[40px] hover:bg-gray rounded-full cursor-pointer' alt="dessert" />
        <p>Dessert</p>
      </div>
    </div>
  </div>
    <div className='w-full pt-4'>
      <h1 className='text-center text-main text-xl sm:text-3xl font-Poppins font-semibold'>Top Rated Menu Items</h1>
      <div className="">
        <p className='text-center pt-4 pb-2 font-semibold'>Filter price</p>
        <div className="w-full flex items-center justify-center gap-4 text-[12px] ">
        <button onClick={() => setData(MenuData)} className='text-orange-500 border-orange-400 border-2 rounded-full p-1 font-semibold hover:bg-darkgray'>All</button>
        <button onClick={() => filterPrice(5)} className='text-orange-500 border-orange-400 border-2 rounded-full p-1 font-semibold hover:bg-darkgray'>5$</button>
        <button onClick={() => filterPrice(10)} className='text-orange-500 border-orange-400 border-2 rounded-full p-1 font-semibold hover:bg-darkgray'>10$</button>
        <button onClick={() => filterPrice(15)} className='text-orange-500 border-orange-400 border-2 rounded-full p-1 font-semibold hover:bg-darkgray'>15$</button>
        <button onClick={() => filterPrice(20)} className='text-orange-500 border-orange-400 border-2 rounded-full p-1 font-semibold hover:bg-darkgray'>20$</button>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 pt-8 px-1 sm:px-8 ">
      {data.map((item, index) => (
    <div
      key={index}
      className="shadow-2xl  rounded-lg hover:scale-105 duration-300 cursor-pointer"
      onClick={() => addToCart(item)}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[100px] sm:h-[200px] object-cover  rounded-t-lg"
      />
      <div className="flex items-center justify-between px-[1px] sm:px-2 py-4">
        <p className="font-bold text-[10px] sm:text-[20px]">{item.name}</p>
        <p>
          <span className="bg-orange-500 text-white p-1 rounded-full font-semibold text-[10px] sm:text-[15px]">
            {`${item.price}$`}
          </span>
        </p>
      </div>
    </div>
     )
  )};
      </div>
    </div>
    </div>
  )
}

export default Menu