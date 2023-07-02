import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from '../../components/ProductDetailsCarousel';
import RelatedProducts from '../../components/RelatedProducts';
import Wrapper from '../../components/Wrapper';

const ProductDetails = () => {
  return ( <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
            <div 
                className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'
                id="left">
                <ProductDetailsCarousel />
            </div>

            <div 
                className='flex-[1] py-3' 
                id="right">
                <div className='text-[34px] font-semibold mb-2' id="ProductName">
                   Drone L900
                </div> 
                <div className='text-lg font-semibold' id="Price">
                   R$ : 2500
                </div> 
                <div className='text-md font-medium text-black/[0.5]' id="Tax">
                   incl. of taxes
                </div> 
                <div className='text-md font-medium text-black/[0.5] mb-20' id="TaxDesc">
                   {`(Also includes all applicable duties)`}
                </div> 
                <div className='mb-10'>
                  <div className='flex justify-between mb-2'>
                    <div className='text-md font-semibold' id="SelectType">
                        Select Type  
                    </div>
                    <div className='text-mb font-medium text-black/[0.5] cursor-pointer' id=''>
                        Select Guide
                    </div>
                  </div>
                  <div className='grid grid-cols-3 gap-2'>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        Classic
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        se Pro
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        se Mini
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        pro with Double-Battery
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                        Unique
                    </div>
                  </div>
                  <div className='text-red-600 mt-1'id="TypeAlert">
                      Type selection is required
                  </div>
                </div>
                <button className='w-full py-4 rounded-full text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 bg-gradient-to-r from-orange-500 to-orange-900 hover:from-orange-500 hover:to-orange-900'>
                  Add to Cart
                </button>
              <button className='w-full py-4 rounded-full border border-orange-400 text-lg font-medium transition-transform active:scale-95 flex itens-center justify-center gap-2 hover:opacity-75 mb-10 bg-gray-800 text-white bg-gradient-to-r from-white to-red-700 hover:from-white hover:to-red-600'>

                  Wishlist
                  <IoMdHeartEmpty size={20} />
                </button>
                <div>
                  <div className='text-lg font-bold mb-5'>
                      Description:
                  </div>
                  <div className='text-md mb-5'>
                   L900 PRO SE 
                    Channels: 4 Channel Gyro: 6 Axis Motor: Brushless Motor Remote control distance: 1200 meters (no interference, no occlusion) Charging time: about 4 hours flight: about 25 Minutes Transmission method: FPV Figure transmission distance: 500-600 meters (no interference, no occlusion) Photo recording mode: remote control + APP control Remote control battery: Lithium battery 3.7V 350mAh (included) Quadcopter Rechargeable Battery: 7.4V 2200mAh Lithium Battery (included) Quadcopter Size: 32*32*5cm (unfoldable),13*10*5cm (foldable) Quadcopter Weight: 220g -28 minutes of maximum flight time. The 7.4V 2200mAh high capacity smart battery provides up to 28 minutes of flight time. -Follow me mode. 
                  </div>
                  <div className='text-md mb-5'>
                   The drone will automatically follow and capture you wherever you move. Keep you in frame at all times, easier to get complex shots, allows you to fly and fly hands-free.With visual obstacle avoidance Package Included: 1 x Aircraft 1 x Remote Control 1 x Anti-aircraft Battery 2 x Spare Propeller 1 x Usb Charging Cable 1 x Screwdriver 1 x Manual
                  </div>
                </div>
            </div>
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
