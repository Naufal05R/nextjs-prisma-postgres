import EditForm from "@/components/edit-form";
import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateContactPage = async ({ params }: { params: { id: string } }) => {
	const id = params.id;
  const contact = await getContactById(id);

	if (!contact) {
		return notFound();
	}

  return (
    <div className="mx-auto mt-5 max-w-md">
      <h1 className="mb-2 text-center text-2xl">Update Contact</h1>
      <EditForm contact={contact} />
    </div>
  );
};

export default UpdateContactPage;
