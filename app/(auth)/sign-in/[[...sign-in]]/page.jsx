import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">

        {/* Left Side */}
        <section className="relative hidden lg:flex lg:col-span-5 xl:col-span-6">
          <Image
            src="/use.webp"
            alt="AI Interview"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end p-12 text-white">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={180}
              height={50}
            />

            <h2 className="mt-8 text-4xl font-bold">
              Welcome Back!
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-200">
              Continue your AI-powered interview preparation.
              Practice personalized mock interviews, receive instant
              feedback, and track your improvement.
            </p>
          </div>
        </section>

        {/* Right Side */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
          <SignIn
            appearance={{
              elements: {
                card: "shadow-none border-0",
              },
            }}
          />
        </main>

      </div>
    </section>
  );
}