import { redirect } from "next/navigation";

import { requireAuth } from "@/lib/auth-server";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuth } = await requireAuth();

  if (isAuth) {
    redirect("/");
  }

  return (
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">{children}</div>
    </main>
  );
}
