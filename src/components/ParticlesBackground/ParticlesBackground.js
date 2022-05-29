import React from 'react'
import Particles from 'react-particles-js'

const ParticlesBackground = () => {
  return (
    <div>
        <Particles 
        options={{
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    resize: true,
                }

            },
            particles: {
                color: {
                    value: "#f8kf8k"
                },
                number: {
                   density: {
                          enable: true,
                          area: 800,
                   },
                   limit: 0,
                   value: 30,
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 1,
                        minimumValue: 0.05,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 0.05
                    },
                    value: 1
                },
                shape: {
                    type: "circle", 
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 0.5
                },
                    value: 1,
            }
        }
        }}
        />
    </div>
  )
}

export default ParticlesBackground