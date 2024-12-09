import Container from '../ui/Container';
import { motion } from 'framer-motion';

const Warning = () => {
    return (
        <div className="py-14 md:py-20">
            <Container>
                <div className="bg-gray px-3 py-6 lg:p-9 rounded-2xl flex flex-col gap-8 w-full text-xl lg:text-2xl font-medium">
                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}>
                        Сайт є освітнім ресурсом, мета якого надати розуміння та
                        корисні матеріали які можуть включати теми, пов'язані з
                        цифровими активами.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}>
                        Ми ясно заявляємо що:{' '}
                        <p>
                            1. Ми не надаємо фінансових порад. Вся інформація та
                            матеріали, що надаються нашим ресурсом, не є
                            фінансовими консультаціями і не повинні розглядатися
                            як такі.
                        </p>{' '}
                        <p>
                            2. Ми не гарантуємо конкретних результатів. Будь-які
                            згадки про результати, досягнуті іншими особами, не
                            слід сприймати як гарантовані результати. Результати
                            можуть відрізнятися в залежності від багатьох
                            факторів, включаючи ваші зусилля, досвід і засоби.
                        </p>{' '}
                        <p>
                            3. Ми не збираємо кошти і не продаємо жодних монет.
                            Наші ресурси надють лише освітній контент.
                        </p>{' '}
                        <p>
                            4. Ми не примушуємо, не закликаємо і не залучаємо
                            нікого до будь-яких схем збагачення або
                            пірамідальних схем. Ми просто показуємо наш
                            перевірений спосіб та власний досвід, але нікого не
                            закликаємо повторювати наші дії.
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}>
                        Ми прагнемо надати якісні освітні матеріали, але успіх у
                        використанні цієї інформації залежить від вас та ваших
                        дій.
                    </motion.p>
                </div>
            </Container>
        </div>
    );
};

export default Warning;
