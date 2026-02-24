import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Revive Renew Restore",
  description: "Join the future of automotive repair in Jacksonville. We're hiring Rivian-certified body repair technicians, painters, and EV specialists.",
  openGraph: {
    title: "Careers | Revive Renew Restore",
    description: "Join the future of automotive repair in Jacksonville. We're hiring Rivian-certified body repair technicians, painters, and EV specialists.",
    url: "/careers",
  }
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
