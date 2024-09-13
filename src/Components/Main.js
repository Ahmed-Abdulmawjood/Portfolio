import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`

const Main = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="max-">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#fdf1d6", // Background color
            },
          },
          fpsLimit: 120, // Frame rate limit
          interactivity: {
            events: {
              onHover: {
                enable: true, // Enable hover event
                mode: "repulse", // Repulse particles on hover
              },
              resize: true, // Resize on window resize
            },
            modes: {
              repulse: {
                distance: 100, // Distance for repulse effect
                duration: 0.4, // Duration of the repulse effect
              },
            },
          },
          particles: {
            color: {
              value: "#52371a", // Particles color
            },
            links: {
              color: "#83592e", // Link color between particles
              distance: 150, // Distance for linking particles
              enable: true, // Enable links between particles
              opacity: 0.5, // Opacity of the links
              width: 1.5, // Width of the links
            },
            collisions: {
              enable: true, // Enable particle collisions
            },
            move: {
              direction: "none", // Movement direction
              enable: true, // Enable movement
              outModes: {
                default: "bounce", // Movement mode
              },
              random: false, // Random movement
              speed: 1.5, // Speed of movement
              straight: false, // Straight movement
            },
            number: {
              density: {
                enable: true, // Enable density
                area: 800, // Area for density
              },
              value: 100, // Number of particles
            },
            opacity: {
              value: 0.5, // Opacity of particles
            },
            shape: {
              type: "circle", // Shape of particles
            },
            size: {
              value: { min: 1, max: 5 }, // Size range of particles
            },
          },
          detectRetina: true, // Enable Retina display support
        }}
      />
    </div>
  );
};

export default Main;
