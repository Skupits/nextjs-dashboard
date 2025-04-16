import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email === "admin@example.com" && password === "admin123") {
          return {
            id: "1",
            name: "Admin",
            email: email,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials") {
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
