// data.js dosyasından yüklenen küresel verileri al
const translations = window.App.translations;
const productsData = window.App.productsData;
const faqsData = window.App.faqsData;

// Durum Yönetimi
let currentLang = localStorage.getItem("lang") || "tr";
let currentTheme = localStorage.getItem("theme") || "dark";

// DOM Elemanları
const themeToggleBtn = document.getElementById("theme-toggle");
const langToggleBtn = document.getElementById("lang-toggle");
const menuToggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const productCarousel = document.getElementById("product-carousel");
const faqList = document.getElementById("faq-list");
const contactForm = document.getElementById("contact-form");
const productModal = document.getElementById("product-modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

// ----------------------------------------------------
// 1. KAHRAMAN SLAYT (HERO SLIDER) AYARLARI
// ----------------------------------------------------
let activeSlideIndex = 0;
const slides = document.querySelectorAll(".hero-slider .slide");
const dots = document.querySelectorAll(".hero-slider .dot");
let sliderInterval = null;

function showSlide(index) {
  if (slides.length === 0) return;
  
  // Sınır kontrolü
  if (index >= slides.length) activeSlideIndex = 0;
  else if (index < 0) activeSlideIndex = slides.length - 1;
  else activeSlideIndex = index;

  // Aktif sınıfları temizle ve yenisini ekle
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[activeSlideIndex].classList.add("active");
  if (dots[activeSlideIndex]) {
    dots[activeSlideIndex].classList.add("active");
  }
}

function nextSlide() {
  showSlide(activeSlideIndex + 1);
}

function initHeroSlider() {
  if (slides.length === 0) return;
  
  // Dot tıklama dinleyicilerini ata
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      showSlide(idx);
      resetSliderTimer();
    });
  });

  // 5 saniyede bir otomatik geçiş ayarla
  startSliderTimer();
}

function startSliderTimer() {
  sliderInterval = setInterval(nextSlide, 5000);
}

function resetSliderTimer() {
  clearInterval(sliderInterval);
  startSliderTimer();
}

// ----------------------------------------------------
// ----------------------------------------------------
// 2. ÜRÜN KAROUSEL (PRODUCT CAROUSEL) AYARLARI
// ----------------------------------------------------
function alignCarouselToRealStart() {
  if (!productCarousel) return;
  const card = productCarousel.querySelector(".product-card");
  if (!card) return;
  const cardWidth = card.getBoundingClientRect().width;
  const gap = 24;
  const stepWidth = cardWidth + gap;
  const numClones = 4;
  
  productCarousel.style.scrollBehavior = "auto";
  productCarousel.scrollLeft = numClones * stepWidth;
  productCarousel.offsetHeight; // Force reflow
  productCarousel.style.scrollBehavior = "";
}

function initProductCarousel() {
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  if (!productCarousel || !prevBtn || !nextBtn) return;

  // Next button click handler
  nextBtn.addEventListener("click", () => {
    const card = productCarousel.querySelector(".product-card");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24;
    const stepWidth = cardWidth + gap;
    
    const currentIndex = Math.round(productCarousel.scrollLeft / stepWidth);
    const targetIndex = currentIndex + 1;
    
    productCarousel.scrollTo({
      left: targetIndex * stepWidth,
      behavior: "smooth"
    });
  });

  // Prev button click handler
  prevBtn.addEventListener("click", () => {
    const card = productCarousel.querySelector(".product-card");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24;
    const stepWidth = cardWidth + gap;
    
    const currentIndex = Math.round(productCarousel.scrollLeft / stepWidth);
    const targetIndex = currentIndex - 1;
    
    productCarousel.scrollTo({
      left: targetIndex * stepWidth,
      behavior: "smooth"
    });
  });

  // Infinite scroll wrap-around event listeners
  let scrollTimeout;
  function handleScrollEndWrap() {
    const card = productCarousel.querySelector(".product-card");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24;
    const stepWidth = cardWidth + gap;
    
    const scrollLeft = productCarousel.scrollLeft;
    const totalProducts = productsData.filter(p => p.katalogCategory !== "yedek-parca").length;
    const numClones = 4;
    
    const currentIndex = Math.round(scrollLeft / stepWidth);
    
    if (currentIndex < numClones) {
      // Warp to the corresponding real product at the end
      const targetIndex = currentIndex + totalProducts;
      productCarousel.style.scrollBehavior = "auto";
      productCarousel.scrollLeft = targetIndex * stepWidth;
      productCarousel.offsetHeight; // Force reflow
      productCarousel.style.scrollBehavior = "";
    }
    else if (currentIndex >= numClones + totalProducts) {
      // Warp to the corresponding real product at the start
      const targetIndex = currentIndex - totalProducts;
      productCarousel.style.scrollBehavior = "auto";
      productCarousel.scrollLeft = targetIndex * stepWidth;
      productCarousel.offsetHeight; // Force reflow
      productCarousel.style.scrollBehavior = "";
    }
  }

  // Listen to both scroll (with timeout fallback) and scrollend (native modern support)
  productCarousel.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScrollEndWrap, 150);
  });
  
  productCarousel.addEventListener("scrollend", handleScrollEndWrap);

  // Resize and load event listeners to keep alignment
  window.addEventListener("resize", alignCarouselToRealStart);
  window.addEventListener("load", alignCarouselToRealStart);
}

// ----------------------------------------------------
// 3. TEMA VE DİL SİSTEMİ
// ----------------------------------------------------
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    themeToggleBtn.innerHTML = `☀️ <span data-i18n="theme-light">${translations[currentLang]["theme-light"]}</span>`;
  } else {
    themeToggleBtn.innerHTML = `🌙 <span data-i18n="theme-dark">${translations[currentLang]["theme-dark"]}</span>`;
  }
  localStorage.setItem("theme", theme);
  currentTheme = theme;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  langToggleBtn.querySelector("span").textContent = lang === "tr" ? "EN" : "TR";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  renderProducts();
  renderFAQs();
  applyTheme(currentTheme);
}

// Ürün Kartlarını Carousel Alanına Dök
function renderProducts() {
  if (!productCarousel) return;
  productCarousel.innerHTML = "";
  
  // 1. Yedek parçalar hariç diğer tüm ürünleri listele
  let featuredProducts = productsData.filter(p => p.katalogCategory !== "yedek-parca");

  // 2. Kategori önceliğine göre sırala
  const categoryOrder = {
    "kendinden-kazanli": 1,
    "rezistanli": 2,
    "tasarruflu": 3,
    "otomatik-kazanlar": 4,
    "leke-makinalari": 5,
    "endustriyel": 6,
    "utu-ve-masa": 7
  };

  featuredProducts.sort((a, b) => {
    const orderA = categoryOrder[a.katalogCategory] || 99;
    const orderB = categoryOrder[b.katalogCategory] || 99;
    return orderA - orderB;
  });

  // 3. Sonsuz döngü için klonları oluştur (başta son 4 ürün, sonda ilk 4 ürün)
  const numClones = 4;
  const prependedClones = featuredProducts.slice(-numClones);
  const appendedClones = featuredProducts.slice(0, numClones);
  const displayProducts = [...prependedClones, ...featuredProducts, ...appendedClones];

  displayProducts.forEach((product) => {
    const title = product[currentLang].title;
    const learnMoreText = translations[currentLang]["learn-more"];
    
    let catLabel = "";
    if (product.category === "press") catLabel = translations[currentLang]["cat-press"];
    else if (product.category === "table") catLabel = translations[currentLang]["cat-table"];
    else if (product.category === "boiler-iron") catLabel = translations[currentLang]["cat-boiler"];

    // Maddeleri liste haline getir
    let bulletsHtml = "";
    if (product[currentLang].bullets) {
      product[currentLang].bullets.forEach(bullet => {
        bulletsHtml += `
          <li class="product-bullet">
            <span class="bullet-arrow">›</span>
            <span>${bullet}</span>
          </li>
        `;
      });
    }

    const card = document.createElement("div");
    card.className = "product-card fade-in";
    card.innerHTML = `
      <div class="product-img-w">
        <span class="product-category-tag">${catLabel}</span>
        <img src="${product.img}" alt="${title}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${title}</h3>
        <ul class="product-bullets-list">
          ${bulletsHtml}
        </ul>
        <div class="product-card-footer">
          <span class="btn btn-secondary card-btn">${learnMoreText}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openProductModal(product));
    productCarousel.appendChild(card);
  });

  // 4. Konumu başlangıç konumuna ayarla
  setTimeout(alignCarouselToRealStart, 50);
}

// SSS Accordion Oluştur
function renderFAQs() {
  if (!faqList) return;
  faqList.innerHTML = "";
  faqsData.forEach((faq) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.innerHTML = `
      <button class="faq-question">
        <span>${faq[currentLang].q}</span>
        <span class="faq-arrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
      </button>
      <div class="faq-answer">
        <p>${faq[currentLang].a}</p>
      </div>
    `;

    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document
        .querySelectorAll(".faq-item")
        .forEach((el) => el.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });

    faqList.appendChild(item);
  });
}

// Teknik Özellik Tablosunu Modal İçin Render Et
function renderModalSpecs(specs) {
  const container = document.getElementById("modal-specs");
  if (!container) return;
  
  if (!specs || specs.length === 0) {
    container.innerHTML = "";
    container.style.display = "none";
    return;
  }
  
  container.style.display = "block";
  let tableHtml = `
    <h4 class="specs-title">${translations[currentLang]["modal-specs-title"]}</h4>
    <table class="specs-table">
      <tbody>
  `;
  
  specs.forEach(spec => {
    tableHtml += `
      <tr>
        <td class="spec-name">${spec.key}</td>
        <td class="spec-val">${spec.value}</td>
      </tr>
    `;
  });
  
  tableHtml += `
      </tbody>
    </table>
  `;
  
  container.innerHTML = tableHtml;
}

// Modalı Aç/Kapat
function openProductModal(product) {
  modalImg.src = product.img;
  modalTitle.textContent = product[currentLang].title;
  modalDesc.textContent = product[currentLang].desc;
  
  renderModalSpecs(product[currentLang].specs);
  
  productModal.style.display = "flex";
  setTimeout(() => {
    productModal.classList.add("show");
  }, 10);
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  productModal.classList.remove("show");
  setTimeout(() => {
    productModal.style.display = "none";
  }, 300);
  document.body.style.overflow = "";
}

// Dinamik Menü Aktifliği
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY + 150;
  document.querySelectorAll("section").forEach((section) => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute("id");
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-section") === id) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Toast Bildirimi Göster
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  const iconSvg = type === "success" 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${iconSvg}</span>
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close-btn">&times;</button>
  `;
  
  container.appendChild(toast);
  
  toast.querySelector(".toast-close-btn").addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  });
  
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  
  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
}

