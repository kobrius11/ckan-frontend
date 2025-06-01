import Link from "next/link";
import {
  Header,
  HeaderContainer,
  HeaderContent,
  HeaderItem,
} from "@/components/ui/header";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export default async function SiteHeader() {
  return (
    <Header>
      <HeaderContainer className="grid grid-rows-[auto_auto]">
        <HeaderContent className="flex items-center justify-center">
          <Link href={"/"}>
            <Button variant="link">CKAN</Button>
          </Link>
        </HeaderContent>

        <HeaderContent className="grid grid-cols-[auto_auto]">
          <HeaderContent className="flex items-center justify-center">
            <HeaderItem>
              <ThemeToggle />
            </HeaderItem>
          </HeaderContent>
          <HeaderContent className="flex items-center justify-center">
            <HeaderItem>
              <Button variant="link">
                <Link href="/datasets">Datasets</Link>
              </Button>
            </HeaderItem>
            <HeaderItem>
              <Button variant="link">
                <Link href="/organizations">Organizations</Link>
              </Button>
            </HeaderItem>
            <HeaderItem>
              <Button variant="link">
                <Link href="/groups">Groups</Link>
              </Button>
            </HeaderItem>
            <HeaderItem>
              <Button variant="link">
                <Link href="/about">About</Link>
              </Button>
            </HeaderItem>
          </HeaderContent>
        </HeaderContent>
      </HeaderContainer>
    </Header>
  );
}
