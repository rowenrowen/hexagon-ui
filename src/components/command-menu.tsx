"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "cmdk";
import {
  CreditCard,
  Download,
  FileText,
  HelpCircle,
  Home,
  LayoutGrid,
  Moon,
  PanelRight,
  Scale,
  Search,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { FREE_STARTER_DOWNLOAD_URL } from "@/lib/checkout-url";

const gumroadUrl = process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL;

type CommandMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  const runCommand = useCallback(
    (fn: () => void) => {
      onOpenChange(false);
      fn();
    },
    [onOpenChange],
  );

  const go = useCallback(
    (href: string) => {
      runCommand(() => {
        router.push(href);
      });
    },
    [router, runCommand],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-[50%] top-[50%] z-[101] w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-2xl shadow-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <Dialog.Title className="sr-only">Search and navigate</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search pages, jump to routes, open checkout, and switch light or dark appearance.
          </Dialog.Description>

          <Command label="Site navigation" shouldFilter loop={false}>
            <div className="flex items-center gap-2 border-b border-border px-3">
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              <CommandInput
                placeholder="Search pages and actions…"
                className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <CommandList className="max-h-[min(60vh,320px)] overflow-y-auto p-2">
              <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">No matches.</CommandEmpty>

              <CommandGroup heading="Pages">
                <CommandItem
                  value="home marketing"
                  keywords={["hero", "landing", "start"]}
                  onSelect={() => go("/")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <Home className="size-4 text-muted-foreground" aria-hidden />
                  Home
                </CommandItem>
                <CommandItem
                  value="blocks hub scroll"
                  keywords={["preview", "gallery", "sections", "components"]}
                  onSelect={() => go("/blocks")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <LayoutGrid className="size-4 text-muted-foreground" aria-hidden />
                  Blocks
                </CommandItem>
                <CommandItem
                  value="kit zip manifest"
                  keywords={["files", "manifest", "zip", "download"]}
                  onSelect={() => go("/kit")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <LayoutGrid className="size-4 text-muted-foreground" aria-hidden />
                  Kit &amp; manifest
                </CommandItem>
                <CommandItem
                  value="pricing license purchase"
                  keywords={["purchase", "gumroad", "buy", "79", "checkout"]}
                  onSelect={() => go("/pricing")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <CreditCard className="size-4 text-muted-foreground" aria-hidden />
                  Pricing
                </CommandItem>
                <CommandItem
                  value="docs handoff guide buyer"
                  keywords={["docs", "guide", "handoff", "readme"]}
                  onSelect={() => go("/docs")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <PanelRight className="size-4 text-muted-foreground" aria-hidden />
                  Docs
                </CommandItem>
                <CommandItem
                  value="faq homepage section"
                  keywords={["help", "questions", "answers"]}
                  onSelect={() => go("/#faq")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <HelpCircle className="size-4 text-muted-foreground" aria-hidden />
                  FAQ on homepage
                </CommandItem>
              </CommandGroup>

              <CommandSeparator className="my-2 h-px bg-border" />

              <CommandGroup heading="Docs & legal">
                <CommandItem
                  value="docs handoff guide"
                  keywords={["readme", "zip", "developer", "buyer", "docs"]}
                  onSelect={() => go("/docs")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <PanelRight className="size-4 text-muted-foreground" aria-hidden />
                  Docs
                </CommandItem>
                <CommandItem
                  value="privacy policy"
                  keywords={["legal", "gdpr", "data"]}
                  onSelect={() => go("/privacy")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <FileText className="size-4 text-muted-foreground" aria-hidden />
                  Privacy
                </CommandItem>
                <CommandItem
                  value="terms of use"
                  keywords={["legal", "license", "sale"]}
                  onSelect={() => go("/terms")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <Scale className="size-4 text-muted-foreground" aria-hidden />
                  Terms
                </CommandItem>
                <CommandItem
                  value="free starter zip download"
                  keywords={["free", "starter", "zip", "download", "trial"]}
                  onSelect={() =>
                    runCommand(() => {
                      const isAbsolute =
                        FREE_STARTER_DOWNLOAD_URL.startsWith("http://") ||
                        FREE_STARTER_DOWNLOAD_URL.startsWith("https://");
                      if (isAbsolute) {
                        window.open(FREE_STARTER_DOWNLOAD_URL, "_blank", "noopener,noreferrer");
                      } else {
                        window.location.assign(FREE_STARTER_DOWNLOAD_URL);
                      }
                    })
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <Download className="size-4 text-muted-foreground" aria-hidden />
                  Download free starter ZIP
                </CommandItem>
                {gumroadUrl ? (
                  <CommandItem
                    value="checkout gumroad"
                    keywords={["buy", "pay"]}
                    onSelect={() =>
                      runCommand(() => {
                        window.open(gumroadUrl, "_blank", "noopener,noreferrer");
                      })
                    }
                    className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                  >
                    <CreditCard className="size-4 text-muted-foreground" aria-hidden />
                    Open Gumroad checkout
                  </CommandItem>
                ) : null}
              </CommandGroup>

              <CommandSeparator className="my-2 h-px bg-border" />

              <CommandGroup heading="Appearance">
                <CommandItem
                  value="theme light"
                  keywords={["bright", "day"]}
                  onSelect={() =>
                    runCommand(() => {
                      setTheme("light");
                    })
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <Sun className="size-4 text-muted-foreground" aria-hidden />
                  Light mode
                </CommandItem>
                <CommandItem
                  value="theme dark"
                  keywords={["night"]}
                  onSelect={() =>
                    runCommand(() => {
                      setTheme("dark");
                    })
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  <Moon className="size-4 text-muted-foreground" aria-hidden />
                  Dark mode
                </CommandItem>
                <CommandItem
                  value="theme cycle toggle"
                  keywords={["switch", "invert"]}
                  onSelect={() =>
                    runCommand(() => {
                      setTheme(resolvedTheme === "dark" || resolvedTheme === undefined ? "light" : "dark");
                    })
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm aria-selected:bg-muted"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="size-4 text-muted-foreground" aria-hidden />
                  ) : (
                    <Moon className="size-4 text-muted-foreground" aria-hidden />
                  )}
                  Toggle theme
                </CommandItem>
              </CommandGroup>
            </CommandList>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border px-3 py-2 text-[11px] text-muted-foreground">
              <span>
                <kbd className="rounded border border-border bg-muted px-1 font-mono">↑↓</kbd> navigate
              </span>
              <span>
                <kbd className="rounded border border-border bg-muted px-1 font-mono">↵</kbd> open
              </span>
              <span>
                <kbd className="rounded border border-border bg-muted px-1 font-mono">esc</kbd> close
              </span>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
