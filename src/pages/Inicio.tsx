import Perfil from "../assets/perfil.jpg";
import "../style/inicio-style.css";

interface SocialButton {
  name: string;
  icon: string;
  url: string;
  color: string;
  textColor?: string;
  target?: string;
}

export default function Inicio() {
  const socialButtons: SocialButton[] = [
    {
      name: "Email",
      icon: "fa-solid fa-envelope",
      url: "mailto:carlosalzamorah@gmail.com",
      color:
        "bg-red-600 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]",
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/Chiki738",
      color:
        "bg-gray-700 hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(107,114,128,0.6)]",
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/carlos-alzamora-chiki/",
      color:
        "bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]",
    },
    {
      name: "Mi CV",
      icon: "fa-solid fa-file-pdf",
      url: "https://drive.google.com/file/d/1PjvKJRrzq0GJrM2c7pLGxUgkA1X_RCFv/view?usp=sharing",
      color:
        "bg-yellow-500 hover:bg-yellow-600 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)]",
      textColor: "text-gray-800 dark:text-gray-800",
      target: "_blank",
    },
  ];

  const row1Buttons = [socialButtons[2], socialButtons[3]]; // LinkedIn, Mi CV
  const row2Buttons = [socialButtons[0], socialButtons[1]]; // Email, GitHub

  const buttonBaseClasses = (button: SocialButton) =>
    `${button.color} ${
      button.textColor || "text-white"
    } cursor-pointer w-full md:w-44 text-center px-4 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 font-semibold text-lg`;

  const renderButtonContent = (button: SocialButton) => (
    <>
      <i className={`${button.icon} text-2xl`}></i>
      <span>{button.name}</span>
    </>
  );

  return (
    <div className="min-h-screen from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Imagen de perfil */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 dark:border-yellow-500 shadow-2xl">
                <img
                  src={Perfil}
                  alt="Foto profesional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-code text-4xl text-gray-800"></i>
              </div>
            </div>
          </div>

          {/* Texto y botones */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              ¡Hola! Soy{" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                Estudiante de Ingeniería de Sistemas
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              Este portafolio destaca y muestra mis{" "}
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                conocimientos técnicos
              </span>{" "}
              y{" "}
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                habilidades blandas
              </span>
              . Aquí encontrarás mis proyectos, certificaciones y toda la
              información sobre mi experiencia profesional.
            </p>

            {/* Botones Responsivos */}
            <div className="pt-6 max-w-md mx-auto md:mx-0">
              <div className="flex flex-col md:flex-row justify-between w-full mb-4 gap-4">
                {row1Buttons.map((button) => (
                  <a
                    key={button.name}
                    href={button.url}
                    target={button.target || "_blank"}
                    rel="noopener noreferrer"
                    className={buttonBaseClasses(button)}>
                    {renderButtonContent(button)}
                  </a>
                ))}
              </div>
              <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                {row2Buttons.map((button) => (
                  <a
                    key={button.name}
                    href={button.url}
                    target={button.target || "_blank"}
                    rel="noopener noreferrer"
                    className={buttonBaseClasses(button)}>
                    {renderButtonContent(button)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
