import * as React from "react";
// Fallback simple wrappers to avoid hard dependency/type mismatches
import { cn } from "./utils";

export function ResizablePanelGroup({ className, ...props }: any) {
  return (
    <div className={cn("flex h-full w-full", className)} {...props} />
  );
}

export function ResizablePanel({ className, ...props }: any) {
  return <div className={cn(className)} {...props} />;
}

export function ResizableHandle({ className, ...props }: any) {
  return (
    <div
      role="separator"
      className={cn("relative flex w-px items-center justify-center bg-border", className)}
      {...props}
    />
  );
}

