// Simple one‑page portfolio built with React, React Bits & MVPBlocks.
// Replace all TODO markers (e.g. <LINK_HERE>) with your actual links or data.

import React from "react";
import { useTheme } from "./contexts/ThemeContext.jsx";
import Header from "./components/Header.jsx";
import ContactForm from "./components/ContactForm.jsx";
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
    title: "Splitwars Online",
    description: "Splitwars Online es un juego de estrategia por turnos en 2D isométrico, disponible para PC y dispositivos móviles. Los jugadores lideran flotas espaciales, entrenan capitanes y diseñan tácticas para conquistar y expandir su dominio en una galaxia llena de batallas épicas y aventuras.",
    image: "https://splitwars.com/images/part2_img3.png",
    link: "https://splitwars.com/",
    buttonText: "Ver pagina principal"
  },
  {
    id: 2,
    title: "Volta",
    description: "Volta es un juego de puzzles donde el jugador debe resolver diferentes desafios utilizando la mente y un numero reducido de movimientos.",
    image: "https://img.itch.zone/aW1nLzIyNDM5ODEyLnBuZw==/105x83%23/60eHUJ.png",
    link: "https://nicolaslahorca.itch.io/volta",
    buttonText: "Ver en Itch.io"
  },
  {
    id: 3,
    title: "Elixir Beta",
    description: "Elixir Beta es un juego de rol 2D en el que tomamos el papel de un farmacéutico encargado de curar a los pacientes que llegan con diversos problemas de salud. Este juego fue desarrollado durante una game jam, lo que le dio un toque creativo y experimental en su jugabilidad.",
    image: "https://img.itch.zone/aW1nLzk0NzU2NzAucG5n/original/7YEBZF.png",
    link: "https://nicolaslahorca.itch.io/elixirbeta",
    buttonText: "Ver en Itch.io"
  }
];

