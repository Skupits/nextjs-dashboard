// "use client";

// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import Image from "next/image";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: true,
//       callbackUrl: "/",
//     });

//     if (result?.error) {
//       alert("Login gagal: " + result.error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Panel */}
//       <div
//         className="w-1/2 relative bg-cover bg-center"
//         style={{ backgroundImage: "url('/login.png')" }}
//       >
//       </div>

//       {/* Right Panel */}
//       <div className="w-1/2 bg-[#96B88F] flex items-center justify-center">
//         <div className="w-[70%] max-w-md">
//           <h2 className="text-center text-white text-2xl font-semibold mb-8">
//             WELCOME
//           </h2>
//           <label className="block text-sm text-black mb-1 font-semibold uppercase">
//             Username
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 mb-4 rounded-full bg-[#F2EBD8] text-black focus:outline-none"
//             placeholder="Username"
//           />

//           <label className="block text-sm text-black mb-1 font-semibold uppercase">
//             Password
//           </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 mb-6 rounded-full bg-[#F2EBD8] text-black focus:outline-none"
//             placeholder="********"
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full bg-green-900 text-white py-2 rounded-full text-lg font-medium"
//           >
//             LogIn
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    if (result?.error) {
      alert("Login gagal: " + result.error);
    }
  };

  return (
    <>
    <Header/>
      <div className="flex min-h-screen">
        {/* Left Panel with full image visible */}
        <div className="w-1/2 relative">
          <Image
            src="/login.png"
            alt="Login Illustration"
            fill
            className="object-cover bg-contain" // menjaga gambar tidak terpotong
            priority
          />
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-[#96B88F] flex items-center justify-center">
          <div className="w-[70%] max-w-md">
            <h2 className="text-center text-white text-2xl font-semibold mb-8">
              WELCOME
            </h2>

            <label className="block text-sm text-black mb-1 font-semibold uppercase">
              Username
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-4 rounded-full bg-[#F2EBD8] text-black focus:outline-none"
              placeholder="Username"
            />

            <label className="block text-sm text-black mb-1 font-semibold uppercase">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-6 rounded-full bg-[#F2EBD8] text-black focus:outline-none"
              placeholder="********"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-green-900 text-white py-2 rounded-full text-lg font-medium"
            >
              LogIn
            </button>

            <p className="text-center text-black mt-4">
              Belum punya akun?{" "}
              <a
                href="/register"
                className="text-blue-500 font-semibold underline hover:text-white transition"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
