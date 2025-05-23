import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="fixed text-xs sm:text-lg w-full flex py-5 sm:pr-20 space-x-5 justify-center sm:justify-end bg-[var(--color-background)] text-[var(--color-foreground)] font-black">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b-2 cursor-pointer"
        >
          RESUME
        </a>
        <a
          href="https://github.com/cezikmertcan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b-2 cursor-pointer"
        >
          GITHUB
        </a>
        <a
          href="https://cezikmertcan.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b-2 cursor-pointer"
        >
          ITCH.IO
        </a>
        <a
          href="https://www.linkedin.com/in/cezikmertcan/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b-2 cursor-pointer"
        >
          LINKEDIN
        </a>
      </header>
      <section className="text-2xl sm:text-4xl font-extralight h-screen flex flex-col justify-evenly px-[20] md:px-[100] xl:px-[200] 2xl:px-[400]">
        <h1>Hello!</h1>

        <p>
          I’m <span className="font-bold">Mertcan Çezik</span>, a
          developer focused on building <span className="font-bold">games</span>{" "}
          and <span className="font-bold">user-friendly</span> apps.
        </p>

        <p>
          From <span className="font-bold">Unity games</span> to{" "}
          <span className="font-bold">AI-powered tools</span>, I turn ideas into
          clean, functional software.
        </p>

        <p className="text-xl">
          <span className="font-bold">
            Let’s make something people love to use. <br />
          </span>
          <a
            href="mailto:cezikmertcan@gmail.com"
            className="cursor-pointer font-bold border-b-2 text-rose-600 hover:text-gray-100 hover:bg-rose-600 dark:text-rose-400 dark:hover:bg-rose-400 dark:hover:text-[var(--background)]"
          >
            cezikmertcan@gmail.com
          </a>
        </p>
      </section>
      <section className="flex flex-col p-8 md:p-20 xl:p-40 space-y-5 h-fit justify-around">
        <h2 className="font-black text-4xl text-rose-500 dark:text-rose-400 bg-[var(--color-foreground)] w-fit">BACKGROUND</h2>
        <p>
          I am a <span className="font-bold">game and software developer</span>{" "}
          based in Türkiye with a background in
          <span className="font-bold"> interactive media</span>,{" "}
          <span className="font-bold">backend systems</span>, and
          <span className="font-bold"> mobile applications</span>. Since 2016, I
          have contributed to startups, agencies, and international clients
          starting as a junior game developer and growing into senior roles
          <span className="font-bold">
            {" "}
            leading backend architecture
          </span> and <span className="font-bold">Unity teams</span>.
        </p>

        <p>
          I have worked across platforms and technologies including
          <span className="font-bold"> Unity</span>,{" "}
          <span className="font-bold">Phaser.js</span>,
          <span className="font-bold"> Node.js</span>,{" "}
          <span className="font-bold">Prisma</span>,
          <span className="font-bold"> Firebase</span>, and{" "}
          <span className="font-bold">Ionic</span>. My projects range from WebGL
          experiences and <span className="font-bold">casual games</span> to{" "}
          <span className="font-bold">AI-powered appliations and services</span>
          .
        </p>

        <p>
          Outside of client work and applications, I enjoy building personal
          projects, learning emerging tools, and experimenting with{" "}
          <span className="font-bold">gameplay mechanics</span> and{" "}
          <span className="font-bold">AI integrations</span> that aim to inform,
          or entertain.
        </p>
      </section>
      <section className="flex flex-col py-8 px-8 md:px-20 xl:px-40 h-fit">
        <h2 className="font-black text-4xl text-rose-500 dark:text-rose-400 bg-[var(--color-foreground)] w-fit">SKILLS</h2>
        <div className="w-full text-lg md:text-xl grid grid-cols-2 lg:grid-cols-5 space-y-5 space-x-5 mt-5">
          <div className="flex flex-col">
            <span className="font-black h-16 items-center flex mb-5 w-1 text-amber-500 dark:text-amber-400">
              Game & Interactive
            </span>
            <span className="font-bold">Unity</span>
            <span className="font-bold">Phaser.js</span>
            <span>Pixi.js</span>
            <span>Three.js</span>
            <span>Unreal Engine</span>
            <span>WebGL</span>
            <span>Oculus Quest </span>
            <span>HoloLens </span>
            <span>HTC Vive</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black h-16 items-center flex mb-5 w-1 text-amber-500 dark:text-amber-400">
              Backend
            </span>
            <span className="font-bold">Node.js</span>
            <span>NestJS</span>
            <span>Express.js</span>
            <span className="font-bold">ASP.NET</span>
            <span>Firebase</span>
            <span>Prisma</span>
            <span>Entity Framework</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black h-16 items-center flex mb-5 w-1 text-amber-500 dark:text-amber-400">
              Frontend
            </span>
            <span className="font-bold">Next.js</span>
            <span>Tailwind CSS</span>
            <span>HTML5</span>
            <span className="font-bold">Ionic</span>
            <span>GSAP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black h-16 items-center flex mb-5 w-1 text-amber-500 dark:text-amber-400">
              Database & Devops
            </span>
            <span className="font-bold">Docker</span>
            <span className="font-bold">Redis</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>NoSQL</span>
            <span>AWS</span>
            <span>Azure</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black h-16 items-center flex mb-5 w-1 text-amber-500 dark:text-amber-400">
              Languages
            </span>
            <span className="font-bold">TypeScript</span>
            <span className="font-bold">JavaScript</span>
            <span className="font-bold">C#</span>
            <span>Go</span>
            <span>Python</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col p-8 md:p-20 space-y-5 justify-around">
        <h2 className="font-black text-2xl sm:text-4xl text-rose-500 dark:text-rose-400 bg-[var(--color-foreground)] w-fit">FEATURED PROJECTS</h2>
        <div className="w-full flex flex-col space-y-5 border-b-1">
          <div className="flex pb-2">
            <div className="w-full md:flex justify-center items-center hidden p-5">
              <Image
                src={"/magejam-cover.gif"}
                alt={"logo"}
                width={600}
                height={420}
                style={{ height: "100%", width: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="w-full px-5 flex flex-col justify-start space-y-5">
              <h3 className="font-black text-2xl">Mage Jam 3D</h3>
              <div className="md:hidden flex justify-center">
                <Image
                  src={"/magejam-cover.gif"}
                  alt={"logo"}
                  width={600}
                  height={420}
                  style={{ width: "50vh", height: "auto" }}
                />
              </div>
              <p className="italic mb-4">Unity game for mobile and web</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Solo-developed in <span className="font-medium">Unity</span>,
                  designed for{" "}
                  <span className="font-medium">mobile devices</span> and{" "}
                  <span className="font-medium">web browsers</span>.
                </li>
                <li>
                  A casual 3D puzzle game where players drop and merge mage
                  characters.
                </li>
                <li>
                  When three identical mages are combined, they vanish — clear
                  the board to win the level.
                </li>
                <li>
                  Unique twist: if the{" "}
                  <span className="font-medium">bottom row gets jammed</span>,
                  the game ends immediately.
                </li>
                <li>
                  Features intuitive tap & go mechanics, light strategy, and
                  satisfying visuals.
                </li>
                <li>
                  Optimized for touch & mouse controls and quick gameplay
                  sessions.
                </li>
              </ul>
              <p className="mt-4">
                <em>Mage Jam</em> reimagines the match-and-merge genre with a
                charming 3D style and arcade-like tension.
              </p>
              <div className="flex flex-col items-end justify-end h-full">
                <a
                  href="https://cezikmertcan.itch.io/mage-jam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-foreground)] text-[var(--color-background)] font-black p-1 cursor-pointer hover:pr-20"
                >
                  CHECK IT OUT ON ITCH.IO
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-5 border-b-1">
          <div className="flex pb-2">
            <div className="w-full md:flex justify-center items-center hidden p-5">
              <Image
                src={"/solrivals-cover.webp"}
                alt={"logo"}
                width={600}
                height={420}
                style={{ height: "100%", width: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="w-full px-5 flex flex-col justify-start space-y-5">
              <h3 className="font-black text-2xl">
                SolRivals - 2D Multiplayer Space Combat
              </h3>
              <div className="md:hidden flex justify-center">
                <Image
                  src={"/solrivals-cover.webp"}
                  alt={"logo"}
                  width={600}
                  height={420}
                  style={{ width: "50vh", height: "auto" }}
                />
              </div>
              <p className=" italic mb-4">
                Multiplayer game for web with Phaser.js
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Solo-developed the game using Phaser.js, built a WebSocket-based
                  lobby system, and integrated Photon for in-game multiplayer
                  networking.
                </li>
                <li>Smooth stick style ship controls and pilot mechanics</li>
                <li>
                  Ship and pilot switching, when ships explode, pilots eject and
                  continue the fight.
                </li>
                <li>
                  Unique abilities and weapons across multiple ship and pilot
                  types.
                </li>
                <li>
                  Real-time multiplayer features and dynamic combat balancing.
                </li>
              </ul>
              <p className="mt-4">
                <em>SolRivals</em> delivers chaotic 2D space combat with
                team-based survival, customizable builds, and a thrilling
                eject-and-fight twist.
              </p>
              <div className="flex flex-col items-end justify-end h-full">
                <a
                  href="http://solrivals.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-foreground)] text-[var(--color-background)] font-black p-1 cursor-pointer hover:pr-20"
                >
                  CHECK IT OUT ON SOLRIVALS.COM
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-5 border-b-1">
          <div className="flex pb-2">
            <div className="w-full md:flex justify-center items-center hidden p-5">
              <Image
                src={"/holosprint-cover.webp"}
                alt={"logo"}
                width={600}
                height={420}
                style={{ height: "100%", width: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="w-full px-5 flex flex-col justify-start space-y-5">
              <h3 className="font-black text-2xl">HoloSprint (Tech Demo)</h3>
              <div className="md:hidden flex justify-center">
                <Image
                  src={"/holosprint-cover.webp"}
                  alt={"logo"}
                  width={600}
                  height={420}
                  style={{ width: "50vh", height: "auto" }}
                />
              </div>
              <p className="italic mb-4">
                Gesture-controlled racing tech demo developed in Unity with
                real-time hand tracking via TensorFlow.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Created custom machine learning model for gesture input using
                  a webcam.
                </li>
                <li>
                  Eliminated need for keyboard or controller drive with just
                  your hands.
                </li>
                <li>
                  Built for PC and published on Steam as a showcase of tech.
                </li>
                <li>
                  Supports camera toggling, forward/reverse controls, and
                  intuitive steering.
                </li>
              </ul>
              <p className="mt-4">
                <em>HoloSprint</em> fuses classic racing with futuristic
                AI-powered controls in an immersive, controller-free experience.
              </p>

              <div className="flex flex-col items-end justify-end h-full">
                <a
                  href="https://store.steampowered.com/app/1119670/HoloSprint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-foreground)] text-[var(--color-background)] font-black p-1 cursor-pointer hover:pr-20"
                >
                  CHECK IT OUT ON STEAM
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-5 border-b-1">
          <div className="flex pb-2">
            <div className="w-full md:flex justify-center items-center hidden p-5">
              <Image
                src={"/gesturehockey-cover.webp"}
                alt={"logo"}
                width={600}
                height={420}
                style={{ height: "100%", width: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="w-full px-5 flex flex-col justify-start space-y-5">
              <h3 className="font-black text-2xl">
                Gesture & Tracking Hockey VR
              </h3>
              <div className="md:hidden flex justify-center">
                <Image
                  src={"/gesturehockey-cover.webp"}
                  alt={"logo"}
                  width={600}
                  height={420}
                  style={{ width: "50vh", height: "auto" }}
                />
              </div>
              <p className="italic mb-4">
                Simulated hockey game built in Unity with VR support and gesture
                tracking.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Developed with Unity in under a month for a client project.
                </li>
                <li>
                  Gesture-based mechanics integrated with VR for immersive
                  gameplay.
                </li>
                <li>
                  Deployed in fan zones of Montreal Canadiens and Edmonton
                  Oilers stadiums.
                </li>
                <li>
                  Optimized for real-time interaction and large-screen display
                  experiences.
                </li>
              </ul>
              <p className="mt-4">
                <em>Gesture Hockey VR</em> brings the intensity of a slapshot to
                the virtual world with full-body motion control.
              </p>

              <div className="flex flex-col items-end justify-end h-full">
                <a
                  href="https://www.youtube.com/watch?v=HK6Q5g00M-Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-foreground)] text-[var(--color-background)] font-black p-1 cursor-pointer hover:pr-20"
                >
                  CHECK IT OUT ON YOUTUBE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-5 border-b-1">
          <div className="flex pb-2">
            <div className="w-full md:flex justify-center items-center hidden p-5">
              <Image
                src={"/monstersandrabbits-cover.webp"}
                alt={"logo"}
                width={600}
                height={420}
                style={{ height: "100%", width: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="w-full px-5 flex flex-col justify-start space-y-5">
              <h3 className="font-black text-2xl">Monsters and Rabbits</h3>
              <div className="md:hidden flex justify-center">
                <Image
                  src={"/monstersandrabbits-cover.webp"}
                  alt={"logo"}
                  width={600}
                  height={420}
                  style={{ width: "50vh", height: "auto" }}
                />
              </div>
              <p className="italic mb-4">
                Cute 2D puzzle game built in Unity for mobile, inspired by
                ChuChu Rocket.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Designed grid-based movement with directional arrow mechanics.
                </li>
                <li>
                  Implemented touch controls optimized for mobile screens.
                </li>
                <li>
                  Integrated in-app purchases and level progression system.
                </li>
                <li>
                  Features charming monster and rabbit characters in a colorful
                  world.
                </li>
              </ul>
              <p className="mt-4">
                <em>Monsters and Rabbits</em> reimagines classic path-finding
                puzzles with modern mobile flair and adorable chaos.
              </p>

              <div className="flex flex-col items-end justify-end h-full">
                <a
                  href="https://www.youtube.com/watch?v=nv0yBi2CaqY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-foreground)] text-[var(--color-background)] font-black p-1 cursor-pointer hover:pr-20"
                >
                  CHECK IT OUT ON YOUTUBE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full flex-col px-2 py-5 bg-[var(--color-background)] text-[var(--color-foreground)]">
        <div className="w-full text-center">
          Developed by <span className="font-black">Mertcan Çezik</span> | 2025
        </div>
        <div className="flex font-black space-x-5 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2 cursor-pointer"
          >
            RESUME
          </a>
          <a
            href="https://github.com/cezikmertcan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2 cursor-pointer"
          >
            GITHUB
          </a>
          <a
            href="https://cezikmertcan.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2 cursor-pointer"
          >
            ITCH.IO
          </a>
          <a
            href="https://www.linkedin.com/in/cezikmertcan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2 cursor-pointer"
          >
            LINKEDIN
          </a>
        </div>
      </footer>
    </div>
  );
}
