import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-0 py-12">
        {/* Верх: якорное меню по блокам лендинга */}
        {/* <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 pb-8 border-b border-white/10">
          <Link href="#gallery" className="text-white/70 hover:text-white text-sm">
            Фотогалерея
          </Link>
          <Link href="#features" className="text-white/70 hover:text-white text-sm">
            Характеристики
          </Link>
          <Link href="#plans" className="text-white/70 hover:text-white text-sm">
            Планировки
          </Link>
          <Link href="#terms" className="text-white/70 hover:text-white text-sm">
            Условия аренды
          </Link>
          <Link href="#faqs" className="text-white/70 hover:text-white text-sm">
            Вопросы
          </Link>
          <Link href="#contacts" className="text-white/70 hover:text-white text-sm">
            Контакты
          </Link>
        </nav> */}

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

        {/* Низ: копирайт и служебные ссылки (лаконично) */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#terms" className="text-white/40 hover:text-white text-sm">
              Условия аренды
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
