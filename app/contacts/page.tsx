import { CreateButton } from "@/components/buttons";
import ContactTable from "@/components/contact-table";
import Search from "@/components/search";
import React from "react";
import { getContactPages } from "@/lib/data";
import Pagination from "@/components/pagination";

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
    <main className="mx-auto max-w-screen-md px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-8 min-h-screen relative">
      <hgroup className="mb-5 flex items-center justify-between gap-1">
        <Search />
        <CreateButton />
      </hgroup>
      <section className="max-w-full overflow-x-scroll">
        <ContactTable query={query} currentPage={currentPage} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-2 sm:pb-4 lg:pb-8 flex justify-center mt-4">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
