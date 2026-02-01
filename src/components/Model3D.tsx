'use client'

import { useEffect } from 'react'

// This tells TypeScript to recognize the <model-viewer> tag
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'rotation-per-second'?: string;
        'shadow-intensity'?: string;
        exposure?: string;
        'environment-image'?: string;
        style?: React.CSSProperties;
      }, HTMLElement>;
    }
  }
}

export default function Model3D() {
  useEffect(() => {
    // Load model-viewer only once
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src =
        'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <model-viewer
        src="/models/model.glb"
        camera-controls
        auto-rotate
        rotation-per-second="30deg"
        shadow-intensity="1"
        exposure="1"
        environment-image="neutral"
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      />
    </div>
  )
}
