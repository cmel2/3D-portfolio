const siteMeta = {
  name: "Mohamed El Shal",
  role: "3D Artist, Lookdev und Technical Design",
  focusAreas: [
    "Modelling",
    "UV & Texturing",
    "Shading",
    "Rigging",
    "Facial Animation",
    "Simulation",
    "Lighting",
    "Lookdev",
    "Environment Design",
  ],
  software: [
    {
      name: "Autodesk Maya",
      vendor: "3D Suite",
      description: "Modelling, Rigging, Animation, Simulation und Rendering.",
      accent: "#37a5cc",
      logo: {
        type: "image",
        src: "https://cdn.simpleicons.org/autodeskmaya/37A5CC",
      },
    },
    {
      name: "After Effects",
      vendor: "Motion Design",
      description: "Compositing, Motion-Tests und kurze Postproduktionsschritte.",
      accent: "#9999ff",
      logo: {
        type: "monogram",
        text: "Ae",
      },
    },
    {
      name: "Blender",
      vendor: "3D Toolset",
      description: "Zusätzliche 3D-Studien, Szenenbau und experimentelle Looks.",
      accent: "#f5792a",
      logo: {
        type: "image",
        src: "https://cdn.simpleicons.org/blender/F5792A",
      },
    },
    {
      name: "Tinkercad 3D",
      vendor: "Basics & Prototyping",
      description: "Frühe Formstudien, einfache Konstruktionen und OBJ-Export.",
      accent: "#1477d1",
      logo: {
        type: "image",
        src: "https://cdn.simpleicons.org/tinkercad/1477D1",
      },
    },
  ],
};

