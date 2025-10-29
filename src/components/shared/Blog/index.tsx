import { Icon } from "@iconify/react";
import Link from "next/link";

type Term = {
    icon: string;
    label: string;
    value: string;
    note?: string;
};

const terms: Term[] = [
    { icon: "ph:currency-rub-fill", label: "Ставка", value: "по запросу" },
    { icon: "ph:drop-fill", label: "Коммунальные", value: "по факту потребления" },
    { icon: "ph:hand-coins-fill", label: "Депозит", value: "1 месяц (обсуждается)" },
    { icon: "ph:calendar-check-fill", label: "Срок договора", value: "от 11 мес — 3–5 лет" },
    { icon: "ph:receipt-fill", label: "Налогообложение", value: "без НДС / возможно с НДС" },
    { icon: "ph:building-fill", label: "Арендные каникулы", value: "на период работ (по согласованию)" },
];

const BlogSmall: React.FC = () => {
    return (
        <section className="-mt-2 pt-4 sm:mt-0 sm:pt-10">
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">

                {/* Заголовок + CTA */}
                <div className="
          mb-6 sm:mb-10
          flex md:flex-row flex-col
          md:items-end items-center
          md:justify-between justify-center
          gap-4
          text-center md:text-left
        ">
                    <div>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2 justify-center md:justify-start">
                            <Icon icon="ph:note-pencil-fill" className="text-2xl text-primary" />
                            Условия аренды
                        </p>
                        <h2 className="lg:text-52 text-40 font-medium text-black dark:text-white">
                            Договоримся быстро и понятно
                        </h2>
                        <p className="text-dark/50 dark:text-white/50 text-xm">
                            Базовые параметры. Конкретику согласуем после просмотра.
                        </p>
                    </div>

                    {/* Кнопка: по центру и шире на мобилке */}
                    <Link
                        href="https://wa.me/79039073334"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              bg-dark dark:bg-white text-white dark:text-dark
              py-3 sm:py-4 px-6 sm:px-8
              rounded-full hover:bg-primary duration-300
              w-full md:w-auto
              max-w-[420px]   /* чтобы на мобиле выглядело аккуратно */
              text-center
              flex items-center justify-center
            "
                    >
                        Запросить условия
                    </Link>
                </div>

                {/* Сетка карточек условий */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 sm:gap-8">
                    {terms.map((t, i) => (
                        <div
                            key={i}
                            className="rounded-2xl p-5 sm:p-6 bg-white/70 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:shadow-3xl dark:hover:shadow-white/10 transition"
                        >
                            <div className="flex items-start gap-4">
                                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon icon={t.icon} className="text-primary" width={22} height={22} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-black/50 dark:text-white/50">{t.label}</p>
                                    <p className="text-lg sm:text-xl font-semibold text-black dark:text-white break-words">
                                        {t.value}
                                    </p>
                                    {t.note && (
                                        <p className="mt-1 text-sm text-black/50 dark:text-white/50">{t.note}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Низ блока */}
                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <p className="text-sm text-black/60 dark:text-white/60">
                        Условия обсуждаемы: ставка зависит от состава площадей и срока договора.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogSmall;
