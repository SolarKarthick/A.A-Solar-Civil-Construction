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
    title: "Residential Villa Construction",
    description: "Modern 3BHK villa with contemporary design and sustainable materials",
    image: "assets/images/work/first.jpg"
  },
  {
    title: "Solar Panel Installation",
    description: "5kW solar system installation for commercial building",
    image: "assets/images/work/second.jpg"
  },
  {
    title: "Commercial Complex",
    description: "Multi-story commercial building with modern amenities",
    image: "assets/images/work/third.jpg"
  },
  {
    title: "Industrial Warehouse",
    description: "Large-scale warehouse construction with steel structure",
    image: "assets/images/work/four.jpg"
  },
  {
    title: "Residential Renovation",
    description: "Complete home renovation with modern interiors",
    image: "assets/images/work/five.jpg"
  },
  {
    title: "Solar Farm Project",
    description: "Large-scale solar farm installation for renewable energy",
    image: "assets/images/work/six.jpg"
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