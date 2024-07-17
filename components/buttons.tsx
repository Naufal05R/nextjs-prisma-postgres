"use client";

import { deleteContact } from "@/lib/actions";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export const CreateButton = () => {
  return (
    <Link
      href="/contacts/create"
      className="inline-flex cursor-pointer items-center gap-x-1 rounded-sm bg-blue-700 py-[9px] pl-2.5 pr-4 text-sm text-white hover:bg-blue-800"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/contacts/edit/${id}`}
      className="cursor-pointer rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteContactWithId = deleteContact.bind(null, id);

  return (
    <form action={deleteContactWithId}>
      <button className="cursor-pointer rounded-sm border p-1 hover:bg-gray-100">
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={cn(
        "w-full rounded-sm bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800",
        {
          "cursor-progress opacity-50": pending,
        },
      )}
      disabled={pending}
    >
      <span>
        {pending
          ? `${label.slice(0, label.charAt(label.length - 1) === "e" ? -1 : undefined)}ing...`
          : label}
      </span>
    </button>
  );
};
