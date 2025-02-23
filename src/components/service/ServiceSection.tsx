import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const services = [
    {
      title: "Custom Website Design",
      description:
        "We specialize in creating visually appealing and functional websites tailored to your brand's identity and goals.",
      image: "/main.webp", // Ersetze mit deinem Bildpfad
    },
    {
      title: "Application Development",
      description:
        "Our team develops robust applications that enhance user engagement and streamline business operations across various platforms.",
      image: "/mainOne.webp", // Ersetze mit deinem Bildpfad
    },
    {
      title: "E-commerce Solutions",
      description:
        "We offer comprehensive e-commerce solutions, ensuring secure transactions and a seamless shopping experience for your customers.",
      image: "/mainTwo.webp", // Ersetze mit deinem Bildpfad
    },
    {
      title: "Responsive Design",
      description:
        "We ensure your website looks great and functions perfectly on all devices, providing an optimal user experience everywhere.",
      image: "/mainThree.webp", // Ersetze mit deinem Bildpfad
    },
  ];
  
  const ServicesSection = () => {
    const { isDesktop } = useSelector((state: RootState) => state.mode);
    return (
      <section className={` py-12 bg-white text-gray-900 ${isDesktop ? "md:px-12" : ""}`}>
        <div className={`grid  gap-3 ${isDesktop ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1"}`}>
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  