import React from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library"></Header>
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard
            key={card.id}
            id={card.id}
            title={card.title}
            thumbnail={card.thumbnail}
            createdAt={new Date(card.createdAt)}
            username={card.username}
            userImg={card.userImg}
            duration={card.duration}
            views={card.views}
            visibility={card.visibility as Visibility}
          />
        ))}
      </section>
    </main>
  );
};

export default Page;
