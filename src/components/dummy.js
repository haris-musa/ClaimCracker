import React, { useState } from "react";

function App() {
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
            particles: {
              number: {
                value: 60,
                density: { enable: true, value_area: 800 },
              },
              color: { value: "#000" },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#000",
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "right",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
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
