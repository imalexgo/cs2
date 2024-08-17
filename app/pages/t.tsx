import Head from 'next/head';
import Image from 'next/image';
import inventaryImage from '../app/assets/images/inventary.png';
import avatarImage from '../app/assets/images/avatar.png';
import ratingImage from '../app/assets/images/rating.png';
import friendsImage from '../app/assets/images/friends.png';
import backgroundImage from '../app/assets/images/bg.png';
// import QRCode from 'qrcode.react'; // Установите qr-code-react для генерации QR-кода

export default function Home() {
  return (

      <div className="bg-[#212328] h-screen w-screen p-5 flex flex-col justify-between">
        {/* Первый элемент */}
        <div className="flex justify-end">
          <button className="bg-[#F88725] text-white py-3 px-4 rounded-full flex items-center justify-center">
            <span className="mr-2">Инвентарь</span>
            <Image src={inventaryImage} width={20} height={20} />
          </button>
        </div>

        {/* Второй элемент */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="text-white text-2xl font-medium mb-4">Валя Камбековна</div>
          <div className="bg-[#151720] p-6 rounded-xl flex flex-col items-center">
            {/* Первый блок: аватарка */}
            <Image src={avatarImage} width={150} height={150} />
            {/* Разделительная линия */}
            <div className="w-10/12 border-t border-white my-8"></div>
            {/* Второй блок: изображение */}
            <div className="w-10/12">
              <Image src={ratingImage} width={150} height={100} />
            </div>
          </div>
        </div>

        {/* Третий элемент */}
        <div className="flex flex-col items-center">
          <div className="text-white font-medium text-4xl mb-4 gap-10">8 324 Elo</div>
          <button className="w-full bg-[#F88725] text-white py-5 px-4 rounded-full font-medium text-2xl mb-4">Играть</button>
          <div className="flex w-full gap-2">
            <div className="w-2/3 bg-[#151720] p-4 rounded-xl flex flex-col relative overflow-hidden	">
              <div>
                <span>Задания</span>
              </div>
              <span>Выполняйте задания и получайте Elo</span>

              <div className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${backgroundImage.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right',
                  backgroundSize: 'cover',
                  opacity: ,
                  transform: 'translateX(60px)',
                }} >
              </div>
                
            </div>
            <div className="w-1/3 bg-[#151720] p-4 rounded-xl flex flex-col">
              <div className="flex flex-row w-full items-center">
                <div className="w-full relative">
                <Image src={friendsImage} width={0} height={0} className="w-auto h-auto rounded-full absolute z-30" sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 10vw" style={{ left: '0' }} />
                <Image src={friendsImage} width={0} height={0} className="w-auto h-auto rounded-full absolute z-20" sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 10vw" style={{ left: '30%' }} />
                <Image src={friendsImage} width={0} height={0} className="w-auto h-auto rounded-full absolute z-10" sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 10vw" style={{ left: '60%' }} />
                </div>
              </div>
              <span className="text-white font-normal mt-10 text-md text-center">Друзья</span>
            </div>
          </div>
        </div>

        {/* Уведомление для десктопных устройств */}
        {/* <div className="absolute inset-0 flex justify-center items-center bg-[#212328] text-white text-center p-4">
          <div>
            <p>Это приложение предназначено только для мобильных устройств. Пожалуйста, отсканируйте QR-код для доступа.</p>
            <QRCode value="https://example.com" size={128} className="mt-4" />
          </div>
        </div> */}
      </div>

  );
}
