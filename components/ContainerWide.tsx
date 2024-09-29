import { cn } from "@/lib/utils";

export default function ContainerWide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("px-4", className)}>{children}</div>;
}
