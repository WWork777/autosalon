import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    // мобилка ~60% высоты, на десктопе — во всю высоту
    <section className="relative !py-0 min-h-[60svh] md:min-h-screen">
      {/* Фон */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/IMG_0002-min.JPG"
          alt="Автосалон в Кемерово"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />
      </div>

      {/* Контент */}
      <div className="relative h-full">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 h-full">
          {/* как было: на мобилках — внизу; на десктопе — просто смещаем чуть ниже */}
          <div className="h-full flex flex-col justify-end pt-20 sm:pt-24 md:pt-32 pb-8 md:pb-16">
            <div
              className="
                relative z-10 text-white text-center md:text-start max-w-[840px]
                md:translate-y-[80px]   /* опускаем на ~40px только на десктопе */
              "
            >
              <p className="text-white/80 text-sm sm:text-base font-medium">
                Кемерово • автосалон • аренда
              </p>

              <h1
                className="text-inherit font-semibold -tracking-wider mt-3 mb-6
                           leading-[1.12] sm:leading-[1.08]
                           text-[clamp(2.25rem,6vw,4.5rem)]"
              >
                Современный автосалон&nbsp;—&nbsp;1003 м²
              </h1>

              <p className="text-white/80 text-sm sm:text-base mb-6 md:mb-8">
                Шоурум 304,2 м² • Мойка 115 м² • Детейлинг 228 м² • Склад 241 м² •
                Офис 115 м² • Холодный склад 72 м² • Асфальт • Видеонаблюдение •
                Пожарная сигнализация • Кондиционирование
              </p>

              {/* Кнопки WhatsApp / Telegram */}
              <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-4">
                <Link
                  href="https://wa.me/79039073334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full
                             border border-white/30 bg-white/90 text-slate-900
                             hover:bg-white hover:border-white transition font-semibold"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.11.55 4.11 1.6 5.9L0 24l6.24-1.6a11.95 11.95 0 0 0 5.77 1.47h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.5-8.39ZM12.02 22c-1.83 0-3.62-.49-5.19-1.41l-.37-.22-3.69.95.98-3.6-.24-.37A9.94 9.94 0 1 1 22 12c0 5.52-4.48 10-9.98 10Zm5.68-7.46c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.19.21-.37.24-.68.08-.31-.16-1.3-.48-2.47-1.53-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.63s1.14 3.05 1.3 3.26c.16.21 2.24 3.42 5.42 4.8.76.33 1.35.53 1.81.68.76.24 1.45.2 2 .12.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
                  </svg>
                  WhatsApp
                </Link>

                <Link
                  href="https://t.me/dmserhill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full
                             border border-white/30 bg-white/90 text-slate-900
                             hover:bg-white hover:border-white transition font-semibold"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M9.036 15.803 8.9 20.13c.39 0 .56-.167.763-.367l1.833-1.774 3.801 2.787c.698.387 1.199.184 1.39-.646l2.518-11.81h.001c.224-1.04-.376-1.446-1.058-1.19L3.96 9.718c-1.01.392-.995.955-.172 1.21l4.241 1.325 9.86-6.22c.464-.282.886-.126.538.156l-9.392 7.614Z" />
                  </svg>
                  Telegram
                </Link>
              </div>
            </div>
          </div>
          {/* /текстовый блок */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
