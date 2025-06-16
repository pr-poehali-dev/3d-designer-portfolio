import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Cube" size={20} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">
                3D Studio
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Профессиональное 3D моделирование персонажей
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Главная
              </a>
              <a
                href="/portfolio"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Портфолио
              </a>
              <a
                href="/contacts"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-lg mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Send" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="MessageSquare" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Play" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 3D Studio. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
