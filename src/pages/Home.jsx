import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import BlogSection from '../components/BlogSection';

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Gdigit Infotech"
        title="We Build Digital"
        highlight="Solutions That Drive Your Business."
        description="Websites, mobile apps, e-commerce and business software from a trusted IT partner in Nagpur."
        image="/assets/hero/hero.svg"
      />
      <About />
      <Services />
      <WhyChooseUs />
      <BlogSection />
    </>
  );
}
