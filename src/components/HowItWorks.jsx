import Container from '../ui/Container';
import { HiArrowRight } from 'react-icons/hi';
import { HiArrowDown } from 'react-icons/hi';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
        <div id="howitworks" className="py-14 md:py-20">
            <Container>
                <div className="overflow-x-hidden">
                    <motion.h3
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="font-bold text-3xl md:text-4xl max-w-[515px] mb-8 md:mb-12">
                        Як учасники ком’юніті заробляють з{' '}
                        <span className="text-orange">FrogCrypto</span>:
                    </motion.h3>
                </div>
                <ul className="flex flex-col gap-8 md:gap-12">
                    <li className="flex flex-col lg:flex-row items-stretch w-full gap-6 2xl:gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative h-[300px] lg:h-auto max-w-[350px] xl:max-w-[450px] 2xl:max-w-[508px] w-full rounded-[10px] overflow-hidden">
                            <img
                                src="/img/drops.png"
                                alt="drops"
                                className="absolute top-0 left-0 w-full rounded-2xl"
                            />
                        </motion.div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="lg:max-w-[250px] xl:max-w-[350px] 2xl:max-w-[450px] w-full h-full rounded-2xl bg-[#F4F4F4] p-3 2xl:p-6 flex flex-col gap-4 2xl:gap-8">
                                <h2 className="text-[32px] leading-[39px] 2xl:text-[44px] 2xl:leading-[54px] font-semibold">
                                    Що це?
                                </h2>
                                <p className="font-medium text-xl 2xl:text-[28px] 2xl:leading-[34px]">
                                    Ретро-активності та тестнети криптопроєктів,
                                    за які ви отримуєте токени
                                </p>
                                <div className="h-[2px] w-full bg-lightgreen" />
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-xl 2xl:text-[28px] 2xl:leading-[34px]">
                                    Використовуємо мультиакінг, щоб кратно
                                    збільшити прибуток
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="w-full">
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3">
                                    <div className="pt-0 xl:pt-6 sm:max-w-[364px] w-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="mb-1 xl:mb-4 text-[32px] leading-[39px] font-semibold">
                                                Для кого?
                                            </h3>
                                            <p className="font-medium text-2xl mb-3 sm:mb-6 xl:mb-10">
                                                Цей варіант вам підійде, якщо:
                                            </p>
                                        </div>
                                        <div className="w-full rounded-[24px] bg-orange px-4 h-[56px] flex items-center justify-end">
                                            <HiArrowRight className="hidden sm:block w-12 h-12 text-white" />
                                            <HiArrowDown className="w-10 h-10 text-white sm:hidden" />
                                        </div>
                                    </div>
                                    <div className="p-3 2xl:p-6 bg-orange rounded-2xl flex flex-col gap-3 xl:gap-4 w-full">
                                        <h2 className="text-[32px] leading-[39px] font-semibold sm:mb-3 2xl:mb-4">
                                            Маєте від:
                                        </h2>

                                        <h1 className="text-white text-[48px] 2xl:text-[54px] 2xl:leading-[56px] font-bold hidden sm:block">
                                            1-3
                                        </h1>
                                        <p className="text-xl 2xl:text-2xl font-medium hidden sm:block">
                                            Години вільного часу на день
                                        </p>
                                        <div className="sm:hidden flex gap-3 items-center">
                                            <h1 className="text-white text-[48px] 2xl:text-[54px] 2xl:leading-[56px] font-bold shrink-0">
                                                1-3
                                            </h1>
                                            <p className="text-xl 2xl:text-2xl font-medium">
                                                Години вільного часу на день
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative p-3 2xl:p-6 bg-orange rounded-2xl overflow-hidden">
                                    <div className="h-full relative z-[5]">
                                        <h2 className="text-[32px] leading-[39px] font-semibold mb-4">
                                            Маєте від:
                                        </h2>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-4">
                                            <h1 className="text-white text-[54px] leading-[56px] font-bold">
                                                50$
                                            </h1>
                                            <p className="text-2xl font-medium">
                                                Стартових інвестицій
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src="/img/money.png"
                                        alt="money"
                                        className="absolute -right-[20%] bottom-0 max-w-[80%] sm:max-w-[60%] opacity-40 pointer-events-none"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </li>

                    <li className="flex flex-col lg:flex-row items-stretch w-full gap-6 2xl:gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative h-[300px] lg:h-auto max-w-[350px] xl:max-w-[450px] 2xl:max-w-[508px] w-full rounded-[10px] overflow-hidden">
                            <img
                                src="/img/degen.png"
                                alt="degen"
                                className="absolute top-0 left-0 w-full rounded-2xl"
                            />
                        </motion.div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="lg:max-w-[250px] xl:max-w-[350px] 2xl:max-w-[450px] w-full h-full rounded-2xl bg-[#F4F4F4] p-3 2xl:p-6 flex flex-col gap-4 2xl:gap-8">
                                <h2 className="text-[32px] leading-[39px] 2xl:text-[44px] 2xl:leading-[54px] font-semibold">
                                    Що це?
                                </h2>
                                <p className="font-medium text-xl 2xl:text-[28px] 2xl:leading-[34px]">
                                    Найрізноманітніші швидкі спекулятивні дії,
                                    від торгівлі мемкоїнами, арбітражу крипти
                                </p>
                                <div className="h-[2px] w-full bg-lightgreen" />
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-xl 2xl:text-[28px] 2xl:leading-[34px]">
                                    Можна з легкістю повторювати наші дії на
                                    будь-якій комфортній вам платформі
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="w-full">
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3">
                                    <div className="pt-0 xl:pt-6 sm:max-w-[364px] w-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="mb-1 xl:mb-4 text-[32px] leading-[39px] font-semibold">
                                                Для кого?
                                            </h3>
                                            <p className="font-medium text-2xl mb-3 sm:mb-6 xl:mb-10">
                                                Цей варіант вам підійде, якщо:
                                            </p>
                                        </div>
                                        <div className="w-full rounded-[24px] bg-orange px-4 h-[56px] flex items-center justify-end">
                                            <HiArrowRight className="hidden sm:block w-12 h-12 text-white" />
                                            <HiArrowDown className="w-10 h-10 text-white sm:hidden" />
                                        </div>
                                    </div>
                                    <div className="p-3 2xl:p-6 bg-orange rounded-2xl flex flex-col gap-3 xl:gap-4 w-full">
                                        <h2 className="text-[32px] leading-[39px] font-semibold sm:mb-3 2xl:mb-4">
                                            Маєте від:
                                        </h2>

                                        <h1 className="text-white text-[48px] 2xl:text-[54px] 2xl:leading-[56px] font-bold hidden sm:block">
                                            1
                                        </h1>
                                        <p className="text-xl 2xl:text-2xl font-medium">
                                            Години вільного часу на{' '}
                                            <span className="text-white font-bold">
                                                ТИЖДЕНЬ
                                            </span>
                                        </p>
                                        <div className="sm:hidden flex gap-3 items-center">
                                            <h1 className="text-white text-[48px] 2xl:text-[54px] 2xl:leading-[56px] font-bold shrink-0">
                                                1
                                            </h1>
                                            <p className="text-xl 2xl:text-2xl font-medium">
                                                Години вільного часу на{' '}
                                                <span className="text-white font-bold">
                                                    ТИЖДЕНЬ
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative p-3 2xl:p-6 bg-orange rounded-2xl overflow-hidden">
                                    <div className="h-full  relative z-[5]">
                                        <h2 className="text-[32px] leading-[39px] font-semibold mb-4">
                                            Маєте від:
                                        </h2>
                                        <div className="flex flex-col gap-3 sm:gap-4">
                                            <h1 className="text-white text-[54px] leading-[56px] font-bold">
                                                100$
                                            </h1>
                                            <p className="text-2xl font-medium">
                                                Стартових інвестицій
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src="/img/coins.png"
                                        alt="coins"
                                        className="absolute -right-[20%] bottom-0 max-w-[80%] sm:max-w-[60%] opacity-40 pointer-events-none"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </li>

                    <li className="flex flex-col lg:flex-row items-stretch w-full gap-6 2xl:gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative h-[300px] lg:h-auto max-w-[350px] xl:max-w-[450px] 2xl:max-w-[508px] w-full rounded-[10px] overflow-hidden">
                            <img
                                src="/img/trade.png"
                                alt="trade"
                                className="absolute top-0 left-0 w-full rounded-2xl"
                            />
                        </motion.div>
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="lg:max-w-[250px] xl:max-w-[350px] 2xl:max-w-[450px] w-full h-full rounded-2xl bg-[#F4F4F4] p-3 2xl:p-6 flex flex-col gap-4 2xl:gap-8">
                                <h2 className="text-[32px] leading-[39px] 2xl:text-[44px] 2xl:leading-[54px] font-semibold">
                                    Що це?
                                </h2>
                                <p className="font-medium text-xl 2xl:text-[28px] 2xl:leading-[34px]">
                                    Ми ділимося своїми трейд-угодами, як
                                    інвестиційними так і ф’ючерсними
                                </p>
                                <div className="h-[2px] w-full bg-lightgreen" />
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-xl 2xl:text-[28px] 2xl:leading-[34px]">
                                    Можна з легкістю повторювати наші дії на
                                    будь-якій комфортній вам платформі
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="w-full">
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3">
                                    <div className="pt-0 xl:pt-6 sm:max-w-[364px] w-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="mb-1 xl:mb-4 text-[32px] leading-[39px] font-semibold">
                                                Для кого?
                                            </h3>
                                            <p className="font-medium text-2xl mb-3 sm:mb-6 xl:mb-10">
                                                Цей варіант вам підійде, якщо:
                                            </p>
                                        </div>
                                        <div className="w-full rounded-[24px] bg-orange px-4 h-[56px] flex items-center justify-end">
                                            <HiArrowRight className="hidden sm:block w-12 h-12 text-white" />
                                            <HiArrowDown className="w-10 h-10 text-white sm:hidden" />
                                        </div>
                                    </div>
                                    <div className="p-3 2xl:p-6 bg-orange rounded-2xl flex flex-col gap-3 xl:gap-4 w-full">
                                        <h2 className="text-[32px] leading-[39px] font-semibold sm:mb-3 2xl:mb-4">
                                            Маєте від:
                                        </h2>

                                        <h1 className="text-white text-[48px] 2xl:text-[54px] 2xl:leading-[56px] font-bold hidden sm:block">
                                            1-2
                                        </h1>
                                        <p className="text-xl 2xl:text-2xl font-medium">
                                            Години вільного часу на день
                                        </p>
                                        <div className="sm:hidden flex gap-3 items-center">
                                            <h1 className="text-white text-[48px] 2xl:text-[54px] 2xl:leading-[56px] font-bold shrink-0">
                                                1-2
                                            </h1>
                                            <p className="text-xl 2xl:text-2xl font-medium">
                                                Години вільного часу на день
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative p-3 2xl:p-6 bg-orange rounded-2xl overflow-hidden">
                                    <div className="h-full relative z-[5]">
                                        <h2 className="text-[32px] leading-[39px] font-semibold mb-4">
                                            Маєте від:
                                        </h2>
                                        <div className="flex flex-col gap-3 sm:gap-4">
                                            <h1 className="text-white text-[54px] leading-[56px] font-bold">
                                                200$
                                            </h1>
                                            <p className="text-2xl font-medium">
                                                Стартових інвестицій
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src="/img/coins.png"
                                        alt="coins"
                                        className="absolute -right-[20%] -bottom-[20%] max-w-[80%] opacity-40 pointer-events-none"
                                    />
                                    <img
                                        src="/img/money.png"
                                        alt="money"
                                        className="absolute -right-[20%] -bottom-[20%] max-w-[80%] blur-[2px] pointer-events-none"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </li>
                    {/* <li className="flex items-stretch w-full gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative max-w-[508px] w-full rounded-[10px] overflow-hidden">
                            <img
                                src="/img/degen.png"
                                alt="drops"
                                className="absolute top-0 left-0 w-full"
                            />
                        </motion.div>
                        <div className="flex items-center gap-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="max-w-[450px] w-full h-full rounded-2xl bg-[#F4F4F4] p-6 flex flex-col gap-8">
                                <h2 className="text-[44px] leading-[54px] font-semibold">
                                    Що це?
                                </h2>
                                <p className="font-medium text-[28px] leading-[34px]">
                                    Найрізноманітніші швидкі спекулятивні дії,
                                    від торгівлі мемкоїнами, арбітражу крипти
                                </p>
                                <div className="h-[2px] w-full bg-lightgreen" />
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-[28px] leading-[34px]">
                                    Можна з легкістю повторювати наші дії на
                                    будь-якій комфортній вам платформі
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="w-full">
                                <div className="flex gap-4 mb-3">
                                    <div className="pt-6 max-w-[364px] w-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="mb-4 text-[32px] leading-[39px] font-semibold">
                                                Для кого?
                                            </h3>
                                            <p className="font-medium text-2xl mb-10">
                                                Цей варіант вам підійде, якщо:
                                            </p>
                                        </div>
                                        <div className="w-full rounded-[24px] bg-orange px-4 h-[56px] flex items-center justify-end">
                                            <HiArrowRight className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-6 bg-orange rounded-2xl flex flex-col gap-4 w-full">
                                        <h2 className="text-[32px] leading-[39px] font-semibold mb-4">
                                            Маєте від:
                                        </h2>

                                        <h1 className="text-white text-[54px] leading-[56px] font-bold">
                                            1
                                        </h1>
                                        <p className="text-2xl font-medium">
                                            Години вільного часу на{' '}
                                            <span className="font-bold text-white">
                                                ТИЖДЕНЬ
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative p-6 bg-orange rounded-2xl overflow-hidden">
                                    <div className="h-full">
                                        <h2 className="text-[32px] leading-[39px] font-semibold mb-4">
                                            Маєте від:
                                        </h2>

                                        <h1 className="text-white text-[54px] leading-[56px] font-bold mb-4">
                                            100$
                                        </h1>
                                        <p className="text-2xl font-medium">
                                            Стартових інвестицій
                                        </p>
                                    </div>
                                    <img
                                        src="/img/coins.png"
                                        alt="coins"
                                        className="absolute -right-[20%] -bottom-[20%] max-w-[80%] opacity-40 pointer-events-none"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </li>

                    <li className="flex items-stretch w-full gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative max-w-[508px] w-full rounded-[10px] overflow-hidden">
                            <img
                                src="/img/trade.png"
                                alt="trade"
                                className="absolute top-0 left-0 w-full"
                            />
                        </motion.div>
                        <div className="flex items-center gap-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="max-w-[450px] w-full h-full rounded-2xl bg-[#F4F4F4] p-6 flex flex-col gap-8">
                                <h2 className="text-[44px] leading-[54px] font-semibold">
                                    Що це?
                                </h2>
                                <p className="font-medium text-[28px] leading-[34px]">
                                    Ми ділимося своїми трейд-угодами, як
                                    інвестиційними так і ф’ючерсними
                                </p>
                                <div className="h-[2px] w-full bg-lightgreen" />
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-[28px] leading-[34px]">
                                    Можна з легкістю повторювати наші дії на
                                    будь-якій комфортній вам платформі
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="w-full">
                                <div className="flex gap-4 mb-3">
                                    <div className="pt-6 max-w-[364px] w-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="mb-4 text-[32px] leading-[39px] font-semibold">
                                                Для кого?
                                            </h3>
                                            <p className="font-medium text-2xl mb-10">
                                                Цей варіант вам підійде, якщо:
                                            </p>
                                        </div>
                                        <div className="w-full rounded-[24px] bg-orange px-4 h-[56px] flex items-center justify-end">
                                            <HiArrowRight className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-6 bg-orange rounded-2xl flex flex-col gap-4 w-full">
                                        <h2 className="text-[32px] leading-[39px] font-semibold mb-4">
                                            Маєте від:
                                        </h2>

                                        <h1 className="text-white text-[54px] leading-[56px] font-bold">
                                            1-2
                                        </h1>
                                        <p className="text-2xl font-medium">
                                            Години вільного часу на день
                                        </p>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative p-6 bg-orange rounded-2xl overflow-hidden">
                                    <div className="h-full">
                                        <h2 className="text-[32px] leading-[39px] font-semibold mb-4">
                                            Маєте від:
                                        </h2>

                                        <h1 className="text-white text-[54px] leading-[56px] font-bold mb-4">
                                            200$
                                        </h1>
                                        <p className="text-2xl font-medium">
                                            Стартових інвестицій
                                        </p>
                                    </div>
                                    <img
                                        src="/img/coins.png"
                                        alt="coins"
                                        className="absolute -right-[20%] -bottom-[20%] max-w-[80%] opacity-40 pointer-events-none"
                                    />
                                    <img
                                        src="/img/money.png"
                                        alt="money"
                                        className="absolute -right-[20%] -bottom-[20%] max-w-[80%] blur-[2px] pointer-events-none"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </li> */}
                </ul>
            </Container>
        </div>
    );
};

export default HowItWorks;
