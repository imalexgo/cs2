'use client'

import Image from 'next/image';
import inventaryImage from '../app/assets/images/inventary.png';
import avatarImage from '../app/assets/images/avatar.png';
import ratingImage from '../app/assets/images/rating.png';
import friendsImage from '../app/assets/images/friends.png';
import backgroundImage from '../app/assets/images/bg.png';
import nextImage from '../app/assets/images/next.png';

export default function Home() {
  return (
  <main className='bg-[#212328] h-screen w-screen flex flex-col justify-between p-5'>
        
    {/* Верхний блок */}
    <div className="flex justify-end">

      <button className="bg-[#F88725] rounded-full px-3 md:px-10 py-2.5 md:py-4 flex flex-row gap-1">
          <span className="text-white font-normal text-base md:text-xl">Инвентарь</span>
          <Image src={inventaryImage} width={0} height={0} alt='Инвентарь' className='w-full md:h-full mt-0.5'/>
        </button>
    </div>

    {/* Центральный блок */}
    <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-6">
      
      <div className="text-white text-2xl md:text-4xl font-medium">Валя Камбековна</div>
        <div className="bg-[#151720] py-6 md:py-10 px-4 md:px-8 w-3/6 md:w-2/6 rounded-xl flex flex-col items-center">
          {/* Первый блок: аватарка */}
          <div className="w-full">
            <Image src={avatarImage} width={0} height={0} alt='Аватар' />
          </div>
          {/* Разделительная линия */}
          <div className="w-10/12 border-t border-white my-6"></div>
          {/* Второй блок: изображение */}
          <div className="w-10/12">
            <Image src={ratingImage} width={0} height={0} alt='Рейтинг'/>
          </div>
        </div>
      </div>  

      <div className="flex flex-col items-center gap-2 md:gap-4">
        <div className="text-white font-medium text-4xl md:text-6xl mb-4">8 324 Elo</div>
        <button className="w-full bg-[#F88725] text-white py-5 md:py-9 px-4 rounded-full font-medium text-2xl md:text-4xl mb-4">Играть</button>
        <div className="flex flex-row w-full gap-4">

          <div className="w-7/12 md:w-8/12 bg-[#151720] p-4 md:p-6 rounded-xl flex flex-col relative overflow-hidden gap-1">
                <div className="flex flex-row gap-2 md:gap-4">
                  <span className='text-white font-regular text-2xl md:text-4xl'>Задания</span>
                  <Image src={nextImage} width={0} height={0} alt='Задания' className='w-5 h-5 md:w-8 md:h-8 mt-1.5 md:mt-1' />
                </div>
                <span className='text-white font-thin text-xs md:text-base w-40 opacity-40'>Выполняйте задания и получайте Elo</span>

                <div className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${backgroundImage.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    backgroundSize: 'cover',
                    opacity: 0.2,
                    transform: 'translateX(80px)',
                  }} >
                </div>
            </div>

          <div className='w-5/12 md:w-4/12 bg-[#151720] p-4 md:p-6 rounded-xl flex flex-col items-center gap-1'>
            <div className="flex flex-row relative">
              <Image src={friendsImage} width={0} height={0} alt='Друзья' className="w-10 md:w-14 abssolute z-30" />
              <Image src={friendsImage} width={0} height={0} alt='Друзья' className="w-10 md:w-14 abssolute z-20 -ml-4" />
              <Image src={friendsImage} width={0} height={0} alt='Друзья' className="w-10 md:w-14 abssolute z-10 -ml-4" />
            </div>
            <div className='relative'>
              <span className='text-white text-base md:text-2xl'>Друзья</span>
            </div>
          </div>

        </div>
      </div>

  </main>
  );
}
