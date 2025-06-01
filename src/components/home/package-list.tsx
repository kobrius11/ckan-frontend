import { CKAN } from "@/lib/ckanapi";
import { Div } from "@/components/ui/div";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function PackageList() {
  const datasets = await CKAN.getPackageListWithDetails({
    offset: 0,
    limit: 10,
  });

  return (
    <Div>
      {datasets.map((dataset, idx) => (
        <Link
            key={idx}
            href={`/datasets/${dataset.name}/`}
        >
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
    </Div>
  );
}
