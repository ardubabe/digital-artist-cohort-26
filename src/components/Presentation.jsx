import { Deck, Slide } from "@revealjs/react";
import "reveal.js/reveal.css";
// import "reveal.js/theme/black.css";
import "../css/theme/ardubabe.scss";

function Presentation() {
  return (
    <Deck>
      <Slide>
        <h1>Digital Artist Cohort 2026</h1>
      </Slide>

      <Slide>
        <h2>Hello!</h2>
        <p>I'm Jade, aka Ardubabe</p>
        <p>I'm a creative technologist at Mother London</p>
        <p>Graphic Communication Design at Central Saint Martins</p>
        <p>Creative Computing Diploma at the Creative Coding Institute</p>
        <p>Creative Technology Apprenticesip at WPP</p>
        <p>Creative Technologist at Hogarth / The & Partnership</p>
      </Slide>

      <Slide>
        <h2>What I do</h2>
        <p>
          Working across web, AR/VR, game dev, physical computing, and AI, I
          build tech activations for commercial campaigns, from immersive brand
          experiences to AI-driven video and image pipelines. Outside of work, I
          run accessible workshops that draw people into creative tech, rooted
          in the often-overlooked stories of the women and marginalised pioneers
          who built the industry. Which is where you all come in!
        </p>
      </Slide>

      <Slide>
        <h2>Today's Goals</h2>
        <ul>
          <li>Open source</li>
          <li>GitHub</li>
          <li>Basic website</li>
          <li>Lunch</li>
          <li>Explore the British Museum API</li>
          <li>Build a working prototype</li>
          <li>Showcase where we're at!</li>
        </ul>
      </Slide>

      {/* References */}
      <Slide>
        <h2>References</h2>
        <ul>
          <li>
            <a href=""></a>
          </li>
        </ul>

      </Slide>
    </Deck>
  );
}

export default Presentation;
