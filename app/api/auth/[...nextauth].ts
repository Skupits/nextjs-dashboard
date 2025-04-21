import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

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
    jwt({ token, account, user }) {
      if (account?.provider === "credentials") {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (!session.user) {
        session.user = {}; // inisialisasi biar nggak undefined
      }
    
      if ("email" in token) {
        session.user.email = token.email as string;
      }
    
      return session;
    }
    
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
