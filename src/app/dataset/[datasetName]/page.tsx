import { Main } from "@/components/ui/main"
import { Div } from "@/components/ui/div"
import { CKAN } from "@/lib/ckanapi"
import { DynamicBreadcrumbs } from "@/components/dynamic-breadcrumbs";

export default async function DatasetPage({ params, }: {params: Promise<{datasetName: string}>}) {
    const { datasetName } = await params;
    const dataset = await CKAN.getPackageDetails(datasetName);
    return (
        <Main>
            <DynamicBreadcrumbs />
            <Div>
                {dataset?.title}
            </Div>
        </Main>
    )
}