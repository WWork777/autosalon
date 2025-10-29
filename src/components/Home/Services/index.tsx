"use client"

import Image from "next/image";
import { Icon } from "@iconify/react";
// import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/** Список фото для галереи (дополни/замени при необходимости) */
const GALLERY = [
  { src: '/images/photogalery/IMG_0003-min.JPG', alt: 'Фотогалерея автосалона — снимок 0003' },
  { src: '/images/photogalery/IMG_0004-min.JPG', alt: 'Фотогалерея автосалона — снимок 0004' },
  { src: '/images/photogalery/IMG_0005-min.JPG', alt: 'Фотогалерея автосалона — снимок 0005' },
  { src: '/images/photogalery/IMG_0008-min.JPG', alt: 'Фотогалерея автосалона — снимок 0008' },
  { src: '/images/photogalery/IMG_0011-min.JPG', alt: 'Фотогалерея автосалона — снимок 0011' },
  { src: '/images/photogalery/IMG_0014-min.JPG', alt: 'Фотогалерея автосалона — снимок 0014' },
  { src: '/images/photogalery/IMG_0019-min.JPG', alt: 'Фотогалерея автосалона — снимок 0019' },
  { src: '/images/photogalery/IMG_0021-min.JPG', alt: 'Фотогалерея автосалона — снимок 0021' },
  { src: '/images/photogalery/IMG_0023-min.JPG', alt: 'Фотогалерея автосалона — снимок 0023' },
  { src: '/images/photogalery/IMG_0024-min.JPG', alt: 'Фотогалерея автосалона — снимок 0024' },
  { src: '/images/photogalery/IMG_0026-min.JPG', alt: 'Фотогалерея автосалона — снимок 0026' },
  { src: '/images/photogalery/IMG_0029-min.JPG', alt: 'Фотогалерея автосалона — снимок 0029' },
  { src: '/images/photogalery/IMG_0032-min.JPG', alt: 'Фотогалерея автосалона — снимок 0032' },
  { src: '/images/photogalery/IMG_0034-min.JPG', alt: 'Фотогалерея автосалона — снимок 0034' },
  { src: '/images/photogalery/IMG_0040-min.JPG', alt: 'Фотогалерея автосалона — снимок 0040' },
  { src: '/images/photogalery/IMG_0042-min.JPG', alt: 'Фотогалерея автосалона — снимок 0042' },
  { src: '/images/photogalery/IMG_0044-min.JPG', alt: 'Фотогалерея автосалона — снимок 0044' },
];


/** Модальное окно со слайдером */
function ModalGallery({
  isOpen,
  startIndex = 0,
  onClose,
}: {
  isOpen: boolean;
  startIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const startX = useRef<number | null>(null);

  // не даём скроллить страницу под модальным
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // актуализируем стартовый кадр при каждом открытии
  useEffect(() => {
    if (isOpen) setIndex(startIndex);
  }, [isOpen, startIndex]);

  // клавиатура: Esc, ←, →
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const next = () => setIndex((i) => (i + 1) % GALLERY.length);
  const prev = () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 40) prev();
    if (dx < -40) next();
    startX.current = null;
  };

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="
        fixed inset-0 z-[1000]
        bg-black/70
        backdrop-blur-sm
        flex items-center justify-center
        p-4
      "
      onClick={onClose}
    >
      {/* Контент модалки. Останавливаем всплытие, чтобы не закрывалась при клике внутри */}
      <div
        className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden bg-black/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Картинка */}
        <Image
          key={GALLERY[index].src}
          src={GALLERY[index].src}
          alt={GALLERY[index].alt}
          fill
          unoptimized
          className="object-contain select-none"
          priority
        />

        {/* Верхняя панель: подпись + закрыть */}
        <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
          <p className="text-white text-sm sm:text-base">
            {index + 1} / {GALLERY.length} — {GALLERY[index].alt}
          </p>
          <button
            aria-label="Закрыть"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 hover:bg-white text-dark"
          >
            <Icon icon="ph:x-bold" width={16} height={16} />
            <span className="hidden sm:block">Закрыть</span>
          </button>
        </div>

        {/* Кнопки переключения */}
        <button
          aria-label="Предыдущее фото"
          onClick={prev}
          className="
            absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
            p-3 sm:p-4 rounded-full bg-white/90 hover:bg-white text-dark
          "
        >
          <Icon icon="ph:caret-left-bold" width={20} height={20} />
        </button>
        <button
          aria-label="Следующее фото"
          onClick={next}
          className="
            absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
            p-3 sm:p-4 rounded-full bg-white/90 hover:bg-white text-dark
          "
        >
          <Icon icon="ph:caret-right-bold" width={20} height={20} />
        </button>

        {/* Точки-индикаторы (мобайл скрываем, на md+ показываем) */}
        <div className="hidden md:flex absolute bottom-3 left-0 right-0 justify-center gap-2">
          {GALLERY.map((_, i) => (
            <button
              key={i}
              aria-label={`К фото ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Оверлей подписи на карточке */
function GalleryOverlay({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="absolute inset-0 flex">
      <div
        className="
          mt-auto w-full
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          p-3 pb-2 sm:p-4 md:p-8
          transform md:translate-y-full md:group-hover:translate-y-0
          transition duration-500
        "
      >
        <h3 className="text-white text-lg sm:text-xl md:text-2xl mb-1">{title}</h3>
        <p className="text-white/80 text-[13px] sm:text-sm md:text-base leading-6">
          {desc}
        </p>
      </div>
    </div>
  );
}

const Categories: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [startAt, setStartAt] = useState(0);

  const openGallery = (i = 0) => {
    setStartAt(i);
    setOpen(true);
  };

  return (
    <section className="relative overflow-hidden">
      {/* фоновые линии выключены на мобилке */}
      <div className="absolute left-0 top-0 pointer-events-none hidden md:block">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized
        />
      </div>

      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 relative z-10">
        <div className="grid sm:grid-cols-12 items-center gap-6 sm:gap-10">
          {/* Левый текст */}
          <div className="sm:col-span-12 lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5">
              <Icon icon="ph:house-simple-fill" className="text-xl sm:text-2xl text-primary" />
              Фотогалерея
            </p>

            <h2 className="text-[28px] leading-tight sm:text-40 lg:text-52 mt-3 sm:mt-4 mb-2 font-medium text-dark dark:text-white">
              Посмотрите зоны автосалона
            </h2>

            <p className="text-dark/50 dark:text-white/50 text-base sm:text-lg leading-[1.4] sm:leading-[1.3]">
              Шоурум, мойка, офисы и складские помещения — 4 ключевые зоны объекта.
            </p>

            {/* Кнопка открытия галереи */}
            <button
              onClick={() => openGallery(0)}
              className="
                inline-flex items-center justify-center
                py-3 sm:py-4 px-6 sm:px-8
                bg-primary text-white
                text-sm sm:text-base
                rounded-full font-semibold
                mt-6 sm:mt-8
                hover:bg-dark duration-300
                w-full max-w-[420px] mx-auto sm:w-auto sm:mx-0
              "
            >
              Смотреть фотографии
            </button>
          </div>

          {/* Карточка 1 */}
          <div className="sm:col-span-12 lg:col-span-6 col-span-12">
            <button
              className="relative rounded-2xl overflow-hidden group w-full text-left"
              onClick={() => openGallery(0)}
            >
              <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[386px]">
                <Image
                  src="/images/hero/shourum.JPG"
                  alt="Шоурум"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <GalleryOverlay
                title="Шоурум"
                desc="Просторный зал 304,2 м² по стандартам дилера."
              />
            </button>
          </div>

          {/* Карточка 2 */}
          <div className="sm:col-span-12 lg:col-span-6 col-span-12">
            <button
              className="relative rounded-2xl overflow-hidden group w-full text-left"
              onClick={() => openGallery(1)}
            >
              <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[386px]">
                <Image
                  src="/images/hero/facad.jpg"
                  alt="Фасад и территория"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <GalleryOverlay
                title="Фасад / территория"
                desc="Асфальтированная площадка для парковки и демонстрации."
              />
            </button>
          </div>

          {/* Карточка 3 */}
          <div className="sm:col-span-6 lg:col-span-3 col-span-12">
            <button
              className="relative rounded-2xl overflow-hidden group w-full text-left"
              onClick={() => openGallery(2)}
            >
              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[386px]">
                <Image
                  src="/images/hero/OFIC.JPG"
                  alt="Офисная часть"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <GalleryOverlay
                title="Офисная часть"
                desc="Комфортный open space и кабинеты, 115 м²."
              />
            </button>
          </div>

          {/* Карточка 4 */}
          <div className="sm:col-span-6 lg:col-span-3 col-span-12">
            <button
              className="relative rounded-2xl overflow-hidden group w-full text-left"
              onClick={() => openGallery(3)}
            >
              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[386px]">
                <Image
                  src="/images/hero/shoproom.JPG"
                  alt="Склад"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <GalleryOverlay title="Склад" desc="Основной 241 м² + холодный 72 м²." />
            </button>
          </div>
        </div>
      </div>

      {/* Модалка-галерея */}
      <ModalGallery isOpen={open} startIndex={startAt} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Categories;
