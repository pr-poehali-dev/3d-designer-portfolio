import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/username",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Быстрое общение и обсуждение проектов",
    },
    {
      name: "Discord",
      icon: "MessageSquare",
      url: "https://discord.gg/username",
      color: "bg-indigo-500 hover:bg-indigo-600",
      description: "Голосовые звонки и экранные трансляции",
    },
    {
      name: "YouTube",
      icon: "Play",
      url: "https://youtube.com/@username",
      color: "bg-red-500 hover:bg-red-600",
      description: "Туториалы и процесс создания персонажей",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-4">
            Контакты
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения проектов или просто пообщаться о 3D
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Написать мне
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Расскажите о вашем проекте..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Icon name="Send" size={20} />
                  <span>Отправить сообщение</span>
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Социальные сети
                  </h2>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <div
                        className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center transition-colors duration-300`}
                      >
                        <Icon
                          name={social.icon as any}
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {social.description}
                        </p>
                      </div>
                      <Icon
                        name="ExternalLink"
                        size={20}
                        className="text-gray-400 group-hover:text-purple-600 transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Готов к сотрудничеству!
                </h3>
                <p className="text-purple-100 mb-6">
                  Специализируюсь на создании уникальных 3D персонажей для игр,
                  фильмов и рекламы. Работаю с любыми техническими требованиями
                  и стилями.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">Отвечаю в течение 2 часов</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} />
                    <span className="text-sm">5+ лет опыта</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
