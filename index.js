 // Mechanical Tools data (from equipment list)
// Mechanical Tools data (from equipment list)
const mechanicalTools = [
  {
    title: "Digital Torque Wrench & Socket Set (2 Nos)",
    description: "High-precision torque wrenches with socket sets for accurate bolt tightening in solar panel installations and structural work.",
    image: "assets/images/equipment/Torque Wrench.png"
  },
  {
    title: "Power Tool / Nut Runner (1 No)",
    description: "Industrial-grade power tool for efficient fastening operations in solar mounting systems.",
    image: "assets/images/equipment/Nut Runner.png"
  },
  {
    title: "Screw Driver / Spanner Set (7 Nos)",
    description: "Complete set of screwdrivers and spanners for various assembly and maintenance tasks.",
    image: "assets/images/equipment/Screwdriver Set.png"
  },
  {
    title: "Adjustable Wrench / Ratchet / Socket Set (4 Nos)",
    description: "Versatile adjustable wrenches, ratchets and socket sets for multiple bolt sizes and applications.",
    image: "assets/images/equipment/Wrench Set.png"
  },
  {
    title: "Drilling Machine (2 Nos)",
    description: "Professional drilling machines for precise hole making in concrete, steel and other materials.",
    image: "assets/images/equipment/Drilling Machine.png"
  },
  {
    title: "Welding Machine (2 Nos)",
    description: "Advanced welding equipment for structural steel work, fabrication and repairs.",
    image: "assets/images/equipment/Welding Machine.png"
  },
  {
    title: "Grinding Machine (1 No)",
    description: "Heavy-duty grinding machine for surface finishing, cutting and material preparation.",
    image: "assets/images/equipment/Grinding Machine.png"
  },
  {
    title: "Torque Wrench Calibration Tool (1 No)",
    description: "Professional calibration equipment ensuring accuracy and reliability of torque wrenches.",
    image: "assets/images/equipment/Calibration Tool.png"
  }
];

// Precision Measuring Instruments data (from equipment list)
const precisionInstruments = [
  {
    title: "Digital Level Meter / Inclinometer (4 Nos)",
    description: "Precision digital inclinometers for accurate angle measurements in solar panel alignment and leveling.",
    image: "assets/images/equipment/Digital Level.png"
  },
  {
    title: "Spirit Level Meter & Plumb Line (6 Nos)",
    description: "Professional leveling instruments ensuring perfect horizontal and vertical alignment in construction.",
    image: "assets/images/equipment/Spirit Level.png"
  },
  {
    title: "Slump Cone Apparatus (3 Nos)",
    description: "Testing equipment for measuring concrete workability and consistency on construction sites.",
    image: "assets/images/equipment/Slump Cone.png"
  },
  {
    title: "Cube Mould (10 Nos)",
    description: "Standard cube moulds for concrete testing and quality control in civil construction projects.",
    image: "assets/images/equipment/Cube Mould.png"
  },
  {
    title: "Water Level Tube (5 Nos)",
    description: "Simple yet effective water level tubes for establishing level reference points across distances.",
    image: "assets/images/equipment/Water Level.png"
  },
  {
    title: "Template for MMS Post Installation (350 Nos)",
    description: "Precision templates for accurate layout and installation planning of solar MMS posts.",
    image: "assets/images/equipment/construction template.png"
  },
  {
    title: "Measuring Tape - Steel 5m (5 Nos)",
    description: "Durable 5-meter steel measuring tapes for short-range measurements and layout work.",
    image: "assets/images/equipment/steel measuring tape.png"
  },
  {
    title: "Measuring Tape - Steel 30m (3 Nos)",
    description: "Heavy-duty 30-meter steel measuring tapes for long-range distance measurements.",
    image: "assets/images/equipment/steel measuring tape.png"
  },
  {
    title: "Weighing Machine - Up to 30 Kg (2 Nos)",
    description: "Precision weighing machines for material measurement and quality control.",
    image: "assets/images/equipment/Weighing Machine.png"
  },
  {
    title: "Cube Testing Machine (1 No)",
    description: "Compression testing machine for evaluating concrete cube strength and quality.",
    image: "assets/images/equipment/Cube Testing Machine.png"
  }
];
// Project data
const projects = [
  {
  "title": "Land Survey Pile Point Marking",
  "description": "Accurate land surveying and pile point marking for solar installations, ensuring optimal panel placement and maximum energy efficiency.",
  "image": "assets/images/work/solar-survey.jpg"
}
,
 {
  "title": "Piling Work",
  "description": "Installation of a solar panel foundation system, including the main control room and inverter control room for efficient energy management.",
  "image": "assets/images/work/solar-foundation-piling.jpg"
},
  {
  "title": "Solar Panel Erection",
  "description": "Erection and installation of solar panel mounting structures on the prepared foundation, ensuring precise alignment and structural stability.",
  "image": "assets/images/work/solar-panel-erection.jpg"
}
,
 {
  "title": "AC, DC & Earthing Work",
  "description": "Installation of electrical equipment, erection of structures, cable laying, termination, and earthing.", 
  "image": "assets/images/work/ac-dc-earthing.png"
}
];

