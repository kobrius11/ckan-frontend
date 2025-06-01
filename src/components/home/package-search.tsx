import { Div } from "@/components/ui/div";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function PackageSearch() {
    
    return (
        <Div>
        <Card>
          <CardHeader>
            <CardTitle >Package Search</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between gap-4">
          <Input placeholder="Search for packages ..." />
          <CardAction>
            <Button>search</Button>
          </CardAction>
          </CardContent>
          <CardFooter>
            This is card footer
          </CardFooter>
        </Card>
        </Div>
    )
}

