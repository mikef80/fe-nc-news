import React, { useEffect, useState } from "react";
import { getTopics } from "../api/api";
import Loading from "./Loading";
import TopicListItem from "./TopicListItem";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  if (!topics.length) {
    return <Loading />;
  }

  return (
    <ul className="px-3 pt-2 flex flex-col items-center">
      {topics.map(topic => {
        return <TopicListItem key={topic.slug} />
      })}
    </ul>
  );
};

export default TopicsList;
