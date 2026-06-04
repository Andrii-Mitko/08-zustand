"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { createNote, NewNoteData } from "@/lib/api";
import type { NoteTag } from "@/types/note";
import css from "./NoteForm.module.css";

const NOTE_TAGS: NoteTag[] = [
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];

const NoteForm = () => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      router.push("/notes/filter/all");
    },
  });

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData) as NewNoteData;
    mutate(data);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <label className={css.label}>
        Title
        <input name="title" type="text" className={css.input} />
      </label>

      <label className={css.label}>
        Content
        <textarea name="content" className={css.textarea} />
      </label>

      <label className={css.label}>
        Tag
        <select name="tag" className={css.select}>
          {NOTE_TAGS.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className={css.submitButton}>
        Create
      </button>
    </form>
  );
};

export default NoteForm;
