"use client";
import { createNote, NewNoteData } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useNoteDraftStore } from "@/lib/stores/noteStore";
import type { NoteTag } from "@/types/note";
import css from "./NoteForm.module.css";
type Props = {
  categories: NoteTag[];
};

const NoteForm = ({ categories }: Props) => {
  const router = useRouter();
  const { draft, setDraft } = useNoteDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };

  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      router.push("/notes/filter/all");
    },
  });

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    mutate(values);
  };
  const handleCancel = () => router.push("/notes/filter/all");
  return (
    <form action={handleSubmit} className={css.form}>
      <label className={css.label}>
        Title
        <input
          name="title"
          type="text"
          className={css.input}
          defaultValue={draft?.title}
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Content
        <textarea
          name="content"
          className={css.textarea}
          defaultValue={draft?.content}
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Tag
        <select
          name="tag"
          className={css.select}
          defaultValue={draft?.tag}
          onChange={handleChange}
        >
          {categories.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </label>

      <div className={css.buttonGroup}>
        <button type="submit" className={css.submitButton}>
          Create
        </button>
        <button
          type="button"
          className={css.cancelButton}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
