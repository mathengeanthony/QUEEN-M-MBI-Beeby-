"use client"

import { useCallback } from "react"

export default function Home() {
  const triggerFlash = useCallback(() => {
    const flash = document.getElementById("flash")
    if (flash) {
      flash.style.transition = "none"
      flash.style.opacity = "1"
      setTimeout(() => {
        flash.style.transition = "opacity 0.8s ease-out"
        flash.style.opacity = "0"
      }, 50)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          font-family: "Arial Rounded MT Bold", "Comic Sans MS", sans-serif;
        }

        #filter-frame {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          pointer-events: none;
          box-shadow: inset 0 0 40px rgba(255, 105, 180, 0.5),
            inset 0 0 15px rgba(255, 182, 193, 0.7);
          border: 8px solid rgba(255, 182, 193, 0.3);
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          box-sizing: border-box;
        }

        .top-banner {
          text-align: center;
          color: #fff;
          font-size: 26px;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(255, 77, 121, 0.8),
            0 0 10px rgba(255, 255, 255, 0.5);
          margin-top: 10px;
          animation: float 3s ease-in-out infinite;
        }

        .decor {
          position: absolute;
          font-size: 35px;
          filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.8));
        }
        .top-left {
          top: 20px;
          left: 20px;
          animation: pulse 2s infinite;
        }
        .top-right {
          top: 20px;
          right: 20px;
          animation: pulse 2.5s infinite;
        }
        .bottom-left {
          bottom: 100px;
          left: 20px;
          animation: pulse 2.2s infinite;
        }
        .bottom-right {
          bottom: 100px;
          right: 20px;
          animation: pulse 2.7s infinite;
        }

        .bottom-banner {
          background: rgba(255, 255, 255, 0.85);
          color: #ff4d79;
          padding: 15px;
          border-radius: 20px;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          border: 2px solid #ffb3c6;
        }

        .instructions {
          font-size: 14px;
          color: #aaa;
          margin-top: 5px;
          font-weight: normal;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        #flash {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: white;
          z-index: 2000;
          opacity: 0;
          pointer-events: none;
        }

        #tap-zone {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999;
        }
      `}</style>

      {/* Tap zone for flash effect */}
      <div id="tap-zone" onClick={triggerFlash} />

      {/* Frame overlay */}
      <div id="filter-frame">
        <span className="decor top-left">✨</span>
        <span className="decor top-right">💖</span>
        <span className="decor bottom-left">🍫</span>
        <span className="decor bottom-right">🌹</span>

        <div className="top-banner">The Prettiest Queen 👑</div>

        <div className="bottom-banner">
          Sending infinite hugs &amp; tummy rubs! Feel better soon 💕
          <div className="instructions">
            Tap the screen, take a screenshot, and send it to me! 📸
          </div>
        </div>
      </div>

      {/* Flash effect */}
      <div id="flash" />

      {/* AR Scene - rendered as raw HTML since A-Frame uses custom elements */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
              <a-camera active="false" position="0 0 0"></a-camera>
              <a-light type="ambient" color="#ffffff" intensity="0.8"></a-light>
              <a-light type="directional" color="#ffffff" intensity="0.5" position="0 5 5"></a-light>
              <a-entity mindar-face-target="anchorIndex: 10">
                <a-gltf-model rotation="0 0 0" position="0 0.2 0" scale="0.1 0.1 0.1" src="#crownModel"></a-gltf-model>
              </a-entity>
              <a-assets>
                <a-asset-item id="crownModel" src="/crown.glb"></a-asset-item>
              </a-assets>
            </a-scene>
          `,
        }}
      />
    </>
  )
}
