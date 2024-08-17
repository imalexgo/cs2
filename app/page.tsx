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
  <main className='bg-[#212328] min-h-screen w-screen flex flex-col justify-between p-5 sm:p-6'>
        
    {/* Верхний блок */}
    <div className="flex justify-end mb-4 sm:mb-6">
      <button className="flex items-center bg-[#F88725] rounded-full px-4 py-2.5 gap-1">
          <span className="text-white text-sm sm:text-base md:text-xl">Инвентарь</span>
          <Image src={inventaryImage} alt='Инвентарь' className='w-full'/>
        </button>
    </div>

    {/* Центральный блок */}
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <div className="text-white text-xl md:text-4xl font-medium">Валя Камбековна</div>
        <div className="bg-[#151720] p-5 w-2/5 rounded-xl flex flex-col items-center gap-1">
          {/* Первый блок: аватарка */}
          <div className="w-full">
            <Image src={avatarImage} alt='Аватар' />
          </div>
          {/* Разделительная линия */}
          <div className="w-10/12 border-t border-white my-4"></div>
          {/* Второй блок: изображение */}
          <div className="w-11/12">
            <Image src={ratingImage} alt='Рейтинг'/>
          </div>
        </div>
      </div>  

      <div className="flex flex-col items-center gap-1">
        <div className="text-white font-medium text-4xl mb-4">8 324 Elo</div>
        <button className="w-full bg-[#F88725] text-white py-4 px-4 rounded-full font-medium text-2xl mb-3">Играть</button>
        <div className="flex flex-row w-full gap-3">

          <div className="w-7/12 md:w-8/12 bg-[#151720] p-4 md:p-6 rounded-xl flex flex-col relative overflow-hidden gap-1">
                <div className="flex flex-row gap-2 md:gap-4">
                  <span className='text-white font-regular text-2xl md:text-4xl'>Задания</span>
                  <Image src={nextImage} alt='Задания' className='w-5 h-5 mt-1.5' />
                </div>
                <span className='text-white text-xs font-thin opacity-40 w-40'>Выполняйте задания и получайте Elo</span>

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

          <div className='w-5/12 bg-[#151720] p-4 rounded-xl flex flex-col items-center gap-1'>
            <div className="flex flex-row relative">
              <Image src={friendsImage} alt='Друзья' className="w-10 abssolute z-30" />
              <Image src={friendsImage} alt='Друзья' className="w-10 abssolute z-20 -ml-4" />
              <Image src={friendsImage} alt='Друзья' className="w-10 abssolute z-10 -ml-4" />
            </div>
            <div className='relative'>
              <span className='text-white text-base'>Друзья</span>
            </div>
          </div>

        </div>
      </div>

  </main>
  );
}
