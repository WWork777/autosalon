// import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import ContactCta from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'

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

      <GetInTouch />  {/* без id, как сейчас */}

      {/* FAQ (опционально) */}
      <section id="faqs">
        <FAQ />
      </section>
    </main>
  )
}
