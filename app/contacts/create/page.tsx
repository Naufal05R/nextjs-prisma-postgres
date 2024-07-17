import CreateForm from "@/components/create-form";

const CreateContactPage = () => {
  return (
    <div className="mx-auto mt-5 max-w-md">
      <h1 className="mb-2 text-center text-2xl">Add New Contact</h1>
			<CreateForm />
    </div>
  );
};

export default CreateContactPage;
