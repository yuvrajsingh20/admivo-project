import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<Props> = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: "text-blue-600 underline font-semibold"
        }
      })
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    }
  });

  if (!editor) return null;

  const setLink = () => {
    const url = prompt("Enter URL");
    if (!url) return;

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  };

  return (
    <div className="border rounded-xl p-4 bg-white">

      {/* Toolbar */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="px-3 py-1 border rounded"
        >
          Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="px-3 py-1 border rounded"
        >
          Italic
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="px-3 py-1 border rounded"
        >
          Bullet List
        </button>

        <button
          onClick={setLink}
          className="px-3 py-1 border rounded"
        >
          Add Link
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="min-h-[200px] focus:outline-none" />
    </div>
  );
};

export default RichTextEditor;