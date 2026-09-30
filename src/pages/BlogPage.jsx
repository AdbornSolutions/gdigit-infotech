import PageHeader from '../components/PageHeader';
import BlogSection from '../components/BlogSection';

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" crumbs={['Blog']} />
      <BlogSection limit={6} showHeader={false} />
    </>
  );
}
