import PageHeader from '../components/PageHeader';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" crumbs={['About Us']} />
      <About />
      <WhyChooseUs />
    </>
  );
}
