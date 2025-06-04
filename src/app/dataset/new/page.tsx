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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatasetNewForm } from "@/components/dataset/new-form";

export default async function DatasetNewPage() {
  return (
    <Main>
      <DynamicBreadcrumbs />
      <Div className="grid grid-cols-[25%_auto]">
        <Card>
          <CardHeader>What are datasets ?</CardHeader>
          <CardContent>
            <p>
              A CKAN Dataset is a collection of data resources (such as files),
              together with a description and other information, at a fixed URL.
              Datasets are what users see when searching for data.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <DatasetNewForm />
          </CardContent>
        </Card>
      </Div>
    </Main>
  );
}
