import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
type Props={to:string;children:ReactNode;className?:string};
export function SiteLink({to,children,className}:Props){if(to==="/")return <Link to="/" className={className}>{children}</Link>;return <Link to="/$" params={{_splat:to.replace(/^\//,"")}} className={className}>{children}</Link>}
