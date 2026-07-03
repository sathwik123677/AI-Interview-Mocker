
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
export default function Home() {
  return (
    <div>
    <div
  className="absolute inset-0 -z-10 opacity-20"
  style={{
    backgroundImage: "url('/grid.svg')",
    backgroundRepeat: "repeat",
    backgroundSize: "350px",
  }}
/>
      <Header/>
     <section className=" z-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Generate personalized mock interviews..</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Generate personalized mock interviews, answer questions using your voice, receive instant AI feedback, and track your progress—all in one platform.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
             
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            
            
        </div> 
    </div>
</section>
<section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
<h2 className="font-bold text-3xl">How it Works?</h2>
<h2 className="text-md text-gray-500">Complete your AI-powered mock interview in three simple steps.</h2>

<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <AtomIcon className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Create Your Interview</h2>

        <p className="mt-1 text-sm text-gray-600">
         Enter your job role, required skills, and years of experience. Our AI generates a personalized interview within seconds.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <Edit className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Answer Using Voice </h2>

        <p className="mt-1 text-sm text-gray-600">
         Enable your webcam and microphone to answer each interview question naturally using speech recognition.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <Share2 className='h-8 w-8' />

        <h2 className="mt-4 text-xl font-bold text-black">Get AI Feedback</h2>

        <p className="mt-1 text-sm text-gray-600">
          Receive ratings, ideal answers, and detailed suggestions to improve your interview performance.
        </p>
      </a>

    
    </div>

    <div className="mt-12 text-center">
      <a
        href="/sign-in"
        className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring focus:ring-yellow-400"
      >
       Start Mock Interview
      </a>
    </div>
    </section>
    <section className="pt-16 pb-4 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center px-6">

    <h2 className="text-3xl font-bold mb-3">
      Connect With Me
    </h2>

    <p className="text-gray-600 mb-8">
      Have feedback, suggestions, or want to collaborate?
      Feel free to connect with me.
    </p>

    <div className="flex justify-center gap-8 text-4xl">

      <a
        href="https://github.com/sathwik123677"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/pathivada-sathwik/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:sathwikp06@gmail.com"
        className="hover:text-red-500 transition"
      >
        <FaEnvelope />
      </a>

      <a
        href="https://protofolio-steel-five.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-600 transition"
      >
        <FaGlobe />
      </a>

    </div>
  </div>
</section>
  </div>
 

  );
}