// Projects Slider
let currentSlide = 0;

function initSlider() {
  const slider = document.getElementById('slider');
  slider.innerHTML = projects.map((project, index) => `
    <div class="slide ${index === 0 ? 'active' : ''}">
      <img src="${project.image}" alt="${project.title}" class="w-full h-96 object-cover rounded-lg mb-4">
      <h3 class="text-2xl font-bold mb-2 text-gray-800">${project.title}</h3>
      <p class="text-gray-600">${project.description}</p>
    </div>
  `).join('');
  updateSlideCounter();
}

function showSlide(n) {
  const slides = document.querySelectorAll('#slider .slide');
  if (n >= slides.length) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  updateSlideCounter();
}

function updateSlideCounter() {
  document.getElementById('slideCounter').textContent = `${currentSlide + 1} / ${projects.length}`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

// Auto advance slides
setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 5000);

// Mechanical Tools Slider
let currentMechanicalSlide = 0;

function initMechanicalSlider() {
  const slider = document.getElementById('mechanicalSlider');
  slider.innerHTML = mechanicalTools.map((tool, index) => `
    <div class="slide ${index === 0 ? 'active' : ''}">
      <img src="${tool.image}" alt="${tool.title}" class="w-full h-96 object-cover rounded-lg mb-4">
      <h3 class="text-2xl font-bold mb-2 text-gray-800">${tool.title}</h3>
      <p class="text-gray-600">${tool.description}</p>
    </div>
  `).join('');
  updateMechanicalSlideCounter();
}

function showMechanicalSlide(n) {
  const slides = document.querySelectorAll('#mechanicalSlider .slide');
  if (n >= slides.length) currentMechanicalSlide = 0;
  if (n < 0) currentMechanicalSlide = slides.length - 1;

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentMechanicalSlide) {
      slide.classList.add('active');
    }
  });
  updateMechanicalSlideCounter();
}

function updateMechanicalSlideCounter() {
  document.getElementById('mechanicalSlideCounter').textContent = `${currentMechanicalSlide + 1} / ${mechanicalTools.length}`;
}

document.getElementById('mechanicalPrevBtn').addEventListener('click', () => {
  currentMechanicalSlide--;
  showMechanicalSlide(currentMechanicalSlide);
});

document.getElementById('mechanicalNextBtn').addEventListener('click', () => {
  currentMechanicalSlide++;
  showMechanicalSlide(currentMechanicalSlide);
});

// Precision Instruments Slider
let currentInstrumentsSlide = 0;

function initInstrumentsSlider() {
  const slider = document.getElementById('instrumentsSlider');
  slider.innerHTML = precisionInstruments.map((instrument, index) => `
    <div class="slide ${index === 0 ? 'active' : ''}">
      <img src="${instrument.image}" alt="${instrument.title}" class="w-full h-96 object-cover rounded-lg mb-4">
      <h3 class="text-2xl font-bold mb-2 text-gray-800">${instrument.title}</h3>
      <p class="text-gray-600">${instrument.description}</p>
    </div>
  `).join('');
  updateInstrumentsSlideCounter();
}

function showInstrumentsSlide(n) {
  const slides = document.querySelectorAll('#instrumentsSlider .slide');
  if (n >= slides.length) currentInstrumentsSlide = 0;
  if (n < 0) currentInstrumentsSlide = slides.length - 1;

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentInstrumentsSlide) {
      slide.classList.add('active');
    }
  });
  updateInstrumentsSlideCounter();
}

function updateInstrumentsSlideCounter() {
  document.getElementById('instrumentsSlideCounter').textContent = `${currentInstrumentsSlide + 1} / ${precisionInstruments.length}`;
}

document.getElementById('instrumentsPrevBtn').addEventListener('click', () => {
  currentInstrumentsSlide--;
  showInstrumentsSlide(currentInstrumentsSlide);
});

document.getElementById('instrumentsNextBtn').addEventListener('click', () => {
  currentInstrumentsSlide++;
  showInstrumentsSlide(currentInstrumentsSlide);
});

// Mobile menu
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.remove('hidden');
});

