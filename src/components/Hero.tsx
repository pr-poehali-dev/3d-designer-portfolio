import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          3D Дизайнер
          <span className="block text-3xl md:text-5xl font-normal mt-2 text-purple-200">
            Персонажей
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-100 mb-8 font-light leading-relaxed animate-fade-in delay-200">
          Создаю уникальных персонажей в 3D Max, Blender, Cinema 4D и Maya
        </p>

        {/* Software Icons */}
        <div className="flex justify-center items-center space-x-8 mb-12 animate-fade-in delay-300">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Box" size={24} className="text-white" />
            </div>
            <span className="text-sm text-purple-200">3D Max</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Shapes" size={24} className="text-white" />
            </div>
            <span className="text-sm text-purple-200">Blender</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Cube" size={24} className="text-white" />
            </div>
            <span className="text-sm text-purple-200">Cinema 4D</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Layers" size={24} className="text-white" />
            </div>
            <span className="text-sm text-purple-200">Maya</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Link
            to="/portfolio"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2"
          >
            <Icon name="Eye" size={20} />
            <span>Посмотреть работы</span>
          </Link>
          <Link
            to="/contacts"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <Icon name="MessageCircle" size={20} />
            <span>Связаться</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
