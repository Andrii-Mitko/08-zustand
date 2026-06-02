import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
}
