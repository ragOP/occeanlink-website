import { useState, useEffect } from "react";
import {
  MenuIcon,
  XIcon,
  MapPinIcon,
  PhoneCallIcon,
  MailIcon,
  ClockIcon,
  TruckIcon,
  PlaneIcon,
  ShipIcon,
  PackageIcon,
  WarehouseIcon,
  SettingsIcon,
  GlobeIcon,
  ArrowUpIcon,
} from "lucide-react";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = [
        "home",
        "about",
        "services",
        "network",
        "companies",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Global Network", path: "#network" },
    { name: "Contact", path: "#contact" },
  ];

  const scrollToSection = (href) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt=""
                className="w-20 h-20 object-contain bg-center rounded-full"
              />
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => {
              const sectionId = item.path.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
          >
            Request a Rate
          </button>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navigationItems.map((item) => {
            const sectionId = item.path.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-gray-100 text-orange-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                }`}
              >
                {item.name}
              </button>
            );
          })}
          <button
            onClick={() => scrollToSection("#contact")}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
          >
            Request a Rate
          </button>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Integrated</span>
                <span className="block text-orange-500">
                  Supply Chain Logistics Partner
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Seamlessly connecting your business to the world with our
                comprehensive logistics solutions. Global reach, simplified
                processes, trusted partnership.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-6 lg:max-w-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">45+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">180+</div>
                  <div className="text-sm text-gray-500">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">16+</div>
                  <div className="text-sm text-gray-500">Countries</div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Get a Free Quote
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white border-orange-500 hover:bg-gray-50 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern logistics and cargo operations"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20"></div>
      </div>
    </div>
  );
};

// About Us Component
const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
          About Ocean Link
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Building Logistics Excellence Since 1978
        </p>
        <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
          From transportation logistics to integrated supply chain solutions
        </p>
      </div>

      <div className="mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Legacy
            </h3>
            <p className="text-gray-600 mb-6">
              Ocean Link was conceptualized in 1978 by Mr. Pahlad Singh,
              evolving from a transportation logistics firm to a fast-growing
              integrated supply chain logistics enterprise. What started as a
              vision has transformed into a comprehensive logistics powerhouse
              serving clients across the globe.
            </p>
            <p className="text-gray-600">
              Our journey of over four decades reflects our commitment to
              innovation, reliability, and customer satisfaction in the
              ever-evolving logistics industry.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Leadership Excellence
            </h3>
            <p className="text-gray-600 mb-6">
              Under the dynamic leadership of Chairman & Managing Director Mr.
              Sahil Sehrawat, Ocean Link is run by a team of dedicated and
              highly experienced professionals. Our leadership combines decades
              of industry experience with fresh perspectives on modern logistics
              challenges.
            </p>
            <p className="text-gray-600">
              This blend of experience and innovation drives our mission to
              simplify global logistics for businesses of all sizes.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl font-bold text-orange-500">45+</div>
              <div className="mt-2 text-sm font-medium text-gray-500">
                Vehicles Fleet
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl font-bold text-orange-500">180+</div>
              <div className="mt-2 text-sm font-medium text-gray-500">
                Team Members
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl font-bold text-orange-500">45+</div>
              <div className="mt-2 text-sm font-medium text-gray-500">
                Years Experience
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="text-4xl font-bold text-orange-500">100%</div>
              <div className="mt-2 text-sm font-medium text-gray-500">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: PlaneIcon,
      title: "Air Freight Forwarding",
      description:
        "Comprehensive air freight services for fast, reliable global shipping solutions.",
    },
    {
      icon: ShipIcon,
      title: "Ocean Freight Forwarding",
      description:
        "Reliable and efficient ocean freight services for cost-effective bulk shipping.",
    },
    {
      icon: SettingsIcon,
      title: "Custom Brokerage",
      description:
        "Expert handling of all customs clearance procedures and documentation.",
    },
    {
      icon: PackageIcon,
      title: "Project Management",
      description:
        "Expert management services for complex logistics projects and operations.",
    },
    {
      icon: TruckIcon,
      title: "Road Transportation",
      description:
        "Wide range of road transportation options for domestic and regional delivery.",
    },
    {
      icon: WarehouseIcon,
      title: "Warehousing",
      description:
        "Secure and flexible warehousing solutions for inventory management.",
    },
    {
      icon: PackageIcon,
      title: "Courier Services",
      description:
        "Fast and dependable courier services for urgent deliveries.",
    },
    {
      icon: PackageIcon,
      title: "Perishable Cargo",
      description:
        "Specialized transportation solutions for temperature-sensitive goods.",
    },
    {
      icon: SettingsIcon,
      title: "Exhibition Services",
      description:
        "Specialized logistics for exhibitions, trade shows, and events.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
          Our Global Services
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Comprehensive Logistics Solutions
        </p>
        <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
          From air and sea freight to specialized project management, we deliver
          end-to-end logistics solutions
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Global Network Component
const GlobalNetwork = () => {
  const countries = [
    "Australia",
    "China",
    "Germany",
    "Hong Kong",
    "Indonesia",
    "Italy",
    "Japan",
    "Korea",
    "Malaysia",
    "Netherlands",
    "New Zealand",
    "Singapore",
    "Spain",
    "Thailand",
    "Turkey",
    "Vietnam",
  ];

  const indiaLocations = [
    "Delhi",
    "Dadri",
    "Mumbai",
    "Khatuwas",
    "Mundra",
    "Pipavav",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
          Our Worldwide Network
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Global Reach, Local Expertise
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          With operations spanning across continents, we bring the world closer
          to your business
        </p>
      </div>

      <div className="mt-16">
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GlobeIcon className="w-8 h-8 text-orange-500 mr-3" />
                International Network
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm text-center"
                  >
                    <span className="text-gray-700 font-medium">{country}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPinIcon className="w-8 h-8 text-orange-500 mr-3" />
                India Operations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {indiaLocations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm text-center"
                  >
                    <span className="text-gray-700 font-medium">
                      {location}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-900 rounded-lg text-white">
                <h4 className="font-semibold mb-2">Corporate Headquarters</h4>
                <p className="text-sm">
                  4C Asharoop Apartment, 1/135 Vikas Nagar, Kursi Road, Lucknow,
                  Uttar Pradesh, India. 226022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Group Companies Component
const GroupCompanies = () => {
  const companies = [
    "Ocean Link Worldwide Freight Solutions Pvt. Ltd.",
    "Ocean Link Cargo Planners Pvt. Ltd.",
    "Arrow Transport Service",
    "A S Transport Service",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
          Our Group Companies
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Diverse Portfolio, Unified Excellence
        </p>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="text-blue-900 font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {company}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Ready to streamline your logistics? Contact us for a
                  customized solution that meets your business needs.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="flex-shrink-0 h-6 w-6 text-orange-500 mt-1" />
                    <div className="ml-3">
                      <p className="text-base text-gray-900 font-medium">
                        Corporate Office
                      </p>
                      <p className="text-gray-500">
                        4C Asharoop Apartment
                        <br />
                        1/135 Vikas Nagar Kursi Road,
                        <br />
                        Lucknow, Uttar Pradesh 226022 India.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneCallIcon className="flex-shrink-0 h-6 w-6 text-orange-500" />
                    <p className="ml-3 text-base text-gray-500">
                      +91 – 7982306402, 8285832903, 7069540733, 7565944844 – 100
                      Lines
                    </p>
                  </div>
                  <div className="flex items-center">
                    <MailIcon className="flex-shrink-0 h-6 w-6 text-orange-500" />
                    <p className="ml-3 text-base text-gray-500">
                      info@oceanlink.com
                    </p>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="flex-shrink-0 h-6 w-6 text-orange-500" />
                    <p className="ml-3 text-base text-gray-500">
                      24/7 Global Operations
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email *
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md"
                        placeholder="+91"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message *
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border border-gray-300 rounded-md"
                        placeholder="Tell us about your logistics requirements..."
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                    >
                      Request a Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">Ocean</div>
              <div className="ml-2 text-sm text-gray-300">Link</div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner in global logistics since 1978. Connecting
              businesses worldwide with reliable, efficient supply chain
              solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#network"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Global Network
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>A-75, Road No: 4, Street No: 6</p>
              <p>1/135 Vikas Nagar,Kursi Road</p>
              <p>Lucknow, Uttar Pradesh, India. 226022</p>
              <p>Phone: +91 – 7982306402, 8285832903, 7069540733, 7565944844</p>
              <p>Email: info@oceanlink.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              © 2025 Ocean Link of Companies - All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};


const JDMLogisticsWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section id="home" className="pt-20">
          <Hero />
        </section>

        <section id="about" className="py-16 bg-gray-50">
          <AboutUs />
        </section>

        <section id="services" className="py-16">
          <Services />
        </section>

        <section id="network" className="py-16 bg-gray-50">
          <GlobalNetwork />
        </section>

        <section id="companies" className="py-16">
          <GroupCompanies />
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JDMLogisticsWebsite;
