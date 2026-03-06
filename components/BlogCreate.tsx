import React, { useState } from "react";
import { useBlog } from "../BlogContext";
import { BlogPost } from "../types";
import RichTextEditor from "./RichTextEditor";
import { motion } from "framer-motion";

const BlogCreate: React.FC = () => {
  const { addPost, navigateTo } = useBlog();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const generateExcerpt = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent?.slice(0, 160) || "";
  };

  const handleSubmit = () => {
    if (!title || !content) {
      alert("Title and content are required");
      return;
    }

    const newPost: BlogPost = {
      id: Date.now(),
      title,
      subtitle,
      category,
      date: new Date().toLocaleDateString(),
      imageUrl,
      excerpt: generateExcerpt(content),
      author,
      content
    };

    addPost(newPost);
  };

  return (
    <section className="py-24 bg-[#FAFAFA] min-h-screen">
      <div className="container-custom max-w-4xl">
        <div className="bg-white p-12 rounded-2xl border border-border shadow-sm">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigateTo("list")}
            className="mb-10 btn btn-outline h-10 px-5 text-[10px] uppercase tracking-widest flex items-center gap-2"
          >
            <span className="material-icons-outlined text-sm">west</span>
            Back to Insights
          </motion.button>

          <h2 className="text-3xl font-bold mb-10 text-foreground tracking-tight">
            Institutional <span className="text-muted-foreground">Editor.</span>
          </h2>

          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Institutional Title</label>
              <input
                type="text"
                placeholder="e.g. Strategic Academic Roadmap 2026"
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Subtitle</label>
                <input
                  type="text"
                  placeholder="Brief overview"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                  value={subtitle}
                  onChange={e => setSubtitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Classification</label>
                <input
                  type="text"
                  placeholder="e.g. Strategy"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Institutional Author</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Visual Asset URL</label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">
                Strategic Content
              </label>
              <div className="border border-border rounded-lg overflow-hidden bg-white min-h-[400px]">
                <RichTextEditor value={content} onChange={setContent} />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="btn btn-primary w-full h-12 text-xs uppercase tracking-widest mt-4"
            >
              Publish Strategic Entry
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCreate;