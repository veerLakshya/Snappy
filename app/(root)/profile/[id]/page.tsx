import React from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="lakshya"
        title="laksh"
        userImg="/assets/images/dummy.jpg"
      />
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
    </div>
  );
};

export default page;