// Event Listeners
themeToggleBtn.addEventListener("click", () =>
  applyTheme(currentTheme === "light" ? "dark" : "light"),
);
langToggleBtn.addEventListener("click", () =>
  applyLanguage(currentLang === "tr" ? "en" : "tr"),
);
menuToggleBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

modalCloseBtn.addEventListener("click", closeProductModal);
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) closeProductModal();
});

// İletişim Konusu Seçim Modalı Yönetimi
const subjectModal = document.getElementById("subject-modal");
const subjectModalCloseBtn = document.getElementById("subject-modal-close");
const subjectTrigger = document.getElementById("form-subject-trigger");
const subjectInput = document.getElementById("form-subject");
const subjectSelectedText = document.getElementById("form-subject-selected-text");

function openSubjectModal() {
  if (!subjectModal) return;
  subjectModal.style.display = "flex";
  setTimeout(() => {
    subjectModal.classList.add("show");
  }, 10);
  document.body.style.overflow = "hidden";
}

function closeSubjectModal() {
  if (!subjectModal) return;
  subjectModal.classList.remove("show");
  setTimeout(() => {
    subjectModal.style.display = "none";
  }, 300);
  document.body.style.overflow = "";
}

// Konu seçenek kartlarına tıklama atama
document.querySelectorAll(".subject-option-card").forEach((card) => {
  card.addEventListener("click", () => {
    const val = card.getAttribute("data-val");
    const key = card.getAttribute("data-key");
    
    // Değerleri kaydet
    subjectInput.value = val;
    subjectSelectedText.textContent = translations[currentLang][key];
    subjectSelectedText.setAttribute("data-i18n", key);
    
    // Sınıfları temizle ve ekle
    document.querySelectorAll(".subject-option-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    
    closeSubjectModal();
  });
});

if (subjectTrigger) {
  subjectTrigger.addEventListener("click", openSubjectModal);
}
if (subjectModalCloseBtn) {
  subjectModalCloseBtn.addEventListener("click", closeSubjectModal);
}
if (subjectModal) {
  subjectModal.addEventListener("click", (e) => {
    if (e.target === subjectModal) closeSubjectModal();
  });
}

if (contactForm) {
  const phoneInput = document.getElementById("form-phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const phone = document.getElementById("form-phone").value;
    const subject = document.getElementById("form-subject").value;
    const message = document.getElementById("form-message").value;

    if (phone.length !== 11) {
      const errorMsg = currentLang === "tr" ? "Telefon numarası 11 haneli olmalıdır (Örn: 05465378221)!" : "Phone number must be exactly 11 digits!";
      showToast(errorMsg, "error");
      return;
    }

    if (!subject) {
      const errorMsg = currentLang === "tr" ? "Lütfen bir iletişim konusu seçiniz!" : "Please select a subject!";
      showToast(errorMsg, "error");
      return;
    }

    // Gönderiliyor durumu
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === "tr" ? "Gönderiliyor..." : "Sending...";

    fetch("https://formsubmit.co/ajax/uzman.utu34@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Ad Soyad": name,
        "E-posta": email,
        "Telefon": phone,
        "Konu": subject,
        "Mesaj": message
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("HTTP error " + response.status);
      }
    })
    .then(data => {
      showToast(translations[currentLang]["form-success"], "success");
      contactForm.reset();
      
      // Konu seçimini de sıfırla
      subjectInput.value = "";
      subjectSelectedText.textContent = translations[currentLang]["form-subject-placeholder"];
      subjectSelectedText.setAttribute("data-i18n", "form-subject-placeholder");
      document.querySelectorAll(".subject-option-card").forEach(c => c.classList.remove("active"));
    })
    .catch(err => {
      console.error(err);
      const errorMsg = currentLang === "tr" ? "Bir hata oluştu. Lütfen tekrar deneyin." : "An error occurred. Please try again.";
      showToast(errorMsg, "error");
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    });
  });
}

// Başlatıcı
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initProductCarousel();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
});
