"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  children: React.ReactNode;
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
  "data-state"?: "active" | "inactive";
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, className, children, ...props }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement<TabsTriggerProps | TabsContentProps>(child)) {
      if (child.type === TabsTrigger) {
        const triggerProps = child.props as TabsTriggerProps;
        return React.cloneElement(child, {
          ...triggerProps,
          onClick: () => setActiveTab(triggerProps.value),
          "data-state": triggerProps.value === activeTab ? "active" : "inactive"
        });
      }
      if (child.type === TabsContent) {
        const contentProps = child.props as TabsContentProps;
        return contentProps.value === activeTab ? child : null;
      }
    }
    return child;
  });

  return (
    <div className={cn("w-full", className)} {...props}>
      {childrenWithProps}
    </div>
  );
}

export function TabsList({ className, children, ...props }: TabsListProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ className, value, children, ...props }: TabsTriggerProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm",
        className
      )}
      value={value}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ className, value, children, ...props }: TabsContentProps) {
  return (
    <div
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 