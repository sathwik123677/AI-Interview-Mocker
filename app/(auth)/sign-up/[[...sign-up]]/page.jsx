import Image from "next/image";
import { SignUp } from "@clerk/nextjs";

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

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex flex-col justify-end p-12 text-white">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={180}
              height={50}
            />

            <h2 className="mt-6 text-4xl font-bold">
              Welcome to AI Interview Mocker
            </h2>

            <p className="mt-4 text-lg">
              Practice AI-powered mock interviews, receive instant feedback,
              and improve your interview skills.
            </p>
          </div>
        </section>

        {/* Right Side */}
        <main className="flex items-center justify-center px-8 py-10 lg:col-span-7 xl:col-span-6">
          <SignUp />
        </main>

      </div>
    </section>
  );
}