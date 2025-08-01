// Simple one‑page portfolio built with React, React Bits & MVPBlocks.
// Replace all TODO markers (e.g. <LINK_HERE>) with your actual links or data.

import React from "react";
import { useTheme } from "./contexts/ThemeContext.jsx";
import {
  Background,
  ProfileCard,
  Animation,
  Layout,
  Typography,
  Button,
  Icon,
  FlipCard,
  MeshyCard
} from "./blocks";

// Theme tokens will be provided by ThemeContext

// ---- Dummy data (replace) ----
const projects = [
  {
    id: 1,
    title: "Galactic Drift",
    description: "Racer 3D procedural tracks generado en tiempo real.",
    image: "https://via.placeholder.com/300x200",
    link: "<ITCHIO_LINK_1>" // TODO
  },
  {
    id: 2,
    title: "Pixel Dungeon+",
    description: "Roguelike 2D con IA dinámica de enemigos.",
    image: "https://via.placeholder.com/300x200",
    link: "<ITCHIO_LINK_2>" // TODO
  }
];

const jobs = [
  {
    id: 1,
    role: "Gameplay Programmer",
    company: "Indie Studio XYZ",
    dates: "2023‑2025",
    bullets: [
      "Implementé sistema de pooling reduciendo GC un 80 %.",
      "Migré proyecto URP → HDRP mejorando iluminación."
    ]
  },
  {
    id: 2,
    role: "Unity Developer (Freelance)",
    company: "Mobile Fun Co.",
    dates: "2021‑2023",
    bullets: [
      "Publicados 4 títulos (>500 k descargas).",
      "Integré IAP y analíticas en tiempo récord."
    ]
  }
];

const awards = [
  {
    id: 1,
    title: "Unity Game Jam 2024 — 2.º puesto",
    description: "Juego cooperativo VR creado en 48 h.",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    title: "Unity Certified Associate",
    description: "Certificación oficial de Unity Technologies (2023)",
    image: "https://via.placeholder.com/300x200"
  }
];

const skills = [
  "Unity 2022 LTS",
  "C# / DOTS",
  "URP & HDRP",
  "ShaderGraph",
  "Addressables",
  "Git / GitHub Actions",
  "CI/CD",
  "AR Foundation",
  "FMOD"
];

// ---- Components ----
const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="py-24 px-4 lg:px-24 max-w-6xl mx-auto">
      <Typography.h2 className="text-center mb-12 text-4xl font-bold text-theme-accent">
        {title}
      </Typography.h2>
      {children}
    </section>
  );
};

