import React from "react";
import { BlogPost } from "../types";
import { useBlog } from "../BlogContext";
import DOMPurify from "dompurify";

interface Props {
  post: BlogPost;
}

const BlogDetail: React.FC<Props> = ({ post }) => {
  const { navigateTo } = useBlog();

  return (
    <section className="bg-[#F9FAFB] min-h-screen pt-20 pb-28">
      <div className="max-w-5xl mx-auto px-6">

        <button
          onClick={() => navigateTo("list")}
          className="mb-10 text-primary font-semibold hover:scale-[1.03] transition-transform"
        >
          ← Back to Blog
        </button>

        <h1 className="text-4xl font-extrabold mb-4">
          {post.title}
        </h1>

        <p className="text-slate-400 mb-6">
          {post.date} • {post.author}
        </p>

        <div className="rounded-3xl overflow-hidden mb-10 shadow-lg">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[420px] object-cover"
          />
        </div>

        <article
          className="blog-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content)
          }}
        />
      </div>
    </section>
  );
};

export default BlogDetail;