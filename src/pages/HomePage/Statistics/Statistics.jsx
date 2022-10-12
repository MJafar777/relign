import React from "react";
import Diagramm from "../../../components/Diagramm/Diagramm";
import s from "./statistics.module.css";
import Title from "../../../components/Title/Title";

const Statistics = () => {
  return (
    <>
      <Title title={"Statistics"} />
      <div className={s.container}>
        <div className={s.diagramm}>
          <Diagramm />
        </div>
        <div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            maiores et animi architecto adipisci fugiat vero veniam, incidunt
            consectetur quidem beatae enim soluta at ex a quae, nulla facilis
            doloremque deleniti asperiores magni! Numquam quibusdam ratione ad,
            qui aspernatur odio voluptatem doloremque eum vel totam assumenda
            dicta? Corrupti commodi voluptates excepturi sunt explicabo possimus
            eveniet vitae. Laboriosam, dicta perferendis. In. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Omnis, maiores et animi
            architecto adipisci fugiat vero veniam, incidunt consectetur quidem
            beatae enim soluta at ex a quae, nulla facilis doloremque deleniti
            asperiores magni!
          </p>
        </div>
      </div>
    </>
  );
};

export default Statistics;
