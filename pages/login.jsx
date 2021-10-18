import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

export default function Component() {
  const router = useRouter();
  const [session] = useSession();
  const login = async () => {
    try {
      await signIn({ callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/");
    }
  };
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => login()}>Sign in</button>
    </>
  );
}
