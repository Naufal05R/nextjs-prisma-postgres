import { prisma } from "@/lib/prisma";

export const getContact = async () => {
	try {
		const contact = await prisma.contact.findMany();
		return contact
	} catch (error) {
		throw new Error("Failed to fetch contact data")
	}
};
