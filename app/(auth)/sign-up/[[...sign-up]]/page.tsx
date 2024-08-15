import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function Page() {
  const { userId } = auth();
  return <SignUp fallbackRedirectUrl={`/anime-list/${userId}`} />;
}
