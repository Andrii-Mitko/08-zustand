import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ModalNotePage = async ({ params }: Props) => {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Modal>
        <NotePreview id={id} />
      </Modal>
    </HydrationBoundary>
  );
};

export default ModalNotePage;
