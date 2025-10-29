import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-0 py-12">
        {/* Средняя полоса: заголовок + три CTA */}
        <div className="py-10 border-b border-white/10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-white text-32 sm:text-40 lg:text-52 leading-[1.15] font-medium">
                Есть вопросы? Свяжитесь удобным способом.
              </h2>
              <p className="mt-2 text-white/60 text-sm sm:text-base">
                Покажем объект, обсудим зонирование и условия — без лишней бюрократии.
              </p>

              {/* Адрес */}
              <div className="mt-4 flex items-start gap-3 text-white">
                <Icon icon="ph:map-pin-fill" width={22} height={22} className="text-primary flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  Баумана, 57Б, Кемерово
                  <span className="block">
                    <Link
                      href="https://yandex.ru/maps/?text=%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D0%BE%2C%20%D0%91%D0%B0%D1%83%D0%BC%D0%B0%D0%BD%D0%B0%2057%D0%91"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 underline hover:text-white"
                    >
                      Открыть на карте
                    </Link>
                  </span>
                </address>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+79039073334"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 bg-white text-dark font-semibold hover:bg-primary hover:text-white transition"
                >
                  <Icon icon="ph:phone-bold" width={20} height={20} />
                  Позвонить
                </Link>

                <Link
                  href="https://wa.me/79039073334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 bg-[#25D366] text-white font-semibold hover:opacity-90 transition"
                >
                  <Icon icon="logos:whatsapp-icon" width={20} height={20} />
                  WhatsApp
                </Link>

                <Link
                  href="https://t.me/dmserhill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 bg-[#2AABEE] text-white font-semibold hover:opacity-90 transition"
                >
                  <Icon icon="mdi:telegram" width={20} height={20} />
                  Telegram
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Низ: копирайт и служебные ссылки */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#terms" className="text-white/40 hover:text-white text-sm">
              Условия аренды
            </Link>
            <Link
              href="https://yandex.ru/maps/?text=%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D0%BE%2C%20%D0%91%D0%B0%D1%83%D0%BC%D0%B0%D0%BD%D0%B0%2057%D0%91"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-sm"
            >
              Баумана, 57Б — на карте
            </Link>
            <Link href="#contacts" className="text-white/40 hover:text-white text-sm">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
