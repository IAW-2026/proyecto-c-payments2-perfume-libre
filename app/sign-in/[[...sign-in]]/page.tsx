import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid h-screen place-items-center">
      <SignIn />
    </main>
  );
}