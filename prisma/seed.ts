import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.contact.createMany({
    data: [
      { name: "Jone Karl", phone: "08123456789" },
      { name: "Jane Smith", phone: "0823456789" },
      { name: "Jimmy Owe", phone: "0823456789" },
      { name: "Jenny Pie", phone: "0823456789" },
    ],
  });
}

seed()
  .then(() => {
    console.log("Seeding complete!");
  })
  .catch((error) => {
    console.error(error);
  });
