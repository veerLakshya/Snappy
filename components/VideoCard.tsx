"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const VideoCard = ({
  id,
  title,
  thumbnail,
  createdAt,
  username,
  userImg,
  duration,
  views,
  visibility,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
      <Image
        src={thumbnail}
        alt="thumbnail"
        width={290}
        height={160}
        className="thumbnail"
      />
      <article>
        <div>
          <figure>
            <Image
              src={userImg}
              alt="user"
              width={34}
              height={34}
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <Image
              src={"/assets/icons/eye.svg"}
              width={16}
              height={16}
              alt="views"
            ></Image>
            <span>{views}</span>
          </aside>
        </div>
        <h2>
          {title} - {""}{" "}
          {createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </article>
      <button onClick={() => {}} className="copy-btn">
        <Image
          src={"/assets/icons/link.svg"}
          width={18}
          height={18}
          alt="copylink"
        ></Image>
      </button>
      {duration && (
        <div className="duration">{Math.ceil(duration / 60)} min</div>
      )}
    </Link>
  );
};

export default VideoCard;
