import React, { createContext, useContext, useState } from "react";
import { BLOG_POSTS } from "./constants";
import { BlogPost } from "./types";

type BlogView = "list" | "detail" | "create";
type UserRole = "admin" | "user";

interface BlogContextType {
  posts: BlogPost[];
  currentView: BlogView;
  selectedPost: BlogPost | null;
  role: UserRole;
  navigateTo: (view: BlogView, id?: number) => void;
  addPost: (post: BlogPost) => void;
  setRole: (role: UserRole) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [currentView, setCurrentView] = useState<BlogView>("list");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // 🔥 Default role (change to "admin" to test)
  const [role, setRole] = useState<UserRole>("admin");

  const navigateTo = (view: BlogView, id?: number) => {
    if (view === "detail" && id !== undefined) {
      const post = posts.find(p => p.id === id) || null;
      setSelectedPost(post);
    }
    setCurrentView(view);
  };

  const addPost = (post: BlogPost) => {
    setPosts(prev => [post, ...prev]);
    setCurrentView("list");
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        currentView,
        selectedPost,
        role,
        setRole,
        navigateTo,
        addPost
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within BlogProvider");
  }
  return context;
};