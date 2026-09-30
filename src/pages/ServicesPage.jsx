import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" crumbs={['Services']} />
      <Services items={services} heading="Everything Your Business Needs to Go Digital" />
      <WhyChooseUs />
    </>
  );
}
