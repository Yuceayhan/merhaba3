// data.js dosyasından yüklenen küresel verileri al
const translations = window.App.translations;
const productsData = window.App.productsData;

// Durum Yönetimi
let currentLang = localStorage.getItem("lang") || "tr";
let currentTheme = localStorage.getItem("theme") || "dark";
let activeKatalogFilter = "all";

// DOM Elemanları
const themeToggleBtn = document.getElementById("theme-toggle");
const langToggleBtn = document.getElementById("lang-toggle");
const menuToggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const katalogGrid = document.getElementById("katalog-grid");
const activeFilterTitle = document.getElementById("katalog-active-title");
const activeFilterCount = document.getElementById("katalog-count");
const productModal = document.getElementById("product-modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

// ----------------------------------------------------
// 1. TEMA VE DİL SİSTEMİ
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
      element.textContent = translations[lang][key];
    }
  });

  renderKatalog();
  applyTheme(currentTheme);
}

// ----------------------------------------------------
// 2. KATALOG FİLTRELEME VE RENDER
// ----------------------------------------------------
function renderKatalog() {
  if (!katalogGrid) return;
  katalogGrid.innerHTML = "";
  
  // Kategoriye göre sıralama düzeni
  const categoryOrder = {
    "kendinden-kazanli": 1,
    "rezistanli": 2,
    "tasarruflu": 3,
    "otomatik-kazanlar": 4,
    "leke-makinalari": 5,
    "endustriyel": 6,
    "utu-ve-masa": 7,
    "yedek-parca": 8
  };

  // Filtreleme ve sıralama mantığı
  const filteredProducts = activeKatalogFilter === "all"
    ? [...productsData].sort((a, b) => {
        const orderA = categoryOrder[a.katalogCategory] || 99;
        const orderB = categoryOrder[b.katalogCategory] || 99;
        return orderA - orderB;
      })
    : productsData.filter(p => p.katalogCategory === activeKatalogFilter);

  // Sayısal veri gösterimi
  const countText = currentLang === "tr"
    ? `${filteredProducts.length} Ürün Listeleniyor`
    : `${filteredProducts.length} Products Listed`;
  activeFilterCount.textContent = countText;

  // Aktif Kategori Başlığı Güncelle
  let activeTitleKey = "cat-all-katalog";
  if (activeKatalogFilter !== "all") {
    activeTitleKey = "cat-" + activeKatalogFilter;
  }
  
  if (translations[currentLang][activeTitleKey]) {
    activeFilterTitle.textContent = translations[currentLang][activeTitleKey];
  }

  // Render işlemi
  filteredProducts.forEach((product) => {
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
    katalogGrid.appendChild(card);
  });
}

function initKatalogFilters() {
  const sidebarButtons = document.querySelectorAll(".sidebar-menu-btn");
  sidebarButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sidebarButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeKatalogFilter = btn.getAttribute("data-filter");
      renderKatalog();

      // Mobilde tıklanınca yukarı kaydır
      window.scrollTo({
        top: document.querySelector(".katalog-main-content").offsetTop - 100,
        behavior: "smooth"
      });
    });
  });
}

function initMobileSidebarToggle() {
  const sidebar = document.querySelector(".katalog-sidebar");
  const openBtn = document.getElementById("mobile-filter-btn");
  const closeBtn = document.getElementById("sidebar-close-btn");
  
  if (!sidebar) return;

  // Create backdrop overlay dynamically
  let overlay = document.querySelector(".sidebar-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    document.body.appendChild(overlay);
  }

  function openSidebar() {
    sidebar.classList.add("expanded");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  function closeSidebar() {
    sidebar.classList.remove("expanded");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore scroll
  }

  if (openBtn) {
    openBtn.addEventListener("click", openSidebar);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
  }

  overlay.addEventListener("click", closeSidebar);

  // Close sidebar on mobile when a category button is clicked
  const sidebarButtons = document.querySelectorAll(".sidebar-menu-btn");
  sidebarButtons.forEach(btn => {
    btn.addEventListener("click", closeSidebar);
  });
}

// ----------------------------------------------------
// 3. DETAY MODALI VE ÖZELLİK TABLOSU RENDERER
// ----------------------------------------------------
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

// Event Listeners
themeToggleBtn.addEventListener("click", () =>
  applyTheme(currentTheme === "light" ? "dark" : "light"),
);
langToggleBtn.addEventListener("click", () =>
  applyLanguage(currentLang === "tr" ? "en" : "tr"),
);
menuToggleBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

modalCloseBtn.addEventListener("click", closeProductModal);
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) closeProductModal();
});

// Başlatıcı
document.addEventListener("DOMContentLoaded", () => {
  initKatalogFilters();
  initMobileSidebarToggle();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
});
