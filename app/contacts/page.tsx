import { CreateButton } from "@/components/buttons";
import ContactTable from "@/components/contact-table";
import Search from "@/components/search";
import React from "react";

const ContactPage = () => {
  return (
    <div className="mx-auto mt-5 max-w-screen-md">
      <div className="mb-5 flex items-center justify-between gap-1">
				<Search />
				<CreateButton />
			</div>
			<ContactTable />
    </div>
  );
};

export default ContactPage;
