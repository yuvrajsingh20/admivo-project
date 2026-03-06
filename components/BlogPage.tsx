import React from "react";
import { useBlog } from "../BlogContext";
import BlogDetail from "./BlogDetail";
import BlogCreate from "./BlogCreate";

const BlogPage: React.FC = () => {
  const { posts, currentView, selectedPost, navigateTo, role } = useBlog();

  if (currentView === "detail" && selectedPost) {
    return <BlogDetail post={selectedPost} />;
  }

  if (currentView === "create") {
    if (role !== "admin") {
      return (
        <div className="py-24 text-center text-red-500 font-bold">
          Access Denied
        </div>
      );
    }
    return <BlogCreate />;
  }

  return (
    <section className="py-24 px-6 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold">
            Latest from our Blog
          </h2>

          {role === "admin" && (
            <button
              onClick={() => navigateTo("create")}
              className="mt-8 bg-black text-white px-6 py-3 rounded-xl"
            >
              + Write New Article
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {post.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => navigateTo("detail", post.id)}
                  className="mt-4 text-primary hover:scale-[1.03] transition-transform font-bold"
                >
                  Read Article →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPage;