// JavaScript Document
var translations = {
    en: {
		/* nav original */
		archiveYears: "2023 - 2025 ARCHIVE",
        mainHall: "MAIN HALL",
        showroom: "THE SHOWROOM",
        careerCatalog: "CAREER CATALOG",
        inquiryDesk: "INQUIRY DESK",
		
		/* footer original */
		logo: "THE PORTFOLIO",
		explore: "Explore",
		Mainhall: "Main Hall",
		showRoom: "Showroom",
		Careercatalog: "Career Catalog",
		Inquirydesk: "Inquiry Desk",
		education: "Education",
		skills: "Skills",
		connect: "Connect with Me",
		email: "Email",
		located: "Located",
		copyright: "© 2025 Angelita Lupercio. All Rights Reserved.",
		
		/* homepage original */
        mainTitle: "THE PORTFOLIO.",
        subtitle: "A Curated Collection by Angelita Lupercio",
        exhibitTitle: "AN EXHIBITION IN ART DIRECTION",
		exhibitAbout: "Exhibit No. 1 - About Angelita Lupercio",
		paintbrush: "BEHIND THE PAINTBRUSH",
		showcase: "Exhibit No. 2 - A Visual Showcase",
		
		/* gallery page original */
		premier: "PREMIER COLLECTION",
		masterpieces: "MASTERPIECES ON VIEW",
		fullDescription: "This collection includes curated work form all categories including but not limited to promotional to digital/print designs",
		filters: "Filters:",
		fullCollection: "FULL COLLECTION",
		promotional: "PROMOTIONAL",
		infographics: "INFOGRAPHICS",
		branding: "BRANDING",
		digitalPrint: "DIGITAL/PRINT",
		
		
		exhibitCanvas: "Exhibit No. 3 - Behind the Canvas",
		sportsEvent: "Sports Event Poster Design",
		bookCover: "Book Cover Design",
		theatricalEventatricalEvent: "Theatrical Event Poster Design",
		tvSeries: "TV Series Poster Design",
		gradInvite: "Graduation Invitation",
		pieChart: "Pie Chart Infographic",
		electionInfographic: "Election Infographics",
		menuDesign: "Menu Design",
		
		/* career catalog original */
		careerPreview: "Email: luperci4@msu.edu | Phone: (123)456-78-90",
		
		/* work, education, community sections*/
		workExperience: "Work Experience",
		
		/* play Leader */
		playLeader: "Play Leader",
		summer2024: "Summer (June-August) 2024",
		leader1: "Worked at summer day camp as Play Leader for girls & boys, ages 6-8",
		
		/* vitual job */
		virtualJob: "Virtual Job Shadowing",
		summer2020: "Summer (July-August) 2020-2021",
		careerExplore: "Engaged in online career exploration",
		interest: "Completed weekly assignments pertaining to different professions of interest",
		SEL: "Participated in weekly meetings to discuss Social Emotional Learning",
		
		/* youth worker */
		youthWorker: "Youth Worker",
		summer2019: "Summer (July-August) 2019",
		leaderAssistant: "Worked at summer day camp as Play Leader assistant for girls, ages 6-8",
		supervised: "Supervised kids on weekly field trips and daily activities; ensuring safety"
    },
	
    es: {
		/* nav translations */
		archiveYears: "ARCHIVO 2023 - 2025",
        mainHall: "SALA PRINCIPAL",
        showroom: "LA GALERÍA",
        careerCatalog: "CATÁLOGO DE CARRERA",
        inquiryDesk: "MESA DE CONSULTAS",
		
		/* footer translations */
		logo: "EL PORTAFOLIO.",
		explore: "Explorar",
		Mainhall: "Sala Principal",
		showRoom: "La Galería",
		Careercatalog: "Catálogo de Carrera",
		Inquirydesk: "Mesa de Consultas",
		education: "Educación",
		skills: "Habilidades",
		connect: "Conéctate Conmigo",
		email: "Coreo Electrónico",
		located: "Ubicada",
		copyright: "© 2025 Angelita Lupercio. Todos Los Derechos Reservados",
        
		/* homepage translations */
        mainTitle: "EL PORTAFOLIO.",
        subtitle: "Una Colección Curada por Angelita Lupercio",
        exhibitTitle: "UNA EXHIBICIÓN EN DIRECCIÓN DE ARTE",
		exhibitAbout: "Exhibición No. 1 - Acerca de Angelita Lupercio",
		paintbrush: "DETRÁS DEL PINCEL",
		showcase: "Exhibición No. 2 - Una Muestra Visual",
		premier: "COLECCIÓN PRINCIPAL",
		
		/* gallery page translations */
		masterpieces: "OBRAS MAESTRAS EN EXHIBICIÓN",
		fullDescription: "Esta colección incluye trabajos curados de todas las categorías, incluyendo pero no limitado a diseños promocionales y digitales/impresos.",
		filters: "Filtros:",
		fullCollection: "COLECCIÓN COMPLETA",
		promotional: "PROMOCIONAL",
		infographics: "INFOGRAFÍAS",
		branding: "MARCA",
		digitalPrint: "DIGITAL/IMPRESO",
		
		exhibitCanvas: "Exhibición No. 3 - Detrás del Lienzo",
		sportsEvent: "Diseño de Póster para Evento Deportivo",
		bookCover: "Diseño de Portada de Libro",
		theatricalEvent: "Diseño de Póster para Evento Teatral",
		tvSeries: "Diseño de Póster para Serie de TV",
		gradInvite: "Invitación de Graduación",
		pieChart: "Infografía de Gráfico Circular",
		electionInfographic: "Infografías Electorales",
		menuDesign: "Diseño de Menú",
		
		/* career catalog translations */
		careerPreview: "Coreo Electrónico: luperci4@msu.edu | Phone: (123)456-78-90",
		
		/* work, education, community sections */
		workExperience: "Experiencia Laboral",
		
		/* play leader */
		summer2024: "Verano (Junio-Agosto) 2024",
		leader1: "Trabajé en un campamento de día de verano como Play Leader para niñas y niños de 6 a 8 años.",
		
		/* virtual job */
		virtualJob: "Observación Laboral Virtual",
		summer2020: "Veerano (Julio-Agosto) 2020-2021",
		careerExplore: "Participé en la exploración profesional en línea",
		interest: "Completé tareas semanales relacionadas con diferentes profesiones de interés",
		SEL: "Participé en reuniones semanales para discutir el Aprendizaje Socioemocional",
		
		/* youth worker */
		youthWorker: "Trabajadora Juvenil",
		summer2019: "Verano (Julio-Agosto) 2019",
		leaderAssistant: "Trabajé en un campamento de día de verano como asistente de Play Leader para niñas de 6 a 8 años.",
		supervised: "Supervisé a los niños en excursiones semanales y actividades diarias, asegurando su seguridad."
    }
};

