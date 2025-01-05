"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams() 

    return (
    <LiveblocksProvider publicApiKey={"pk_dev_ds__bjGQbYRsJsGN3w73NtTTfl8GcbydJy73a_jXp7FwfRwMAUAf4K02pduaZado"}>
        <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
            {children}
        </ClientSideSuspense>
        </RoomProvider>
    </LiveblocksProvider>
    );
}