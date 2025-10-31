import React from "react";
import VideoPlay from "./VideoPlay";
import VideoItems from "./VideoItems";

const Container = ({ state, play, run }) => {
  return (
    <div className="container">
      <article>
        <section id="play">
          <VideoPlay play={play} />
        </section>

        <aside id="images">
          <VideoItems videos={state} run={run} />
        </aside>
      </article>
    </div>
  );
};

export default Container;
