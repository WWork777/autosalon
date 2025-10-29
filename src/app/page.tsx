// import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from "@/components/Home/Hero";
import Properties from "@/components/Home/Properties";
import Services from "@/components/Home/Services";
import ContactCta from "@/components/Home/Testimonial";
import BlogSmall from "@/components/shared/Blog";
import GetInTouch from "@/components/Home/GetInTouch";
import FAQ from "@/components/Home/FAQs";

export async function generateMetadata() {
  return {
    title: "Аренда автосалона в Кемерове | Сдаем помещение под автоцентр",
    description:
      "Сдам в аренду современный автосалон в Кемерове. Готовые боксы для продажи и обслуживания автомобилей, зона клиентов, сервисная зона. Выгодные условия для дилеров и автобизнеса. Звоните!",
    keywords: [
      "автосалон аренда",
      "аренда автосалона кемерово",
      "шоурум 304,2 м²",
      "детейлинг 228 м²",
      "мойка 115 м²",
      "склад 241 м²",
      "офис 115 м²",
      "холодный склад 72 м²",
      "аренда коммерческой недвижимости кемерово",
    ],
    alternates: {
      canonical: "https://autosalon42.ru",
    },
    openGraph: {
      title: `Аренда автосалона в Кемерове | Сдаем помещение под автоцентр`,
      description: `Сдам в аренду современный автосалон в Кемерове. Готовые боксы для продажи и обслуживания автомобилей, зона клиентов, сервисная зона. Выгодные условия для дилеров и автобизнеса. Звоните!`,
      url: "https://autosalon42.ru",
      siteName: "Аренда автосалона в Кемерове",
      images: [
        {
          url: `/images/hero/IMG_0002-min.JPG`,
          width: 1200,
          height: 630,
          alt: `Аренда автосалона в Кемерове | Сдаем помещение под автоцентр`,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Аренда автосалона в Кемерове | Сдаем помещение под автоцентр",
      description: "Сдам в аренду современный автосалон в Кемерове.",
      images: [`/images/hero/IMG_0002-min.JPG`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      {/* ФОТО/ГАЛЕРЕЯ */}
      <section id="services">
        <Services />
      </section>
      {/* ХАРАКТЕРИСТИКИ */}
      <section id="features">
        <Properties />
      </section>
      {/* ПЛАНИРОВКИ (если вернёшь блок, оберни точно так же) */}
      {/* <section id="plans">
        <FeaturedProperty />
      </section> */}
      {/* Блок "Отзыв/контактный CTA" — без якоря, если не нужно */}
      <ContactCta />
      {/* УСЛОВИЯ АРЕНДЫ */}
      <section id="terms">
        <BlogSmall />
      </section>
      <GetInTouch /> {/* без id, как сейчас */}
      {/* FAQ (опционально) */}
      <section id="faqs">
        <FAQ />
      </section>
    </main>
  );
}