export default function Portfolio() {
  const { isDark } = useTheme();
  
  return (
    <Background.Silk
      speed={5}
      scale={1}
      color="#9285C7"
      noiseIntensity={1.5}
      rotation={0}
    >
      {/* ---- Hero ---- */}
      <div id="top" className="min-h-screen flex flex-col items-center justify-center text-center text-theme-text px-4">
        <Animation.SplitText as="h1" words className="text-5xl md:text-6xl font-extrabold mb-8 text-theme-title">
          Nombre Genérico
        </Animation.SplitText>
        <Typography.h3 className="text-2xl md:text-3xl mb-12 font-medium text-theme-accent">
          Desarrollador de videojuegos en C# / Unity
        </Typography.h3>

        <ProfileCard
          name="Nombre Genérico"
          title="Unity Game Developer"
          handle="unitydev"
          status="Online"
          contactText="Contact Me"
          avatarUrl="https://reactbits.dev/assets/person.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
          iconUrl="C:\Users\nicol\OneDrive\Documentos\portfolio web\my-portfolio\src\assets\iconpattern.png"
          grainUrl="https://reactbits.dev/assets/grain.webp"
        />

        <Button.Ghost as="a" href="#contacto" className="mt-10 text-theme-text border-theme-border">
          Contacto directo
        </Button.Ghost>
      </div>

      {/* ---- Sobre mí ---- */}
      <Section id="sobre-mi" title="Sobre mí">
        <Animation.ScrollReveal>
          <Typography.p className="max-w-3xl mx-auto leading-relaxed text-lg text-theme-text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum. Nulla facilisi. Morbi feugiat, mauris at luctus tincidunt, libero ipsum tristique leo, eu varius enim augue ac turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non feugiat nisl. Vivamus venenatis consequat sapien, sed lobortis urna consequat vitae. Integer ipsum odio, malesuada semper commodo non, varius quis massa. Integer eu fermentum risus. Quisque ut odio nec arcu bibendum ultricies.
          </Typography.p>
        </Animation.ScrollReveal>
      </Section>

      {/* ---- Tech Stack & Skills ---- */}
      <Section id="skills" title="Tech Stack & Skills">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <Animation.AnimatedContent key={skill} className="flex items-center justify-center p-4 bg-theme-surface rounded-lg border border-theme-border">
              <Typography.span className="text-sm font-semibold text-theme-text-secondary">
                {skill}
              </Typography.span>
            </Animation.AnimatedContent>
          ))}
        </div>
      </Section>

      {/* ---- Proyectos Destacados ---- */}
      <Section id="proyectos" title="Proyectos Destacados">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <FlipCard key={proj.id} frontContent={<img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />} backContent={
              <div className="flex flex-col items-center justify-center p-6 h-full bg-theme-surface text-theme-text-secondary">
                <Typography.h4 className="text-lg font-bold mb-2 text-theme-accent">
                  {proj.title}
                </Typography.h4>
                <Typography.p className="text-sm text-center mb-4">
                  {proj.description}
                </Typography.p>
                <Button.Primary as="a" href={proj.link} target="_blank" rel="noopener noreferrer">
                  Ver en Itch.io
                </Button.Primary>
              </div>
            } />
          ))}
        </div>
      </Section>

      {/* ---- Experiencia Profesional ---- */}
      <Section id="experiencia" title="Experiencia Profesional & Educación">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <MeshyCard key={job.id} title={job.role} subtitle={`${job.company} — ${job.dates}`}>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                {job.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </MeshyCard>
          ))}
        </div>
      </Section>

      {/* ---- Reconocimientos & Certificaciones ---- */}
      <Section id="premios" title="Reconocimientos & Certificaciones">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award) => (
            <FlipCard key={award.id} frontContent={<img src={award.image} alt={award.title} className="w-full h-full object-cover" />} backContent={
              <div className="flex flex-col items-center justify-center p-6 h-full bg-theme-surface text-theme-text-secondary">
                <Typography.h4 className="text-lg font-bold mb-2 text-theme-accent">
                  {award.title}
                </Typography.h4>
                <Typography.p className="text-sm text-center">
                  {award.description}
                </Typography.p>
              </div>
            } />
          ))}
        </div>
      </Section>

      {/* ---- Contacto ---- */}
      <Section id="contacto" title="Contacto">
        <Layout.Flex direction="col" align="center" gap="4">
          <Typography.p className="text-lg text-theme-text-secondary">
            ¿Te interesa colaborar o contratarme? Hablemos.
          </Typography.p>
          <Button.Primary as="a" href="mailto:correo@example.com">
            Enviar correo
          </Button.Primary>
          <Layout.Flex gap="4" justify="center">
            <Icon.Github as="a" href="<GITHUB_LINK>" label="GitHub" />
            <Icon.LinkedIn as="a" href="<LINKEDIN_LINK>" label="LinkedIn" />
            <Icon.Game as="a" href="<ITCHIO_PROFILE>" label="Itch.io" />
          </Layout.Flex>
        </Layout.Flex>
      </Section>

      {/* ---- Footer ---- */}
      <footer className="py-8 text-center text-xs text-theme-text-secondary">
        © {new Date().getFullYear()} Nombre Genérico — Portfolio creado con React Bits & MVPBlocks.
      </footer>
    </Background.Silk>
  );
}
