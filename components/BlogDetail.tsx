import React from "react";
import { BlogPost } from "../types";
import { useBlog } from "../BlogContext";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";

interface Props {
  post: BlogPost;
}

const BlogDetail: React.FC<Props> = ({ post }) => {
  const { navigateTo } = useBlog();

  return (
    <section className="bg-white min-h-screen py-24">
      <div className="container-custom max-w-4xl">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigateTo("list")}
          className="mb-12 btn btn-outline h-10 px-5 text-[10px] uppercase tracking-widest flex items-center gap-2"
        >
          <span className="material-icons-outlined text-sm">west</span>
          Back to Insights
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold text-xs">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">{post.author}</p>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">{post.date}</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-16 border border-border shadow-sm">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          <article
            className="blog-content prose prose-slate max-w-none text-muted-foreground text-[15px] leading-relaxed font-medium"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.content)
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetail;