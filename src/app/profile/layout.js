import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation"; 

export default async function ProfileLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login?postLoginRedirectURL=/profile"); 
  }

  return <div>{children}</div>;
}
