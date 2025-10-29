// import Link from "next/link";
import { Icon } from "@iconify/react";

const bulletPoints: string[] = [
  "Шоурум 304,2 м² • Мойка 115 м² • Детейлинг 228 м²",
  "Склад 241 м² • Холодный склад 72 м² • Офисы 115 м²",
  "Асфальтированная площадка, удобные подъезды и парковка",
  "Видеонаблюдение, пожарная сигнализация, кондиционирование",
  "Идеальное состояние, ремонт на 15 млн ₽ по требованиям дилера",
  "Частично меблирован • Готово к въезду",
];

const Properties: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        {/* Заголовок секции */}
        <div className="mb-8 sm:mb-10 flex flex-col gap-3">
          <div className="flex gap-2.5 items-center justify-center">
            <Icon
              icon="ph:note-pencil-fill"
              width={20}
              height={20}
              className="text-primary"
            />
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              Ключевая информация
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11">
            Характеристики и условия
          </h2>
        </div>

        {/* Текстовый блок с пунктами */}
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur
                        px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-5">
          <p className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            Современный автосалон — 1003 м².
          </p>
          <p className="text-black/60 dark:text-white/60 mt-2">
            Ниже собраны ключевые параметры объекта и его инженерии.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bulletPoints.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icon
                  icon="ph:check-circle-fill"
                  width={20}
                  height={20}
                  className="text-emerald-500 shrink-0 mt-1"
                />
                <span className="text-base sm:text-lg text-black dark:text-white">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Properties;
