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
      title: "Киберпанк Воин",
      software: "3dmax",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=600&fit=crop",
      description: "Боевой киборг с неоновыми имплантами и броней",
    },
    {
      id: 2,
      title: "Космический Морпех",
      software: "blender",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=600&fit=crop",
      description: "Элитный солдат межгалактических войск",
    },
    {
      id: 3,
      title: "Инопланетный Хищник",
      software: "cinema4d",
      image:
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=600&fit=crop",
      description: "Зловещее существо с далекой планеты",
    },
    {
      id: 4,
      title: "Боевой Андроид",
      software: "maya",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=600&fit=crop",
      description: "Высокотехнологичный робот-защитник",
    },
    {
      id: 5,
      title: "Биомеханический Мутант",
      software: "3dmax",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=600&fit=crop",
      description: "Гибрид человека и машины из будущего",
    },
    {
      id: 6,
      title: "Квантовый Маг",
      software: "blender",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=600&fit=crop",
      description: "Мистический персонаж с энергетическими способностями",
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
