import { CreateButton } from "@/components/buttons";
import ContactTable from "@/components/contact-table";
import Search from "@/components/search";
import React, { Suspense } from "react";
import { getContactPages } from "@/lib/data";
import Pagination from "@/components/pagination";
import { TableSkeleton } from "@/components/skeletons";

const ContactPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getContactPages(query);

  return (
    <main className="relative mx-auto min-h-screen max-w-screen-md px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-8">
      <hgroup className="mb-5 flex items-center justify-between gap-1">
        <Search />
        <CreateButton />
      </hgroup>
      <section className="max-w-full overflow-x-scroll">
        <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
          <ContactTable query={query} currentPage={currentPage} />
        </Suspense>
        <div className="absolute bottom-0 left-1/2 mt-4 flex -translate-x-1/2 justify-center pb-2 sm:pb-4 lg:pb-8">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
