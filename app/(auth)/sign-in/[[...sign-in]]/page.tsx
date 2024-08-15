import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function Page() {
  const { userId } = auth();
  return <SignIn fallbackRedirectUrl={`/anime-list/${userId}`} />;
}
