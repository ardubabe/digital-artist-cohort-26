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
        <p>
          I'm a creative technologist at{" "}
          <a
            href="https://www.motherlondon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mother London
          </a>
        </p>
      </Slide>

      <Slide>
        <h2>What I do</h2>
        <p>
          Working across web, AR/VR, game dev, physical computing, and AI, I
          build tech activations for commercial campaigns, from immersive brand
          experiences to AI-driven video and image pipelines.
        </p>
        <a
          href="https://www.ardubabe.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          What I've worked on
        </a>
      </Slide>

      <Slide>
        <h2>Today's Goals</h2>
        <ul>
          <li>Get to know each other</li>
          <li>Get inspired</li>
          <li>Basic soft circuit</li>
          <li>Controllable soft circuit</li>
          <li>Interactive soft circuit</li>
          <li>Make your own soft circuit project!</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Inspiration</h2>
        <p>The historical thread between textiles and computing</p>
      </Slide>

      <Slide>
        <h2>The Jacquard Loom</h2>
        <p>
          The{" "}
          <a
            href="https://en.wikipedia.org/wiki/Jacquard_machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacquard Loom
          </a>
          , invented in 1804, used punched cards to control the pattern of a
          weave. Each card told the loom which threads to raise. It was the
          first programmable machine.{" "}
        </p>
      </Slide>
      <Slide>
        <h2>Analytical Engine</h2>
        <p>
          Charles Babbage saw one demonstrated and used the same punched card
          principle for his{" "}
          <a
            href="https://en.wikipedia.org/wiki/Analytical_engine"
            target="_blank"
            rel="noopener noreferrer"
          >
            Analytical Engine
          </a>{" "}
          — the machine{" "}
          <a
            href="https://en.wikipedia.org/wiki/Ada_Lovelace"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ada Lovelace
          </a>{" "}
          wrote the first algorithm for. She was the first to recognise the
          machine had applications beyond pure calculation and is often
          considered the first computer programmer.
        </p>
      </Slide>

      <Slide>
        <h2>The erasure</h2>
        <p>
          It's been kept out of the story of computing because it was women's
          work, craft work, domestic work &mdash; none of which was supposed to
          count as technical.
        </p>
      </Slide>

      <Slide>
        <h2>Cool work</h2>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/p/DBmm1PKs1kbN0qWGwrnYbCmLjJGz5JBJu4LOno0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Molly's Midi Controller!
            </a>
          </li>
          <li>
            <a
              href="https://cebecebe.com/ring-it"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linda's E-Textile Glove!
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/p/CmBdbx9MWx_/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tilly's Corset!
            </a>
          </li>
          <li>
            <a
              href="https://sophienadel.com/sistine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sophie's Sistine Gloves!
            </a>
          </li>
          <li>
            <a
              href="https://www.ardubabe.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jade's Disco Clits!
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/p/COQKDJ3BIXI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yume's Cat!
            </a>
          </li>
        </ul>
      </Slide>

      <Slide>
        <h2>Materials</h2>
        <ul>
          <li>Conductive Thread</li>
          <li>Normal thread</li>
          <li>Lilypad LEDs</li>
          <li>Lilypad Coin Cell Battery Holder</li>
          <li>Coin cell battery</li>
          <li>Conductive material</li>
          <li>Velostat</li>
          <li>Felt</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Basic Soft Circuit</h2>
        <p>Light up an LED</p>
        <ul>
          <li>Positive (+) of LED to positive of battery holder</li>
          <li>Negative (-) of LED to negative of battery holder</li>
          <li>Use a running stitch</li>
          <li>Wrap thread around LED at least 3 times</li>
          <li>wrap thread around battery holder at least 6 times</li>
          <li>Don't cross over, it'll short the circuit!</li>
          <li>Add battery once circuit is finished, then turn on the switch</li>
          <li>BONUS: daisy chain another led!</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Controllable Soft Circuit</h2>
        <p>Add a switch made out of conductive material</p>
        <ul>
          <li>Cut two small rectangles of conductive material</li>
          <li>
            Place switch in the middle of the positive 'line' connecting the LED
            to the battery holder
          </li>
          <li>
            When the switch touches, the connection is closed and the LED lights
            up!
          </li>
        </ul>
      </Slide>

      <Slide>
        <h2>Interactive Soft Circuit</h2>
        <p>
          Add a fabric pressure sensor made out of conductive material and
          velostat
        </p>
        <ul>
          <li>
            Connect positive of battery holder to first square of conductive
            material
          </li>
          <li>
            Sew velostat above the conductive square loosely using normal thread, creating a flap
          </li>
          <li>
            Sew the last conductive material square as another flap over the
            velostat and connect to the first LED's positive pin
          </li>
        </ul>
      </Slide>

      {/* <Slide>
        <h2>Brief</h2>
        <p>Make a soft circuit wearable that responds to the British Museum</p>
        <p>Two ways in:</p>
      </Slide>

      <Slide>
        <h2>1. Respond to an object</h2>
        <p>
          Find something in the collection that moves you, troubles you, or
          raises a question.
        </p>
        <p>Make a wearable that expresses your response to it.</p>
        <p>It doesn't have to be literal &mdash; a feeling is enough.</p>
      </Slide>

      <Slide>
        <h2>2. Tell a hidden story</h2>
        <p>Pick a weaver, a programmer, a maker whose name we don't know.</p>
        <p>Make something that honours or surfaces that story.</p>
        <p>
          What would they have made if they'd had LEDs and conductive thread?
        </p>
      </Slide> */}

      {/* <Slide>
        <h2>3. Interrogate the collection</h2>
        <p>
          Make something that physically embodies a question about the museum.
        </p>
        <p>A wearable that lights up when you enter certain galleries.</p>
        <p>A piece that activates near objects from a specific culture.</p>
        <p>
          Something that makes the wearer feel the weight of what's in the
          building &mdash; or what isn't.
        </p>
      </Slide> */}

      <Slide>
        <h2>What next?</h2>
        <p>Sewable microcontrollers</p>
        <p>Adafruit NeoPixels</p>
      </Slide>

      {/* References */}
      <Slide>
        <h2>References</h2>
        <ul>
          <li>
            <a
              href="https://github.com/ardubabe/digital-artist-cohort-26"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repository for DAC 26
            </a>
          </li>
          <li>
            <a
              href="https://www.adafruit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adafruit
            </a>
          </li>
          <li>
            <a
              href="https://www.sparkfun.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SparkFun
            </a>
          </li>
          <li>
            <a
              href="https://www.are.na/jade-p-test7zlw-ke/channels"
              target="_blank"
              rel="noopener noreferrer"
            >
              Are.na
            </a>
          </li>
        </ul>
      </Slide>
    </Deck>
  );
}

export default Presentation;
