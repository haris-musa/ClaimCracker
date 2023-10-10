import React, { useState } from "react";
import locofy from "./locofy.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute w-[100%] h-[100%] inset-0 z-0"
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#fff",
              },
            },
            particles: {},
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                grab: { distance: 200, line_linked: { opacity: 0.2 } },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    </nav>
  );
}
export default App;
