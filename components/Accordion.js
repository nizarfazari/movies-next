import style from "./../styles/Accordion.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const Accordion = () => {
  const [active, setActive] = useState(false);

  return (
    <article class={`${style.accordion} ${active ? style["active"] : ""}`} onClick={() => setActive(!active)}>
      <div class={style.question}>
        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <span class={style.icon}>
          <AiOutlinePlus />
        </span>
      </div>
      <div class={style.answer}>
        <p className="mb-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, incidunt velit? Vel omnis id error sapiente adipisci iusto aperiam accusamus. incidunt velit? Vel omnis id error sapiente adipisci iusto aperiam accusamus.
        </p>
      </div>
    </article>
  );
};

export default Accordion;
