import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import inventaryImage from '../assets/images/inventary.png';
import avatarImage from '../assets/images/avatar.png';
import ratingImage from '../assets/images/userRating.png';
import friendsImage from '../assets/images/friends.png';
import backgroundImage from '../assets/images/bg.png';
import nextImage from '../assets/images/next.png';
import infoImage from '../assets/images/info.png';

import Popup from "@/app/components/Popup"; 

const MainPage = () => {

  const [isInventaryPopupOpen, setIsInventaryPopupOpen] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

  const toggleInventrayPopup = () => {
    setIsInventaryPopupOpen(!isInventaryPopupOpen);
  };

  const toggleInfoPopup = () => {
    setIsInfoPopupOpen(!isInfoPopupOpen);
  };

  return (    
      <>      
      <div className="flex justify-between mb-4 sm:mb-6">
        <Image onClick={toggleInfoPopup} src={infoImage} alt="Информация" className='w-6 h-6 mt-1 opacity-80'/>
        <button onClick={toggleInventrayPopup} className="flex items-center bg-[#F88725] rounded-full px-4 py-2.5 gap-1 opacity-80" type="button">
          <span className="text-white text-sm sm:text-base md:text-xl">Инвентарь</span>
          <Image src={inventaryImage} alt="Инвентарь" className="w-6 sm:w-8 md:w-10" />
        </button>
      </div>

      {/* Всплывающее окно */}
      <Popup isOpen={isInventaryPopupOpen} onClose={toggleInventrayPopup} title="Инвентарь" buttonText="Ок, понял!">
        <p className="text-white">Информация.</p>
      </Popup>

      {/* Всплывающее окно */}
      <Popup isOpen={isInfoPopupOpen} onClose={toggleInfoPopup} title="Информация" buttonText="Закрыть.">
        <p className="text-white">Информация.</p>
      </Popup>      

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

          <Link href="/friends" className="flex justify-center w-5/12 bg-[#151720] p-4 rounded-xl flex flex-col items-center gap-1">
            <div className="flex flex-row">
              <Image src={friendsImage} alt="Друзья" className="w-10 z-30 " />
              <Image src={friendsImage} alt="Друзья" className="w-10 z-20 -ml-4" />
              <Image src={friendsImage} alt="Друзья" className="w-10 z-10 -ml-4" />
            </div>
            <div className="relative">
              <span className="text-white text-base">Друзья</span>
            </div>
          </Link>

        </div>
      </div>


      {/* <!-- Main modal --> */}
      <div id="inventary-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Terms of Service
                      </h3>
                      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-4 md:p-5 space-y-4">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                      </p>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                      <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                  </div>
              </div>
          </div>
      </div>
      
      </>
          
  );
}

export default MainPage;
