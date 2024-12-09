import Container from '../ui/Container';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="py-10 bg-darkblue">
            <Container>
                <div className="flex flex-col 2xl:flex-row items-center justify-between gap-16">
                    <img
                        src="/img/logo.png"
                        alt="logo"
                        className="max-w-[120px] 2xl:max-w-[160px]"
                    />
                    <nav className="items-center flex flex-col md:flex-row text-2xl gap-12 md:gap-[30px] 2xl:gap-[80px]">
                        <a
                            href="/#howitworks"
                            className="font-medium text-white">
                            Як це працює
                        </a>
                        <a
                            href="/#whoyouare"
                            className="font-medium text-white">
                            Для кого
                        </a>
                        <a href="/#prices" className="font-medium text-white">
                            Тарифи
                        </a>
                        <a
                            href="/#detailinfo"
                            className="font-medium text-white">
                            Що вас чекає
                        </a>
                    </nav>
                    <ul className="flex items-center gap-8">
                        <FaTelegram className="w-12 h-12 text-white hover:text-orange active:text-lightgreen cursor-pointer transition-all" />
                        <FaXTwitter className="w-12 h-12 text-white hover:text-orange active:text-lightgreen cursor-pointer transition-all" />
                        <FaYoutube className="w-12 h-12 text-white hover:text-orange active:text-lightgreen cursor-pointer transition-all" />
                        <FaDiscord className="w-12 h-12 text-white hover:text-orange active:text-lightgreen cursor-pointer transition-all" />
                    </ul>
                </div>
                <div className="mt-9">
                    <p className="text-center text-[#A6A6A6] text-xl">
                        &copy; {new Date().getFullYear()} Crypto Frog Private.
                        Всі права захищені
                    </p>
                    <div className="text-[#A6A6A6] mt-9 md:mt-4 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-9">
                        <p className="text-xl underline ">Умови використання</p>
                        <p className="text-xl underline ">
                            Політика конфіденційності
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
