import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/login">
        <Button variant="secondary">Login</Button>
      </Link>
    </div>
  );
}
