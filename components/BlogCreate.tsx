import React, { useState } from "react";
import { useBlog } from "../BlogContext";
import { BlogPost } from "../types";
import RichTextEditor from "./RichTextEditor";

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
    <section className="py-24 px-6 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

        <button
          onClick={() => navigateTo("list")}
          className="mb-8 hover:scale-[1.03] transition-transform text-primary font-semibold"
        >
          ← Back to Blog
        </button>

        <h2 className="text-3xl font-extrabold mb-8">
          Create New Blog
        </h2>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Title"
            className="w-full border p-3 rounded-xl"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Subtitle"
            className="w-full border p-3 rounded-xl"
            value={subtitle}
            onChange={e => setSubtitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full border p-3 rounded-xl"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />

          <input
            type="text"
            placeholder="Author"
            className="w-full border p-3 rounded-xl"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border p-3 rounded-xl"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />

          <div>
            <label className="block mb-2 font-semibold">
              Blog Content
            </label>
            <RichTextEditor value={content} onChange={setContent} />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-black text-white hover:scale-[1.03] transition-transform px-6 py-3 rounded-xl font-bold"
          >
            Publish Blog
          </button>

        </div>
      </div>
    </section>
  );
};

export default BlogCreate;