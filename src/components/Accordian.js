import { React, useState } from "react";
import AccordianCard from "../components/AccordianCard";

const Accordian = () => {
  const questions = [
    {
      id: 1,
      question: "How do I win?",
      answer:
        "Hold Loothereum Chests during the rewards drawing on 10/16/21 for a chance to win.",
    },
    {
      id: 2,
      question: "Are Unique Chests Guaranteed Winners?",
      answer:
        "  No, each Loothereum Chest design has its own chance of winning. To maintain the mystery of the loot, we will not be publicly displaying the probability breakdown, as we feel this provides a fairness to all those who purchase our loot chests. Each design will have varying supply. ",
    },
    {
      id: 3,
      question: "How and when are rewards distributed?",
      answer:
        "Rewards will be unlocked as we reach milestones of % sold. Once 80% is sold, every reward tier will be available. During the rewards drawing we will be randomly selecting the winning Mint #'s and dispersing the rewards to the owners wallet. ",
    },
    {
      id: 4,
      question: "What happens after the rewards drawing?",
      answer:
        "After the rewards are distributed we encourage you to either hold, trade, or buy Loothereum Chests as we will be periodically providing mystery rewards. Additionally, be on the lookout for the next wave of Loothereum Chests with all new rewards. ",
    },
  ];
  
  const [data, setData] = useState(questions);


  return (
    <div className="questions">
      <div className="container text-left">
        <h1 className="text-center">FAQ</h1>
        {data.map((query) => {
            const {id} = query;
          return (
            <AccordianCard key={id} {...query} />
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
