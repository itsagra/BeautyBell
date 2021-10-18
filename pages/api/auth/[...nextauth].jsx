import NextAuth from "next-auth";
import Providers from "next-auth/providers";
// import { signIn } from "next-auth/client";

export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Email({
      server: "",
      from: "",
    }),
    Providers.Google({
      clientId: process.env.GOOGLECLIENTID,
      clientSecret: process.env.GOOGLESECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FBCLIENTID,
      clientSecret: process.env.FBSECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
  theme: "light",
  jwt: {
    encryption: true,
    secret: "abcdefgh",
  },
  debug: true,
  theme: "auto",

  // Enable debug messages in the console if you are having problems
  // debug: true,
});
