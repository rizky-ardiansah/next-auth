import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardDemo() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-70px)] px-4 py-12">
      <Card className="w-full max-w-sm border-2 border-border shadow-[var(--shadow)] bg-secondary-background">
        <CardHeader>
          <CardTitle className="font-[var(--font-weight-heading)]">
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="email"
                  className="font-[var(--font-weight-base)]"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-2 border-border shadow-[var(--shadow)] bg-background transition-all hover:shadow-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px]"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className="font-[var(--font-weight-base)]"
                  >
                    Password
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="border-2 border-border shadow-[var(--shadow)] bg-background transition-all hover:shadow-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px]"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full bg-main text-main-foreground font-[var(--font-weight-heading)] border-2 border-border shadow-[var(--shadow)] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all rounded-[var(--radius-base)]"
          >
            Login
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="text-main underline underline-offset-4 hover:text-opacity-80"
            >
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
