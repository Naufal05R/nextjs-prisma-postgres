import { saveContact } from "@/lib/actions";

const CreateForm = () => {
  return (
    <div>
      <form action={saveContact}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name..."
            className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number..."
            className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-sm bg-blue-700 text-sm font-medium text-white hover:bg-blue-800 px-5 py-3 text-center"
        >Save</button>
      </form>
    </div>
  );
};

export default CreateForm;
