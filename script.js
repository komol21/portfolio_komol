/* ===================================================================
   PORTFOLIO DATA — Komol Krishna Paul
   Data-driven architecture: easily add/remove projects or case studies
   =================================================================== */
const projectsData = [
  {
    id: "edumanage",
    label: "Full Stack · Analytics Dashboard",
    name: "EduManage",
    period: "2024 – 2025",
    tagline: "Analytics-Driven Education Management System",
    image: "assets/images/project-edumanage.jpg",
    tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js", "Analytics", "Chart.js"],
    description:
      "EduManage is an analytics-driven education management system designed to support course management, academic performance tracking, and real-time reporting. It includes specialized database schemas and tracking modules for monitoring user engagement metrics and performance KPIs.",
    liveUrl: "https://educationmanage.netlify.app",
    researchUrl: null,
    caseStudy: {
      problem:
        "Educational institutions struggle to consolidate course operations, student performance metrics, and faculty management into a single actionable interface, leading to fragmented record keeping and delayed academic intervention.",
      whatIDid:
        "Architected an end-to-end full-stack platform using the MERN stack. Designed robust database schemas for tracking engagement and GPA metrics. Built real-time administrative dashboards featuring grade distribution charts, enrollment trends, and automated KPI generation.",
      whatCameOfIt:
        "Delivered a live, fully deployed system (educationmanage.netlify.app) that provides educators and administrators with real-time academic intelligence, reducing report generation latency and streamlining course administration workflows."
    },
    buttons: [
      { text: "View Live Project", icon: "fa-solid fa-arrow-up-right-from-square", type: "primary", action: "link", url: "https://educationmanage.netlify.app" },
      { text: "View Case Study", icon: "fa-solid fa-book-open", type: "secondary", action: "modal" }
    ]
  },
  {
    id: "diabetes-ml",
    label: "Machine Learning · Healthcare Research",
    name: "Type-2 Diabetes Predictive Modeling & Clinical Data Analysis",
    period: "2025 – 2026",
    tagline: "ML Benchmarking, Feature Ablation & Fairness Analysis",
    image: "assets/images/project-diabetes.jpg",
    tech: ["Python", "Scikit-learn", "LightGBM", "Pandas", "NumPy", "Statistical Testing"],
    description:
      "A clinical machine learning research pipeline for Type-2 Diabetes Mellitus risk prediction in Bangladeshi demographics. Features comprehensive data preprocessing, outlier removal, missing value imputation, feature ablation studies, and demographic fairness evaluation.",
    liveUrl: null,
    researchUrl: "#publications",
    caseStudy: {
      problem:
        "Clinical diagnostic models often experience performance degradation and demographic disparity when deployed on regional datasets lacking standardized benchmarks and fairness audits.",
      whatIDid:
        "Constructed an end-to-end Python ML pipeline using Scikit-learn and LightGBM. Executed stringent clinical data cleaning, outlier imputation, and engineered high-impact diagnostic features. Performed systematic feature ablation studies to identify critical biomarkers and audited model fairness across demographic subgroups.",
      whatCameOfIt:
        "Established state-of-the-art predictive benchmarks for Bangladeshi clinical cohorts with validated fairness constraints. Research findings accepted and presented at the international conference ICEFronT 2026 (May 2026)."
    },
    buttons: [
      { text: "View Publication", icon: "fa-solid fa-scroll", type: "primary", action: "scroll", target: "#publications" },
      { text: "View Case Study", icon: "fa-solid fa-book-open", type: "secondary", action: "modal" }
    ]
  },
  {
    id: "riverine-waste",
    label: "Computer Vision · Environmental AI",
    name: "Riverine Waste Object Analytics Framework (YOLOv6m-CW)",
    period: "2025 – 2026",
    tagline: "Water-Augmented Spatial Attention Object Detection",
    image: "assets/images/project-riverine.jpg",
    tech: ["Python", "YOLO (YOLOv6m)", "OpenCV", "PyTorch", "NumPy", "Data Augmentation"],
    description:
      "A deep learning computer vision framework engineered to analyze and quantify riverine waste floating in complex aquatic environments. Implements custom water-augmented spatial attention mechanisms and dataset processing pipelines.",
    liveUrl: null,
    researchUrl: "#publications",
    caseStudy: {
      problem:
        "River pollution monitoring is impeded by reflections, turbid water backgrounds, variable water flow, and visual occlusions, causing standard object detection models to miss submerged or floating debris.",
      whatIDid:
        "Processed and structured extensive aquatic waste imagery. Developed the YOLOv6m-CW architecture incorporating water-augmented spatial attention to handle glare and water ripple distortions. Built analytical pipelines to classify debris types and generate spatial density heatmaps.",
      whatCameOfIt:
        "Achieved robust object detection precision across multiple pollution categories under difficult riverine conditions. Research accepted for publication at the international conference FICTA 2026 (May 2026)."
    },
    buttons: [
      { text: "View Publication", icon: "fa-solid fa-scroll", type: "primary", action: "scroll", target: "#publications" },
      { text: "View Case Study", icon: "fa-solid fa-book-open", type: "secondary", action: "modal" }
    ]
  }
];

