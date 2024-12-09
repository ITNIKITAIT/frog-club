import Button from '../ui/Button';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Expectations = () => {
    return (
        <div className="py-14 md:py-10">
            <Container>
                <div className="w-full flex flex-col lg:flex-row gap-[20px] 2xl:gap-[180px] justify-between">
                    <div className="flex flex-col justify-between overflow-x-hidden lg:overflow-x-visible">
                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-6 bg-darkblue lg:max-w-[520px] rounded-2xl">
                            <p className="text-white font-semibold text-[32px] leading-[39px] sm:text-[36px] sm:leading-[44px]">
                                Що вас очікує у нашому приватному ком’юніті{' '}
                                <span className="text-orange">
                                    FrogPrivateClub
                                </span>
                            </p>
                        </motion.div>
                        <Logo />
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-6 max-w-[1080px] w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="relative pt-6 pl-3 md:p-6 bg-[#F4F4F4] md:h-[180px] rounded-2xl overflow-hidden">
                            <div className="flex flex-col justify-between gap-8 md:gap-0 h-full relative z-[2]">
                                <p className="text-2xl font-semibold max-w-[520px]">
                                    Покрокові інструкції, щотижневі стріми,
                                    поради від{' '}
                                    <span className="text-orange">
                                        досвідчених криптанів
                                    </span>
                                </p>
                                <Button className="!bg-[#030332] hover:!bg-[#00005E] active:!bg-darkblue w-[95%] sm:w-fit !p-4 mb-6 sm:mb-0">
                                    Дізнатися детальніше
                                </Button>
                            </div>
                            <img
                                src="/img/work1.png"
                                alt="work"
                                className="md:absolute md:right-0 md:bottom-0 max-w-[100%] md:max-w-[50%] z-[0]"
                            />
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="relative pt-6 pl-3 md:p-6 rounded-2xl bg-darkblue overflow-hidden">
                            <div className="relative z-[2]">
                                <h2 className="text-white font-bold text-3xl mb-5">
                                    БОНУС
                                </h2>
                                <div className="flex gap-[60px] items-end">
                                    <div className="md:max-w-[450px] flex flex-col gap-5 mr-3">
                                        <div className="rounded-2xl text-white bg-orange p-3 text-xl sm:text-2xl font-semibold">
                                            Знижені ціни на наші продукти
                                            включаючи магазин розхідників
                                            <p className="block mt-4 md:hidden">
                                                Безкоштовний доступ до дашборду
                                                із різноманітними інструкціями
                                                та гайдами
                                            </p>
                                        </div>
                                        <p className="text-xl mb-5 md:mb-0 max-w-[400px] text-white">
                                            Це ваш легкий та швидкий старт в
                                            заробітку на крипті
                                        </p>
                                    </div>
                                    <div className="hidden md:block rounded-2xl text-white bg-orange p-3 text-lg font-semibold max-w-[400px]">
                                        Безкоштовний доступ до дашборду із
                                        різноманітними інструкціями та гайдами
                                    </div>
                                </div>
                            </div>
                            <img
                                src="/img/work2.png"
                                alt="work"
                                className="md:absolute right-0 bottom-0 md:max-w-[50%] lg:max-w-[40%] z-[0]"
                            />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Expectations;
