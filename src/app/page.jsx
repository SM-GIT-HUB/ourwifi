import { getDatas } from "@/backend/data"
import Search from "@/components/Search"

export default async function Home() {
  const res = await getDatas();

  return (
    <div className="h-screen w-screen font-[family-name:var(--font-geist-sans)]">
      <Search names={res.names} ips={res.ips} macs={res.macs} />
    </div>
  );
}
