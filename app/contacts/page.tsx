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
    <div className="mx-auto mt-5 max-w-screen-md">
      <hgroup className="mb-5 flex items-center justify-between gap-1">
        <Search />
        <CreateButton />
      </hgroup>
      <section className="max-w-full overflow-x-scroll">
        <ContactTable query={query} currentPage={currentPage} />
        <div className="flex justify-center mt-4">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
