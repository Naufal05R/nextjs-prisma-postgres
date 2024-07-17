export const TableSkeleton = () => {
	return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="text-nowrap px-6 py-3">Phone Number</th>
          <th className="text-nowrap px-6 py-3">Created At</th>
          <th className="px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="animate-pulse">
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index} className="border-b border-gray-50 bg-white">
            <td className="px-6 py-3">
              <div className="h-4 w-4 rounded bg-gray-100"></div>
            </td>
            <td className="px-6 py-3">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>
            <td className="px-6 py-3">
              <div className="h-4 w-20 rounded bg-gray-100"></div>
            </td>
            <td className="px-6 py-3">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>
            <td className="flex justify-center gap-1 py-3">
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}