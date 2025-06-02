import { Main } from "@/components/ui/main";
import { Div } from "@/components/ui/div";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/user/login-form";

export default function LoginPage() {
  return (
    <Main>
      <DynamicBreadcrumbs />
      <Div className="grid grid-cols-[25%_auto]">
        <Card>
          <CardHeader>
            <CardTitle>Forgotten your password?</CardTitle>
            <CardDescription>
              No problem, use our password recovery form to reset it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardAction>Reset password</CardAction>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </Div>
    </Main>
  );
}
