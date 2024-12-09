import Container from '../ui/Container';
import { motion } from 'framer-motion';

const PrivateClubIs = () => {
    return (
        <div className="py-14 md:py-20">
            <Container>
                <div className="overflow-x-hidden">
                    <motion.h3
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="font-bold text-3xl md:text-4xl max-w-[555px] mb-8 md:mb-12">
                        Отже,{' '}
                        <span className="text-orange">FrogPrivateClub</span> -
                        це:
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="bg-gray px-3 py-6 md:p-9 rounded-2xl flex items-center md:items-start md:flex-col gap-6">
                        <svg
                            className="w-20 h-20 shrink-0"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_13_528)">
                                <path
                                    d="M40 36.6665C44.4203 36.6665 48.6595 38.4225 51.7851 41.5481C54.9107 44.6737 56.6667 48.9129 56.6667 53.3332V73.3332H50V53.3332C50.0001 50.7825 49.0256 48.3281 47.2757 46.4723C45.5259 44.6165 43.133 43.4995 40.5867 43.3498L40 43.3332C37.4493 43.333 34.995 44.3076 33.1391 46.0574C31.2833 47.8073 30.1663 50.2002 30.0167 52.7465L30 53.3332V73.3332H23.3333V53.3332C23.3333 48.9129 25.0893 44.6737 28.2149 41.5481C31.3405 38.4225 35.5797 36.6665 40 36.6665ZM18.3333 46.6665C19.2633 46.6665 20.1667 46.7765 21.0333 46.9798C20.4634 48.6765 20.1259 50.4426 20.03 52.2298L20 53.3332V53.6198C19.6168 53.4827 19.2183 53.3932 18.8133 53.3532L18.3333 53.3332C17.0904 53.3332 15.892 53.7962 14.9719 54.6319C14.0518 55.4676 13.476 56.616 13.3567 57.8532L13.3333 58.3332V73.3332H6.66667V58.3332C6.66667 55.239 7.89583 52.2715 10.0838 50.0836C12.2717 47.8957 15.2391 46.6665 18.3333 46.6665V46.6665ZM61.6667 46.6665C64.7609 46.6665 67.7283 47.8957 69.9162 50.0836C72.1042 52.2715 73.3333 55.239 73.3333 58.3332V73.3332H66.6667V58.3332C66.6666 57.0902 66.2036 55.8919 65.3679 54.9718C64.5323 54.0517 63.3839 53.4758 62.1467 53.3565L61.6667 53.3332C61.0833 53.3332 60.5233 53.4332 60 53.6165V53.3332C60 51.1132 59.64 48.9798 58.97 46.9865C59.8333 46.7765 60.7367 46.6665 61.6667 46.6665ZM18.3333 26.6665C20.5435 26.6665 22.6631 27.5445 24.2259 29.1073C25.7887 30.6701 26.6667 32.7897 26.6667 34.9998C26.6667 37.21 25.7887 39.3296 24.2259 40.8924C22.6631 42.4552 20.5435 43.3332 18.3333 43.3332C16.1232 43.3332 14.0036 42.4552 12.4408 40.8924C10.878 39.3296 10 37.21 10 34.9998C10 32.7897 10.878 30.6701 12.4408 29.1073C14.0036 27.5445 16.1232 26.6665 18.3333 26.6665V26.6665ZM61.6667 26.6665C63.8768 26.6665 65.9964 27.5445 67.5592 29.1073C69.122 30.6701 70 32.7897 70 34.9998C70 37.21 69.122 39.3296 67.5592 40.8924C65.9964 42.4552 63.8768 43.3332 61.6667 43.3332C59.4565 43.3332 57.3369 42.4552 55.7741 40.8924C54.2113 39.3296 53.3333 37.21 53.3333 34.9998C53.3333 32.7897 54.2113 30.6701 55.7741 29.1073C57.3369 27.5445 59.4565 26.6665 61.6667 26.6665V26.6665ZM18.3333 33.3332C17.8913 33.3332 17.4674 33.5088 17.1548 33.8213C16.8423 34.1339 16.6667 34.5578 16.6667 34.9998C16.6667 35.4419 16.8423 35.8658 17.1548 36.1783C17.4674 36.4909 17.8913 36.6665 18.3333 36.6665C18.7754 36.6665 19.1993 36.4909 19.5118 36.1783C19.8244 35.8658 20 35.4419 20 34.9998C20 34.5578 19.8244 34.1339 19.5118 33.8213C19.1993 33.5088 18.7754 33.3332 18.3333 33.3332ZM61.6667 33.3332C61.2246 33.3332 60.8007 33.5088 60.4882 33.8213C60.1756 34.1339 60 34.5578 60 34.9998C60 35.4419 60.1756 35.8658 60.4882 36.1783C60.8007 36.4909 61.2246 36.6665 61.6667 36.6665C62.1087 36.6665 62.5326 36.4909 62.8452 36.1783C63.1577 35.8658 63.3333 35.4419 63.3333 34.9998C63.3333 34.5578 63.1577 34.1339 62.8452 33.8213C62.5326 33.5088 62.1087 33.3332 61.6667 33.3332ZM40 6.6665C43.5362 6.6665 46.9276 8.07126 49.4281 10.5717C51.9286 13.0722 53.3333 16.4636 53.3333 19.9998C53.3333 23.5361 51.9286 26.9274 49.4281 29.4279C46.9276 31.9284 43.5362 33.3332 40 33.3332C36.4638 33.3332 33.0724 31.9284 30.5719 29.4279C28.0714 26.9274 26.6667 23.5361 26.6667 19.9998C26.6667 16.4636 28.0714 13.0722 30.5719 10.5717C33.0724 8.07126 36.4638 6.6665 40 6.6665V6.6665ZM40 13.3332C38.2319 13.3332 36.5362 14.0355 35.286 15.2858C34.0357 16.536 33.3333 18.2317 33.3333 19.9998C33.3333 21.7679 34.0357 23.4636 35.286 24.7139C36.5362 25.9641 38.2319 26.6665 40 26.6665C41.7681 26.6665 43.4638 25.9641 44.714 24.7139C45.9643 23.4636 46.6667 21.7679 46.6667 19.9998C46.6667 18.2317 45.9643 16.536 44.714 15.2858C43.4638 14.0355 41.7681 13.3332 40 13.3332V13.3332Z"
                                    fill="#FF9119"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_13_528">
                                    <rect width="80" height="80" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-[24px] leading-[30px] md:text-[28px] md:leading-[34px] font-semibold">
                            Професійне, сильне та дружнє криптоком’юніті
                        </p>
                    </div>
                    <div className="bg-gray px-3 py-6 md:p-9 rounded-2xl flex items-center md:items-start md:flex-col gap-6">
                        <svg
                            className="w-20 h-20 shrink-0"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_13_540)">
                                <path
                                    d="M66.46 26.6662H70C71.7681 26.6662 73.4638 27.3685 74.714 28.6188C75.9643 29.869 76.6667 31.5647 76.6667 33.3328V46.6662C76.6667 48.4343 75.9643 50.13 74.714 51.3802C73.4638 52.6305 71.7681 53.3328 70 53.3328H66.46C65.6474 59.7772 62.5109 65.7034 57.6392 69.9995C52.7674 74.2955 46.4954 76.6661 40 76.6662V69.9995C45.3043 69.9995 50.3914 67.8924 54.1421 64.1416C57.8929 60.3909 60 55.3038 60 49.9995V29.9995C60 24.6952 57.8929 19.6081 54.1421 15.8574C50.3914 12.1066 45.3043 9.9995 40 9.9995C34.6957 9.9995 29.6086 12.1066 25.8579 15.8574C22.1071 19.6081 20 24.6952 20 29.9995V53.3328H10C8.2319 53.3328 6.53621 52.6305 5.28596 51.3802C4.03572 50.13 3.33334 48.4343 3.33334 46.6662V33.3328C3.33334 31.5647 4.03572 29.869 5.28596 28.6188C6.53621 27.3685 8.2319 26.6662 10 26.6662H13.54C14.3534 20.2225 17.4903 14.2971 22.3619 10.0018C27.2336 5.70643 33.5052 3.33643 40 3.33643C46.4948 3.33643 52.7664 5.70643 57.6381 10.0018C62.5097 14.2971 65.6466 20.2225 66.46 26.6662V26.6662ZM10 33.3328V46.6662H13.3333V33.3328H10ZM66.6667 33.3328V46.6662H70V33.3328H66.6667ZM25.8667 52.6162L29.4 46.9628C32.5769 48.9529 36.2512 50.0056 40 49.9995C43.7488 50.0056 47.4231 48.9529 50.6 46.9628L54.1333 52.6162C49.8975 55.27 44.9985 56.6738 40 56.6662C35.0015 56.6738 30.1025 55.27 25.8667 52.6162Z"
                                    fill="#FF9119"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_13_540">
                                    <rect width="80" height="80" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className="text-[24px] leading-[30px] md:text-[28px] md:leading-[34px] font-semibold">
                            Підтримка професійних менторів та менеджерів
                        </p>
                    </div>
                    <div className="bg-gray px-3 py-6 md:p-9 rounded-2xl flex items-center md:items-start md:flex-col gap-6">
                        <svg
                            className="w-20 h-20 shrink-0"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_13_546)">
                                <path
                                    d="M3.33331 73.3338C3.33331 66.2613 6.14283 59.4785 11.1438 54.4776C16.1448 49.4766 22.9275 46.6671 30 46.6671C37.0724 46.6671 43.8552 49.4766 48.8562 54.4776C53.8571 59.4785 56.6666 66.2613 56.6666 73.3338H50C50 68.0294 47.8928 62.9424 44.1421 59.1916C40.3914 55.4409 35.3043 53.3338 30 53.3338C24.6957 53.3338 19.6086 55.4409 15.8578 59.1916C12.1071 62.9424 9.99998 68.0294 9.99998 73.3338H3.33331ZM30 43.3338C18.95 43.3338 9.99998 34.3838 9.99998 23.3338C9.99998 12.2838 18.95 3.33377 30 3.33377C41.05 3.33377 50 12.2838 50 23.3338C50 34.3838 41.05 43.3338 30 43.3338ZM30 36.6671C37.3666 36.6671 43.3333 30.7004 43.3333 23.3338C43.3333 15.9671 37.3666 10.0004 30 10.0004C22.6333 10.0004 16.6666 15.9671 16.6666 23.3338C16.6666 30.7004 22.6333 36.6671 30 36.6671ZM71.8266 2.61377C75.0207 9.05319 76.6774 16.1457 76.6666 23.3338C76.6666 30.7771 74.9233 37.8138 71.8266 44.0538L66.3433 40.0671C68.7607 34.8203 70.0084 29.1107 70 23.3338C70 17.3604 68.69 11.6904 66.3433 6.60044L71.8266 2.61377ZM60.82 10.6138C62.4848 14.6476 63.3388 18.9699 63.3333 23.3338C63.3388 27.6977 62.4848 32.0199 60.82 36.0538L55.23 31.9871C56.1838 29.2019 56.6693 26.2778 56.6666 23.3338C56.6704 20.3899 56.186 17.4658 55.2333 14.6804L60.82 10.6138Z"
                                    fill="#FF9119"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_13_546">
                                    <rect width="80" height="80" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className="text-[24px] leading-[30px] md:text-[28px] md:leading-[34px] font-semibold">
                            Щотижневі стріми з командою та ком’юніті
                        </p>
                    </div>
                    <div className="bg-gray px-3 py-6 md:p-9 rounded-2xl flex items-center md:items-start md:flex-col gap-6">
                        <svg
                            className="w-20 h-20 shrink-0"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_13_556)">
                                <path
                                    d="M10 61.6665V16.6665C10 14.0143 11.0536 11.4708 12.9289 9.59544C14.8043 7.72007 17.3478 6.6665 20 6.6665H66.6667C67.5507 6.6665 68.3986 7.01769 69.0237 7.64281C69.6488 8.26794 70 9.11578 70 9.99984V69.9998C70 70.8839 69.6488 71.7317 69.0237 72.3569C68.3986 72.982 67.5507 73.3332 66.6667 73.3332H21.6667C18.5725 73.3332 15.605 72.104 13.4171 69.9161C11.2292 67.7282 10 64.7607 10 61.6665ZM63.3333 66.6665V56.6665H21.6667C20.3406 56.6665 19.0688 57.1933 18.1311 58.131C17.1934 59.0687 16.6667 60.3404 16.6667 61.6665C16.6667 62.9926 17.1934 64.2644 18.1311 65.202C19.0688 66.1397 20.3406 66.6665 21.6667 66.6665H63.3333ZM33.3333 13.3332H20C19.1159 13.3332 18.2681 13.6844 17.643 14.3095C17.0179 14.9346 16.6667 15.7824 16.6667 16.6665V51.1232C18.229 50.3813 19.9372 49.9975 21.6667 49.9998H63.3333V13.3332H56.6667V39.9998L45 33.3332L33.3333 39.9998V13.3332Z"
                                    fill="#FF9119"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_13_556">
                                    <rect width="80" height="80" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className="text-[24px] leading-[30px] md:text-[28px] md:leading-[34px] font-semibold">
                            Тони детальних інструкцій, корисних матеріалів та
                            гайдів
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PrivateClubIs;
