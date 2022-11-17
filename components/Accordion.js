import style from "./../styles/Accordion.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const Accordion = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  return (
    <article class={`${style.accordion} ${active ? style["active"] : ""}`} onClick={() => setActive(!active)}>
      <div class={style.question}>
        <p className="mb-0">{question}</p>
        <span class={style.icon}>
          <AiOutlinePlus />
        </span>
      </div>
      <div class={style.answer}>
        <p className="mb-0">{answer}</p>
      </div>
    </article>
  );
};

export default Accordion;
