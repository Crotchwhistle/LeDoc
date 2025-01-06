"use client"

import { toast } from "sonner"
import { useState } from "react"
import { useMutation } from "convex/react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Id } from "../../convex/_generated/dataModel"
import { api } from "../../convex/_generated/api"
import { useRouter } from "next/navigation"

interface RemoveDialogProps {
    documentId: Id<"documents">
    children: React.ReactNode
}

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
    const router = useRouter()
    const remove = useMutation(api.documents.removeById)
    const [isRemoving, setIsRemoving] = useState(false)

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This cannot be undone. Your document will be gone forever!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled={isRemoving}
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsRemoving(true)
                            remove({ id: documentId })
                                .catch(() => toast.error("sum ting wong (there's been an error somewhere)"))
                                .then(() => {
                                    toast.success("Document removed!")
                                    router.push("/")
                                })
                                .finally(() => setIsRemoving(false))
                        }}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}