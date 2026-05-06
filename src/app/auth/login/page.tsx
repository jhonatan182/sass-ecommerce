import { titleFont } from "@/config/fonts";

export default function AuthPage() {
  return (
    <div className="">
      <h1 className="text-9xl font-bold">Auth</h1>
      <h1 className={`${titleFont.className} font-bold`}>Bienvenido</h1>
    </div>
  );
}
