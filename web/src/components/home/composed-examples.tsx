import { Check, CreditCard, Landmark } from "lucide-react";
import { Button, buttonVariants } from "deste04-ui/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "deste04-ui/components/ui/card";
import { Field, FieldLabel } from "deste04-ui/components/ui/field";
import { Input } from "deste04-ui/components/ui/input";
import { Separator } from "deste04-ui/components/ui/separator";
import { Switch } from "deste04-ui/components/ui/switch";
import { Badge } from "deste04-ui/components/ui/badge";
import { CopyButton } from "deste04-ui/components/ui/copy-button";
import { ToggleGroup, ToggleGroupItem } from "deste04-ui/components/ui/toggle-group";
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from "deste04-ui/components/ui/tabs";
import { cn } from "deste04-ui/lib/utils";
import { GithubIcon } from "../icons/github";

/**
 * Two columns of small, realistic UI compositions, all built from
 * deste04-ui components as-is (no one-off markup). Sits next to the hero
 * copy to show what the library looks like assembled into real screens,
 * not just isolated variants.
 */
export function ComposedExamples() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      <div className="flex flex-col gap-4 sm:gap-6">
        <Card variant="outline">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Create an account and start shipping interfaces today.</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
            >
              <GithubIcon className="size-4" /> Continue with GitHub
            </a>
            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs whitespace-nowrap text-muted-foreground">or with email</span>
              <Separator className="flex-1" />
            </div>
            <Field>
              <FieldLabel htmlFor="hero-signup-email">Email</FieldLabel>
              <Input id="hero-signup-email" type="email" placeholder="you@example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="hero-signup-password">Password</FieldLabel>
              <Input id="hero-signup-password" type="password" placeholder="********" />
            </Field>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Create account
            </Button>
          </CardFooter>
        </Card>

        <Card variant="outline">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose what you want to hear about.</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            {[
              { title: "Product updates", desc: "New features and improvements.", checked: true },
              { title: "Security alerts", desc: "Sign-ins from a new device.", checked: true },
              { title: "Marketing", desc: "Tips, offers and news.", checked: false },
            ].map((row, i) => (
              <div key={row.title}>
                {i > 0 && <Separator className="mb-3" />}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{row.title}</p>
                    <p className="text-xs text-muted-foreground">{row.desc}</p>
                  </div>
                  <Switch defaultChecked={row.checked} />
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-t">
            <Button variant="outline" className="w-full">
              Save preferences
            </Button>
          </CardFooter>
        </Card>

        <Card variant="outline">
          <CardHeader>
            <CardTitle>Share this page</CardTitle>
            <CardDescription>Anyone with the link can view the docs.</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <Field>
              <FieldLabel htmlFor="hero-share-link">Link</FieldLabel>
              <div className="flex gap-2">
                <Input
                  id="hero-share-link"
                  readOnly
                  value="https://deste04-ui.dev/docs"
                  className="flex-1"
                />
                <CopyButton value="https://deste04-ui.dev/docs" />
              </div>
            </Field>
            <Separator />
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-foreground">Riccardo G.</p>
              <Badge variant="subtle" size="sm">
                Owner
              </Badge>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-foreground">Alex M.</p>
              <Badge variant="outline" size="sm">
                Editor
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        <Card variant="outline">
          <CardHeader>
            <CardTitle>Starter plan</CardTitle>
            <CardDescription>Everything you need to launch.</CardDescription>
            <CardAction>
              <Badge variant="subtle" size="sm">
                Popular
              </Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="gap-4">
            <p className="text-3xl font-semibold text-foreground">
              $19<span className="text-base font-normal text-muted-foreground">/month</span>
            </p>
            <ul className="flex flex-col gap-2">
              {["Unlimited components", "Unlimited projects", "Priority support"].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="size-4 text-primary" /> {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Get started
            </Button>
          </CardFooter>
        </Card>

        <Card variant="outline">
          <CardHeader>
            <CardTitle>Payment method</CardTitle>
            <CardDescription>Add a card to complete your purchase.</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <ToggleGroup defaultValue={["card"]} className="w-full flex-nowrap">
              <ToggleGroupItem value="card" className="flex-1 justify-center">
                <CreditCard /> Card
              </ToggleGroupItem>
              <ToggleGroupItem value="bank" className="flex-1 justify-center">
                <Landmark /> Bank
              </ToggleGroupItem>
            </ToggleGroup>
            <Field>
              <FieldLabel htmlFor="hero-card-name">Name on card</FieldLabel>
              <Input id="hero-card-name" placeholder="Jane Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="hero-card-number">Card number</FieldLabel>
              <Input id="hero-card-number" placeholder="4242 4242 4242 4242" />
            </Field>
            <div className="flex gap-3">
              <Field className="flex-1">
                <FieldLabel htmlFor="hero-card-expiry">Expiry</FieldLabel>
                <Input id="hero-card-expiry" placeholder="MM/YY" />
              </Field>
              <Field className="flex-1">
                <FieldLabel htmlFor="hero-card-cvv">CVV</FieldLabel>
                <Input id="hero-card-cvv" placeholder="123" />
              </Field>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Pay $49.00
            </Button>
          </CardFooter>
        </Card>

        <Card variant="outline">
          <Tabs defaultValue="login" variant="line" fitted>
            <CardHeader className="pb-0">
              <TabsList>
                <TabsTrigger value="login">Log in</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
                <TabsIndicator />
              </TabsList>
            </CardHeader>
            <TabsContent value="login">
              <CardContent className="gap-4">
                <Field>
                  <FieldLabel htmlFor="hero-login-email">Email</FieldLabel>
                  <Input id="hero-login-email" type="email" placeholder="you@example.com" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="hero-login-password">Password</FieldLabel>
                  <Input id="hero-login-password" type="password" placeholder="********" />
                </Field>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Log in
                </Button>
              </CardFooter>
            </TabsContent>
            <TabsContent value="register">
              <CardContent className="gap-4">
                <Field>
                  <FieldLabel htmlFor="hero-register-name">Name</FieldLabel>
                  <Input id="hero-register-name" placeholder="Jane Doe" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="hero-register-email">Email</FieldLabel>
                  <Input id="hero-register-email" type="email" placeholder="you@example.com" />
                </Field>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Create account
                </Button>
              </CardFooter>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
