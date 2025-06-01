import { Main } from "@/components/ui/main";
import PackageSearch from "@/components/home/package-search";
import PackageList from "@/components/home/package-list";

export default async function Home() {
  return (
    <Main>
      <PackageSearch />
      <PackageList />
    </Main>
  );
}