document.getElementById('closeMobileMenu').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('hidden');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('mobileMenu').classList.add('hidden');
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function scrollToWork() {
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
}

// Initialize all sliders
initSlider();
initMechanicalSlider();
initInstrumentsSlider();

// Work Orders data
const workOrders = [
  {
    company: "Srectro Power Service",
    location: "Nagar Koil",
    work: "MMS DC Work",
    site: "Pioneer Site, Manoor",
    value: "₹8,00,000",
    color: "purple",
    icon: "fa-solar-panel"
  },
  {
    company: "NSK Infra",
    location: "Manaparai",
    work: "MMS Module Installation Work",
    site: "Sivagangai Everrenew Site",
    value: "₹15,00,000",
    color: "blue",
    icon: "fa-tools"
  },
  {
    company: "Karthika Infra",
    location: "Kovilpatti",
    work: "MMS DC Work",
    site: "GRT Pasuvanthanai",
    value: "₹13,00,000",
    color: "green",
    icon: "fa-solar-panel"
  },
  {
    company: "Sri Latha Construction",
    location: "Hyderabad",
    work: "MMS DC Work",
    site: "Warri Maniachi",
    value: "₹20,00,000",
    color: "orange",
    icon: "fa-building"
  },
  {
    company: "SR Group",
    location: "Kadappa",
    work: "Solar Installation",
    site: "Multiple Sites",
    value: "Contact for Details",
    color: "pink",
    icon: "fa-industry"
  },
  {
    company: "Prinul Infra Solution",
    location: "Kadappa",
    work: "Infrastructure Development",
    site: "Various Locations",
    value: "Contact for Details",
    color: "yellow",
    icon: "fa-hard-hat"
  },
  {
    company: "Faraday Electrical Pvt. Ltd",
    location: "Kerala",
    work: "MMS and ACDC Work",
    site: "Ayyana Site & Adani Site",
    value: "₹20,00,000",
    multiSite: true,
    sites: [
      { name: "Ayyana Site", value: "₹6,00,000" },
      { name: "Adani Site", value: "₹14,00,000" }
    ],
    color: "cyan",
    icon: "fa-bolt"
  },
  {
    company: "Sendur Velan (Contractor)",
    location: "Karur",
    work: "Civil & Solar Works",
    site: "Multiple Projects",
    value: "Contact for Details",
    color: "violet",
    icon: "fa-user-tie"
  },
  {
    company: "Giri Raj Engineering",
    location: "Neyveli",
    work: "MMS and DC Work",
    site: "Neyveli Solar Park",
    value: "₹10,00,000",
    color: "emerald",
    icon: "fa-cogs"
  }
];

const colorClasses = {
  purple: { bg: "from-purple-50 to-purple-100", border: "border-purple-600", text: "text-purple-600", badge: "bg-purple-600" },
  blue: { bg: "from-blue-50 to-blue-100", border: "border-blue-600", text: "text-blue-600", badge: "bg-blue-600" },
  green: { bg: "from-green-50 to-green-100", border: "border-green-600", text: "text-green-600", badge: "bg-green-600" },
  orange: { bg: "from-orange-50 to-orange-100", border: "border-orange-600", text: "text-orange-600", badge: "bg-orange-600" },
  pink: { bg: "from-pink-50 to-pink-100", border: "border-pink-600", text: "text-pink-600", badge: "bg-pink-600" },
  yellow: { bg: "from-yellow-50 to-yellow-100", border: "border-yellow-600", text: "text-yellow-600", badge: "bg-yellow-600" },
  cyan: { bg: "from-cyan-50 to-cyan-100", border: "border-cyan-600", text: "text-cyan-600", badge: "bg-cyan-600" },
  violet: { bg: "from-violet-50 to-violet-100", border: "border-violet-600", text: "text-violet-600", badge: "bg-violet-600" },
  emerald: { bg: "from-emerald-50 to-emerald-100", border: "border-emerald-600", text: "text-emerald-600", badge: "bg-emerald-600" }
};

// Work Orders Slider
let currentWorkOrdersSlide = 0;

