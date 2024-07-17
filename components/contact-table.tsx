import React from "react";

const ContactTable = () => {
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Phone Number</th>
          <th className="px-6 py-3">Created At</th>
          <th className="px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b bg-white">
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3"></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactTable;
