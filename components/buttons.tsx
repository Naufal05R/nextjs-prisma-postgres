import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";

export const CreateButton = () => {
  return (
    <Link
      href="/contacts/create"
      className="inline-flex items-center gap-x-1 rounded-sm bg-blue-700 pl-2.5 pr-4 py-[9px] text-sm text-white hover:bg-blue-800"
    >
			<IoAddSharp size={20} />
			Create
		</Link>
  );
};
