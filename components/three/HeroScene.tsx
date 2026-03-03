"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Environment,
  Sphere,
  Stars,
  Torus,
  Html,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Country flag data
const COUNTRIES = [
  { code: "us", name: "USA", emoji: "🇺🇸", color: "#3b82f6" },
  { code: "gb", name: "UK", emoji: "🇬🇧", color: "#ef4444" },
  { code: "ca", name: "Canada", emoji: "🇨🇦", color: "#ef4444" },
  { code: "de", name: "Germany", emoji: "🇩🇪", color: "#f59e0b" },
  { code: "au", name: "Australia", emoji: "🇦🇺", color: "#06b6d4" },
  { code: "fr", name: "France", emoji: "🇫🇷", color: "#8b5cf6" },
];

function Globe() {
  const ref = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.y += 0.004;
    const s = 1 + Math.sin(clock.getElapsedTime() * 1.5) * 0.03;
    glowRef.current.scale.setScalar(s);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group>
        {/* Outer glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[1.85, 64, 64]} />
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Atmosphere rim */}
        <mesh>
          <sphereGeometry args={[1.72, 64, 64]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.12}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Main Globe */}
        <Sphere ref={ref} args={[1.6, 64, 64]}>
          <meshPhysicalMaterial
            color="#1d4ed8"
            metalness={0.3}
            roughness={0.15}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#1e3a8a"
            emissiveIntensity={0.4}
          />
        </Sphere>

        {/* Continent patches (decorative rings on surface) */}
        {[0.3, -0.4, 0.8].map((y, i) => (
          <mesh key={i} rotation={[y, i * 1.2, 0]}>
            <torusGeometry args={[1.61, 0.018, 8, 80]} />
            <meshStandardMaterial
              color="#93c5fd"
              transparent
              opacity={0.35}
              emissive="#bfdbfe"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function GlowRing({
  radius,
  speed,
  color,
  opacity = 1,
  tiltX = 0,
  tiltZ = 0,
}: {
  radius: number;
  speed: number;
  color: string;
  opacity?: number;
  tiltX?: number;
  tiltZ?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.z += speed;
    ref.current.rotation.x += speed * 0.3;
  });

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      {/* Main ring */}
      <Torus ref={ref} args={[radius, 0.025, 20, 120]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          transparent
          opacity={opacity}
        />
      </Torus>
      {/* Soft glow ring */}
      <Torus args={[radius, 0.055, 20, 120]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.15}
        />
      </Torus>
    </group>
  );
}

function OrbitingFlags({
  radius,
  speed,
  tiltX = 0,
  tiltZ = 0,
}: {
  radius: number;
  speed: number;
  tiltX?: number;
  tiltZ?: number;
}) {
  const innerRef = useRef<THREE.Group>(null!);
  const angleRef = useRef(0);
  const count = COUNTRIES.length;

  useFrame(() => {
    angleRef.current += speed;
    innerRef.current.rotation.y = angleRef.current;
  });

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <group ref={innerRef}>
        {COUNTRIES.map((country, i) => {
          const angle = (i / count) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <mesh key={country.code} position={[x, 0, z]}>
              <sphereGeometry args={[0.1, 32, 32]} />
              <meshStandardMaterial
                color={country.color}
                emissive={country.color}
                emissiveIntensity={2}
              />
              <Html
                center
                style={{ pointerEvents: "none" }}
                distanceFactor={6}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transform: "translateY(-28px)",
                    userSelect: "none",
                  }}
                >
                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={country.name}
                    style={{
                      width: 32,
                      height: 22,
                      borderRadius: 4,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                      border: "1.5px solid rgba(255,255,255,0.6)",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      marginTop: 3,
                      fontSize: 9,
                      fontWeight: 700,
                      color: "#fff",
                      background: "rgba(0,0,0,0.55)",
                      backdropFilter: "blur(4px)",
                      padding: "1px 5px",
                      borderRadius: 4,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {country.name}
                  </span>
                </div>
              </Html>
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

function PulsingLight() {
  const lightRef = useRef<THREE.PointLight>(null!);
  useFrame(({ clock }) => {
    lightRef.current.intensity =
      1.5 + Math.sin(clock.getElapsedTime() * 2) * 0.5;
  });
  return (
    <pointLight
      ref={lightRef}
      position={[3, 3, 3]}
      color="#60a5fa"
      intensity={1.5}
    />
  );
}

export default function HeroScene() {
  return (
    // overflow-visible so orbiting rings/flags are never clipped by the container
    <div style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 45 }}
        style={{ overflow: "visible" }}
        // Allow the canvas to render outside its DOM bounds
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight
          position={[-5, -3, -5]}
          intensity={0.3}
          color="#f97316"
        />
        <PulsingLight />

        <Environment preset="city" />

        <Stars radius={80} depth={60} count={3000} factor={3} fade speed={0.5} />

        <Globe />

        {/* Only 2 orbit rings — orange tilted & blue counter-tilted */}
        <GlowRing
          radius={2.4}
          speed={0.004}
          color="#f97316"
          tiltX={0.5}
          tiltZ={0.1}
        />
        <GlowRing
          radius={2.8}
          speed={-0.003}
          color="#3b82f6"
          opacity={0.8}
          tiltX={-0.3}
          tiltZ={0.2}
        />

        {/* Flags orbit around the globe on a tilted equatorial plane */}
        <OrbitingFlags radius={2.4} speed={0.006} tiltX={0.35} tiltZ={0.1} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
}