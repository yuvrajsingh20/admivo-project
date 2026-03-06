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
          class: "text-foreground underline font-bold"
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
    <div className="bg-white min-h-[300px] flex flex-col">
      {/* Toolbar */}
      <div className="flex gap-1 p-2 border-b border-border bg-secondary/30 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`h-8 px-3 rounded text-[10px] font-bold uppercase tracking-widest transition-colors ${editor.isActive('bold') ? 'bg-foreground text-background' : 'hover:bg-secondary text-foreground'}`}
        >
          Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`h-8 px-3 rounded text-[10px] font-bold uppercase tracking-widest transition-colors ${editor.isActive('italic') ? 'bg-foreground text-background' : 'hover:bg-secondary text-foreground'}`}
        >
          Italic
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`h-8 px-3 rounded text-[10px] font-bold uppercase tracking-widest transition-colors ${editor.isActive('bulletList') ? 'bg-foreground text-background' : 'hover:bg-secondary text-foreground'}`}
        >
          List
        </button>

        <button
          onClick={setLink}
          className={`h-8 px-3 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-secondary text-foreground transition-colors ${editor.isActive('link') ? 'text-blue-500' : ''}`}
        >
          Link
        </button>
      </div>

      {/* Editor */}
      <div className="flex-grow p-6">
        <EditorContent editor={editor} className="prose prose-sm max-w-none focus:outline-none min-h-[250px]" />
      </div>
    </div>
  );
};

export default RichTextEditor;