import Button from '../ui/Button';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { motion } from 'framer-motion';

const Prices = () => {
    return (
        <div id="prices" className="py-14 md:py-20">
            <Container>
                <div className="flex items-center lg:mb-6 overflow-x-hidden gap-12">
                    <Logo />
                    <motion.h3
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="font-bold text-3xl md:text-4xl max-w-[515px] mb-8 lg:mb-0">
                        Тарифи участі:
                    </motion.h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-white bg-gradient-to-r from-[#030332] to-black px-3 py-6 lg:p-9 rounded-2xl flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex justify-between items-center w-full">
                            <p className="text-[28px] leading-[30px] lg:text-[32px] lg:leading-[39px] font-bold">
                                1 місяць
                            </p>
                            <p className="text-2xl lg:text-4xl font-medium">
                                40$
                            </p>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-[40px] lg:text-[54px] lg:text-start text-center leading-[56px] font-bold">
                            40$ / місяць
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4">
                            <Button>Придбати підписку</Button>
                            <Button className="w-full flex items-center justify-center !bg-transparent hover:!bg-lightgreen border-2 border-lightgreen">
                                Зв’язатись з менеджером
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-white bg-gradient-to-r from-[#030332] to-black px-3 py-6 lg:p-9 rounded-2xl flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-between items-center w-full">
                            <p className="text-[28px] leading-[30px] lg:text-[32px] lg:leading-[39px] font-bold">
                                3 місяці
                            </p>
                            <p className="text-2xl lg:text-4xl font-medium">
                                105$
                            </p>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-[40px] lg:text-[54px] lg:text-start text-center leading-[56px] font-bold">
                            35$ / місяць
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4">
                            <Button>Придбати підписку</Button>
                            <Button className="w-full flex items-center justify-center !bg-transparent hover:!bg-lightgreen border-2 border-lightgreen">
                                Зв’язатись з менеджером
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-white bg-gradient-to-r from-[#030332] to-black px-3 py-6 lg:p-9 rounded-2xl flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex justify-between items-center w-full">
                            <p className="text-[28px] leading-[30px] lg:text-[32px] lg:leading-[39px] font-bold">
                                6 місяців
                            </p>
                            <p className="text-2xl lg:text-4xl font-medium">
                                180$
                            </p>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-[40px] lg:text-[54px] lg:text-start text-center leading-[56px] font-bold">
                            30$ / місяць
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4">
                            <Button>Придбати підписку</Button>
                            <Button className="w-full flex items-center justify-center !bg-transparent hover:!bg-lightgreen border-2 border-lightgreen">
                                Зв’язатись з менеджером
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white bg-gradient-to-r from-[#743D00] via-black to-[#743D00] px-3 py-6 lg:p-9 rounded-2xl flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex justify-between items-center w-full">
                            <p className="text-[28px] leading-[30px] lg:text-[32px] lg:leading-[39px] font-bold">
                                12 місяців
                            </p>
                            <p className="text-2xl lg:text-4xl font-medium">
                                300$
                            </p>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="text-[40px] lg:text-[54px] lg:text-start text-center leading-[56px] font-bold">
                            25$ / місяць
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4">
                            <Button>Придбати підписку</Button>
                            <Button className="w-full flex items-center justify-center !bg-transparent hover:!bg-lightgreen border-2 border-lightgreen">
                                Зв’язатись з менеджером
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
};

export default Prices;
