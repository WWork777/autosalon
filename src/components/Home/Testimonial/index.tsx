import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const bullets = [
    "Организуем показ в удобное время (в т.ч. сегодня).",
    "Отправим материалы: PDF-презентацию, планировки, доп. фото/видео.",
    "Обсудим условия аренды и сроки, подскажем по конфигурации зон.",
    "Подготовим договор и счёт — работаем с ИП/ООО и физлицами.",
    "Связь любым способом: звонок, WhatsApp, Telegram.",
];

const ContactCta: React.FC = () => {
    return (
        // подтягиваем блок к предыдущему, чтобы они смотрелись едино
        <section id="contact"
            className="relative overflow-hidden pt-0 -mt-4 sm:-mt-6"
            aria-label="Контакты">
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Левый столбец — новый текст без повторов */}
                    <div className="lg:col-span-7">
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center">
                            <Icon icon="ph:chat-teardrop-text-fill" className="text-2xl text-primary" />
                            Связаться по объекту
                        </p>

                        <h2 className="mt-3 mb-3 text-40 lg:text-52 font-medium text-black dark:text-white tracking-tight">
                            Остались вопросы? <br /> Показ и материалы
                        </h2>

                        <p className="text-black/60 dark:text-white/60">
                            Кратко — что сделаем для оперативного решения:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {bullets.map((t, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Icon icon="ph:check-circle-fill" className="text-emerald-500 shrink-0 mt-0.5" width={20} height={20} />
                                    <span className="text-base text-black dark:text-white">{t}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA — оставляем как просил, только WhatsApp белым */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                href="tel:+79039073334"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold"
                            >
                                <Icon icon="ph:phone-call" className="mr-2" /> Позвонить
                            </Link>
                            <Link
                                href="https://wa.me/79039073334"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-[#25D366] text-white"
                            >
                                <Icon icon="logos:whatsapp-icon" className="mr-2" /> WhatsApp
                            </Link>
                            <Link
                                href="https://t.me/dmserhill"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-[#2AABEE] text-white"
                            >
                                <Icon icon="mdi:telegram" className="mr-2" /> Telegram
                            </Link>
                        </div>
                    </div>

                    {/* Правый столбец — карточка менеджера со ссылкой на сайт */}

                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur p-6 sm:p-8">
                            {/* Хедер карточки с фото */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/10">
                                    {/* Замените путь на свой: /images/team/dmitry.jpg */}
                                    <Image
                                        src="/images/team/dmitry.jpg"
                                        alt="Дмитрий — менеджер проекта"
                                        fill
                                        className="object-cover"
                                    // unoptimized // раскомментируйте, если используете внешний URL
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-base font-semibold text-black dark:text-white flex flex-wrap items-center gap-2">
                                        Дмитрий
                                        <a
                                            href="https://bzmetr.ru"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline underline-offset-4 hover:opacity-80"
                                        >
                                            bzmetr.ru
                                        </a>
                                    </p>
                                    <p className="text-sm text-black/50 dark:text-white/50">менеджер проекта</p>
                                </div>
                            </div>

                            {/* Быстрые факты (без повторов площадей) */}
                            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                                <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                                    <p className="text-black/50 dark:text-white/50">Показ</p>
                                    <p className="text-lg font-semibold text-black dark:text-white">
                                        сегодня / завтра
                                    </p>
                                </div>

                                <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                                    <p className="text-black/50 dark:text-white/50">График</p>
                                    <p className="text-lg font-semibold text-black dark:text-white">
                                        10:00–20:00
                                    </p>
                                </div>

                                <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                                    <p className="text-black/50 dark:text-white/50">Документы</p>
                                    <p className="text-lg font-semibold text-black dark:text-white">
                                        готовы к сделке
                                    </p>
                                </div>

                                <div className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                                    <p className="text-black/50 dark:text-white/50">Срок сделки</p>
                                    <p className="text-lg font-semibold text-black dark:text-white">
                                        3–5 дней
                                    </p>
                                </div>
                            </div>

                            {/* Примечание */}
                            <div className="mt-6 rounded-xl p-4 bg-amber-50 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300 text-sm">
                                Полная презентация (PDF) с планировками и доп. фото — отправим в мессенджер по запросу.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactCta;

