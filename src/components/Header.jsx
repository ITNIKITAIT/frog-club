import Conatiner from '../ui/Container';
import Button from '../ui/Button';
import { IoMdMenu } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const clickOpen = () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const clickClose = () => {
        setOpen(false);
        document.body.style.overflow = 'visible';
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                clickClose();
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () =>
            document.removeEventListener('mousedown', handleOutsideClick);
    }, [open]);

    return (
        <header className="py-[10px] bg-darkblue sticky top-0 z-10">
            <Conatiner className>
                <div className="flex items-center justify-between">
                    <img
                        src="/img/logo.png"
                        alt="logo"
                        className="max-h-[40px] sm:max-h-[60px] cursor-pointer"
                    />
                    <nav className="items-center hidden md:flex gap-[30px] lg:gap-[80px]">
                        <a
                            href="/#howitworks"
                            className="font-medium text-base text-white">
                            Як це працює
                        </a>
                        <a
                            href="/#whoyouare"
                            className="font-medium text-base text-white">
                            Для кого
                        </a>
                        <a
                            href="/#prices"
                            className="font-medium text-base text-white">
                            Тарифи
                        </a>
                        <a
                            href="/#detailinfo"
                            className="font-medium text-base text-white">
                            Що вас чекає
                        </a>
                    </nav>
                    <Button className="!p-[16px] hidden md:flex">
                        Забронювати місце
                    </Button>
                    <IoMdMenu
                        className="text-white w-10 h-10 md:hidden"
                        onClick={clickOpen}
                    />
                    <div
                        className={`fixed inset-0 z-20 flex transition-all ${
                            open
                                ? 'bg-black/50'
                                : 'bg-transparent pointer-events-none'
                        }`}>
                        <div
                            ref={menuRef}
                            className={`fixed flex flex-col justify-between top-0 right-0 h-full w-full max-w-[300px] bg-darkblue p-6 shadow-lg transition-transform duration-300 ${
                                open ? 'translate-x-0' : 'translate-x-full'
                            }`}>
                            <IoMdClose
                                onClick={clickClose}
                                className="text-white w-8 h-8 cursor-pointer absolute top-4 right-4"
                            />

                            <nav className="flex flex-col gap-6 mt-8">
                                <img
                                    src="/img/logo.png"
                                    alt="logo"
                                    className="max-h-[60px] max-w-[60px] cursor-pointer"
                                />
                                <a
                                    href="/#howitworks"
                                    className="font-medium text-2xl text-white"
                                    onClick={clickClose}>
                                    Як це працює
                                </a>
                                <a
                                    href="/#whoyouare"
                                    className="font-medium text-2xl text-white"
                                    onClick={clickClose}>
                                    Для кого
                                </a>
                                <a
                                    href="/#prices"
                                    className="font-medium text-2xl text-white"
                                    onClick={clickClose}>
                                    Тарифи
                                </a>
                                <a
                                    href="/#detailinfo"
                                    className="font-medium text-2xl text-white"
                                    onClick={clickClose}>
                                    Що вас чекає
                                </a>
                            </nav>

                            <p className="text-sm md:text-base text-white max-w-[540px] mt-10">
                                Заробляй на дропах, мемах, інвестиціях, NFT,
                                інсайдерських колах. Долучайся до сильної
                                спільности, яка допоможе дійти тобі до
                                результату
                            </p>
                        </div>
                    </div>
                </div>
            </Conatiner>
        </header>
    );
};

export default Header;
