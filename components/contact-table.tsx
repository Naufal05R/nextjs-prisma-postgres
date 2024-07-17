import { getContact } from "@/lib/data";

const ContactTable = async () => {
  const contacts = await getContact();

  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3 text-nowrap">Phone Number</th>
          <th className="px-6 py-3 text-nowrap">Created At</th>
          <th className="px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id} className="border-b bg-white">
            <td className="px-6 py-3">{index + 1}</td>
            <td className="px-6 py-3">{contact.name}</td>
            <td className="px-6 py-3">{contact.phone}</td>
            <td className="px-6 py-3">{contact.createdAt.toString()}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
