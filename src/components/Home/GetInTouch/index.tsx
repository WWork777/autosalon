import Link from "next/link";

const GetInTouch: React.FC = () => {
  return (
    // скрыто на мобильных, видно с md и выше
    <section className="hidden md:block">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="relative rounded-t-2xl overflow-hidden">
          {/* Видео-фон */}
          <video
            className="w-full absolute top-0 left-0 object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Фоновое видео автосалона"
          >
            <source
              src="https://videos.pexels.com/video-files/7233782/7233782-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Затемнение + контент (размеры как раньше) */}
          <div className="bg-black/30 lg:py-64 md:py-28 py-10">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-white lg:text-52 md:text-40 text-3xl max-w-3/4 text-center font-medium">
                Посмотрите, как выглядит автосалон
                <br className="hidden sm:block" />
                Короткое видео с основных зон объекта
              </h2>

              {/* только звонок */}
              <Link
                href="tel:+79039073334"
                className="bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300"
                aria-label="Позвонить"
              >
                Позвонить
              </Link>
            </div>
          </div>
        </div>

        {/* бегущая строка снизу */}
        <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
          <div className="flex items-center gap-40 animate-slide">
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Покажем объект в удобное время
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Гибкие условия аренды • ставка по запросу
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Шоурум 304,2 м² • Мойка 115 м² • Детейлинг 228 м² • Склад 241 м²
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Отправим презентацию и планировки по запросу
            </p>

            {/* дубли для бесшовности */}
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Покажем объект в удобное время
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Гибкие условия аренды • ставка по запросу
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Шоурум 304,2 м² • Мойка 115 м² • Детейлинг 228 м² • Склад 241 м²
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              Отправим презентацию и планировки по запросу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
