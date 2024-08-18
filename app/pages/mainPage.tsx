import Image from 'next/image';
import Link from 'next/link';

import inventaryImage from '../assets/images/inventary.png';
import avatarImage from '../assets/images/avatar.png';
import ratingImage from '../assets/images/userRating.png';
import friendsImage from '../assets/images/friends.png';
import backgroundImage from '../assets/images/bg.png';
import nextImage from '../assets/images/next.png';
import infoImage from '../assets/images/info.png';

const MainPage = () => {
  return (    
      <>      
      <div className="flex justify-between mb-4 sm:mb-6">
        <Image src={infoImage} alt="Информация" className='w-6 h-6 mt-1 opacity-80'/>
        <button className="flex items-center bg-[#F88725] rounded-full px-4 py-2.5 gap-1 opacity-80">
          <span className="text-white text-sm sm:text-base md:text-xl">Инвентарь</span>
          <Image src={inventaryImage} alt="Инвентарь" className="w-6 sm:w-8 md:w-10" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-3">
        <div className="text-white text-xl md:text-4xl font-medium">Валя Камбековна</div>
        <div className="bg-[#151720] p-5 v-xs:w-2/5 xs:w-3/5  rounded-xl flex flex-col items-center gap-1">
          <div className="w-full">
            <Image src={avatarImage} alt="Аватар" />
          </div>
          <div className="w-10/12 border-t border-white my-4"></div>
          <div className="w-10/12">
            <Image src={ratingImage} alt="Рейтинг" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="text-white font-medium text-4xl mb-4">8 324 Elo</div>
        <button className="w-full bg-[#F88725] text-white py-4 px-4 rounded-full font-medium text-2xl mb-3">Играть</button>
        <div className="flex flex-row w-full gap-3">
          
          <Link href="/tasks" className="w-7/12 md:w-8/12 bg-[#151720] p-4 md:p-6 rounded-xl flex flex-col relative overflow-hidden gap-1">
          {/* <div className="w-7/12 md:w-8/12 bg-[#151720] p-4 md:p-6 rounded-xl flex flex-col relative overflow-hidden gap-1"> */}
            <div className="flex flex-row gap-2 md:gap-4">
              <span className="text-white font-regular text-2xl md:text-4xl">Задания</span>
              <Image src={nextImage} alt="Задания" className="w-5 h-5 mt-1.5" />
            </div>
            <span className="text-white text-xs font-thin opacity-40 w-40">Выполняйте задания и получайте Elo</span>
            <div className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                opacity: 0.2,
                transform: 'translateX(80px)',
              }}
            ></div>
          {/* </div> */}
          </Link>

          <div className="flex justify-center w-5/12 bg-[#151720] p-4 rounded-xl flex flex-col items-center gap-1">
            <div className="flex flex-row">
              <Image src={friendsImage} alt="Друзья" className="w-10 z-30 " />
              <Image src={friendsImage} alt="Друзья" className="w-10 z-20 -ml-4" />
              <Image src={friendsImage} alt="Друзья" className="w-10 z-10 -ml-4" />
            </div>
            <div className="relative">
              <span className="text-white text-base">Друзья</span>
            </div>
          </div>

        </div>
      </div>
      
      </>
          
  );
}

export default MainPage;
