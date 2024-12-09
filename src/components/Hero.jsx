import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Conatiner from '../ui/Container';

const Hero = () => {
    return (
        <div className="py-4 md:py-10">
            <Conatiner>
                <div className="md:p-10 px-2 py-8 w-full flex flex-col gap-6 sm:gap-10 rounded-[16px] bg-darkblue relative">
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}>
                        <p className="text-white text-center sm:text-left text-[32px] leading-[36px] sm:text-[42px] sm:leading-[48px]  md:text-[60px] md:leading-[73px] max-w-[1500px] font-semibold">
                            Почни лутати від{' '}
                            <span className="text-lightgreen">
                                1000$ на місяць окремо від основної роботи
                            </span>
                            , разом із приватним ком’юніті{' '}
                            <span className="text-lightgreen">
                                FrogPrivateClub
                            </span>
                        </p>
                        <p className="text-center sm:text-left tetx-base sm:text-xl md:text-2xl text-white max-w-[540px] mt-10">
                            Заробляй на дропах, мемах, інвестиціях, NFT,
                            інсайдерських колах. Долучайся до сильної
                            спільности, яка допоможе дійти тобі до результату
                        </p>
                    </motion.div>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Button className="w-full md:w-fit">
                            Забронювати місце
                        </Button>
                        <Button className="w-full md:w-fit flex items-center justify-center !bg-transparent hover:!bg-lightgreen border-2 border-lightgreen !py-[16px]">
                            <div className="flex items-center gap-3">
                                Зв’язатись з менеджером
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_66_6)">
                                        <path
                                            d="M22 17.002C21.9996 18.3696 21.5321 19.696 20.675 20.7616C19.8179 21.8273 18.6226 22.5683 17.287 22.862L16.649 20.948C17.2332 20.8518 17.7888 20.6271 18.2758 20.2903C18.7627 19.9534 19.1689 19.5128 19.465 19H17C16.4696 19 15.9609 18.7893 15.5858 18.4142C15.2107 18.0391 15 17.5304 15 17V13C15 12.4696 15.2107 11.9609 15.5858 11.5858C15.9609 11.2107 16.4696 11 17 11H19.938C19.694 9.0669 18.7529 7.28927 17.2914 6.00068C15.8299 4.71208 13.9484 4.00108 12 4.00108C10.0516 4.00108 8.17007 4.71208 6.70857 6.00068C5.24708 7.28927 4.30603 9.0669 4.062 11H7C7.53043 11 8.03914 11.2107 8.41421 11.5858C8.78929 11.9609 9 12.4696 9 13V17C9 17.5304 8.78929 18.0391 8.41421 18.4142C8.03914 18.7893 7.53043 19 7 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12V17.002ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_66_6">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </Button>
                    </div>
                    <img
                        src="/img/hero-bg.png"
                        alt="hero"
                        className="absolute right-0 bottom-0 w-auto md:w-full h-full pointer-events-none object-cover"
                    />
                </div>
            </Conatiner>
        </div>
    );
};

export default Hero;
