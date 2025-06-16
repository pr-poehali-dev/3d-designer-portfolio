import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Все работы", icon: "Grid3X3" },
    { id: "3dmax", label: "3D Max", icon: "Box" },
    { id: "blender", label: "Blender", icon: "Shapes" },
    { id: "cinema4d", label: "Cinema 4D", icon: "Cube" },
    { id: "maya", label: "Maya", icon: "Layers" },
  ];

  const projects = [
    {
      id: 1,
      title: "Фантастический воин",
      software: "3dmax",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      description: "Детализированный персонаж в стиле sci-fi",
    },
    {
      id: 2,
      title: "Мифическое существо",
      software: "blender",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=600&fit=crop",
      description: "Создание в Blender с продвинутыми материалами",
    },
    {
      id: 3,
      title: "Робот-андроид",
      software: "cinema4d",
      image:
        "https://images.unsplash.com/photo-1546776230-bb986bc67324?w=500&h=600&fit=crop",
      description: "Высокодетализированный робот в Cinema 4D",
    },
    {
      id: 4,
      title: "Средневековый рыцарь",
      software: "maya",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      description: "Классический персонаж, созданный в Maya",
    },
    {
      id: 5,
      title: "Космический пилот",
      software: "3dmax",
      image:
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=500&h=600&fit=crop",
      description: "Футуристический персонаж в 3D Max",
    },
    {
      id: 6,
      title: "Мистический маг",
      software: "blender",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      description: "Магический персонаж с эффектами в Blender",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.software === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-4">
            Портфолио
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Коллекция моих работ по 3D моделированию персонажей в различных
            программах
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                }`}
              >
                <Icon name={filter.icon as any} size={18} />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
              >
                <div className="aspect-w-4 aspect-h-5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-xl text-gray-900">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-purple-600">
                      <Icon
                        name={
                          filters.find((f) => f.id === project.software)
                            ?.icon as any
                        }
                        size={16}
                      />
                      <span className="text-sm font-medium">
                        {filters.find((f) => f.id === project.software)?.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Icon name="ZoomIn" size={16} />
                    <span>Подробнее</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
