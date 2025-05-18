import React from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library"></Header>
      <VideoCard
        id="1"
        title="How to build a video streaming app"
        username="Lakshya"
        thumbnail="/assets/samples/thumbnail(1).png"
        createdAt={new Date("2025-05-18")}
        userImg="/assets/images/jason.png"
        views={10}
        visibility="public"
        duration={160}
      />
    </main>
  );
};

export default Page;
