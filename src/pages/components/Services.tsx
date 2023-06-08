import { useState } from 'react'
import styles from './Services.module.css'

const Services = (): JSX.Element => {
  const [artifactState, setArtifactState] = useState(null)

  // const handleButtonClick = (artifact) => {
  //   setArtifactState(artifact)
  // }

  return (
    <div className="artifacts bg-main">
      <div className={styles.wrapper}>
        <div className={styles.window}>
          <img
            className="w-[100%] h-[100%]"
            src="./images/octopus.gif"
            alt=""
          />
          {artifactState === 'explainer_video' && (
            // Add explainer video content here
            <div>Explainer Video Content</div>
          )}
          {artifactState === 'social_media_content' && (
            // Add social media content here
            <div>Social Media Content</div>
          )}
          {artifactState === 'frontend' && (
            // Add frontend content here
            <div>Frontend Content</div>
          )}
          {artifactState === 'livestreams' && (
            // Add livestreams content here
            <div>Livestreams Content</div>
          )}
          {artifactState === 'video_commercials' && (
            // Add video commercials content here
            <div>Video Commercials Content</div>
          )}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            // onClick={() => handleButtonClick('explainer_video')}
          >
            <div className={styles.headline}>Explainer Video</div>
            <div className={styles.subheadline}>
              Subtitles appear on the bottom of the octopuses' video
            </div>
          </button>
          <button
            className={styles.button}
            // onClick={() => handleButtonClick('social_media_content')}
          >
            <div className={styles.headline}>Social Media Content</div>
            <div className={styles.subheadline}>
              It will change into a TikTok video
            </div>
          </button>
          <button
            className={styles.button}
            // onClick={() => handleButtonClick('frontend')}
          >
            <div className={styles.headline}>Frontend</div>
            <div className={styles.subheadline}>
              Octopus video change into still pixel image
            </div>
          </button>
          <button
            className={styles.button}
            // onClick={() => handleButtonClick('livestreams')}
          >
            <div className={styles.headline}>Livestreams</div>
            <div className={styles.subheadline}>Small sized livestreams</div>
          </button>
          <button
            className={styles.button}
            // onClick={() => handleButtonClick('video_commercials')}
          >
            <div className={styles.headline}>Video Commercials</div>
            <div className={styles.subheadline}>
              The price for a running fresh octopus appears in the window
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services
