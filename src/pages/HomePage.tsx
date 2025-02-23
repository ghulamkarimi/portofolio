
import Header from "../components/header/Header";
import AboutSection from "../components/about/AboutSection";
import ServicesSection from "../components/service/ServiceSection";
import ProjectsSection from "../components/service/ProjectSection";
import TechStackProcess from "../components/service/TechStackProcess";

const HomePage = () => {
    return (
        <div>
          <div>
              <Header />
            </div>

            <AboutSection />

            <ServicesSection />

            <ProjectsSection />

            <TechStackProcess />
            
        </div>
    );
}

export default HomePage;
