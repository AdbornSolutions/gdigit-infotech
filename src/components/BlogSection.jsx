import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import BlogCard from './BlogCard';

export default function BlogSection({ limit = 3, showHeader = true }) {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        {showHeader && (
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="badge">Blogs & Articles</span>
              <h2 className="h-section mt-4">Our Latest Articles & Insights</h2>
            </div>
            <Link to="/blog" className="btn-primary self-start sm:self-auto">View All Articles</Link>
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, limit).map((b) => <BlogCard key={b.id} blog={b} />)}
        </div>
      </div>
    </section>
  );
}
