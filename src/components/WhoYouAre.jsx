import Logo from '../ui/Logo';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { RiQuestionMark } from 'react-icons/ri';
import { motion } from 'framer-motion';

const WhoYouAre = () => {
    return (
        <div id="whoyouare" className="py-14 md:py-20">
            <Container>
                <div className="flex justify-between items-center lg:mb-6 overflow-x-hidden">
                    <motion.h3
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="font-bold text-3xl md:text-4xl max-w-[515px] mb-8 md:mb-12">
                        Чекаємо в{' '}
                        <span className="text-orange">FrogPrivateClub</span>{' '}
                        якщо ви:
                    </motion.h3>
                    <Logo />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-[54px]">
                    <motion.div
                        initial={{ opacity: 0, y: 250 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-darkblue to-black py-6 px-3 lg:p-9 gap-6 rounded-2xl text-white min-h-[250px] md:min-h-[320px] flex flex-col justify-between">
                        <h2 className="text-[28px] leading-[34px] lg:text-[32px] lg:leading-[39px] font-bold">
                            01. Студент / школяр
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-xl font-medium">
                            <p className="mb-3">
                                Маєте багато вільного часу і можливість
                                дослідити новий перспективний напрямок.
                            </p>
                            <p>Напрямок який дає результати та високий дохід</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 250 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray py-6 px-3 lg:p-9 gap-6 rounded-2xl min-h-[250px] md:min-h-[320px] flex flex-col justify-between">
                        <h2 className="text-[28px] leading-[34px] lg:text-[32px] lg:leading-[39px] font-bold">
                            02. Інвестор
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-xl font-medium">
                            <p className="mb-3">
                                Ви вже інвестували в базові напрямки:
                                нерухомість та золото.
                            </p>
                            <p>
                                Готові освоїти нову сферу та отримувати ікси
                                інвестуючи в крипту.
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 250 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-darkblue to-black py-6 px-3 lg:p-9 gap-6 rounded-2xl text-white min-h-[250px] md:min-h-[320px] flex flex-col justify-between">
                        <h2 className="text-[28px] leading-[34px] lg:text-[32px] lg:leading-[39px] font-bold">
                            03. Найманий працівник
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-xl font-medium">
                            <p className="mb-3">
                                Ви працюєте у наймі та відкладаєте дохід “під
                                подушку”.
                            </p>
                            <p>
                                Зрозуміли, що це малоефективно, або хочете аби
                                ці гроши працювали на вас.
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 250 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray py-6 px-3 lg:p-9 gap-6 rounded-2xl min-h-[250px] md:min-h-[320px] flex flex-col justify-between">
                        <h2 className="text-[28px] leading-[34px] lg:text-[32px] lg:leading-[39px] font-bold">
                            04. Хочете змінити сферу діяльності
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-xl font-medium">
                            <p className="mb-3">
                                Те чим зараз займаєтесь не влаштовує чи не
                                приносить вам бажаний дохід.
                            </p>
                            <p>
                                Вирішили змінити напрямок та зайнятись криптою
                                24/7.
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 250 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-darkblue to-black py-6 px-3 lg:p-9 gap-6 rounded-2xl text-white min-h-[250px] md:min-h-[320px] flex flex-col justify-between">
                        <h2 className="text-[28px] leading-[34px] lg:text-[32px] lg:leading-[39px] font-bold">
                            05. Хочете розібратись в крипті
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-xl font-medium">
                            <p>
                                Ваша ціль досконало розібратись у крипті вже
                                зараз, тому що ви знаєте що за цим майбутнє.
                            </p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 250 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1 }}
                        viewport={{ once: true }}
                        className="bg-gray py-6 px-3 lg:p-9 gap-6 rounded-2xl min-h-[250px] md:min-h-[320px] flex flex-col justify-between">
                        <h2 className="text-[28px] leading-[34px] lg:text-[32px] lg:leading-[39px] font-bold">
                            06. Маєте негативний досвід в крипті
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-xl font-medium">
                            <p className="mb-3">
                                Можливо вас заскамили, або попередні дії з
                                криптою не принесли очікуваних результатів.
                            </p>
                            <p>
                                Але ви знаєте, що інші успішно
                                заробляють, хочете навчитись і збільшити свій
                                дохід.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="mt-3 xl:mt-12 px-3 py-6 xl:p-9 bg-orange rounded-2xl">
                    <div className="flex items-center justify-between pb-[36px] lg:pb-[50px] border-b-2 border-white/20">
                        <h1 className="text-[36px] 2xl:text-[44px] leading-[44px] 2xl:leading-[53px] font-semibold md:text-start text-center">
                            07. ХОЧЕТЕ ЗАРОБЛЯТИ НА КРИПТІ?
                        </h1>
                        <Button className="!bg-[#030332] hover:!bg-[#00005E] active:!bg-darkblue hidden lg:block">
                            Зв’язатись з менеджером
                        </Button>
                    </div>
                    <ul className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-[48px] 2xl:gap-[80px] pt-9 xl:pt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex md:items-center gap-3">
                            <RiQuestionMark className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] text-white shrink-0" />
                            <p className="text-2xl md:text-[28px] md:leading-[34px] font-medium">
                                Ви хочете, щоб ваш капітал постійно ріс та
                                примножувався?
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex md:items-center gap-3">
                            <RiQuestionMark className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] text-white shrink-0" />
                            <p className="text-2xl md:text-[28px] md:leading-[34px] font-medium">
                                Втомились ловити ФОМО і спостерігати за успіхом
                                інших?
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex md:items-center gap-3">
                            <RiQuestionMark className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] text-white shrink-0" />
                            <p className="text-2xl md:text-[28px] md:leading-[34px] font-medium">
                                Хочете навчитись правильно інвестувати,
                                отримувати профіт та фінансово розвиватись?
                            </p>
                        </motion.div>
                    </ul>
                    <Button className="!bg-[#030332] hover:!bg-[#00005E] active:!bg-darkblue w-full md:w-fit mx-auto block lg:hidden mt-9">
                        Зв’язатись з менеджером
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default WhoYouAre;