const projectYears = [
  {
    id: "year-3",
    yearNumber: "03",
    label: "3. Jahrgang",
    title: "Grundlagen in Form, Material und UV-Verständnis",
    accent: "#cf6c37",
    summary:
      "Im 3. Jahrgang stehen Modellierung, Materialtests und klar lesbare Renderings im Vordergrund. Die Arbeiten zeigen technische Grundlagen, aber bereits ein Gespür für Licht, Kontrast und Präsentation.",
    skills: ["Tinkercad", "Modelling", "UV Mapping", "Shading"],
    works: [
      {
        id: "chessboard-study",
        title: "Schachbrett-Studie",
        category: "Rendering",
        description:
          "Eine frühe Licht- und Materialübung mit spiegelnden Figuren, dunklem Raum und starkem Farbkontrast zwischen warmem Rot und kaltem Blau.",
        media: {
          type: "image",
          src: "./3th year/Chessboard.png",
          alt: "Schachbrett mit roten und blauen Schachfiguren",
        },
        tags: ["Lighting", "Materials", "Composition"],
        featured: true,
      },
      {
        id: "robot-shading",
        title: "Robot Shading",
        category: "Lookdev",
        description:
          "Studie zu Oberflächenverhalten, Reflexionen und einem besser kontrollierten Zusammenspiel von Shadern und Licht.",
        media: {
          type: "image",
          src: "./3th year/Robot_Shading.png",
          alt: "Roboter-Rendering mit betonten Materialien",
        },
        tags: ["Shading", "Lookdev", "Materials"],
      },
      {
        id: "uv-mapping-practice",
        title: "UV-Mapping Übung",
        category: "Technik",
        description:
          "Technische Übung zum sauberen Auftrennen, Ordnen und Weiterverarbeiten von UVs als Grundlage für glaubwürdige Texturen.",
        media: {
          type: "image",
          src: "./3th year/UV_Mapping_Practice.png",
          alt: "Technische UV-Mapping Übung",
        },
        tags: ["UV Mapping", "Texturing", "Workflow"],
      },
      {
        id: "tennis-racket",
        title: "Tennisschläger",
        category: "Hard Surface",
        description:
          "Modellierungsstudie mit klarer Silhouette, einfachen Materialien und Fokus auf Formkontrolle bei industriellen Objekten.",
        media: {
          type: "image",
          src: "./3th year/Tennis_racket.png",
          alt: "3D-Rendering eines Tennisschlägers",
        },
        tags: ["Hard Surface", "Modelling", "Presentation"],
      },
      {
        id: "chesspiece-obj",
        title: "Schachfigur aus Tinkercad",
        category: "OBJ Viewer",
        description:
          "Interaktive Ansicht der exportierten Grundform. Die Figur lässt sich direkt im Browser drehen und zoomen und ergänzt das Schach-Projekt um eine nachvollziehbare Modellbasis.",
        media: {
          type: "model",
          src: "./3th year/Chesspiece_Tinkercad.obj",
          alt: "OBJ-Datei einer Schachfigur aus Tinkercad",
          modelKey: "chesspieceObj",
        },
        tags: ["OBJ", "Tinkercad", "Base Mesh"],
      },
    ],
  },
  {
    id: "year-4",
    yearNumber: "04",
    label: "4. Jahrgang",
    title: "Bewegung, Charactertechnik und Simulation",
    accent: "#8ea9bf",
    summary:
      "Im 4. Jahrgang verschiebt sich der Fokus von statischen Objekten zu animierten Abläufen. Rigging, Facial Animation und nCloth zeigen ein deutlich technischer werdendes Interesse.",
    skills: ["Rigging", "Facial Animation", "nCloth", "Rendering"],
    works: [
      {
        id: "lightsaber-study",
        title: "Lichtschwert Studie",
        category: "Lighting",
        description:
          "Zwei Renderansichten einer gemeinsamen Licht- und Materialstudie. Das Leuchtelement bestimmt die gesamte Komposition, während Perspektive, Reflexionen und Blickführung variiert werden.",
        media: {
          type: "gallery",
          alt: "Lichtschwert-Studie mit zwei Renderansichten",
          items: [
            {
              type: "image",
              src: "./4th year/El Shal_Mohamed_Lichtschwert_Render01.png",
              alt: "Erste Lichtschwert-Ansicht mit roter Leuchtklinge",
            },
            {
              type: "image",
              src: "./4th year/El Shal_Mohamed_Lichtschwert_Render02.png",
              alt: "Zweite Lichtschwert-Ansicht mit angepasster Perspektive",
            },
          ],
        },
        tags: ["Lighting", "Rendering", "Materials", "Series"],
        featured: true,
      },
      {
        id: "rig-demo",
        title: "Rigging Demo",
        category: "Animation",
        description:
          "Kurzer Clip zur Demonstration von Gelenkverhalten, Steuerung und sauberer Bewegungsübertragung im Character-Setup.",
        media: {
          type: "video",
          src: "./4th year/El Shal_Mohamed_Rig.mp4",
          alt: "Rigging Demo Video",
        },
        tags: ["Rigging", "Controls", "Animation"],
      },
      {
        id: "mimik-demo",
        title: "Mimik Animation",
        category: "Character",
        description:
          "Facial-Animation-Studie mit Fokus auf Ausdruck, Timing und der Übersetzung kleiner Formveränderungen in lesbare Emotion.",
        media: {
          type: "video",
          src: "./4th year/El Shal_Mohamed_Mimik.mp4",
          alt: "Mimik Animation Video",
        },
        tags: ["Facial Animation", "Expression", "Timing"],
      },
      {
        id: "ncloth-flag",
        title: "nCloth Flagge",
        category: "Simulation",
        description:
          "Simulation einer Flagge als Übung für Stoffverhalten, Gewicht, Trägheit und glaubwürdige Reaktion auf Bewegung.",
        media: {
          type: "video",
          src: "./4th year/El Shal_Mohamed_nClothFlagge.mp4",
          alt: "nCloth Flaggenanimation",
        },
        tags: ["nCloth", "Simulation", "Dynamics"],
      },
    ],
  },
  {
    id: "year-5",
    yearNumber: "05",
    label: "5. Jahrgang",
    title: "Atmosphäre, Environment und ausgereiftere Inszenierung",
    accent: "#786b59",
    summary:
      "Der 5. Jahrgang erweitert die technische Basis um stärkere Stimmung, klarere Szenografie und spezifischere Werkzeuge wie XGen. Viele Arbeiten setzen stärker auf cineastische Beleuchtung und räumliche Tiefe.",
    skills: ["Environment", "XGen", "HDRI", "Lookdev"],
    works: [
      {
        id: "final-stage",
        title: "The Final Stage",
        category: "Environment",
        description:
          "Eine atmosphärische Interiorszene mit starker Tiefenstaffelung, gezielter Lichtführung und klarer Materialtrennung zwischen Stein, Holz und Kerzenlicht.",
        media: {
          type: "image",
          src: "./5th year/El Shal_Mohamed_TheFinalStage.jpg",
          alt: "Dunkle Bibliotheks- oder Hallenszene mit Kerzenlicht",
        },
        tags: ["Environment Design", "Lighting", "Atmosphere"],
        featured: true,
      },
      {
        id: "xgen-study",
        title: "XGen Study",
        category: "Grooming",
        description:
          "Technische Studie zu Haar- und Fellverhalten mit Fokus auf Dichte, Führung und lesbarem Silhouettenaufbau.",
        media: {
          type: "image",
          src: "./5th year/El Shal_Mohamed_XGen.jpg",
          alt: "XGen-Studie zu Haar oder Fell",
        },
        tags: ["XGen", "Grooming", "Detail"],
      },
      {
        id: "blobby-study",
        title: "Blobby Study",
        category: "Formstudie",
        description:
          "Verspielte Volumenarbeit mit weicheren Oberflächen und Fokus auf Materialgefühl, Formrhythmus und Lesbarkeit.",
        media: {
          type: "image",
          src: "./5th year/El Shal_Mohamed_Blobby (1).png",
          alt: "Organische Blobby-Studie",
        },
        tags: ["Forms", "Surface", "Experiment"],
      },
      {
        id: "curves-hdri",
        title: "Curves HDRI",
        category: "Lighting",
        description:
          "Render mit geschwungener Linienführung und kontrollierter HDRI-Beleuchtung zur Untersuchung von Reflexionen und Raumwirkung.",
        media: {
          type: "image",
          src: "./5th year/El Shal_Mohamed_CurvesHDRI.png",
          alt: "HDRI-beleuchtete Curves-Szene",
        },
        tags: ["HDRI", "Lighting", "Reflections"],
      },
      {
        id: "polster-scene",
        title: "Polsterszene",
        category: "Interior",
        description:
          "Innenraumszene mit Fokus auf Stoffigkeit, Volumen und einer ruhigeren, wohnlichen Lichtstimmung.",
        media: {
          type: "image",
          src: "./5th year/El Shal_Mohamed_Polsterszene.jpg",
          alt: "Gerenderte Polsterszene",
        },
        tags: ["Interior", "Materials", "Soft Surfaces"],
      },
      {
        id: "development-stages",
        title: "Entwicklungsstufen",
        category: "Process",
        description:
          "Kurzer Prozessclip, der Zwischenschritte sichtbar macht und den Weg von der Rohform zur finaleren Szene dokumentiert.",
        media: {
          type: "video",
          src: "./5th year/El Shal_Mohamed_Entwicklungsstufen.mp4",
          alt: "Video der Entwicklungsstufen",
        },
        tags: ["Process", "Iteration", "Workflow"],
      },
      {
        id: "portal-animation",
        title: "Portal Animation",
        category: "Motion",
        description:
          "Animierte Szene mit Fokus auf Timing, räumliche Wirkung und dem Kontrast zwischen statischer Umgebung und aktiver Energiequelle.",
        media: {
          type: "video",
          src: "./5th year/El Shal_Mohamed_Portal.mp4",
          alt: "Portal Animation Video",
        },
        tags: ["Animation", "FX", "Timing"],
      },
      {
        id: "ufo-animation",
        title: "UFO Animation",
        category: "Motion",
        description:
          "Kurze Sequenz mit klarer Sci-Fi-Lesart, bei der Bewegung, Beleuchtung und Objektsilhouette die Szene tragen.",
        media: {
          type: "video",
          src: "./5th year/El Shal_Mohamed_UFO.mp4",
          alt: "UFO Animation Video",
        },
        tags: ["Sci-Fi", "Animation", "Mood"],
      },
    ],
  },
];

window.PortfolioData = {
  siteMeta,
  projectYears,
};
