import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

if (
  !process.env.GITHUB_CLIENT_ID ||
  !process.env.GITHUB_SECRET ||
  !process.env.NEXTAUTH_SECRET
) {
  throw new Error("Missing auth env variable");
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
