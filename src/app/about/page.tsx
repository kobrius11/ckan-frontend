import { Main } from "@/components/ui/main";
import { Div } from "@/components/ui/div";
import { Article } from "@/components/ui/article";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DynamicBreadcrumbs } from "@/components/dynamic-breadcrumbs";

export default async function AboutPage() {
  return (
    <Main>
      <Div>
      <DynamicBreadcrumbs />

        <Article>
          <Div className="flex flex-col">
            <h1 className="bold text-3xl">About</h1>
            <p>
              CKAN is the world’s leading open-source data portal platform. CKAN
              is a complete out-of-the-box software solution that makes data
              accessible and usable – by providing tools to streamline
              publishing, sharing, finding and using data (including storage of
              data and provision of robust data APIs). CKAN is aimed at data
              publishers (national and regional governments, companies and
              organizations) wanting to make their data open and available. CKAN
              is used by governments and user groups worldwide and powers a
              variety of official and community data portals including portals
              for local, national and international government, such as the UK’s
              data.gov.uk and the United States catalog.data.gov, the Brazilian
              dados.gov.br, Dutch and Netherland government portals, as well as
              city and municipal sites in the US, UK, Argentina, Finland and
              elsewhere.
            </p>
            <p className="text-xl font-semibold">
              CKAN:
              <Button variant="link">
                <Link className="text-l font-medium" href="https://ckan.org/">
                  https://ckan.org/
                </Link>
              </Button>
            </p>
            <p className="text-xl font-semibold">
              CKAN Showcases:
              <Button variant="link">
                <Link className="text-l font-medium" href="https://ckan.org/">
                  https://ckan.org/showcase
                </Link>
              </Button>
            </p>
            <p className="text-xl font-semibold">
              CKAN Features overview:
              <Button variant="link">
                <Link className="text-l font-medium" href="https://ckan.org/">
                  https://ckan.org/features/
                </Link>
              </Button>
            </p>
          </Div>
        </Article>
      </Div>
    </Main>
  );
}