const jobs = [
  {
    id: 1,
    role: "Tecnicatura Universitaria en Desarrollo y Produccion de Videojuegos (Educación)",
    company: "UTN FRBA",
    dates: "2025‑Actualidad",
    bullets: [
      "Becado por la UTN FRBA.",
      "Prototipé y buildee un proyecto a WebGL.",
"Diseñé moodboards y arte conceptual.",
"Diseñé elevator pitch para varios proyectos.",
"Diseñé mecanicas inovadoras esenciales para proyectos RTS"
    ]
  },
  {
    id: 2,
    role: "Unity Developer MMO RTS (FullTime)",
    company: "MoodStudios ",
    dates: "2023‑2025",
    bullets: [
      "Desarrollé mecánicas esenciales de un MMO RTS, incluyendo implementación de PVE, sistema de construcción, diseño de entidades, gestión de recursos, entre otras.",
      "Estuve a cargo de un pequeño equipo en amplias instancias de desarrollo.",
      "Optimicé el rendimiento para garantizar una experiencia fluida en múltiples dispositivos.",
      "Realicé pruebas de compatibilidad en diversas plataformas.",
      "Colaboré en el diseño de UI/UX, facilitando una navegación intuitiva.",
      "Creé un sistema dinámico de gestión de recursos en tiempo real.",
      "Reduje los tiempos de carga y mejoré las transiciones entre pantallas.",
      "Proporcioné soporte post-lanzamiento, solucionando problemas y manteniendo actualizaciones."
    ]
  },
  {
    id: 3,
    role: "Ingenieria Electronica (Educación)",
    company: "UTN FRA",
    dates: "2021‑Actualidad",
    bullets: [
      "Implementé codigo C de bajo nivel en sistemas embebidos.",
      "Optimicé el rendimiento de código en microcontroladores, mejorando la eficiencia en recursos limitados.",
      "Diseñé y simulé circuitos electrónicos para aplicaciones prácticas utilizando herramientas como LTspice y Proteus.",
      "Desarrollé soluciones en tiempo real para sistemas embebidos, garantizando respuestas rápidas y precisas."
    ]
  },
{
    id: 4,
    role: "Unity Developer (Freelance)",
    company: "Freelance",
    dates: "2021‑2023",
    bullets: [
      "Creé prototipos de juegos premium: Desarrollé conceptos innovadores para experiencias single-player con mecánicas únicas.",
      "Implementé sistemas de elecciones e interacciones para experiencias narrativas inmersivas.",
      "Implementé físicas realistas para mejorar la jugabilidad.",
      "Mejoré interfaces y mecánicas de juego para un flujo más intuitivo.",
      "Prototipé mecánicas de juegos bullet hell, novelas visuales, narrativos, entre otras.",
      "Colaboré con equipos multidisciplinarios: Trabajé junto a diseñadores, artistas y musicos para crear experiencias cohesivas."
    ]
  },
{
    id: 5,
    role: "Musico de orquesta (Educación)",
    company: "OEFV",
    dates: "2018‑2025",
    bullets: [
      "Colaboré en la ejecución de conciertos en vivo",
      "Mantuve disciplina y ensayo constante",
      "Fomenté el trabajo en equipo",
      "Colaboré en la creación de piezas musicales"
    ]
  },
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
  "Unity Engine",
  "C# / C",
  "Addressables",
  "Online Multiplayer",
  "RTS gameplay",
  "Git / GitHub Actions",
  "CI/CD",
  "Backend Integration"
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
    <>
      <Header />
      <Background.Silk
        speed={3}
        scale={0.7}
        color="#7B7481" // Color por defecto, será reemplazado por --color-background
        noiseIntensity={1.5}
        rotation={0}
        themeKey={isDark ? "dark" : "light"}
      >
              {/* ---- Hero ---- */}
        <div id="top" className="min-h-screen flex flex-col items-center justify-center text-center text-theme-text px-4 pt-16">
        <Animation.SplitText as="h1" words className="text-5xl md:text-6xl font-extrabold mb-8 text-theme-title">
          Lahorca Nicolas
        </Animation.SplitText>
        <Typography.h3 className="text-2xl md:text-3xl mb-12 font-medium text-theme-accent">
          Desarrollador de videojuegos SSr <br /> en C# / Unity
        </Typography.h3>

        <ProfileCard
          name="Lahorca Nicolas"
          title="Unity Game Developer"
          handle="LahorcaKatzow"
          status="Online"
          contactText="Contact Me"
          avatarUrl="https://github.com/NLahorcaKatzow/portfolio-web/blob/main/my-portfolio/src/assets/pngaaa.com-734189.png?raw=true"
          showUserInfo={true}
          enableTilt={true}
          behindGradient= "radial-gradient(circle,rgba(42, 55, 155, 1) 0%, rgba(147, 87, 199, 1) 51%, rgba(83, 101, 237, 1) 100%)"
          innerGradient = "radial-gradient(circle,rgba(42, 55, 155, 0) 0%, rgba(147, 87, 199, 0.3) 51%, rgba(83, 101, 237, 0.4) 100%)"
          showBehindGradient={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
          iconUrl="https://raw.githubusercontent.com/NLahorcaKatzow/portfolio-web/main/my-portfolio/src/assets/iconpattern.png"
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
          <p> Actualmente, Soy un programador de 22 años con experiencia en el desarrollo de videojuegos, especialmente en el ámbito de los MMO y RTS, áreas en las que he trabajado durante varios años.
          <br /> Actualmente, compagino mis estudios con el trabajo, lo que me permite seguir aprendiendo y perfeccionando mis habilidades.
          <br /> Me considero un jugador de equipo, siempre dispuesto a colaborar y aportar en proyectos grupales. Además, tengo un buen ojo para el arte, lo que me permite entender y valorar los aspectos visuales de un juego, contribuyendo a que la experiencia sea más atractiva para los jugadores.
          <br /> Me gusta mucho el desarrollo de juegos, y me encanta la parte de diseño de mecánicas y sistemas.
          </p>
          </Typography.p>
        </Animation.ScrollReveal>
      </Section>

      {/* ---- Tech Stack & Skills ---- */}
      <Section id="skills" title="Tech Stack & Skills">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <Animation.AnimatedContent key={skill} className="flex items-center justify-center p-4 bg-theme-surface/80 backdrop-blur-md rounded-lg border border-theme-border hover:bg-theme-surface/90 transition-all duration-200">
              <Typography.span className="text-sm font-semibold text-theme-text-secondary">
                {skill}
              </Typography.span>
            </Animation.AnimatedContent>
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

{/* ---- Proyectos Destacados ---- */}
<Section id="proyectos" title="Proyectos Destacados y mecanicas destacadas">
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
                  {proj.buttonText}
                </Button.Primary>
              </div>
            } />
          ))}
        </div>
      </Section>


      {/* ---- Reconocimientos & Certificaciones ---- 
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
      </Section>*/}

      {/* ---- Contacto ---- */}
      <Section id="contacto" title="Contacto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto y redes sociales */}
            <MeshyCard title="Conectemos" subtitle="Sígueme en redes sociales o envíame un mensaje directo">
              <Layout.Flex direction="col" align="start" gap="8">
                <div className="w-full">
                  <Typography.h4 className="text-lg font-semibold text-theme-title mb-4">
                    Redes Sociales
                  </Typography.h4>
                  <div className="grid grid-cols-2 gap-6">
                    <Icon.Github 
                      as="a" 
                      href="https://github.com/NLahorcaKatzow" 
                      target="_blank"
                      rel="noopener noreferrer"
                      label="GitHub" 
                    />
                    <Icon.LinkedIn 
                      as="a" 
                      href="https://www.linkedin.com/in/nicolas-lahorca/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      label="LinkedIn" 
                    />
                    <Icon.Game 
                      as="a" 
                      href="https://nicolaslahorca.itch.io/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Itch.io" 
                    />
                    <Icon.Instagram 
                      as="a" 
                      href="https://www.instagram.com/lnk_rk/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Instagram" 
                    />
                  </div>
                </div>
                
                <div className="w-full">
                  <Typography.h4 className="text-lg font-semibold text-theme-title mb-4">
                    Contacto Directo
                  </Typography.h4>
                  <Typography.p className="text-theme-text-secondary mb-6">
                    ¿Prefieres escribirme directamente? No dudes en enviarme un email:
                  </Typography.p>
                  <Button.Primary as="a" href="mailto:nicolaslahorca@gmail.com" className="w-full md:w-auto">
                    nicolas.lahorca.k@gmail.com
                  </Button.Primary>
                </div>
                
                <div className="w-full">
                  <Typography.h4 className="text-lg font-semibold text-theme-title mb-4">
                    Disponibilidad
                  </Typography.h4>
                  <Typography.p className="text-theme-text-secondary mb-4">
                    Actualmente estoy disponible para:
                  </Typography.p>
                  <ul className="list-disc list-inside text-theme-text-secondary space-y-2">
                    <li>Proyectos freelance de desarrollo de juegos</li>
                    <li>Colaboraciones en estudios de videojuegos Part-Time y Full-Time</li>
                  </ul>
                </div>
              </Layout.Flex>
            </MeshyCard>

            {/* Formulario de contacto */}
            <MeshyCard title="Envíame un mensaje" subtitle="Cuéntame sobre tu proyecto o consulta">
              <ContactForm />
            </MeshyCard>
          </div>
        </div>
      </Section>

      {/* ---- Footer ---- */}
      <footer className="py-8 text-center text-xs text-theme-text-secondary">
        © {new Date().getFullYear()} Lahorca Nicolas — Portfolio creado con React Bits & MVPBlocks.
      </footer>
      </Background.Silk>
    </>
  );
}
