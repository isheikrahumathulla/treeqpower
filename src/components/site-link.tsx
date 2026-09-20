import type { ComponentProps, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
type Props={to:string;children:ReactNode;className?:string} & Omit<ComponentProps<"a">,"href">;
export function SiteLink({to,children,className,...props}:Props){if(to==="/")return <Link to="/" className={className} {...props}>{children}</Link>;return <Link to="/$" params={{_splat:to.replace(/^\//,"")}} className={className} {...props}>{children}</Link>}
