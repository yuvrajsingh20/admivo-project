import React from "react";
import { useBlog } from "../BlogContext";
import BlogDetail from "./BlogDetail";
import BlogCreate from "./BlogCreate";
import { motion } from "framer-motion";

const BlogPage: React.FC = () => {
  const { posts, currentView, selectedPost, navigateTo, role } = useBlog();

  if (currentView === "detail" && selectedPost) {
    return <BlogDetail post={selectedPost} />;
  }

  if (currentView === "create") {
    if (role !== "admin") {
      return (
        <div className="py-24 text-center text-red-500 font-bold">
          Institutional Access Terminated
        </div>
      );
    }
    return <BlogCreate />;
  }

  return (
    <section className="py-32 bg-[#FAFAFA] min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">Intellectual Hub</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">Latest <span className="text-muted-foreground">Strategic Insights.</span></h2>

          {role === "admin" && (
            <button
              onClick={() => navigateTo("create")}
              className="mt-8 btn btn-primary h-11 px-6 text-xs uppercase tracking-widest"
            >
              + Create New Entry
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl border border-border overflow-hidden hover:border-foreground/20 transition-all duration-300 group shadow-sm"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight group-hover:text-muted-foreground duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-[13px] leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => navigateTo("detail", post.id)}
                  className="text-[11px] font-bold text-foreground uppercase tracking-widest flex items-center gap-2"
                >
                  Deep dive
                  <span className="material-icons-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;