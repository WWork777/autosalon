import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

/** Оверлей: мобилка — всегда видимая лента; md+ — выезжает по hover */
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
        <h3 className="text-white text-lg sm:text-xl md:text-2xl mb-1">
          {title}
        </h3>
        <p className="text-white/80 text-[13px] sm:text-sm md:text-base leading-6">
          {desc}
        </p>
      </div>
    </div>
  );
}

const Categories: React.FC = () => {
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
              <Icon
                icon="ph:house-simple-fill"
                className="text-xl sm:text-2xl text-primary"
              />
              Фотогалерея
            </p>

            <h2 className="text-[28px] leading-tight sm:text-40 lg:text-52 mt-3 sm:mt-4 mb-2 font-medium text-dark dark:text-white">
              Посмотрите зоны автосалона
            </h2>

            <p className="text-dark/50 dark:text-white/50 text-base sm:text-lg leading-[1.4] sm:leading-[1.3]">
              Шоурум, мойка, офисы и складские помещения — 4 ключевые зоны
              объекта.
            </p>

            <Link
              href="https://t.me/dmserhill"
              target="_blank"
              rel="noopener noreferrer"
              className="
                            inline-flex items-center justify-center
                            py-3 sm:py-4 px-6 sm:px-8
                            bg-primary text-white
                            text-sm sm:text-base
                            rounded-full font-semibold
                            mt-6 sm:mt-8
                            hover:bg-dark duration-300

                            w-full max-w-[420px] mx-auto   /* мобайл: по центру и широкая */
                            sm:w-auto sm:mx-0              /* cм: обычная кнопка */
                          "
            >
              Написать
            </Link>

          </div>

          {/* Карточка 1 */}
          <div className="sm:col-span-12 lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
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
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="sm:col-span-12 lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
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
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="sm:col-span-6 lg:col-span-3 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
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
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="sm:col-span-6 lg:col-span-3 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[386px]">
                <Image
                  src="/images/hero/shoproom.JPG"
                  alt="Склад"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <GalleryOverlay
                title="Склад"
                desc="Основной 241 м² + холодный 72 м²."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;