function initWorkOrdersSlider() {
  const slider = document.getElementById('workOrdersSlider');
  slider.innerHTML = workOrders.map((order, index) => {
    const colors = colorClasses[order.color];
    
    if (order.multiSite) {
      return `
        <div class="slide ${index === 0 ? 'active' : ''}">
          <div class="bg-gradient-to-br ${colors.bg} rounded-2xl p-6 md:p-8 border-l-4 ${colors.border} shadow-xl min-h-[400px] flex flex-col">
            <div class="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-3">
                  <i class="fas ${order.icon} text-3xl md:text-4xl ${colors.text}"></i>
                  <h3 class="text-2xl md:text-3xl font-bold text-gray-800">${order.company}</h3>
                </div>
                <div class="flex items-center gap-2 ${colors.text} text-base md:text-lg">
                  <i class="fas fa-map-marker-alt"></i>
                  <span class="font-semibold">${order.location}</span>
                </div>
              </div>
            </div>
            
            <div class="flex-1 space-y-4 text-gray-700 mb-6">
              <div class="flex items-start gap-3">
                <i class="fas fa-tools ${colors.text} text-xl mt-1"></i>
                <div>
                  <p class="font-semibold text-gray-800">Work Type:</p>
                  <p class="text-base md:text-lg">${order.work}</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <i class="fas fa-building ${colors.text} text-xl mt-1"></i>
                <div>
                  <p class="font-semibold text-gray-800">Sites:</p>
                  <p class="text-base md:text-lg">${order.site}</p>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4 mt-4">
                ${order.sites.map(site => `
                  <div class="bg-white p-4 rounded-xl shadow-md">
                    <p class="font-semibold ${colors.text} mb-2">${site.name}</p>
                    <p class="text-xl md:text-2xl font-bold ${colors.text}">${site.value}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="mt-auto pt-4 border-t border-gray-300">
              <div class="flex items-center justify-between">
                <span class="text-gray-700 font-semibold text-base md:text-lg">Total Project Value:</span>
                <span class="${colors.badge} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-xl md:text-2xl shadow-lg">
                  ${order.value}
                </span>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    
    return `
      <div class="slide ${index === 0 ? 'active' : ''}">
        <div class="bg-gradient-to-br ${colors.bg} rounded-2xl p-6 md:p-8 border-l-4 ${colors.border} shadow-xl min-h-[400px] flex flex-col">
          <div class="flex items-start justify-between mb-6 flex-wrap gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                <i class="fas ${order.icon} text-3xl md:text-4xl ${colors.text}"></i>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-800">${order.company}</h3>
              </div>
              <div class="flex items-center gap-2 ${colors.text} text-base md:text-lg">
                <i class="fas fa-map-marker-alt"></i>
                <span class="font-semibold">${order.location}</span>
              </div>
            </div>
            ${order.value.includes('₹') ? `
              <div class="${colors.badge} text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold text-xl md:text-2xl shadow-lg">
                ${order.value}
              </div>
            ` : ''}
          </div>
          
          <div class="flex-1 space-y-4 text-gray-700">
            <div class="flex items-start gap-3">
              <i class="fas fa-tools ${colors.text} text-xl mt-1"></i>
              <div>
                <p class="font-semibold text-gray-800">Work Type:</p>
                <p class="text-base md:text-lg">${order.work}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <i class="fas fa-building ${colors.text} text-xl mt-1"></i>
              <div>
                <p class="font-semibold text-gray-800">Site Location:</p>
                <p class="text-base md:text-lg">${order.site}</p>
              </div>
            </div>

            ${!order.value.includes('₹') ? `
              <div class="mt-4 p-4 bg-white rounded-xl shadow-md">
                <p class="${colors.text} font-semibold text-lg">${order.value}</p>
              </div>
            ` : ''}
          </div>

          <div class="mt-6 flex items-center gap-2 text-sm text-gray-600">
            <i class="fas fa-check-circle ${colors.text}"></i>
            <span>Successfully Completed Project</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  updateWorkOrdersSlideCounter();
}

function showWorkOrdersSlide(n) {
  const slides = document.querySelectorAll('#workOrdersSlider .slide');
  if (n >= slides.length) currentWorkOrdersSlide = 0;
  if (n < 0) currentWorkOrdersSlide = slides.length - 1;

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentWorkOrdersSlide) {
      slide.classList.add('active');
    }
  });
  updateWorkOrdersSlideCounter();
}

function updateWorkOrdersSlideCounter() {
  document.getElementById('workOrdersSlideCounter').textContent = `${currentWorkOrdersSlide + 1} / ${workOrders.length}`;
}

document.getElementById('workOrdersPrevBtn').addEventListener('click', () => {
  currentWorkOrdersSlide--;
  showWorkOrdersSlide(currentWorkOrdersSlide);
});

document.getElementById('workOrdersNextBtn').addEventListener('click', () => {
  currentWorkOrdersSlide++;
  showWorkOrdersSlide(currentWorkOrdersSlide);
});

// Auto advance work orders slides
setInterval(() => {
  currentWorkOrdersSlide++;
  showWorkOrdersSlide(currentWorkOrdersSlide);
}, 6000);

// Initialize work orders slider - Add this to your initialization
initWorkOrdersSlider();