"use client"

import { usePaginatedQuery } from "convex/react";

import { useSearchParam } from "@/hooks/use-search-param";

import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { DocumentsTable } from "./documents-table";
import { api } from "../../../convex/_generated/api";


const Home = () => {
  const [search] = useSearchParam()
  const { 
    results, 
    status, 
    loadMore 
  } = usePaginatedQuery(api.documents.get, { search }, { initialNumItems: 5 })

  return (
    <div className="min-h-screen flex flex-col bg-[#222831]">
      <div className="text-white fixed top-0 left-0 right-0 z-10 h-16 bg-[#222831] p-4">
        <Navbar />
      </div>

      <div className="mt-16 rounded-md">
        <TemplatesGallery />
        <DocumentsTable 
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>

    </div>
  )
}

export default Home;