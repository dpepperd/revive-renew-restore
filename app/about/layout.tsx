import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Revive Renew Restore",
  description: "Learn about Tony and Anita Laury, the founders of Jacksonville's premier Rivian-certified EV collision center.",
  openGraph: {
    title: "Our Story | Revive Renew Restore",
    description: "Learn about Tony and Anita Laury, the founders of Jacksonville's premier Rivian-certified EV collision center.",
    url: "/about",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
