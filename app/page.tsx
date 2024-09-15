"use client";
import Head from "next/head";
import {
  Twitter,
  Instagram,
  Youtube,
  Image as ImageIcon,
  Video,
  Eraser,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600">
      <Head>
        <title>PixelPerfect Studio</title>
        <link rel="icon" href="/pixelperfect-studio-logo.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-8">
          <Image
            src="/pixelperfect-studio-logo.svg"
            alt="PixelPerfect Studio Logo"
            width={150}
            height={75}
            className="mr-4"
          />
          <h1 className="text-5xl font-bold text-white">PixelPerfect Studio</h1>
        </div>

        <p className="text-xl text-center text-white mb-12">
          Your one-stop solution for image modification, video compression, and
          background removal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div aria-label="Social Media Image Modification icon">
                <ImageIcon
                  className="w-16 h-16 mb-4 text-primary"
                  aria-label="Social Media Image Modification icon"
                />
              </div>
              <h2 className="card-title">Social Media Image Modification</h2>
              <p>
                Optimize your images for Twitter, Instagram, YouTube, and more!
              </p>
              <div className="card-actions justify-center mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => router.push("/social-share")}
                >
                  Try Now
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Video className="w-16 h-16 mb-4 text-secondary" />
              <h2 className="card-title">Video Compression</h2>
              <p>
                Compress your videos without losing quality for faster uploads
                and streaming.
              </p>
              <div className="card-actions justify-center mt-4">
                <button
                  className="btn btn-secondary"
                  onClick={() => router.push("/video-upload")}
                >
                  Compress
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Eraser className="w-16 h-16 mb-4 text-accent" />
              <h2 className="card-title">Background Removal</h2>
              <p>Remove backgrounds from your images with just a few clicks!</p>
              <div className="card-actions justify-center mt-4">
                <button
                  className="btn btn-accent"
                  onClick={() => router.push("/social-share")}
                >
                  Remove Background
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to perfect your visuals?
          </h2>
          <button
            className="btn btn-lg btn-primary"
            onClick={() => router.push("/home")}
          >
            Get Started
          </button>
        </div>

        <footer className="mt-16 text-center text-white">
          <div className="flex justify-center space-x-4 mb-4">
            <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-pink-400 cursor-pointer" />
            <Youtube className="w-6 h-6 hover:text-red-500 cursor-pointer" />
          </div>
          <p>&copy; 2024 PixelPerfect Studio. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
