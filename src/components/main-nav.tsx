"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function MainNav() {
  return (
    <NavigationMenu className="px-24">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Solana Navigator</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Navigate the Solana blockchain with AI-powered assistance
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/features" title="Features">
                Explore our comprehensive set of blockchain tools
              </ListItem>
              <ListItem href="/about" title="About">
                Learn about our mission and technology
              </ListItem>
              <ListItem href="/docs" title="Documentation">
                Detailed guides and API documentation
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {solutions.map((solution) => (
                <ListItem key={solution.title} href={solution.href} title={solution.title}>
                  {solution.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {resources.map((resource) => (
                <ListItem key={resource.title} href={resource.href} title={resource.title}>
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/enterprise" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Enterprise</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
      
    )
  },
)
ListItem.displayName = "ListItem"

const solutions = [
  {
    title: "Blockchain Analytics",
    description: "Track and analyze blockchain metrics in real-time",
    href: "/solutions/analytics",
  },
  {
    title: "Smart Contract Management",
    description: "Deploy and manage smart contracts with ease",
    href: "/solutions/contracts",
  },
  {
    title: "Transaction Monitoring",
    description: "Monitor and track transactions across the network",
    href: "/solutions/monitoring",
  },
  {
    title: "Wallet Integration",
    description: "Seamlessly integrate with popular Solana wallets",
    href: "/solutions/wallets",
  },
]

const resources = [
  {
    title: "Documentation",
    description: "Learn how to integrate and use our platform",
    href: "/docs",
  },
  {
    title: "API Reference",
    description: "Detailed API documentation and examples",
    href: "/api",
  },
  {
    title: "Blog",
    description: "Latest updates and technical articles",
    href: "/blog",
  },
  {
    title: "Community",
    description: "Join our community of developers",
    href: "/community",
  },
]

function navigationMenuTriggerStyle() {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
  )
}

