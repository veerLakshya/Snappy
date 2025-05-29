"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth.client";

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            height={32}
            width={32}
          ></Image>
          <h1>Snappy</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, ind) => (
                <Image
                  key={ind}
                  src={"/assets/icons/star.svg"}
                  alt="star"
                  width={20}
                  height={20}
                  className="rounded-full aspect-square"
                />
              ))}
            </figure>
            <p>
              Snappy makes screen recording easy. From quick tutorials to
              detailed presentations, capture and share your screen with just a
              few clicks.
            </p>
            <article>
              <Image
                src={"/assets/images/jason.png"}
                alt="jason"
                height={64}
                width={64}
                className="rounded-full"
              ></Image>
              <div>
                <h2>Jason Riviera</h2>
                <p>Product Designer, NovaByte</p>
              </div>
            </article>
          </section>
        </div>
        <p> Snappy {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src={"/assets/icons/logo.svg"}
              alt="logo"
              height={32}
              width={32}
            ></Image>
            <h1>Snappy</h1>
          </Link>
          <p>
            Create and share your first <span>Snappy video</span> in no time!
          </p>
          <button onClick={handleSignIn} className="google-sign-in-btn">
            <Image
              src={"/assets/icons/google.svg"}
              alt="google"
              width={22}
              height={22}
            ></Image>
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay"></div>
    </main>
  );
};

export default page;
