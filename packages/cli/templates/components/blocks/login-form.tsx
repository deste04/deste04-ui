import type { ComponentProps } from "react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "../ui/field";
import { Input } from "../ui/input";
import { Link } from "../ui/link";

/** Inlined so this block has no dependency beyond what the CLI already installs. */
function GithubIcon(props: Readonly<ComponentProps<"svg">>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

export interface LoginFormProps extends Omit<ComponentProps<typeof Card>, "onSubmit"> {
  onSubmit?: (values: { email: string; password: string }) => void;
}

/**
 * A complete sign-in card: OAuth button, email/password fields, "forgot
 * password" and "sign up" links. Everything below is your code once
 * installed, wire onSubmit (or the form's own onSubmit) to your auth flow.
 */
function LoginForm({ className, onSubmit, ...props }: Readonly<LoginFormProps>) {
  return (
    <Card className={cn("w-full max-w-sm", className)} {...props}>
      <CardHeader>
        <CardTitle>Log in to your account</CardTitle>
        <CardDescription>Enter your email below to log in to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            onSubmit?.({
              email: String(data.get("email") ?? ""),
              password: String(data.get("password") ?? ""),
            });
          }}
        >
          <FieldGroup>
            <Field>
              <Button variant="outline" type="button">
                <GithubIcon className="size-4" />
                Continue with GitHub
              </Button>
            </Field>

            <FieldSeparator>Or continue with</FieldSeparator>

            <Field>
              <FieldLabel htmlFor="login-form-email">Email</FieldLabel>
              <Input id="login-form-email" name="email" type="email" placeholder="you@example.com" required />
            </Field>

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="login-form-password">Password</FieldLabel>
                <Link href="#" variant="no-underline" className="text-sm text-muted-foreground hover:text-foreground">
                  Forgot your password?
                </Link>
              </div>
              <Input id="login-form-password" name="password" type="password" placeholder="********" required />
            </Field>

            <Field>
              <Button type="submit">Log in</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="justify-center gap-1 text-sm text-muted-foreground">
        Don&apos;t have an account?
        <Link href="#" variant="no-underline" className="font-medium text-foreground">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
}

export { LoginForm };
