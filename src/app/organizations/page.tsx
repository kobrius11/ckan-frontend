import { Main } from "@/components/ui/main"
import { Div } from "@/components/ui/div"
import { CKAN } from "@/lib/ckanapi"
import { DynamicBreadcrumbs } from "@/components/dynamic-breadcrumbs"

export default async function OrganizationsPage() {

    return (
        <Main>
            <DynamicBreadcrumbs />
            <Div>
            </Div>
        </Main>
    )
}