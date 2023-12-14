import { useEffect, useState } from "react";
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
    <ul className=' flex flex-col items-center '>
      {topics.map((topic) => {
        return <TopicListItem key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
};

export default TopicsList;
