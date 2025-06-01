import Link from "next/link";
import { CKAN } from "@/lib/ckanapi";
import { Main } from "@/components/ui/main";
import { Div } from "@/components/ui/div";
import { Article } from "@/components/ui/article";
import { DynamicBreadcrumbs } from "@/components/dynamic-breadcrumbs";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function DatasetsPage() {
  const datasets = await CKAN.getPackageListWithDetails({
    offset: 0,
    limit: 10,
  });
  const organizations = await CKAN.getOrganizationList();
  const groups = await CKAN.getGroupList();

  return (
    <Main>
      <DynamicBreadcrumbs />
      <Div className="grid grid-cols-[25%_auto] gap-5">
        <Article>
          <Div>
            <p className="font-semibold">Organizations:</p>
            {organizations.map((organization, idx) => (
              <p key={idx}>{organization}</p>
            ))}
            <p className="font-semibold">Groups:</p>
          </Div>
        </Article>
        <Article>
          {datasets.map((dataset, idx) => (
            <Link key={idx} href={`/datasets/${dataset.name}/`}>
              <Card>
                <CardHeader>
                  <CardTitle>{dataset.name}</CardTitle>
                </CardHeader>
                <CardContent>{dataset.title}</CardContent>

                <CardFooter>
                  {dataset.tags?.map((tag, idx) => (
                    <p key={idx}> {tag.display_name} </p>
                  ))}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </Article>
      </Div>
    </Main>
  );
}
