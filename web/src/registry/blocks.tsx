import loginFormSource from "deste04-ui/components/blocks/login-form.tsx?raw";
import { LoginForm } from "deste04-ui/components/blocks/login-form";

export interface BlockEntry {
  /** Real source shown on the block's page, imported with `?raw` so it always matches what the CLI installs. */
  source: string;
  render: () => JSX.Element;
}

const blockRegistry: Record<string, BlockEntry> = {
  "login-form": {
    source: loginFormSource,
    render: () => <LoginForm onSubmit={(values) => console.log("login-form submit", values)} />,
  },
};

export function getBlockEntry(slug: string): BlockEntry | undefined {
  return blockRegistry[slug];
}
