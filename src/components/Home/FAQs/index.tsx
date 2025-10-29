import { Icon } from "@iconify/react";
// import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  { icon: "ph:phone-call-fill",  title: "Звонок",         text: "Уточняем задачи и сроки." },
  { icon: "ph:map-trifold-fill", title: "Осмотр",         text: "Покажем объект в удобное время." },
  { icon: "ph:ruler-fill",       title: "План-зоны",      text: "Согласуем зонирование под ваш сценарий." },
  { icon: "ph:file-text-fill",   title: "Договор",        text: "Фиксируем условия, при необходимости — каникулы." },
  { icon: "ph:key-fill",         title: "Въезд",          text: "Вы заезжаете и запускаетесь." },
];

const included = [
  "Шоурум, мойка, детейлинг, офисы и склады",
  "Электрика, видеонаблюдение, пожарная сигнализация",
  "Кондиционирование, удобные подъезды и асфальт",
  "Частично меблирован, готов к въезду",
];

const FAQ: React.FC = () => {
  return (
    <section id="faqs" className="relative">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT: Steps + Included */}
          <div className="flex flex-col gap-6">
            {/* Как въехать за 7 дней */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur p-6 sm:p-8">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2 items-center">
                <Icon icon="ph:lightning-fill" className="text-2xl text-primary" />
                Как въехать за 7 дней
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {steps.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-xl border border-black/10 dark:border-white/10 p-4"
                  >
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon icon={s.icon} className="text-primary" width={22} height={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-black dark:text-white">{s.title}</p>
                      <p className="text-sm text-black/60 dark:text-white/60">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Что включено */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur p-6 sm:p-8">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2 items-center">
                <Icon icon="ph:check-circle-fill" className="text-2xl text-primary" />
                Что включено в объект
              </p>

              <ul className="mt-4 flex flex-col gap-3">
                {included.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon icon="ph:check-fat-fill" className="text-emerald-500 mt-0.5" width={18} height={18} />
                    <span className="text-base text-black dark:text-white">{t}</span>
                  </li>
                ))}
              </ul>

              {/* Можно оставить иллюстрацию снизу (например, мини-карту/фото фасада) */}
              {/* <div className="mt-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/faqs/faq-image.png"
                  alt="Фасад и подъезды"
                  width={680}
                  height={380}
                  className="w-full object-cover"
                  unoptimized
                />
              </div> */}
            </div>
          </div>

          {/* RIGHT: Реальные FAQ */}
          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2 items-center">
              <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" />
              Вопросы об объекте
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              Всё, что важно перед въездом
            </h2>
            <p className="text-dark/50 dark:text-white/50 lg:pr-20">
              Собрали реальные вопросы арендаторов — коротко и по делу.
            </p>

            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-4"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Можно ли изменить зонирование под нас?</AccordionTrigger>
                  <AccordionContent>
                    Да. План-зоны гибко настраивается: шоурум, офисная часть, мойка, детейлинг и склады
                    можно перераспределить. Согласуем, нарисуем схему и зафиксируем в доп. соглашении.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Достаточно ли мощности по электрике?</AccordionTrigger>
                  <AccordionContent>
                    Объект рассчитан под работу автосервиса/детейлинга. При необходимости
                    обсудим увеличение мощности и выделение линий под оборудование.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Как обстоят дела со сливами для мойки?</AccordionTrigger>
                  <AccordionContent>
                    Сливы и инженерия предусмотрены. Под вашу технологию согласуем точки,
                    требуемые уклоны и коммуникации. При необходимости — поможем со схемой.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Можно ли разместить вывеску на фасаде?</AccordionTrigger>
                  <AccordionContent>
                    Да, предусмотрены места под фирменную вывеску и навигацию. Формат/размер согласуем заранее.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Парковка и подъезды: как с логистикой?</AccordionTrigger>
                  <AccordionContent>
                    Асфальтированная площадка, удобные подъезды, два выезда. Есть места для клиентов и
                    зона для демонстрации авто на улице.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Условия: депозит, каникулы, индексация?</AccordionTrigger>
                  <AccordionContent>
                    Депозит обычно 1 месяц, обсуждается. Каникулярный период на время работ возможен.
                    Индексация стандартная годовая — уточним при обсуждении.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