/* ===================================================================
   RENDER PROJECTS
   =================================================================== */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projectsData
    .map(
      (project, index) => `
    <article class="project-card fade-up delay-${Math.min(index + 1, 4)}" id="project-${project.id}">
      <div class="project-image">
        <img src="${project.image}" alt="${project.name}" loading="lazy">
        <div class="project-overlay">
          <span class="project-period-badge"><i class="fa-regular fa-calendar"></i> ${project.period}</span>
        </div>
      </div>
      <div class="project-body">
        <div class="project-meta-header">
          <span class="project-label">${project.label}</span>
        </div>
        <h3 class="project-name">${project.name}</h3>
        <p class="project-tagline">${project.tagline}</p>
        <div class="project-tech">
          ${project.tech.map((t) => `<span>${t}</span>`).join("")}
        </div>
        <p class="project-desc">${project.description}</p>
        <div class="project-actions">
          ${project.buttons
            .map((btn) => {
              if (btn.action === "modal") {
                return `<button class="project-btn project-btn-${btn.type}" onclick="openCaseStudy('${project.id}')">
                  <i class="${btn.icon}"></i> ${btn.text}
                </button>`;
              } else if (btn.action === "scroll") {
                return `<a href="${btn.target}" class="project-btn project-btn-${btn.type}">
                  <i class="${btn.icon}"></i> ${btn.text}
                </a>`;
              } else {
                return `<a href="${btn.url}" class="project-btn project-btn-${btn.type}" target="_blank" rel="noopener noreferrer">
                  <i class="${btn.icon}"></i> ${btn.text}
                </a>`;
              }
            })
            .join("")}
        </div>
      </div>
    </article>`
    )
    .join("");
}

/* ===================================================================
   CASE STUDY MODAL (Problem / What I Did / What Came of It)
   =================================================================== */
