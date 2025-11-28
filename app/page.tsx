import prisma from "@/lib/db";
import TheWinnerName from "../components/names";

export default async function SettingNames() {
  const getNames = await prisma.participant.findMany({
    select: {
      name: true,
      id: true
    },
  });

  const intonumbers = getNames.map((name) => (
    name.name
  ))

  return (
    <div>
      <TheWinnerName winnerName={intonumbers} />
    </div>
  )
}