import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews | Revive Renew Restore",
  description: "Read testimonials from Rivian, Tesla, and Lucid owners who trust Revive Renew Restore with their electric vehicles.",
  openGraph: {
    title: "Client Reviews | Revive Renew Restore",
    description: "Read testimonials from Rivian, Tesla, and Lucid owners who trust Revive Renew Restore with their electric vehicles.",
    url: "/reviews",
  }
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