function openCaseStudy(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project || !project.caseStudy) return;

  const modal = document.getElementById("caseStudyModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div class="case-study-header">
      <span class="case-study-badge">${project.label} · ${project.period}</span>
      <h2 class="case-study-title">${project.name}</h2>
      <p class="case-study-subtitle">${project.tagline}</p>
      <div class="case-study-tags">
        ${project.tech.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div class="case-study-content">
      <div class="case-study-block">
        <div class="case-study-block-header">
          <div class="case-study-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
          <h3>1. Problem</h3>
        </div>
        <p>${project.caseStudy.problem}</p>
      </div>

      <div class="case-study-block">
        <div class="case-study-block-header">
          <div class="case-study-icon"><i class="fa-solid fa-gears"></i></div>
          <h3>2. What I Did</h3>
        </div>
        <p>${project.caseStudy.whatIDid}</p>
      </div>

      <div class="case-study-block">
        <div class="case-study-block-header">
          <div class="case-study-icon"><i class="fa-solid fa-chart-line"></i></div>
          <h3>3. What Came of It</h3>
        </div>
        <p>${project.caseStudy.whatCameOfIt}</p>
      </div>
    </div>

    <div class="case-study-footer">
      ${
        project.liveUrl
          ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Project
            </a>`
          : `<a href="#publications" onclick="closeCaseStudy()" class="btn btn-primary">
              <i class="fa-solid fa-scroll"></i> View Publication Details
            </a>`
      }
      <button class="btn btn-secondary" onclick="closeCaseStudy()">Close Case Study</button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCaseStudy() {
  const modal = document.getElementById("caseStudyModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* ===================================================================
   CERTIFICATES DATA & VIEWER
   =================================================================== */
const certificatesData = [
  {
    id: "flyrank-ml-cert",
    title: "Machine Learning Internship Certificate",
    issuer: "FlyRank.ai",
    category: "AI & Machine Learning",
    date: "Sep 2026",
    icon: "🤖",
    file: "Certificate/flyrank-certificate-of-completion-machine-learning-83cc822d-d544-4d0f-a64f-b79c76d2ac7a.pdf",
    type: "pdf",
    badge: "Internship Certificate"
  },
  {
    id: "flyrank-lor",
    title: "Letter of Recommendation (LOR)",
    issuer: "FlyRank.ai",
    category: "Professional Endorsement",
    date: "Sep 2026",
    icon: "📜",
    file: "Certificate/flyrank-recommendation-letter-83cc822d-d544-4d0f-a64f-b79c76d2ac7a.pdf",
    type: "pdf",
    badge: "Recommendation Letter"
  },
  {
    id: "flyrank-eval",
    title: "Internship Evaluation & Performance Report",
    issuer: "FlyRank.ai",
    category: "Performance Review",
    date: "Sep 2026",
    icon: "📈",
    file: "Certificate/flyrank-final-internship-report-evaluation-83cc822d-d544-4d0f-a64f-b79c76d2ac7a.pdf",
    type: "pdf",
    badge: "Evaluation Report"
  },
  {
    id: "aicerts-prompt",
    title: "AI+ Prompt Engineer Level 1™",
    issuer: "AI CERTS™",
    category: "Generative AI & Prompt Engineering",
    date: "Jul 2025",
    icon: "🧠",
    file: "Certificate/Certificate-1.png",
    type: "image",
    badge: "Global Certification"
  },
  {
    id: "ostad-ds",
    title: "Data Science Professional Track",
    issuer: "Ostad",
    category: "Data Science & Analytics",
    date: "Feb 2025",
    icon: "📊",
    file: "Certificate/Komol Krishna Paul-Data Science 38-C22824 (1).pdf",
    type: "pdf",
    badge: "Professional Program"
  },
  {
    id: "gp-mern",
    title: "Full Stack Development with MERN",
    issuer: "GP Academy",
    category: "Web & Software Development",
    date: "May 2025",
    icon: "💻",
    file: "Certificate/certificate-full-stack-development-with-mern.pdf",
    type: "pdf",
    badge: "Developer Certification"
  },
  {
    id: "netcom-agentx",
    title: "Agent X",
    issuer: "NetCom Learning",
    category: "Autonomous AI Agents",
    date: "Sep 15, 2025",
    icon: "⚡",
    file: "Certificate/AgentX.png",
    type: "image",
    badge: "NetCom Certified"
  },
  {
    id: "cisco-network",
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering & IT",
    date: "Sep 13, 2024",
    icon: "🌐",
    file: "Certificate/CCNA-_Introduction_to_Networks_certificate_komolpaul86-gmail-com_403c719b-032e-4427-b7b2-8d53ebbeff54.pdf",
    type: "pdf",
    badge: "Cisco Certified"
  },
  {
    id: "roborace-award",
    title: "1st Runners Up — RC Robo Race (TechFest Spring 2023)",
    issuer: "Independent University, Bangladesh (IUB)",
    category: "Robotics Competition Award",
    date: "Spring 2023",
    icon: "🏆",
    file: "Certificate/RoboRace.jpeg",
    type: "image",
    badge: "1st Runner Up Award"
  }
];

function renderCertificates() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  grid.innerHTML = certificatesData
    .map((cert, index) => {
      const delay = (index % 4) + 1;
      const encodedFile = cert.file ? encodeURI(cert.file) : null;
      return `
        <div class="cert-card fade-up delay-${delay}">
          <div class="cert-card-top">
            <div class="cert-icon">${cert.icon}</div>
            <span class="cert-badge">${cert.badge || cert.issuer}</span>
          </div>
          <h4 class="cert-name">${cert.title}</h4>
          <p class="cert-issuer">${cert.issuer} · ${cert.category}</p>
          <div class="cert-meta">
            <span class="cert-date"><i class="fa-regular fa-calendar"></i> ${cert.date}</span>
          </div>
          <div class="cert-card-actions">
            ${
              encodedFile
                ? `
              <button class="cert-action-btn cert-view-btn" onclick="openCertificateModal('${cert.id}')">
                <i class="fa-solid fa-eye"></i> View Certificate
              </button>
              <a href="${encodedFile}" target="_blank" rel="noopener noreferrer" class="cert-action-btn cert-open-btn" title="Open certificate in new tab">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            `
                : `
              <span class="cert-verified-badge"><i class="fa-solid fa-circle-check"></i> Verified Credential</span>
            `
            }
          </div>
        </div>
      `;
    })
    .join("");
}

function openCertificateModal(certId) {
  const cert = certificatesData.find((c) => c.id === certId);
  if (!cert || !cert.file) return;

  const modal = document.getElementById("certificateModal");
  const modalContent = document.getElementById("certModalContent");
  if (!modal || !modalContent) return;

  const encodedFile = encodeURI(cert.file);

  let mediaHtml = "";
  if (cert.type === "pdf") {
    mediaHtml = `
      <div class="cert-media-container cert-pdf-container">
        <iframe src="${encodedFile}#view=FitH" class="cert-modal-iframe" title="${cert.title}"></iframe>
      </div>
      <p class="cert-fallback-text">
        <i class="fa-solid fa-circle-info"></i> If the PDF preview does not display, 
        <a href="${encodedFile}" target="_blank" rel="noopener noreferrer">click here to open directly</a>.
      </p>
    `;
  } else {
    mediaHtml = `
      <div class="cert-media-container cert-img-container">
        <img src="${encodedFile}" alt="${cert.title}" class="cert-modal-img" loading="lazy">
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div class="cert-modal-header">
      <span class="cert-modal-category">${cert.category} · ${cert.date}</span>
      <h2 class="cert-modal-title">${cert.title}</h2>
      <p class="cert-modal-issuer"><i class="fa-solid fa-building"></i> Issued by <strong>${cert.issuer}</strong></p>
    </div>
    
    <div class="cert-modal-body">
      ${mediaHtml}
    </div>

    <div class="cert-modal-footer">
      <a href="${encodedFile}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Open in New Tab
      </a>
      <a href="${encodedFile}" download class="btn btn-secondary">
        <i class="fa-solid fa-download"></i> Download
      </a>
      <button class="btn btn-secondary" onclick="closeCertificateModal()">Close</button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCertificateModal() {
  const modal = document.getElementById("certificateModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function initModal() {
  const closeBtn = document.getElementById("modalClose");
  const modal = document.getElementById("caseStudyModal");
  const certCloseBtn = document.getElementById("certModalClose");
  const certModal = document.getElementById("certificateModal");

  if (closeBtn) closeBtn.addEventListener("click", closeCaseStudy);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCaseStudy();
    });
  }

  if (certCloseBtn) certCloseBtn.addEventListener("click", closeCertificateModal);
  if (certModal) {
    certModal.addEventListener("click", (e) => {
      if (e.target === certModal) closeCertificateModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCaseStudy();
      closeCertificateModal();
    }
  });
}

/* ===================================================================
   THEME TOGGLE
   =================================================================== */
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector("i");
  const stored = localStorage.getItem("portfolio-theme");

  if (stored) {
    document.documentElement.setAttribute("data-theme", stored);
  }

  function updateIcon() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  updateIcon();

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateIcon();
  });
}

/* ===================================================================
   NAVBAR SCROLL EFFECT & ACTIVE LINKS
   =================================================================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);

    let current = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.getAttribute("id");
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ===================================================================
   MOBILE MENU
   =================================================================== */
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("navLinks");
  const icon = btn.querySelector("i");

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      icon.className = "fa-solid fa-bars";
    });
  });
}

/* ===================================================================
   SCROLL ANIMATIONS (Intersection Observer)
   =================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

/* ===================================================================
   BACK TO TOP
   =================================================================== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===================================================================
   CONTACT FORM
   =================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Komol,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:komolpaul86@gmail.com?subject=${subject}&body=${body}`;

    alert("Thank you! Opening your email client to deliver your message to komolpaul86@gmail.com.");
    form.reset();
  });
}

/* ===================================================================
   SMOOTH SCROLL for anchor links
   =================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ===================================================================
   INITIALIZATION
   =================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderCertificates();
  initTheme();
  initNavbar();
  initMobileMenu();
  initModal();
  initBackToTop();
  initContactForm();
  initSmoothScroll();

  requestAnimationFrame(() => {
    initScrollAnimations();
  });
});