// Function to apply the selected language
function applyLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Save selection

    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Function to load the stored language when a page loads
function loadLanguage() {
    const savedLang = localStorage.getItem("selectedLanguage") || "en"; // Default to English
    applyLanguage(savedLang);
}

// Run when page loads
document.addEventListener("DOMContentLoaded", loadLanguage);

// Event Listeners for Language Buttons
document.getElementById("englishBtn").addEventListener("click", () => applyLanguage("en"));
document.getElementById("english-Btn").addEventListener("click", () => applyLanguage("en"));

document.getElementById("spanishBtn").addEventListener("click", () => applyLanguage("es"));
document.getElementById("spanish-Btn").addEventListener("click", () => applyLanguage("es"));

function goBack() {
    window.history.back(); // Takes user to the previous page
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".flex-nav");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});



// modal opening and fade-in/scale-in
document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', () => {
    const modalContainer = button.closest('.gridItem').querySelector('.modal-container');
    modalContainer.classList.add('show');
    const modal = modalContainer.querySelector('.modal');
    // Triggering the scaling and fade-in effect
    setTimeout(() => {
      modal.classList.add('show-modal');
    }, 50); // small delay to allow the transition to trigger

    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', () => {
    const modalContainer = button.closest('.modal-container');
    const modal = modalContainer.querySelector('.modal');
    modal.classList.remove('show-modal');
    modalContainer.classList.remove('show');
    
    // Enable scrolling on the body
    document.body.style.overflow = 'auto';
  });
});

// carousel logic (no changes needed)
document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = carousel.querySelectorAll('.carousel-slide');
  const modal = carousel.closest('.modal'); // get the modal container
  const openBtn = modal.closest('.gridItem').querySelector('.open-modal');
  const prevBtn = modal.querySelector('.prev-slide');
  const nextBtn = modal.querySelector('.next-slide');

  let currentSlide = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('slide-active', index === currentSlide);
    });

    prevBtn.classList.toggle('hidden', currentSlide === 0);
    nextBtn.classList.toggle('hidden', currentSlide === slides.length - 1);
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlides();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlides();
    }
  });

  // Reset to slide 0 every time the modal opens
  openBtn.addEventListener('click', () => {
    currentSlide = 0;
    updateSlides();
  });

  updateSlides(); // initial setup
});

//scroll progress bar


//scroll fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const delay = entry.target.getAttribute('data-delay') || '0s';
    entry.target.style.setProperty('--delay', delay);

    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // 👈 this is key!
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});