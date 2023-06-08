import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Hero.module.css'

const Hero = (): JSX.Element => {
  const tentacles1Ref = useRef<HTMLDivElement>(null)
  const tentacles2Ref = useRef<HTMLDivElement>(null)
  const tentacles3Ref = useRef<HTMLDivElement>(null)

  const wave1Ref = useRef<HTMLImageElement>(null)
  const wave2Ref = useRef<HTMLImageElement>(null)
  const wave3Ref = useRef<HTMLImageElement>(null)

  const tentacleSources = [
    './images/Tentacles/Tentacle1.svg',
    './images/Tentacles/Tentacle2.svg',
    './images/Tentacles/Tentacle3.svg',
  ]

  const glitchSources = [
    './images/Glitches/Glitch.png',
    './images/Glitches/Glitch_1.png',
    './images/Glitches/Glitch_2.png',
    './images/Glitches/Glitch_3.png',
    './images/Glitches/Glitch_4.png',
    './images/Glitches/Glitch_5.png',
    './images/Glitches/Glitch_6.png',
  ]

  const glitchingObjectsRef = useRef<HTMLDivElement>(null)

  const glitchTentacle = (tentacle: Element) => {
    const originalSrc = (
      tentacle.querySelector('.tentacle') as HTMLImageElement
    ).dataset.originalSrc as string

    const glitchAndRestore = (tentacle: Element, src: string) => {
      ;(tentacle.querySelector('.tentacle') as HTMLImageElement).src = src
    }

    const randomGlitchSrc = () =>
      glitchSources[Math.floor(Math.random() * glitchSources.length)]

    const randomTentacleSrc = () =>
      tentacleSources[Math.floor(Math.random() * tentacleSources.length)]

    const glitchAnimation = () => {
      // Glitch from tentacle to random glitch image
      glitchAndRestore(tentacle, randomGlitchSrc())

      // Back to tentacle
      setTimeout(() => glitchAndRestore(tentacle, originalSrc), 200)

      // To another glitch image
      setTimeout(() => glitchAndRestore(tentacle, randomGlitchSrc()), 30)

      // Back to the original tentacle
      setTimeout(() => glitchAndRestore(tentacle, originalSrc), 260)
    }

    // Start the glitch animation initially
    glitchAnimation()

    // Glitch the tentacle again at random intervals (3 - 10 seconds)
    setInterval(glitchAnimation, 3000 + Math.random() * 15000)
  }

  const animateWaves = () => {
    const waveAnimation = (
      wave: HTMLElement,
      amplitude: number,
      duration: number
    ) => {
      const tl = gsap.timeline({ repeat: -1, yoyo: false })
      tl.to(
        wave,
        {
          progress: 1,
          duration: duration,
          ease: 'none',
          onUpdate: () => {
            const progress = tl.progress()
            const scaleFactor = wave.classList.contains('scale-[3]') ? 3 : 1
            wave.style.transform = `scale(${scaleFactor}) translateY(${
              amplitude * Math.sin(2 * Math.PI * progress)
            }px)`
          },
        },
        0
      )
    }

    if (wave1Ref.current) {
      waveAnimation(wave1Ref.current, 10, 12)
    }
    if (wave2Ref.current) {
      waveAnimation(wave2Ref.current, 15, 15)
    }
  }

  const generateTentacles = () => {
    const scaleFactor = window.innerWidth <= 767 ? 0.8 : 1 // Adjust the scale factor based on the screen width

    const randomizeTentacles = (
      container: HTMLElement,
      translateY: number,
      min: number,
      max: number,
      scaleFactor: number
    ) => {
      // Clear the container before adding new tentacles
      container.innerHTML = ''
      const tentacleCount = min + Math.floor(Math.random() * (max - min + 1))
      const angleRange = 30
      const angleIncrement = angleRange / (tentacleCount - 1)

      for (let i = 0; i < tentacleCount; i++) {
        const tentacleWrapper = document.createElement('div')
        tentacleWrapper.classList.add('tentacleWrapper')
        tentacleWrapper.style.width = `${6 + Math.random() * 0.5}em`
        tentacleWrapper.style.transform = `translateY(${translateY}em)`

        const tentacleImg = document.createElement('img')
        tentacleImg.classList.add('tentacle')

        // Set the tentacle image source and store it in a data attribute
        // Set the tentacle image source and store it in a data attribute
        let tentacleSrc
        if (i === 120) {
          tentacleSrc = tentacleSources[2] // Ensure the first tentacle is always Tentacle3
        } else {
          tentacleSrc = tentacleSources[Math.floor(Math.random() * 3)]
        }
        tentacleImg.src = tentacleSrc
        tentacleImg.dataset.originalSrc = tentacleSrc

        const angle = (angleRange / (tentacleCount - 1)) * i - angleRange / 2
        const xOffset = Math.sin((angle * Math.PI) / 180) * scaleFactor * 100
        tentacleWrapper.style.transform += ` translateX(${xOffset}%) rotate(${angle}deg)`

        tentacleWrapper.appendChild(tentacleImg)
        container.appendChild(tentacleWrapper)
        tentacleWrapper.style.transform += ` translateX(${xOffset}%) rotate(${angle}deg) scale(${scaleFactor})` // Add scaleY to control the size
      }
    }

    const tentacles1 = document.querySelector('.tentacles1')
    const tentacles2 = document.querySelector('.tentacles2')
    const tentacles3 = document.querySelector('.tentacles3')

    if (tentacles1)
      randomizeTentacles(tentacles1 as HTMLElement, 5, 2, 5, 1.2 * scaleFactor) // Update the scaleFactor value
    if (tentacles2)
      randomizeTentacles(tentacles2 as HTMLElement, 15, 3, 5, 1.3 * scaleFactor) // Update the scaleFactor value and min, max
    if (tentacles3)
      randomizeTentacles(tentacles3 as HTMLElement, 40, 3, 4, 1 * scaleFactor) // Update the scaleFactor value
  }

  useEffect(() => {
    animateWaves()
    generateTentacles()
    if (tentacles1Ref.current) {
      animateTentacles(tentacles1Ref.current)
      const tentacles1 =
        tentacles1Ref.current.querySelectorAll('.tentacleWrapper')
      tentacles1.forEach((tentacle) => {
        glitchTentacle(tentacle as Element)
      })
    }
    if (tentacles2Ref.current) {
      animateTentacles(tentacles2Ref.current)
      const tentacles2 =
        tentacles2Ref.current.querySelectorAll('.tentacleWrapper')
      tentacles2.forEach((tentacle) => {
        glitchTentacle(tentacle as Element)
      })
    }
    if (tentacles3Ref.current) {
      animateTentacles(tentacles3Ref.current)
      const tentacles3 =
        tentacles3Ref.current.querySelectorAll('.tentacleWrapper')
      tentacles3.forEach((tentacle) => {
        glitchTentacle(tentacle as Element)
      })
    }
    animateGlitchingObjects()
  }, [])

  const animateTentacles = (tentaclesContainer: HTMLDivElement) => {
    if (!tentaclesContainer) return

    const tentacles = tentaclesContainer.querySelectorAll('.tentacleWrapper')

    tentacles.forEach((tentacle, index) => {
      const floatDuration = 5 + Math.random() * 5

      // Floating animation
      const phaseOffset = (10 * Math.PI * index) / tentacles.length
      gsap.to(tentacle, {
        y: gsap.utils.unitize((value: number) => {
          return 0.2 * Math.sin(value + phaseOffset)
        }),
        rotation: (t: number, target: HTMLElement) => {
          const currentRotation = parseFloat(
            target.style.transform.split('rotate(')[1]
          )
          const angleRange = 10
          const angleOffset =
            Math.sin(t + phaseOffset) > 0 ? -angleRange : angleRange
          return currentRotation + angleOffset * Math.sin(t + phaseOffset)
        },
        repeat: -1,
        duration: floatDuration,
        ease: 'sine.inOut',
        yoyo: true,
      })
    })
  }

  const animateGlitchingObjects = () => {
    if (!glitchingObjectsRef.current) return

    // Create a GSAP timeline for glitching objects animations
    const tl = gsap.timeline({ repeat: -1, yoyo: true })

    // Add your GSAP animations for glitching objects
    // For example, you can animate the position, scale, and opacity of the glitching objects
    tl.to(glitchingObjectsRef.current, {
      duration: 0.5,
      x: 50,
      scale: 1.5,
      opacity: 0,
      ease: 'power1.inOut',
    })
  }

  return (
    <section className="overflow-hidden bg-main-gradient w-[100vw] h-[100vh] max-h-[100vh] flex flex-col justify-end items-center relative">
      <div className={'grain'}></div>
      <div className={'noise'}></div>
      <div
        className={`${styles['glitching-objects']} glitching-objects`}
        ref={glitchingObjectsRef}
      ></div>

      <div className={`tentacles1`} ref={tentacles1Ref}></div>
      <img
        alt="wave"
        className="wave scale-[3]"
        src="./images/Waves/Wave3.svg"
        ref={wave1Ref}
      />
      <div className={`tentacles2`} ref={tentacles2Ref}></div>
      <h1 className="text-center font-bold font-headlines absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
        We<br></br> summon <br></br> crazy ideas
      </h1>
      <img
        alt="wave"
        className="wave scale-[3]"
        src="./images/Waves/Wave2.svg"
        ref={wave2Ref}
      />
      <div className={`tentacles3`} ref={tentacles3Ref}></div>
      <img
        alt="wave"
        className="wave scale-[3]"
        src="./images/Waves/Wave1.svg"
        ref={wave3Ref}
      />
    </section>
  )
}

export default Hero
