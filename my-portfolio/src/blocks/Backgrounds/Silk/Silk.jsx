/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { forwardRef, useRef, useMemo, useLayoutEffect, useState, useEffect } from "react";
import { Color } from "three";

const hexToNormalizedRGB = (color) => {
  // Si es un color RGB (ej: "rgb(125,93,253)")
  if (color.startsWith('rgb')) {
    const matches = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (matches) {
      return [
        parseInt(matches[1]) / 255,
        parseInt(matches[2]) / 255,
        parseInt(matches[3]) / 255,
      ];
    }
  }
  
  // Si es un color hexadecimal
  if (color.startsWith('#')) {
    const hex = color.replace("#", "");
    return [
      parseInt(hex.slice(0, 2), 16) / 255,
      parseInt(hex.slice(2, 4), 16) / 255,
      parseInt(hex.slice(4, 6), 16) / 255,
    ];
  }
  
  // Color por defecto si no se puede parsear
  return [0.5, 0.5, 0.5];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;
uniform float uColorTransition;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  // Suavizar la transición de color
  vec3 finalColor = uColor;
  vec4 col = vec4(finalColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_, delta) => {
    ref.current.material.uniforms.uTime.value += 0.1 * delta;
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

const Silk = ({
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
  children,
  themeKey = "default"
}) => {
  const meshRef = useRef();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Función para obtener el color del tema actual desde CSS variables
  const getThemeColor = () => {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    return computedStyle.getPropertyValue('--color-background').trim();
  };

  // Usar el color del tema si no se proporciona uno específico
  const currentColor = color === "#7B7481" ? getThemeColor() : color;

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(currentColor)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
      uColorTransition: { value: 0.0 },
    }),
    [speed, scale, noiseIntensity, currentColor, rotation]
  );

  // Efecto para manejar la transición cuando cambia el tema
  useEffect(() => {
    setIsTransitioning(true);
    
    // Actualizar el color en el shader
    if (meshRef.current && meshRef.current.material) {
      meshRef.current.material.uniforms.uColor.value = new Color(...hexToNormalizedRGB(currentColor));
    }
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [themeKey, currentColor]);

  // Efecto para actualizar el color cuando cambien las variables CSS
  useEffect(() => {
    const updateColor = () => {
      const newColor = getThemeColor();
      if (meshRef.current && meshRef.current.material) {
        meshRef.current.material.uniforms.uColor.value = new Color(...hexToNormalizedRGB(newColor));
      }
    };

    // Actualizar inmediatamente
    updateColor();

    // Observar cambios en las variables CSS
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Canvas 
        key={themeKey} // Esto fuerza el re-renderizado cuando cambia el tema
        dpr={[1, 2]} 
        frameloop="always"
        className="fixed inset-0 w-full h-full"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: 0,
          backgroundColor: 'transparent'
        }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          clearColor: [0, 0, 0, 0] // Fondo negro transparente
        }}
      >
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
      {/* Overlay para transición suave */}
      <div 
        className={`fixed inset-0 w-full h-full transition-opacity duration-300 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 1)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Silk;
