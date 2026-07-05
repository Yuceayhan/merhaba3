// IIFE ile kapsamı izole ederek global çakışmaları önlüyoruz
(function() {
  // Dil Sözlüğü (İçeriği buradan kolayca güncelleyebilirsiniz)
  const translations = {
    tr: {
      "ticker-announcement": "Hafta içi 09:00 - 18:00 saatleri arasında hizmetinizdeyiz.",
      "nav-home": "Ana Sayfa",
      "nav-about": "Hakkında",
      "nav-products": "Ürünlerimiz",
      "nav-faq": "S.S.S.",
      "nav-contact": "İletişim",
      "theme-dark": "Koyu",
      "theme-light": "Açık",
      "hero-badge": "UZMAN • Yüksek Performans",
      "hero-title": "Sanayi Tipi Buharlı Ütü ve Pres Sistemleri",
      "hero-description": "Tekstil atölyeleri, kuru temizleme işletmeleri ve konfeksiyon fabrikaları için yüksek kaliteli, dayanıklı ve üstün performanslı buharlı ütü çözümleri.",
      "hero-cta-primary": "Ürünleri İnceleyin",
      "hero-cta-secondary": "İletişime Geçin",
      "hero-badge-title": "Yerli Üretim",
      "hero-badge-subtitle": "Yüksek Kalite Standartları",
      "about-badge": "Uzman Buharlı Ütü",
      "about-title": "Güçlü Referans, Yılların Deneyimi",
      "about-subtitle": "20 yılı aşkın üretim tecrübemiz ve uzman ekibimizle sanayi ütü sistemlerinde yenilikçi çözümler sunuyoruz.",
      "feature-1-title": "20+ Yıllık Tecrübe",
      "feature-1-desc": "Sektörün ihtiyaçlarını en iyi şekilde analiz ederek her atölyeye uygun çözümler üretiyoruz.",
      "feature-2-title": "%100 Yerli Üretim",
      "feature-2-desc": "Dayanıklı, güçlü ve yüksek performanslı makinelerimizi yerli sermaye ile üretiyoruz.",
      "feature-3-title": "Global Sevkiyat",
      "feature-3-desc": "Türkiye geneli ve yurt dışına güvenli ve hızlı teslimat sağlıyoruz.",
      "details-title": "Sanayi Ütü Sistemlerinde Modern Üretim Teknolojisi",
      "details-desc": "Gelişmiş mühendislik çözümleri ile ürettiğimiz ürünler enerji verimliliği ve ergonomiyi bir arada sunar. İşletmenizin üretim kapasitesini maksimize eder.",
      "details-point-1": "Profesyonel Üretim",
      "details-point-2": "Kesintisiz Teknik Destek",
      "details-point-3": "Yüksek Buhar Gücü",
      "details-point-4": "Hızlı Yedek Parça",
      
      // Filtreleme Çevirileri
      "cat-all": "Tüm Ürünler",
      "cat-press": "Pres Makineleri",
      "cat-table": "Ütü Masaları & Paskaralar",
      "cat-boiler": "Kazanlar & El Ütüleri",
      
      // 11 Adet Katalog Kategorisi Çevirileri
      "cat-all-katalog": "Tüm Ürünler",
      "cat-robotlar": "Askıda Ütüleme Robotları",
      "cat-cit-cit": "Çıt Çıt Makinaları",
      "cat-el-utu-firca": "El Ütüleri Ve Buhar Fırçaları",
      "cat-endustriyel": "Endüstriyel Ürünler",
      "cat-kazanli-utu": "Kazanlı Tip Buharlı Ütüler",
      "cat-kendinden-kazanli": "Kendinden Kazanlı Paskaralar",
      "cat-leke-makinalari": "Leke Makinaları",
      "cat-otomatik-kazanlar": "Otomatik Buhar Kazanları",
      "cat-rezistanli": "Rezistanlı Paskaralar",
      "cat-tasarruflu": "Tasarruflu Paskaralar",
      "cat-utu-masalari": "Ütü Masaları",

      "products-badge": "Katalog",
      "products-title": "Öne Çıkan Ürünlerimiz",
      "products-subtitle": "Tüm konfeksiyon ve tekstil atölyeleri için profesyonel olarak ürettiğimiz makinelerimiz.",
      
      "faq-badge": "Sık Sorulan Sorular",
      "faq-title": "Aklınıza Takılanlar",
      "faq-subtitle": "Sanayi tipi ütüler, kazanlar ve paskaralar hakkında sıkça sorulan soruların yanıtları.",
      "contact-badge": "İletişim",
      "contact-title": "Bize Ulaşın",
      "contact-subtitle": "Sorularınız, sipariş detayları ve teknik destek talepleriniz için form doldurabilir veya bizi doğrudan arayabilirsiniz.",
      "contact-details-title": "İletişim Bilgileri",
      "contact-address-title": "Adres",
      "contact-phone-title": "Telefon",
      "contact-email-title": "E-posta",
      "form-name-label": "Adınız Soyadınız",
      "form-name-placeholder": "Örn. Ahmet Yılmaz",
      "form-email-label": "E-posta Adresiniz",
      "form-email-placeholder": "name@company.com",
      "form-message-label": "Mesajınız",
      "form-message-placeholder": "Detaylı bilgi almak istediğiniz konuyu yazınız...",
      "form-submit": "Gönder",
      
      // Detay Modalı Özellikleri
      "modal-specs-title": "Teknik Özellikler",
      "modal-cta-text": "💬 WhatsApp ile Sor",
      "footer-brand-text": "Profesyonel tekstil ve konfeksiyon ütü sistemlerinde 20 yılı aşkın güvenilir çözüm ortağınız.",
      "footer-links-title": "Hızlı Menü",
      "footer-contact-title": "İletişime Geçin",
      
      "form-success": "Mesajınız başarıyla iletildi! En kısa sürede sizinle iletişime geçeceğiz.",
      "learn-more": "Detayları Gör",
      "view-all": "Tümünü Gör",
      
      // Slayt Çevirileri
      "hero-badge-1": "UZMAN • Yüksek Performans",
      "hero-title-1": "Sanayi Tipi Buharlı Ütü ve Pres Sistemleri",
      "hero-desc-1": "Tekstil atölyeleri, kuru temizleme işletmeleri ve konfeksiyon fabrikaları için yüksek kaliteli, dayanıklı ve üstün performanslı buharlı ütü çözümleri.",
      "hero-badge-2": "UZMAN • Maksimum Güç",
      "hero-title-2": "Tam Otomatik Endüstriyel Buhar Kazanları",
      "hero-desc-2": "Yüksek basınçlı kuru buhar üretimi ve kesintisiz su beslemesi ile konfeksiyon hatlarında kesintisiz çalışma ve yüksek verimlilik.",
      "hero-badge-3": "UZMAN • Hatasız Formlar",
      "hero-title-3": "Profesyonel Dikiş Açma ve Ütü Masaları",
      "hero-desc-3": "Yüksek vakum performansı ve ısıtmalı üst tablaları sayesinde nem birikmesini önleyen, iz yapmayan mükemmel ütüleme çözümleri.",
    },
    en: {
      "ticker-announcement": "We are at your service weekdays between 09:00 - 18:00.",
      "nav-home": "Home",
      "nav-about": "About Us",
      "nav-products": "Products",
      "nav-faq": "FAQ",
      "nav-contact": "Contact",
      "theme-dark": "Dark",
      "theme-light": "Light",
      "hero-badge": "UZMAN • High Performance",
      "hero-title": "Industrial Steam Iron & Press Systems",
      "hero-description": "High-quality, durable, and high-performance steam iron solutions for textile workshops, dry cleaners, and clothing factories.",
      "hero-cta-primary": "Explore Products",
      "hero-cta-secondary": "Get in Touch",
      "hero-badge-title": "Domestic Production",
      "hero-badge-subtitle": "High Quality Standards",
      "about-badge": "Uzman Steam Iron",
      "about-title": "Strong Reference, Years of Experience",
      "about-subtitle": "We provide innovative solutions in industrial ironing systems with over 20 years of production experience and our expert team.",
      "feature-1-title": "20+ Years Experience",
      "feature-1-desc": "We analyze the needs of the sector in the best way and produce solutions suitable for every workshop.",
      "feature-2-title": "100% Domestic Production",
      "feature-2-desc": "We manufacture our durable, powerful, and high-performance machines with domestic capital.",
      "feature-3-title": "Global Shipping",
      "feature-3-desc": "We provide safe and fast delivery throughout Turkey and abroad.",
      "details-title": "Modern Production Technology in Industrial Ironing Systems",
      "details-desc": "The products we produce with advanced engineering solutions offer energy efficiency and ergonomics together. It maximizes the production capacity of your business.",
      "details-point-1": "Professional Production",
      "details-point-2": "Uninterrupted Technical Support",
      "details-point-3": "High Steam Power",
      "details-point-4": "Fast Spare Parts",
      
      // Filtering Translations
      "cat-all": "All Products",
      "cat-press": "Press Machines",
      "cat-table": "Ironing & Vacuum Tables",
      "cat-boiler": "Boilers & Hand Irons",
      
      // 11 Catalog Categories Translations
      "cat-all-katalog": "All Products",
      "cat-robotlar": "Ironing Robots",
      "cat-cit-cit": "Snap Buttons",
      "cat-el-utu-firca": "Hand Irons & Brushes",
      "cat-endustriyel": "Industrial Products",
      "cat-kazanli-utu": "Boiler Type Steam Irons",
      "cat-kendinden-kazanli": "Self-Boiler Tables",
      "cat-leke-makinalari": "Spot Cleaning Machines",
      "cat-otomatik-kazanlar": "Automatic Boilers",
      "cat-rezistanli": "Resistor Tables",
      "cat-tasarruflu": "Eco-Friendly Tables",
      "cat-utu-masalari": "Ironing Boards",

      "products-badge": "Catalog",
      "products-title": "Our Featured Products",
      "products-subtitle": "Meticulously manufactured machinery for garment and textile workshops.",
      
      "faq-badge": "Frequently Asked Questions",
      "faq-title": "Any Questions?",
      "faq-subtitle": "Answers to the most frequently asked questions about industrial irons, boilers and tables.",
      "contact-badge": "Contact",
      "contact-title": "Contact Us",
      "contact-subtitle": "You can fill out the form or call us directly for your questions, order details, and technical support requests.",
      "contact-details-title": "Contact Details",
      "contact-address-title": "Address",
      "contact-phone-title": "Phone",
      "contact-email-title": "Email",
      "form-name-label": "Your Name",
      "form-name-placeholder": "e.g. John Doe",
      "form-email-label": "Your Email",
      "form-email-placeholder": "name@company.com",
      "form-message-label": "Your Message",
      "form-message-placeholder": "Please enter your message in detail...",
      "form-submit": "Submit",
      
      // Details Modal Specifications
      "modal-specs-title": "Technical Specifications",
      "modal-cta-text": "Inquiry via WhatsApp",
      "footer-brand-text": "Your reliable business partner for over 20 years in professional textile and clothing ironing systems.",
      "footer-links-title": "Quick Links",
      "footer-contact-title": "Get In Touch",
      "footer-credits": "Designed by Zook Bilisim - Premium Model",
      "form-success": "Your message has been sent successfully! We will contact you as soon as possible.",
      "learn-more": "View Details",
      "view-all": "View All",
      
      // Slide Translations
      "hero-badge-1": "UZMAN • High Performance",
      "hero-title-1": "Industrial Steam Iron & Press Systems",
      "hero-desc-1": "High-quality, durable, and high-performance steam iron solutions for textile workshops, dry cleaners, and clothing factories.",
      "hero-badge-2": "UZMAN • Maximum Power",
      "hero-title-2": "Fully Automatic Industrial Steam Boilers",
      "hero-desc-2": "Continuous operation and efficiency in garment lines with high-pressure dry steam production and automatic water feed systems.",
      "hero-badge-3": "UZMAN • Flawless Forms",
      "hero-title-3": "Professional Seam Opening & Ironing Tables",
      "hero-desc-3": "Perfect, trace-free ironing solutions that prevent moisture buildup thanks to high vacuum suction and heated top boards.",
    },
  };

  // Ürünler Veritabanı (28 adet)
  const productsData = [
    {
      id: "dar-paskara",
      category: "table",
      katalogCategory: "kendinden-kazanli",
      img: "assets/images/dar_paskara.png",
      tr: {
        title: "Kendinden Kazanlı Dar Paskara",
        desc: "Isıtmalı kol aparatı ve yüksek vakum gücü ile ceket, gömlek ve pantolon ütülemede profesyonel sonuçlar sağlar.",
        bullets: [
          "Isıtmalı kol aparatı sayesinde gömlek, ceket, elbise gibi uzun kollu ürünlerin ütülenmesini sağlar.",
          "Yüksek vakum özelliği sayesinde üst tablanın su yapmasını önler."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.5 kW" },
          { key: "Kazan Isıtıcı Gücü", value: "3.0 kW" },
          { key: "Buhar Girişi", value: "G 1/2\"" }
        ]
      },
      en: {
        title: "Self-Boiler Narrow Ironing Table",
        desc: "Delivers professional ironing output for jackets, shirts and trousers with its heated arm and strong vacuum extractor.",
        bullets: [
          "Enables ironing of long-sleeved items such as shirts, jackets, and dresses thanks to its heated sleeve arm.",
          "High vacuum performance prevents condensation water accumulation on the top surface."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Boiler Heating Power", value: "3.0 kW" },
          { key: "Steam Inlet", value: "G 1/2\"" }
        ]
      }
    },
    {
      id: "omuz-presi",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/omuz_presi.png",
      tr: {
        title: "Omuz Ütü Presi",
        desc: "Yüksek kalitede omuz presleme işlemlerini gerçekleştiren, seri üretime uygun endüstriyel pres makinesi.",
        bullets: [
          "Çift istasyonlu pnömatik omuz press sistemi",
          "Endüstriyel çelik konstrüksiyon"
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Çalışma Basıncı", value: "6 Bar" },
          { key: "Rezistans Gücü", value: "3 kW" },
          { key: "Buhar Girişi", value: "1/2\"" },
          { key: "Ebatlar (ExBoyxYük)", value: "120 x 90 x 150 cm" }
        ]
      },
      en: {
        title: "Shoulder Iron Press",
        desc: "Industrial press machine suitable for mass garment production, executing high-quality shoulder pressing operations.",
        bullets: [
          "Double-station pneumatic shoulder press system",
          "Industrial steel construction"
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Working Pressure", value: "6 Bar" },
          { key: "Heating Power", value: "3 kW" },
          { key: "Steam Inlet", value: "1/2\"" },
          { key: "Dimensions (WxLxH)", value: "120 x 90 x 150 cm" }
        ]
      }
    },
    {
      id: "yaka-presi",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/yaka_presi.png",
      tr: {
        title: "Yaka Presi",
        desc: "Gömlek yaka ve manşetlerini hatasız bir şekilde kırmak ve şekillendirmek üzere geliştirilmiş pnömatik pres.",
        bullets: [
          "Gömlek yakalarında düzgün ve standart form elde edilmesini sağlar.",
          "Seri üretime uygun yapısıyla yüksek verim ve kaliteli sonuç sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Isıtıcı Gücü", value: "4.5 kW" },
          { key: "Çalışma Basıncı", value: "6 Bar" },
          { key: "Hava Tüketimi", value: "15 Litre/dakika" },
          { key: "Ebatlar (ExBoyxYük)", value: "90 x 85 x 140 cm" }
        ]
      },
      en: {
        title: "Collar Press Machine",
        desc: "Pneumatic press developed to perfectly fold and shape shirt collars and cuffs.",
        bullets: [
          "Ensures flat and standardized form on shirt collars.",
          "Offers high efficiency and top-quality results with its suitability for mass production."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Power", value: "4.5 kW" },
          { key: "Working Pressure", value: "6 Bar" },
          { key: "Air Consumption", value: "15 Liters/min" },
          { key: "Dimensions (WxLxH)", value: "90 x 85 x 140 cm" }
        ]
      }
    },
    {
      id: "cep-presi",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/cep_presi.png",
      tr: {
        title: "Cep Kırma Presi",
        desc: "Gömlek ve pantolon ceplerini mükemmel bir hassasiyetle katlayıp ütüleyen pnömatik cep kırma presi.",
        bullets: [
          "Pnömatik sistem sayesinde hızlı ve hassas cep kırma işlemi sağlar.",
          "Endüstriyel çelik gövdesi ile uzun ömürlü profesyonel kullanım sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V" },
          { key: "Isıtıcı Rezistans", value: "5.0 kW" },
          { key: "Çalışma Basıncı", value: "6 Bar" },
          { key: "Üretim Kapasitesi", value: "120 - 150 adet/saat" },
          { key: "Ebatlar (ExBoyxYük)", value: "100 x 110 x 150 cm" }
        ]
      },
      en: {
        title: "Pocket Folding Press",
        desc: "Pneumatic pocket creasing press that folds and irons shirt and trouser pockets with high accuracy.",
        bullets: [
          "Provides fast and precise pocket creasing thanks to its pneumatic system.",
          "Durable industrial steel body ensures long-lasting professional use."
        ],
        specs: [
          { key: "Power Supply", value: "380V" },
          { key: "Heating Resistance", value: "5.0 kW" },
          { key: "Working Pressure", value: "6 Bar" },
          { key: "Production Capacity", value: "120 - 150 pcs/hour" },
          { key: "Dimensions (WxLxH)", value: "100 x 110 x 150 cm" }
        ]
      }
    },
    {
      id: "yaka-yuvarlama",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/yaka_yuvarlama.png",
      tr: {
        title: "Yaka Yuvarlama",
        desc: "Ütü sonrasında gömlek yakalarına estetik ve standart yuvarlak katlama formu kazandıran özel pres makinesi.",
        bullets: [
          "Hassas presleme sistemi sayesinde standart ve düzgün yaka formu sağlar.",
          "Seri üretime uygun yapısıyla hızlı ve verimli çalışma performansı sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 50Hz" },
          { key: "Isıtıcı Rezistans", value: "1.2 kW" },
          { key: "Kontrol Sistemi", value: "Otomatik Zaman Ayarlı" },
          { key: "Çalışma Basıncı", value: "4 - 6 Bar" },
          { key: "Ebatlar (ExBoyxYük)", value: "60 x 50 x 80 cm" }
        ]
      },
      en: {
        title: "Collar Rounding Press",
        desc: "Specialized press machine providing shirt collars with an aesthetic, standardized curved shape after pressing.",
        bullets: [
          "Ensures standardized and smooth collar shape thanks to its sensitive pressing system.",
          "Offers fast and efficient production output designed for mass assembly lines."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 50Hz" },
          { key: "Heating Resistance", value: "1.2 kW" },
          { key: "Control System", value: "Automatic Timer Set" },
          { key: "Working Pressure", value: "4 - 6 Bar" },
          { key: "Dimensions (WxLxH)", value: "60 x 50 x 80 cm" }
        ]
      }
    },
    {
      id: "cep-kapak-presi",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/cep_kapak_presi.png",
      tr: {
        title: "Cep Kapak Presi",
        desc: "Hassas pnömatik presleme sistemi ile düzgün ve standart cep kapak formu sağlar.",
        bullets: [
          "Hassas presleme sistemi ile düzgün ve standart cep kapak formu sağlar.",
          "Seri üretime uygun yapısıyla hızlı ve verimli çalışma performansı sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Isıtıcı Rezistans", value: "3.5 kW" },
          { key: "Çalışma Hava Basıncı", value: "6 Bar" },
          { key: "Baskı Tipi", value: "Pnömatik Baskı Sistemi" },
          { key: "Ebatlar (ExBoyxYük)", value: "95 x 85 x 145 cm" }
        ]
      },
      en: {
        title: "Pocket Flap Press",
        desc: "High-precision pneumatic pressing system that delivers standardized pocket flap shapes.",
        bullets: [
          "Pneumatic pressing system delivers clean and standard pocket flap shape.",
          "Ensures fast and high-efficiency output designed for garment production lines."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Resistance", value: "3.5 kW" },
          { key: "Working Air Pressure", value: "6 Bar" },
          { key: "Pressing Type", value: "Pneumatic Press System" },
          { key: "Dimensions (WxLxH)", value: "95 x 85 x 145 cm" }
        ]
      }
    },
    {
      id: "perde-paskarasi",
      category: "table",
      katalogCategory: "kendinden-kazanli",
      img: "assets/images/perde_paskarasi.png",
      tr: {
        title: "Kendinden Kazanlı Perde Paskarası",
        desc: "Geniş yüzeyi ve entegre kazanı ile perdelerin hızlı ve yüksek kalitede ütülenmesini sağlayan masa.",
        bullets: [
          "Dahili buhar kazanı sayesinde harici sisteme ihtiyaç duymadan çalışır.",
          "Güçlü vakum sistemi ile hızlı ve profesyonel perde ütüleme sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Masa Rezistans Gücü", value: "3.0 kW" },
          { key: "Kazan Rezistans Gücü", value: "6.0 kW" },
          { key: "Vakum Motoru Gücü", value: "0.75 kW" },
          { key: "Çalışma Buhar Basıncı", value: "4 Bar" }
        ]
      },
      en: {
        title: "Self-Boiler Curtain Ironing Table",
        desc: "Large surfacing design and built-in boiler allowing fast, high-quality curtain ironing.",
        bullets: [
          "Operates independently without needing external system due to built-in steam boiler.",
          "High-performance suction ensures quick and professional curtain ironing."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Table Heating Power", value: "3.0 kW" },
          { key: "Boiler Heating Power", value: "6.0 kW" },
          { key: "Vacuum Motor Power", value: "0.75 kW" },
          { key: "Working Steam Pressure", value: "4 Bar" }
        ]
      }
    },
    {
      id: "vatka-yapistirma",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/vatka_yapistirma.png",
      tr: {
        title: "Omuz Vatka Yapıştırma",
        desc: "Ceketlerin omuz vatkalarını yüksek hassasiyetli ısı ve baskı altında yapıştıran pnömatik pres makinesi.",
        bullets: [
          "Hassas sıcaklık ve baskı sistemi ile güçlü vatka yapıştırma sağlar.",
          "Seri üretime uygun yapısıyla hızlı ve verimli çalışma performansı sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 380V" },
          { key: "Rezistans Gücü", value: "2.2 kW" },
          { key: "Kontrol Ünitesi", value: "Dijital Hassas Termostat" },
          { key: "Çalışma Basıncı", value: "4 - 6 Bar" },
          { key: "Ebatlar (ExBoyxYük)", value: "80 x 70 x 135 cm" }
        ]
      },
      en: {
        title: "Shoulder Pad Bonding Machine",
        desc: "Pneumatic press that bonds coat shoulder pads firmly under highly accurate heat and pressure settings.",
        bullets: [
          "Provides strong shoulder-pad bonding with sensitive temperature and pressure control.",
          "Suitable for serial garment production lines with quick and high-volume output."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 380V" },
          { key: "Resistance Power", value: "2.2 kW" },
          { key: "Control Unit", value: "Digital Precision Thermostat" },
          { key: "Working Pressure", value: "4 - 6 Bar" },
          { key: "Dimensions (WxLxH)", value: "80 x 70 x 135 cm" }
        ]
      }
    },
    {
      id: "buhar-kazani-50kw",
      category: "boiler-iron",
      katalogCategory: "otomatik-kazanlar",
      img: "assets/images/buhar_kazani_50kw.png",
      tr: {
        title: "50 KW Buhar Kazanı",
        desc: "Paslanmaz çelik rezistansları ve yüksek emniyet ventilleri ile işletmeler için yüksek kapasiteli buhar jeneratörü.",
        bullets: [
          "50 KW güçlü rezistans sistemi ile yüksek buhar üretim performansı sağlar.",
          "Endüstriyel kullanıma uygun yapısıyla güvenli ve verimli çalışma sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Rezistans Gücü", value: "50 kW" },
          { key: "Buhar Üretimi", value: "70 kg / saat" },
          { key: "Kazan Hacmi", value: "65 Litre" },
          { key: "Çalışma Basıncı", value: "5 Bar" }
        ]
      },
      en: {
        title: "50 KW Industrial Steam Boiler",
        desc: "High-capacity steam generator with stainless elements and safety limits for large manufacturing facilities.",
        bullets: [
          "Delivers high-volume steam output using a powerful 50 kW heating element.",
          "Robust industrial build ensures safe, efficient, and continuous operation."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Resistance Power", value: "50 kW" },
          { key: "Steam Output", value: "70 kg / hour" },
          { key: "Boiler Volume", value: "65 Liters" },
          { key: "Working Pressure", value: "5 Bar" }
        ]
      }
    },
    {
      id: "leke-paskarasi",
      category: "table",
      katalogCategory: "leke-makinalari",
      img: "assets/images/leke_paskarasi.png",
      tr: {
        title: "Kendinden Kazanlı Kabinli Leke Çıkartma Paskarası",
        desc: "Kuru temizlemeciler ve konfeksiyon atölyeleri için kokuyu ve kimyasal buharı hapseden kabinli leke temizleme masası.",
        bullets: [
          "Dahili buhar kazanı sayesinde harici buhar sistemine ihtiyaç duymadan çalışır.",
          "Güçlü vakum motoru sayesinde leke çıkarma kimyasallarını ve kokuyu çevreye yaymadan temizler."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V" },
          { key: "Kazan Rezistans", value: "4.5 kW" },
          { key: "Vakum Motoru", value: "0.55 kW" },
          { key: "Emiş Tabancası", value: "Pnömatik Yüksek Debili" },
          { key: "Ebatlar (ExBoyxYük)", value: "110 x 80 x 180 cm" }
        ]
      },
      en: {
        title: "Self-Boiler Stain Removal Cabinet Table",
        desc: "Cabinet-enclosed spot cleaning table that traps vapors and odors for garment factories and dry cleaners.",
        bullets: [
          "Operates independently without needing an external steam generator.",
          "High-suction vacuum motor removes chemical vapors and odor instantly, preventing spread."
        ],
        specs: [
          { key: "Power Supply", value: "380V" },
          { key: "Boiler Resistance", value: "4.5 kW" },
          { key: "Vacuum Motor", value: "0.55 kW" },
          { key: "Suction Gun", value: "High-Flow Pneumatic" },
          { key: "Dimensions (WxLxH)", value: "110 x 80 x 180 cm" }
        ]
      }
    },
    {
      id: "kol-ic-presi",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/kol_ic_presi.png",
      tr: {
        title: "Kol İç Presi",
        desc: "Hassas presleme sistemi ile ceket ve gömlek kollarının düzgün ve standart kol iç formunu almasını sağlar. Seri üretime uygun yapısıyla hızlı ve verimlidir.",
        bullets: [
          "Hassas presleme sistemi ile düzgün ve standart kol iç formu sağlar.",
          "Seri üretime uygun yapısıyla hızlı ve verimli çalışma performansı sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Isıtıcı Rezistans", value: "3.0 kW" },
          { key: "Çalışma Basıncı", value: "6 Bar" },
          { key: "Hava Tüketimi", value: "12 Litre/dakika" },
          { key: "Ebatlar (ExBoyxYük)", value: "110 x 80 x 140 cm" }
        ]
      },
      en: {
        title: "Sleeve Inner Press",
        desc: "Ensures coat and shirt sleeves obtain a standardized inner seam shape. High-speed operational features make it ideal for mass garment assembly lines.",
        bullets: [
          "Pneumatic pressing system delivers standardized sleeve seam lines.",
          "High operational speeds suitable for large industrial clothing factories."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Resistance", value: "3.0 kW" },
          { key: "Working Pressure", value: "6 Bar" },
          { key: "Air Consumption", value: "12 Liters/min" },
          { key: "Dimensions (WxLxH)", value: "110 x 80 x 140 cm" }
        ]
      }
    },
    {
      id: "tek-cikisli-kazan-oto",
      category: "boiler-iron",
      katalogCategory: "el-utu-firca",
      img: "assets/images/tek_cikisli_kazan_oto.png",
      tr: {
        title: "Tek Çıkışlı Full Otomatik Buhar Kazanı",
        desc: "Full otomatik emniyet ve pompa sistemleri ile son derece güvenli ve kesintisiz buhar üretimi sağlar. Tek çıkışlı yapısı sayesinde profesyonel el ütülerini beslemek için idealdir.",
        bullets: [
          "Full otomatik sistemi ile güvenli ve verimli buhar üretimi sağlar.",
          "Tek çıkışlı yapısıyla profesyonel ütü sistemleriyle uyumlu çalışır."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 50Hz" },
          { key: "Rezistans Gücü", value: "4 kW" },
          { key: "Çalışma Basıncı", value: "3.5 Bar" },
          { key: "Kazan Hacmi", value: "8 Litre" },
          { key: "Su Besleme Tipi", value: "Otomatik Pompalı Sistem" }
        ]
      },
      en: {
        title: "Single-Outlet Fully Automatic Steam Boiler",
        desc: "Equipped with automatic safety valves and auto water intake pump systems to produce safe, non-stop steam. Best suited for single professional hand iron stations.",
        bullets: [
          "Ensures safe and efficient steam generation with its fully automatic systems.",
          "Single outlet configuration is fully compatible with professional iron handles."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 50Hz" },
          { key: "Heating Power", value: "4 kW" },
          { key: "Working Pressure", value: "3.5 Bar" },
          { key: "Boiler Volume", value: "8 Liters" },
          { key: "Water Intake Type", value: "Automatic Pump System" }
        ]
      }
    },
    {
      id: "dar-kollu-paskara",
      category: "table",
      katalogCategory: "utu-masalari",
      img: "assets/images/dar_kollu_paskara.png",
      tr: {
        title: "Dar Kollu Paskara",
        desc: "Dar alanlarda hassas ve profesyonel ütüleme sağlayan vakumlu masa. Gömlek, ceket ve palto kollarının düzgün ütülenmesi için ısıtmalı dar kol aparatı entegredir.",
        bullets: [
          "Dar alanlarda hassas ve profesyonel ütüleme performansı sağlar.",
          "Güçlü vakum sistemi ile hızlı ve verimli çalışma sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 380V" },
          { key: "Vakum Motor Gücü", value: "0.37 kW" },
          { key: "Masa Rezistans Gücü", value: "1.5 kW" },
          { key: "Kol Isıtma Aparatı", value: "Dahili Rezistanslı" },
          { key: "Ebatlar (ExBoyxYük)", value: "135 x 45 x 90 cm" }
        ]
      },
      en: {
        title: "Narrow Ironing Table with Sleeve Arm",
        desc: "Professional vacuum ironing table suited for high precision results in compact areas. Features a built-in heated sleeve arm for shirt and jacket sleeve shaping.",
        bullets: [
          "Delivers precise and professional ironing results even in tight spaces.",
          "Strong suction vacuum motor ensures fast, dry, and clean fabric output."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 380V" },
          { key: "Vacuum Motor Power", value: "0.37 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Sleeve Arm Heating", value: "Integrated Resistance" },
          { key: "Dimensions (WxLxH)", value: "135 x 45 x 90 cm" }
        ]
      }
    },
    {
      id: "tek-cikisli-kazan-yari",
      category: "boiler-iron",
      katalogCategory: "kazanli-utu",
      img: "assets/images/tek_cikisli_kazan_yari.png",
      tr: {
        title: "Yarı Otomatik Tek Çıkışlı Buhar Kazanı",
        desc: "Yarı otomatik su besleme sistemi ile kontrollü ve güvenli buhar üretimi sağlar. Kompakt ve ergonomik tasarımı ile küçük atölyeler ve kuru temizlemeciler için uygundur.",
        bullets: [
          "Yarı otomatik sistemi ile güvenli ve kontrollü buhar üretimi sağlar.",
          "Tek çıkışlı yapısıyla profesyonel ütü sistemlerinde verimli kullanım sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 50Hz" },
          { key: "Rezistans Gücü", value: "3 kW" },
          { key: "Çalışma Basıncı", value: "3 Bar" },
          { key: "Kazan Hacmi", value: "5 Litre" },
          { key: "Emniyet Sistemi", value: "Çift Mekanik Limit Ventili" }
        ]
      },
      en: {
        title: "Single-Outlet Semi-Automatic Steam Boiler",
        desc: "Generates controlled and reliable high pressure steam using a semi-automatic valve system. Its compact design is a perfect fit for dry cleaners and small garment studios.",
        bullets: [
          "Ensures controlled and safe steam generation with semi-automatic control switches.",
          "Single-outlet layout is ideal for single professional ironing tables."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 50Hz" },
          { key: "Heating Power", value: "3 kW" },
          { key: "Working Pressure", value: "3 Bar" },
          { key: "Boiler Volume", value: "5 Liters" },
          { key: "Safety Valve", value: "Double Mechanical Limits" }
        ]
      }
    },
    {
      id: "pantolon-sisirme",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/pantolon_sisirme.png",
      tr: {
        title: "Kendinden Kazanlı Yatay Pantolon Şişirme Makinesi",
        desc: "Güçlü sıcak hava şişirme ve buhar verme sistemi ile pantolonlara ütü öncesi düzgün form kazandırır. Kendinden buhar kazanı sayesinde harici buhar kaynağı gerektirmez.",
        bullets: [
          "Güçlü sıcak hava sistemi ile pantolonlara düzgün form kazandırır.",
          "Kendinden kazanlı yapısı sayesinde harici buhar kazanı gerektirmez."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V" },
          { key: "Blower Fan Motoru", value: "0.75 kW" },
          { key: "Kazan Rezistans", value: "6.0 kW" },
          { key: "Çalışma Buhar Basıncı", value: "4 Bar" },
          { key: "Ebatlar (ExBoyxYük)", value: "140 x 60 x 100 cm" }
        ]
      },
      en: {
        title: "Self-Boiler Horizontal Trousers Topper",
        desc: "Utilizes a heavy-duty heated blower and steam injection system to pre-shape trousers before pressing. Features its own boiler, eliminating external steam dependencies.",
        bullets: [
          "Shapes trousers perfectly using a high-flow hot air blowing system.",
          "Operates independently without external steam boiler requirements due to its built-in tank."
        ],
        specs: [
          { key: "Power Supply", value: "380V" },
          { key: "Blower Fan Power", value: "0.75 kW" },
          { key: "Boiler Resistance", value: "6.0 kW" },
          { key: "Working Steam Pressure", value: "4 Bar" },
          { key: "Dimensions (WxLxH)", value: "140 x 60 x 100 cm" }
        ]
      }
    },
    {
      id: "cift-cep-kirma-presi",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/cift_cep_kirma_presi.png",
      tr: {
        title: "Çift Cep Kırma Presi",
        desc: "Çift istasyon yapısı ile üretim kapasitesini maksimize eden, gömlek ve pantolon cepleri için tasarlanmış profesyonel pres.",
        bullets: [
          "Çift istasyon sistemi ile üretim hızını artırır.",
          "Hassas presleme teknolojisi sayesinde düzgün cep formu sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Isıtıcı Rezistans", value: "7.5 kW" },
          { key: "Çalışma Basıncı", value: "6 Bar" },
          { key: "İstasyon Sayısı", value: "2 (Çift İstasyonlu)" },
          { key: "Ebatlar (ExBoyxYük)", value: "135 x 115 x 150 cm" }
        ]
      },
      en: {
        title: "Double Pocket Creasing Press",
        desc: "Professional press designed for shirt and trouser pockets, maximizing production capacity with double stations.",
        bullets: [
          "Increases production speeds with its double-station pneumatic layout.",
          "Provides neat and uniform pocket shapes utilizing precision pressing technologies."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Power", value: "7.5 kW" },
          { key: "Working Pressure", value: "6 Bar" },
          { key: "No. of Stations", value: "2 (Double-Station)" },
          { key: "Dimensions (WxLxH)", value: "135 x 115 x 150 cm" }
        ]
      }
    },
    {
      id: "kabinli-leke-paskarasi",
      category: "table",
      katalogCategory: "leke-makinalari",
      img: "assets/images/kabinli_leke_paskarasi.png",
      tr: {
        title: "Kabinli Leke Çıkartma Paskarası",
        desc: "Kapalı kabin yapısıyla solvent ve kimyasal buharları absorbe eden, tekstil atölyeleri için profesyonel leke çıkarma masası.",
        bullets: [
          "Güçlü vakum sistemi sayesinde lekeleri hızlı ve etkili şekilde temizler.",
          "Kabinli yapısı ile buhar ve kimyasal yayılımını minimum seviyeye indirir."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V" },
          { key: "Vakum Motoru", value: "0.55 kW" },
          { key: "Kabin Aydınlatması", value: "Dahili LED Armatür" },
          { key: "Kimyasal Tabancası", value: "2 Adet Pnömatik Tabanca" },
          { key: "Ebatlar (ExBoyxYük)", value: "100 x 85 x 185 cm" }
        ]
      },
      en: {
        title: "Stain Removal Table with Cabinet",
        desc: "Professional spot cleaning table for garment factories that absorbs solvent and chemical fumes with its enclosed cabinet.",
        bullets: [
          "Cleans stains rapidly and effectively thanks to its high-vacuum extraction.",
          "Enclosed cabinet keeps chemical and steam emission at a minimum level."
        ],
        specs: [
          { key: "Power Supply", value: "380V" },
          { key: "Vacuum Motor", value: "0.55 kW" },
          { key: "Cabinet Lighting", value: "Built-in LED" },
          { key: "Chemical Guns", value: "2x Pneumatic Spray Guns" },
          { key: "Dimensions (WxLxH)", value: "100 x 85 x 185 cm" }
        ]
      }
    },
    {
      id: "dikis-acma-paskarasi",
      category: "table",
      katalogCategory: "tasarruflu",
      img: "assets/images/dikis_acma_paskarasi.png",
      tr: {
        title: "Kendinden Kazanlı Dikiş Açma Paskarası",
        desc: "Gömlek, ceket ve pantolon dikiş hatlarını açmak ve düzgünleştirmek için entegre kazanlı dikiş paskarası.",
        bullets: [
          "Güçlü vakum sistemi sayesinde profesyonel ütüleme performansı sağlar.",
          "Dahili buhar kazanı ile harici buhar sistemine ihtiyaç duymaz."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 380V" },
          { key: "Rezistans Gücü", value: "1.5 kW" },
          { key: "Kazan Rezistans Gücü", value: "3 kW" },
          { key: "Vakum Gücü", value: "0.37 kW" },
          { key: "Masa Tipi", value: "Isıtmalı Dar Dikiş Paskarası" }
        ]
      },
      en: {
        title: "Self-Boiler Seam Opening Ironing Table",
        desc: "Seam opening ironing table with built-in boiler to smooth shirt, coat, and trouser seam lines.",
        bullets: [
          "Provides professional ironing performance with its high-suction vacuum motor.",
          "Integrated steam boiler eliminates the need for external steam supplies."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 380V" },
          { key: "Resistance Power", value: "1.5 kW" },
          { key: "Boiler Power", value: "3 kW" },
          { key: "Vacuum Power", value: "0.37 kW" },
          { key: "Table Type", value: "Heated Narrow Seam Table" }
        ]
      }
    },
    {
      id: "buhar-kazani-4-cikisli",
      category: "boiler-iron",
      katalogCategory: "otomatik-kazanlar",
      img: "assets/images/buhar_kazani_4_cikisli.png",
      tr: {
        title: "4 Çıkışlı Buhar Kazanı",
        desc: "Aynı anda 4 el ütüsünü besleyebilen, emniyet valfli ve basınç kontrollü endüstriyel buhar jeneratörü.",
        bullets: [
          "Aynı anda 4 farklı çıkıştan güçlü buhar desteği sağlar.",
          "Yoğun üretim yapan tekstil ve ütü işletmeleri için ideal kullanım sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Rezistans Gücü", value: "12 kW / 18 kW" },
          { key: "Çalışma Basıncı", value: "4 Bar" },
          { key: "Çıkış Sayısı", value: "4 Adet Buhar Çıkışı" },
          { key: "Kazan Hacmi", value: "30 Litre" }
        ]
      },
      en: {
        title: "4-Outlet Steam Boiler",
        desc: "Industrial steam generator with safety valves and pressure control, feeding up to 4 hand irons simultaneously.",
        bullets: [
          "Delivers strong steam support from 4 separate outlets at the same time.",
          "Ideal option for high-volume textile mills and busy ironing companies."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Resistance Power", value: "12 kW / 18 kW" },
          { key: "Working Pressure", value: "4 Bar" },
          { key: "No. of Outlets", value: "4x Steam Outlets" },
          { key: "Boiler Volume", value: "30 Liters" }
        ]
      }
    },
    {
      id: "dar-paskara-standart",
      category: "table",
      katalogCategory: "rezistanli",
      img: "assets/images/dar_paskara_standart.png",
      tr: {
        title: "Dar Paskara",
        desc: "Kompakt boyutları ile atölyelerde yer kaplamayan, vakumlu ve ısıtmalı standart dar paskara.",
        bullets: [
          "Dar alan ütüleme işlemleri için ergonomik ve profesyonel kullanım sağlar.",
          "Vakumlu sistemi sayesinde kumaşta düzgün ve kaliteli ütü sonucu sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V" },
          { key: "Vakum Motoru", value: "0.37 kW" },
          { key: "Rezistans Gücü", value: "1.2 kW" },
          { key: "Ebatlar (ExBoyxYük)", value: "130 x 40 x 90 cm" }
        ]
      },
      en: {
        title: "Standard Narrow Ironing Table",
        desc: "Standard narrow ironing table with vacuum suction and heating elements, saving space in small workshops.",
        bullets: [
          "Provides ergonomic and professional usability for narrow ironing areas.",
          "Vacuum system ensures flat, crease-free, and high-quality ironing results."
        ],
        specs: [
          { key: "Power Supply", value: "220V" },
          { key: "Vacuum Motor", value: "0.37 kW" },
          { key: "Table Heating", value: "1.2 kW" },
          { key: "Dimensions (WxLxH)", value: "130 x 40 x 90 cm" }
        ]
      }
    },
    {
      id: "mostra-presi",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/mostra_presi.png",
      tr: {
        title: "Mostra Presi",
        desc: "Tekstil ürünlerinin ön mostra, etek ve cep kısımlarını hassas ve standart preslemek için kullanılan endüstriyel pres.",
        bullets: [
          "Tekstil ürünlerinde hızlı ve profesyonel presleme işlemi sağlar.",
          "Dayanıklı yapısı ve otomatik sistemi ile endüstriyel kullanıma uygundur."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Isıtıcı Rezistans", value: "6.0 kW" },
          { key: "Çalışma Basıncı", value: "6 Bar" },
          { key: "Otomasyon Sistemi", value: "Mikroişlemci Kart Kontrollü" },
          { key: "Ebatlar (ExBoyxYük)", value: "140 x 110 x 150 cm" }
        ]
      },
      en: {
        title: "Facing (Mostra) Press Machine",
        desc: "Industrial press machine utilized for pressing the front facings, pocket welts, and hems of suits and coats.",
        bullets: [
          "Ensures fast and highly professional pressing operations for apparel products.",
          "Heavy-duty construction and automatic controls are ideal for industrial use."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Resistance", value: "6.0 kW" },
          { key: "Working Pressure", value: "6 Bar" },
          { key: "Automation System", value: "Microprocessor Board Control" },
          { key: "Dimensions (WxLxH)", value: "140 x 110 x 150 cm" }
        ]
      }
    },
    {
      id: "on-pres-utu",
      category: "press",
      katalogCategory: "endustriyel",
      img: "assets/images/on_pres_utu.png",
      tr: {
        title: "Ön Pres Ütüleme Makinesi",
        desc: "Ceket ön kısımlarına telalanma öncesinde düzgünlük kazandıran buhar ısıtmalı pnömatik ön pres makinesi.",
        bullets: [
          "Güçlü buhar destekli sistemi ile profesyonel presleme sağlar.",
          "Endüstriyel kullanım için dayanıklı ve verimli çalışma sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Rezistans Gücü", value: "4.5 kW" },
          { key: "Çalışma Basıncı", value: "6 Bar" },
          { key: "Buhar Giriş Ölçüsü", value: "1/2 inç" },
          { key: "Ebatlar (ExBoyxYük)", value: "115 x 100 x 140 cm" }
        ]
      },
      en: {
        title: "Front Part Pre-Pressing Machine",
        desc: "Steam-heated pneumatic pre-pressing machine giving coat front parts flat structure before interlining fusing.",
        bullets: [
          "Provides professional pressing results with its steam-supported pneumatic system.",
          "Extremely durable configuration optimized for efficient industrial operations."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Power", value: "4.5 kW" },
          { key: "Working Pressure", value: "6 Bar" },
          { key: "Steam Inlet Size", value: "1/2 inch" },
          { key: "Dimensions (WxLxH)", value: "115 x 100 x 140 cm" }
        ]
      }
    },
    {
      id: "buhar-kazani-3-cikisli",
      category: "boiler-iron",
      katalogCategory: "otomatik-kazanlar",
      img: "assets/images/buhar_kazani_3_cikisli.png",
      tr: {
        title: "3 Çıkışlı Buhar Kazanı",
        desc: "Aynı anda 3 ütü istasyonunu besleyebilen, emniyet limitli ve paslanmaz iç kazanlı buhar jeneratörü.",
        bullets: [
          "Aynı anda 3 farklı ütü sistemine güçlü buhar desteği sağlar.",
          "Endüstriyel kullanım için dayanıklı ve yüksek performanslı yapı sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Rezistans Gücü", value: "9.0 kW / 12.0 kW" },
          { key: "Çalışma Buhar Basıncı", value: "4 Bar" },
          { key: "Kazan Hacmi", value: "20 Litre" },
          { key: "Buhar Çıkış Adedi", value: "3 Adet Vana Çıkışı" }
        ]
      },
      en: {
        title: "3-Outlet Steam Boiler",
        desc: "Steam generator with stainless steel inner tank and safety limits, feeding up to 3 ironing stations.",
        bullets: [
          "Provides strong steam feeding for 3 separate iron systems simultaneously.",
          "Delivers durable construction and high-performance output for factory floors."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Resistance Power", value: "9.0 kW / 12.0 kW" },
          { key: "Working Steam Pressure", value: "4 Bar" },
          { key: "Boiler Volume", value: "20 Liters" },
          { key: "No. of Outlets", value: "3x Valve Outlets" }
        ]
      }
    },
    {
      id: "mini-dar-paskara",
      category: "table",
      katalogCategory: "rezistanli",
      img: "assets/images/mini_dar_paskara.png",
      tr: {
        title: "Mini Koymalı Dar Paskara",
        desc: "Pantolon paçaları, kollar ve detay dikişler için özel olarak tasarlanmış, mini boy pürüzsüz vakumlu paskara.",
        bullets: [
          "Dar yapısı sayesinde pantolon paça ve kol bölgelerinde hassas ütüleme sağlar.",
          "Güçlü vakum sistemi ile kumaş üzerinde pürüzsüz ve profesyonel sonuç sunar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V" },
          { key: "Vakum Motoru Gücü", value: "0.25 kW" },
          { key: "Rezistans Gücü", value: "1.0 kW" },
          { key: "Masa Yapısı", value: "Hassas Paça Aparatlı" },
          { key: "Ebatlar (ExBoyxYük)", value: "110 x 35 x 85 cm" }
        ]
      },
      en: {
        title: "Mini Narrow Ironing Table",
        desc: "Mini-sized smooth vacuum table designed specifically for pants bottoms, sleeve lines, and detailed seams.",
        bullets: [
          "Narrow frame enables precise ironing on trouser cuffs and sleeve areas.",
          "High suction vacuum motor guarantees smooth, flat, and professional fabric result."
        ],
        specs: [
          { key: "Power Supply", value: "220V" },
          { key: "Vacuum Motor Power", value: "0.25 kW" },
          { key: "Heating Power", value: "1.0 kW" },
          { key: "Table Style", value: "Trouser Cuff Shaped" },
          { key: "Dimensions (WxLxH)", value: "110 x 35 x 85 cm" }
        ]
      }
    },
    {
      id: "leke-paskarasi-kazanli",
      category: "table",
      katalogCategory: "leke-makinalari",
      img: "assets/images/leke_paskarasi_kazanli.png",
      tr: {
        title: "Kendinden Kazanlı Leke Çıkartma Paskarası",
        desc: "Dahili kazan ve vakum motorlu leke paskarası. Kumaş üzerindeki lekelerin buhar ve vakum tabancasıyla anında çıkarılmasını sağlar.",
        bullets: [
          "Güçlü vakum sistemi ile profesyonel leke çıkarma performansı sağlar.",
          "Dahili buhar kazanı sayesinde harici buhar sistemine ihtiyaç duymaz."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 380V" },
          { key: "Rezistans Gücü", value: "1.5 kW" },
          { key: "Kazan Rezistansı", value: "4.5 kW" },
          { key: "Vakum Motor Gücü", value: "0.55 kW" },
          { key: "Tabanca Sistemi", value: "Buhar ve Leke Püskürtme Tabancalı" }
        ]
      },
      en: {
        title: "Self-Boiler Stain Removal Table",
        desc: "Spotting table with built-in boiler and vacuum. Enables instant stain removal using vacuum and chemical spray guns.",
        bullets: [
          "Ensures professional stain extraction performance with its strong vacuum motor.",
          "Built-in steam generator cuts off dependencies on external boiler facilities."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 380V" },
          { key: "Table Heating", value: "1.5 kW" },
          { key: "Boiler Heating", value: "4.5 kW" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Gun Systems", value: "Equipped with Steam and Spotting Spray Guns" }
        ]
      }
    },
    {
      id: "genis-paskara-kazanli",
      category: "table",
      katalogCategory: "tasarruflu",
      img: "assets/images/genis_paskara_kazanli.png",
      tr: {
        title: "Kendinden Kazanlı Geniş Paskara",
        desc: "Geniş ütüleme yüzeyi ve entegre kazanı ile çarşaf, perde, kaban gibi büyük parçaları yüksek verimle ütüleyen paskara.",
        bullets: [
          "Geniş ütüleme yüzeyi ile büyük tekstil ürünlerinde yüksek çalışma konforu sunar.",
          "Dahili buhar kazanı sayesinde harici buhar sistemine ihtiyaç duymadan verimli kullanım sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Masa Rezistans Gücü", value: "2.5 kW" },
          { key: "Kazan Rezistans Gücü", value: "4.5 kW / 6.0 kW" },
          { key: "Vakum Motoru", value: "0.55 kW" },
          { key: "Masa Ebatları", value: "150 x 80 cm" }
        ]
      },
      en: {
        title: "Self-Boiler Wide Ironing Table",
        desc: "Wide ironing table with built-in boiler, pressing large fabrics like sheets, curtains, and coats with high efficiency.",
        bullets: [
          "Wide surfacing delivers high comfort and easy movement when ironing large textiles.",
          "Built-in boiler enables independent and efficient operation without external steam sources."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Table Heating", value: "2.5 kW" },
          { key: "Boiler Heating", value: "4.5 kW / 6.0 kW" },
          { key: "Vacuum Motor", value: "0.55 kW" },
          { key: "Table Area Size", value: "150 x 80 cm" }
        ]
      }
    },
    {
      id: "dar-kollu-paskara-kazanli",
      category: "table",
      katalogCategory: "kendinden-kazanli",
      img: "assets/images/dar_kollu_paskara_kazanli.png",
      tr: {
        title: "Kendinden Kazanlı Dar Kollu Paskara",
        desc: "Dahili kazanlı ve vakumlu ütü masası. Gömlek ve ceket kollarını kusursuz ütülemek için özel olarak ısıtmalı dar kol aparatı barındırır.",
        bullets: [
          "Güçlü vakum sistemi sayesinde profesyonel ütüleme performansı sağlar.",
          "Dahili buhar kazanı ile harici buhar sistemine ihtiyaç duymaz."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 380V" },
          { key: "Vakum Motoru Gücü", value: "0.37 kW" },
          { key: "Masa Rezistans Gücü", value: "1.5 kW" },
          { key: "Dahili Kazan Gücü", value: "3.0 kW" },
          { key: "Kol Aparatı", value: "Isıtmalı Kol Paskaralı" }
        ]
      },
      en: {
        title: "Self-Boiler Narrow Ironing Table with Sleeve Arm",
        desc: "Vacuum table with built-in boiler. Specially features a heated narrow sleeve arm to iron jacket and shirt sleeves cleanly.",
        bullets: [
          "High vacuum motor ensures professional, moisture-free fabric finishing.",
          "Integrated steam boiler operates independently without needing line systems."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 380V" },
          { key: "Vacuum Motor Power", value: "0.37 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Integrated Boiler Power", value: "3.0 kW" },
          { key: "Sleeve Attachment", value: "Heated Sleeve Arm Board" }
        ]
      }
    },
    {
      id: "emisli-uflemeli-paskara",
      category: "table",
      katalogCategory: "tasarruflu",
      img: "assets/images/emisli_uflemeli_paskara.png",
      tr: {
        title: "Emişli Üflemesi Kendinden Kazanlı Dar Kollu Bacalı Lambalı Paskara",
        desc: "Hassas kumaşlar için emiş ve üfleme (hava yastığı) özelliğine sahip, aydınlatmalı, bacalı ve dar kol aparatlı son teknoloji paskara.",
        bullets: [
          "Emiş ve üfleme sistemi sayesinde profesyonel ve düzgün ütüleme sağlar.",
          "Dahili buhar kazanı ile harici buhar sistemine ihtiyaç duymadan çalışır."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Üfleme Fan Motoru", value: "0.55 kW" },
          { key: "Vakum Motoru", value: "0.55 kW" },
          { key: "Kazan Rezistans Gücü", value: "4.5 kW" },
          { key: "Ekstra Özellikler", value: "Aydınlatma Armatürü & Baca Sistemi & Isıtmalı Kol Aparatı" }
        ]
      },
      en: {
        title: "Blow and Suction Ironing Table with Sleeve Arm, Light & Chimney",
        desc: "Advanced vacuum table with suction and blowing (air cushion) features for delicate fabrics, complete with built-in boiler, lighting, exhaust chimney, and heated sleeve board.",
        bullets: [
          "Blowing and suction systems create air cushion for perfect, trace-free fabric pressing.",
          "Built-in steam boiler operates without requiring centralized line boiler feeds."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Blower Fan Motor", value: "0.55 kW" },
          { key: "Vacuum Motor", value: "0.55 kW" },
          { key: "Boiler Heating Power", value: "4.5 kW" },
          { key: "Additional Specs", value: "Built-in Light Fixture, Smoke Exhaust Chimney, Heated Sleeve Arm Board" }
        ]
      }
    }
  ];

  // SSS Soruları
  const faqsData = [
    {
      tr: {
        q: "Sanayi tipi buharlı ütü nedir?",
        a: "Sanayi tipi buharlı ütü sistemleri; tekstil atölyeleri, konfeksiyon üretim tesisleri, modelhaneler ve kuru temizleme işletmelerinde kullanılan profesyonel ütüleme sistemleridir. Güçlü buhar performansı sayesinde hızlı, kaliteli ve verimli ütüleme sağlar.",
      },
      en: {
        q: "What is an industrial steam iron?",
        a: "Industrial steam iron systems are professional ironing systems used in textile workshops, garment manufacturing facilities, model rooms, and dry cleaning businesses. They provide fast, high-quality, and efficient ironing thanks to strong steam performance.",
      }
    },
    {
      tr: {
        q: "Buhar kazanı ne işe yarar?",
        a: "Buhar jeneratörleri ve kazanları, ütülere sürekli yüksek basınçlı buhar vererek dikişlerin düzgün açılmasını ve kumaşın nemlenmeden ütülenmesini sağlar.",
      },
      en: {
        q: "What is the purpose of a steam boiler?",
        a: "Steam generators and boilers feed professional irons with continuous high-pressure steam, opening fabric seams cleanly and ensuring moisture-free ironing.",
      }
    },
    {
      tr: {
        q: "Hangi ütü masası modelini seçmeliyim?",
        a: "İşletmenizin kapasitesine göre; kendinden kazanlı masalar harici buhar hattı olmayan yerler için, dar paskaralar dar dikiş açma işlemleri için, geniş masalar ise perde ve kaban gibi büyük tekstil ürünleri için uygundur.",
      },
      en: {
        q: "Which ironing board model should I choose?",
        a: "Based on business capacity; self-boiler boards are best for places without central steam lines, narrow tables suit seam creasing, and wide tables suit curtains and heavy coats.",
      }
    },
    {
      tr: {
        q: "Pres makinelerinin avantajları nelerdir?",
        a: "Omuz, yaka, cep ve cep kapağı gibi kritik konfeksiyon adımlarında standart, hatasız ve çok hızlı katlama/ütüleme performansı sağlayarak üretim kapasitenizi katlar.",
      },
      en: {
        q: "What are the benefits of pressing machines?",
        a: "They deliver standardized, error-free, and high-speed folding/pressing at critical garment stages (shoulders, collar, pockets, pocket flaps), multiplying output capacity.",
      }
    },
    {
      tr: {
        q: "Makineleriniz yerli üretim midir?",
        a: "Evet. Tüm UZMAN ÜTÜ buhar kazanları, paskaraları ve pres makineleri %100 yerli üretim olup, yüksek kaliteli yedek parça ve servis garantisine sahiptir.",
      },
      en: {
        q: "Are your machines locally manufactured?",
        a: "Yes. All UZMAN IRON steam boilers, vacuum tables, and press machines are 100% locally manufactured, backed by high-quality spare parts and service guarantees.",
      }
    },
    {
      tr: {
        q: "İstanbul dışına veya yurt dışına gönderim yapıyor musunuz?",
        a: "Evet. İstanbul merkezli fabrikamızdan Türkiye geneli tüm şehirlere ve global olarak yurt dışındaki tekstil üreticilerine güvenli ambalajlama ile sevkiyat yapıyoruz.",
      },
      en: {
        q: "Do you ship outside of Istanbul or internationally?",
        a: "Yes. From our Istanbul-based factory, we ship securely packaged machinery to all cities across Turkey and to textile manufacturers globally.",
      }
    },
    {
      tr: {
        q: "Teknik servis ve garanti desteğiniz var mı?",
        a: "Tüm UZMAN ÜTÜ makineleri üretim hatalarına karşı garantilidir. Kurulum, yedek parça temini ve acil teknik destek durumlarında hızlı servis ekibimizle hizmet vermekteyiz.",
      },
      en: {
        q: "Do you provide technical service and warranty support?",
        a: "All UZMAN ÜTÜ machinery is fully guaranteed against manufacturing defects. We offer fast service support for installation, spare parts, and urgent technical needs.",
      }
    },
    {
      tr: {
        q: "WhatsApp veya doğrudan telefon ile sipariş verebilir miyim?",
        a: "Evet. Bize ulaşın kısmındaki telefon numaralarından veya sağ alt köşedeki WhatsApp butonu ile satış ekibimizle anlık görüşerek siparişlerinizi oluşturabilirsiniz.",
      },
      en: {
        q: "Can I place an order via WhatsApp or direct phone call?",
        a: "Yes. You can contact our sales team instantly via the phone numbers in the contact section or the WhatsApp button in the bottom right corner to place orders.",
      }
    }
  ];

  // window objesine ekle (Script etiketleriyle yükleme için)
  window.App = {
    translations,
    productsData,
    faqsData
  };
})();
