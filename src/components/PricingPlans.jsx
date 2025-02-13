'use client'

import Heading from './sub/Heading';
import {pricingPlans, checkIcon} from '@/assets';
import {motion} from 'framer-motion';

const PricingPlans = () => {
  return (
    <div
    id='education'
    className='py-20'>
      <Heading text={'Educations'}/>
      <div className='h-full flex lg:flex-col items-center justify-between gap-8'>
        {pricingPlans.map((plan,i)=>(
        <motion.div 
        initial = {{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true}}
        whileHover={{scale:1.05}}
        transition={{duration:0.4, delay: i*0.2,
          scale:{duraiton:0.15}
        }}
        key={i}
        className={`sm:w-[270px] flex flex-col gap-y-6 p-6 
        border border-blue-400 rounded-xl text-gray-600 
        dark:bg-zinc-700 transition-color
        ${
          i === 1 ? "w-[370px] xl:w-[320px] bg-white" : 'w-[350px] xl:w-[300px] bg-zinc-50'
        }`}>
        <h1 className='text-3xl lg:text-lg font-light tracking-wide text-center
        dark:text-white transition-color'>{plan.title}</h1>
        <span className='text-2xl lg:text-xl text-center
        dark:text-white transition-color'>{plan.pricing}</span>
        <ul className='flex flex-col gap-y-2'>
          {plan.features.map((feature,j)=>(
            <div
            key={j}
            className='flex items-center gap-x-3'>
          <span className={`text-2xl ${
            i === 1 ? 'text-blue-300' : 'text-yellow-500'
          }`}>
           {checkIcon}
          </span>
         <li className='text-[15px] font-light tracking-wide
         dark:text-white transition-color'>{feature}</li>
         </div>
          ))}
         
        </ul>
         </motion.div>
        ))}
       
      </div>
    </div>
  )
}

export default PricingPlans
