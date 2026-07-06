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
      "cat-leke-makinalari": "Leke Çıkarma Makinaları",
      "cat-otomatik-kazanlar": "Otomatik Buhar Kazanları",
      "cat-rezistanli": "Rezistanslı Paskaralar",
      "cat-tasarruflu": "Tasarruflu Paskaralar",
      "cat-utu-masalari": "Ütü Masaları",
      "cat-utu-ve-masa": "Ütü ve Masa",
      "cat-yedek-parca": "Yedek Parçalar",

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
      "form-phone-label": "Telefon Numaranız",
      "form-phone-placeholder": "Örn. 05XX XXX XX XX",
      "form-subject-label": "İletişim Konusu",
      "form-subject-placeholder": "Lütfen bir konu seçiniz...",
      "form-message-label": "Mesajınız",
      "form-message-placeholder": "Detaylı bilgi almak istediğiniz konuyu yazınız...",
      "form-submit": "Gönder",
      "subject-modal-title": "Lütfen İletişim Konusunu Seçiniz",
      "subject-title-1": "Ürün Bilgisi & Fiyat Teklifi",
      "subject-title-2": "Teknik Servis & Bakım",
      "subject-title-3": "Yedek Parça Talebi",
      "subject-title-4": "Bayilik & İş Birliği",
      "subject-title-5": "Diğer",
      "val-name-empty": "Lütfen adınızı ve soyadınızı giriniz!",
      "val-email-empty": "Lütfen e-posta adresinizi giriniz!",
      "val-email-invalid": "Lütfen geçerli bir e-posta adresi giriniz!",
      "val-phone-empty": "Lütfen telefon numaranızı giriniz!",
      "val-phone-invalid": "Telefon numarası 11 haneli olmalıdır (Örn: 05465378221)!",
      "val-subject-empty": "Lütfen bir iletişim konusu seçiniz!",
      "val-message-empty": "Lütfen mesajınızı giriniz!",
      
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
      "hero-badge-1": "UZMAN • Kendinden Kazanlı Paskara",
      "hero-title-1": "Kendinden Kazanlı Dar Paskara (Kollu)",
      "hero-desc-1": "Dahili buhar kazanı, güçlü vakum motoru ve ısıtmalı dar kol aparatı sayesinde pantolon, ceket ve dar kesim kıyafetlerde pürüzsüz sonuçlar sağlayan profesyonel ütü masası.",
      "hero-badge-2": "UZMAN • Geniş Tabla Avantajı",
      "hero-title-2": "Kendinden Kazanlı Geniş Paskara",
      "hero-desc-2": "Geniş çalışma tablası, entegre buhar jeneratörü ve güçlü vakum emiş motoru ile kaban, ceket ve geniş ebatlı tekstil ürünlerinde maksimum verimlilik ve hız.",
      "hero-badge-3": "UZMAN • Katlanabilir Tasarım",
      "hero-title-3": "Katlanabilir Fanlı ve Kazanlı Ütü Masası",
      "hero-desc-3": "Butik atölyeler ve kuru temizlemeciler için katlanabilir ayak mekanizması, dahili buhar kazanı ve buhar emme/üfleme (hava yastığı) özellikli profesyonel sistem.",
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
      "cat-utu-ve-masa": "Irons & Boards",
      "cat-yedek-parca": "Spare Parts",

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
      "form-phone-label": "Your Phone Number",
      "form-phone-placeholder": "e.g. +90 5XX XXX XX XX",
      "form-subject-label": "Subject",
      "form-subject-placeholder": "Please select a subject...",
      "form-message-label": "Your Message",
      "form-message-placeholder": "Please enter your message in detail...",
      "form-submit": "Submit",
      "subject-modal-title": "Please Select a Contact Subject",
      "subject-title-1": "Product Info & Quotation",
      "subject-title-2": "Technical Service & Maintenance",
      "subject-title-3": "Spare Parts Inquiry",
      "subject-title-4": "Dealership & Partnership",
      "subject-title-5": "Other",
      "val-name-empty": "Please enter your name and surname!",
      "val-email-empty": "Please enter your email address!",
      "val-email-invalid": "Please enter a valid email address!",
      "val-phone-empty": "Please enter your phone number!",
      "val-phone-invalid": "Phone number must be exactly 11 digits (e.g. 05465378221)!",
      "val-subject-empty": "Please select a contact subject!",
      "val-message-empty": "Please enter your message!",
      
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
      "hero-badge-1": "UZMAN • Self-Boiler Table",
      "hero-title-1": "Self-Boiler Narrow Ironing Table (with Arm)",
      "hero-desc-1": "Professional ironing table with built-in boiler, powerful vacuum motor, and heated narrow sleeve arm, delivering perfect results on pants, jackets, and tight-cut garments.",
      "hero-badge-2": "UZMAN • Wide Board Advantage",
      "hero-title-2": "Self-Boiler Wide Ironing Table",
      "hero-desc-2": "Maximum efficiency and speed for coats, jackets, and large textiles thanks to its wide working table, integrated steam generator, and powerful vacuum suction.",
      "hero-badge-3": "UZMAN • Foldable Design",
      "hero-title-3": "Foldable Ironing Board with Fan and Boiler",
      "hero-desc-3": "A professional folding board system with scissor-legs mechanism, built-in boiler, and suction/blowing (air cushion) features for boutique shops and dry cleaners.",
    },
  };

  // Ürünler Veritabanı (28 adet)
  const productsData = [
    {
      id: "utu-switch",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/utu_switch.png",
      tr: {
        title: "Ütü Switch",
        desc: "Sanayi tipi el ütülerinde buhar püskürtme valfini tetikleyen, kırmızı basma butonlu, ısıya ve yoğun kullanıma dayanıklı sap içi mikro switch.",
        bullets: [
          "Ütü sapı içine mükemmel oturan standart mikro switch ebatları.",
          "Yoğun seri kullanımlarda kararlı çalışma ve anında tetikleme tepkisi.",
          "Isıya dayanıklı dış bakalit koruyucu gövde yapısı."
        ],
        specs: [
          { key: "Akım Değeri", value: "16(5)A / 250V AC" },
          { key: "Maks. Sıcaklık", value: "T85 (85°C)" },
          { key: "Buton Rengi", value: "Kırmızı" },
          { key: "Uygulama", value: "Sanayi Ütü Sap İçi Buhar Butonu" }
        ]
      },
      en: {
        title: "Steam Iron Handle Microswitch",
        desc: "Heavy-duty microswitch with a red actuator button, heat and wear resistant, designed to trigger steam valves from iron handles.",
        bullets: [
          "Standard microswitch dimensions fitting perfectly inside steam iron handles.",
          "Highly responsive tactile action built for high-speed continuous usage.",
          "Heat-resistant outer bakelite protective housing."
        ],
        specs: [
          { key: "Current Rating", value: "16(5)A / 250V AC" },
          { key: "Max. Temperature", value: "T85 (85°C)" },
          { key: "Button Color", value: "Red" },
          { key: "Application", value: "Steam Iron Handle Actuation Button" }
        ]
      }
    },
    {
      id: "vakum-motoru",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/vakum_motoru.jpg",
      tr: {
        title: "Vakum Motoru",
        desc: "Ütü paskaralarında güçlü hava emişi sağlayarak kumaşın kurumasını ve tablaya yapışmasını sağlayan, sessiz ve yüksek verimli radyal vakum motoru fanı.",
        bullets: [
          "Yüksek emiş debisi ile üst tabladaki buharı anında tahliye eder.",
          "Dinamik balans ayarı yapılmış metal çarkı ile sessiz ve titreşimsiz çalışma.",
          "Isınmaya karşı termik korumalı endüstriyel bobin motor yapısı."
        ],
        specs: [
          { key: "Güç Değeri", value: "0.37 kW / 0.55 kW" },
          { key: "Çalışma Voltajı", value: "220V / 380V" },
          { key: "Motor Devri", value: "2800 d/dak" },
          { key: "Gövde Malzemesi", value: "Statik Boyalı Çelik Sac" }
        ]
      },
      en: {
        title: "Ironing Table Vacuum Motor",
        desc: "Quiet and high-efficiency radial vacuum motor fan, providing strong air suction to dry garments and hold them flat on ironing tables.",
        bullets: [
          "High flow rate suction extracts steam from the table surface instantly.",
          "Dynamically balanced steel impeller delivers silent and vibration-free runs.",
          "Industrial motor design with built-in thermal overload protection."
        ],
        specs: [
          { key: "Power Output", value: "0.37 kW / 0.55 kW" },
          { key: "Operating Voltage", value: "220V / 380V" },
          { key: "Fan Speed", value: "2800 RPM" },
          { key: "Housing Material", value: "Powder Coated Sheet Metal" }
        ]
      }
    },
    {
      id: "basinc-anahtari",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/basinc_anahtari.png",
      tr: {
        title: "Basınç Anahtarı",
        desc: "Buhar kazanlarında ayarlanan buhar basıncına ulaşıldığında rezistans akımını keserek basıncı sabit tutan pirinç gövdeli basınç kontrol sensörü.",
        bullets: [
          "Buhar kazanlarında basınç sınır kontrolü için son derece hassas ölçüm.",
          "Paslanmaz çelik membranlı ve pirinç dişli dayanıklı gövde.",
          "Elektriksel arkları önleyen gümüş alaşımlı kontaklar."
        ],
        specs: [
          { key: "Bağlantı Dişi", value: "G 1/4\" Erkek Dişli" },
          { key: "Çalışma Basıncı", value: "1 - 5 Bar Ayarlanabilir" },
          { key: "Gövde Malzemesi", value: "Pirinç ve Paslanmaz Çelik" },
          { key: "Akım Değeri", value: "16A / 250V" }
        ]
      },
      en: {
        title: "Steam Boiler Pressure Switch",
        desc: "Brass-body pressure sensor that regulates steam pressure by cutting off heating elements when reaching preset pressure levels.",
        bullets: [
          "Highly precise measurement for pressure limit control in steam boilers.",
          "Durable construction with stainless steel membrane and brass connection thread.",
          "Silver alloy contacts prevent electrical arcing."
        ],
        specs: [
          { key: "Connection Thread", value: "G 1/4\" Male Thread" },
          { key: "Pressure Range", value: "1 - 5 Bar Adjustable" },
          { key: "Body Material", value: "Brass & Stainless Steel" },
          { key: "Current Rating", value: "16A / 250V" }
        ]
      }
    },
    {
      id: "basinc-salteri",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/basinc_salteri.jpg",
      tr: {
        title: "Basınç Şalteri",
        desc: "Sanayi tipi merkezi buhar sistemleri ve otomatik kazanlarda basıncı hassas olarak izleyip kontrol eden, göstergeli, yüksek güvenlik limitli basınç şalteri.",
        bullets: [
          "Ön paneldeki skala ve ayar vidaları sayesinde hassas basınç limit ayarı.",
          "Yüksek basınç durumlarında kazan rezistansını kapatarak patlamaları önler.",
          "Darbelere ve neme karşı korumalı plastik kapaklı çelik gövde."
        ],
        specs: [
          { key: "Basınç Ayar Aralığı", value: "2 - 14 Bar (veya 1 - 5 Bar)" },
          { key: "Bağlantı Ölçüsü", value: "1/4\" NPT veya G 1/4\"" },
          { key: "Kontak Tipi", value: "Tek Kutuplu Çift Yönlü (SPDT)" },
          { key: "Model Uyum", value: "Otomatik Kazanlar ve Merkezi Sistemler" }
        ]
      },
      en: {
        title: "Box-Type Steam Pressure Controller",
        desc: "Heavy-duty box-type pressure controller with indicator dial, designed to accurately monitor and limit steam pressure in central steam boilers.",
        bullets: [
          "Precise limit adjustment using the front-panel dial and screw setups.",
          "Protects boilers by shutting down heater grids during overpressure events.",
          "Steel enclosure with splash-proof plastic cover shield."
        ],
        specs: [
          { key: "Pressure Range", value: "2 - 14 Bar (or 1 - 5 Bar)" },
          { key: "Connection Size", value: "1/4\" NPT or G 1/4\"" },
          { key: "Contact System", value: "Single Pole Double Throw (SPDT)" },
          { key: "Compatibility", value: "Automatic Boilers & Central Systems" }
        ]
      }
    },
    {
      id: "paskara-switch",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/paskara_switch.png",
      tr: {
        title: "Paskara Switch",
        desc: "Ütü paskaralarında vakum emiş motorunu ayak pedalıyla kontrol etmeyi sağlayan, yüksek açma-kapama ömrüne sahip mekanik limit switch.",
        bullets: [
          "Pedal mekanizmaları için özel yaylı pim tasarımı.",
          "Hassas algılama ve anında motor devreye alma/çıkarma tepki süresi.",
          "Isıya ve toza dayanıklı dayanıklı plastik koruma gövdesi."
        ],
        specs: [
          { key: "Akım Değeri", value: "15A / 250V AC" },
          { key: "Kontak Tipi", value: "1 NO + 1 NC" },
          { key: "Mekanik Ömür", value: "Min. 1.000.000 Çevrim" },
          { key: "Kullanım Yeri", value: "Paskara Ayak Pedalları" }
        ]
      },
      en: {
        title: "Ironing Table Foot Pedal Switch",
        desc: "Mechanical limit switch with high operational life, designed to control vacuum suction motors via foot pedals in ironing tables.",
        bullets: [
          "Special spring-loaded pin layout optimized for foot pedals.",
          "Highly responsive tactile feel and instantaneous switching.",
          "Heat and dust resistant robust plastic enclosure."
        ],
        specs: [
          { key: "Current Rating", value: "15A / 250V AC" },
          { key: "Contact Type", value: "1 NO + 1 NC" },
          { key: "Mechanical Life", value: "Min. 1,000,000 Cycles" },
          { key: "Application", value: "Ironing Table Foot Pedals" }
        ]
      }
    },
    {
      id: "paskara-termostati",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/paskara_termostati.png",
      tr: {
        title: "Paskara Termostatı",
        desc: "Paskara üst tablalarının sıcaklığını istenilen derecede sabit tutmayı sağlayan, hassas kılcal borulu endüstriyel termostat.",
        bullets: [
          "30°C - 120°C arası hassas sıcaklık ayarı kontrolü sağlar.",
          "Kılcal borusu sayesinde tabla sıcaklığını doğrudan ve doğru şekilde ölçer.",
          "Dayanıklı paslanmaz kontak yapısı ile uzun ömürlü kullanım."
        ],
        specs: [
          { key: "Sıcaklık Aralığı", value: "50°C - 300°C" },
          { key: "Kılcal Boyu", value: "1000 mm" },
          { key: "Akım Kapasitesi", value: "16A / 250V" },
          { key: "Sensör Malzemesi", value: "Bakır Kılcal Boru" }
        ]
      },
      en: {
        title: "Ironing Table Capillary Thermostat",
        desc: "Industrial thermostat with a precise capillary tube, designed to maintain ironing table temperatures at the desired level.",
        bullets: [
          "Provides precise temperature control setting between 30°C and 120°C.",
          "Accurately measures table temperature via copper capillary sensor.",
          "Durable stainless contact layout guarantees long working life."
        ],
        specs: [
          { key: "Temperature Range", value: "50°C - 300°C" },
          { key: "Capillary Length", value: "1000 mm" },
          { key: "Current Capacity", value: "16A / 250V" },
          { key: "Sensor Material", value: "Copper Capillary Tube" }
        ]
      }
    },
    {
      id: "sivi-seviye-rolesi",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/sivi_seviye_rolesi.png",
      tr: {
        title: "Sıvı Seviye Kontrol Rölesi",
        desc: "Buhar kazanlarında su seviyesini elektrotlar yardımıyla kontrol ederek rezistansların susuz çalışmasını önleyen elektronik sıvı seviye rölesi.",
        bullets: [
          "Kanal içindeki su seviyesini elektrotlar üzerinden hassas takip eder.",
          "Düşük su seviyesinde rezistans elektriğini keserek kazanı korur.",
          "Otomatik pompa kontrolü ile kazana otomatik su takviyesi sağlar."
        ],
        specs: [
          { key: "Besleme Voltajı", value: "220V AC" },
          { key: "Kontrol Tipi", value: "Elektrotlu Seviye Kontrolü" },
          { key: "Çıkış Rölesi", value: "8A / 250V (1 NO/NC)" },
          { key: "Montaj", value: "DIN Ray Uyumlu" }
        ]
      },
      en: {
        title: "Liquid Level Control Relay",
        desc: "Electronic liquid level controller that monitors boiler water levels via electrodes to protect heating elements from dry running.",
        bullets: [
          "Precisely tracks water levels inside the boiler tank via sensing probes.",
          "Safeguards heating elements by cutting power off during low-water states.",
          "Ensures automatic pump triggering for water replenishments."
        ],
        specs: [
          { key: "Supply Voltage", value: "220V AC" },
          { key: "Control Method", value: "Electrode Probe Sensing" },
          { key: "Output Contact", value: "8A / 250V (1 NO/NC)" },
          { key: "Mounting", value: "DIN Rail Mounting" }
        ]
      }
    },
    {
      id: "utu-hortumu",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/utu_hortumu.jpg",
      tr: {
        title: "Ütü Hortumu 6*11mm",
        desc: "Profesyonel el ütüleri ve buhar kazanları arasında yüksek basınçlı buhar iletimi sağlayan, örgü kaplamalı, ısıya dayanıklı silikon ütü hortumu.",
        bullets: [
          "6x11 mm standart iç ve dış çap ölçülerine sahiptir.",
          "Dış örgü kaplaması sürtünmeye ve yırtılmaya karşı ekstra dayanıklılık sunar.",
          "Yüksek buhar sıcaklıklarına ve yüksek basınca dayanıklı silikon iç tüp."
        ],
        specs: [
          { key: "İç Çap", value: "6 mm" },
          { key: "Dış Çap", value: "11 mm" },
          { key: "Malzeme", value: "Isıya Dayanıklı Silikon ve Örgü Kaplama" },
          { key: "Basınç Dayanımı", value: "Max. 10 Bar" }
        ]
      },
      en: {
        title: "Steam Iron Hose 6*11mm",
        desc: "Braided high-pressure heat-resistant silicone steam hose for connecting professional steam hand irons to automatic steam boilers.",
        bullets: [
          "Standard 6x11 mm inner and outer diameter sizing.",
          "Outer textile braiding provides extra resistance against abrasion and tears.",
          "High temperature and high pressure resistant silicone inner core."
        ],
        specs: [
          { key: "Inner Diameter", value: "6 mm" },
          { key: "Outer Diameter", value: "11 mm" },
          { key: "Material", value: "Heat-Resistant Silicone & Braided Outer Cover" },
          { key: "Pressure Rating", value: "Max. 10 Bar" }
        ]
      }
    },
    {
      id: "utu-kablosu",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/utu_kablosu.png",
      tr: {
        title: "Ütü Kablosu",
        desc: "Sanayi ütülerinde hareket kolaylığı sağlayan, bükülmelere ve aşınmaya karşı kırmızı-siyah kumaş örgü kaplı, ısıya dayanıklı elektrik kablosu.",
        bullets: [
          "Kumaş örgü kaplaması kablonun dolanmasını ve düğümlenmesini önler.",
          "Ütü tabanının yüksek sıcaklığına dayanıklı silikon iç izole katmanı.",
          "Topraklı fişi ile güvenli elektrik bağlantısı."
        ],
        specs: [
          { key: "Kablo Kesiti", value: "3 x 1.0 mm² veya 3 x 1.5 mm²" },
          { key: "Dış Kaplama", value: "Kırmızı-Siyah Pamuk/Polyester Örgü" },
          { key: "Özellik", value: "Bükülmeye Dayanıklı, Isı Yalıtımlı" }
        ]
      },
      en: {
        title: "Fabric Braided Iron Cable",
        desc: "Heat-resistant electric cable covered with red-black fabric braiding, protecting against kinks and wear while offering easy movement for industrial steam irons.",
        bullets: [
          "Fabric braided cover prevents the power cord from tangling or kinking.",
          "Silicone inner insulation withstands high contact temperatures of iron plates.",
          "Grounded safety plug for secure electrical connection."
        ],
        specs: [
          { key: "Cable Spec", value: "3 x 1.0 mm² or 3 x 1.5 mm²" },
          { key: "Outer Braid", value: "Red-Black Woven Cotton/Polyester" },
          { key: "Feature", value: "Kink-Resistant, High Heat Insulation" }
        ]
      }
    },
    {
      id: "paskara-bezi",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/paskara_bezi.jpg",
      tr: {
        title: "Dar & Geniş Paskara Bezi",
        desc: "Sanayi tipi dar ve geniş paskaralar için yüksek ısıya dayanıklı, buhar geçirgenliği yüksek, süngerli ve polyester dokulu profesyonel ütü masası kılıfı.",
        bullets: [
          "Yüksek sıcaklıklara dayanıklı özel dokuma polyester kumaş.",
          "Yüksek buhar geçirgenliği sayesinde nem birikmesini önler.",
          "Dar ve geniş masa modelleri için uygun ebat seçenekleri mevcuttur."
        ],
        specs: [
          { key: "Kumaş Tipi", value: "Isıya Dayanıklı Polyester Dokuma" },
          { key: "Alt Dolgu", value: "Isıya Dayanıklı Sünger" },
          { key: "Renk", value: "Mavi" },
          { key: "Uygulama", value: "Dar ve Geniş Paskaralar" }
        ]
      },
      en: {
        title: "Narrow & Wide Ironing Table Cover",
        desc: "High heat-resistant, highly steam-permeable professional ironing table cover with foam backing and polyester weave, designed for industrial narrow and wide boards.",
        bullets: [
          "Special heat-resistant woven polyester fabric for long service life.",
          "Excellent steam permeability prevents moisture condensation.",
          "Available in custom dimensions fitting both narrow and wide tables."
        ],
        specs: [
          { key: "Fabric Type", value: "Heat-Resistant Polyester Weave" },
          { key: "Backing", value: "High-Temperature Resistant Sponge" },
          { key: "Color", value: "Blue" },
          { key: "Compatibility", value: "Narrow & Wide Ironing Boards" }
        ]
      }
    },
    {
      id: "goz-lamba",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/goz_lamba.png",
      tr: {
        title: "Sinyal Lambası (Göz Lamba)",
        desc: "Buhar kazanları ve paskaraların elektrik panolarında akım, ısıtma ve su seviyesi durumlarını göstermek için kullanılan 220V dayanıklı uyarı lambası.",
        bullets: [
          "Yüksek görünürlüklü parlak neon/LED lamba yapısı.",
          "Isıya ve darbelere dayanıklı polikarbonat mercek.",
          "Kolay kablo bağlantısı sağlayan terminal yapısı."
        ],
        specs: [
          { key: "Çalışma Voltajı", value: "220V AC" },
          { key: "Renk", value: "Kırmızı / Turuncu" },
          { key: "Montaj Çapı", value: "10 mm" },
          { key: "Kullanım Alanı", value: "Kazanlar, Paskaralar ve Panolar" }
        ]
      },
      en: {
        title: "Indicator Lamp (Signal Light)",
        desc: "Durable 220V indicator lamp used in steam boiler and ironing board electrical panels to show power, heating, and water level status.",
        bullets: [
          "High-visibility bright neon/LED light construction.",
          "Heat and impact resistant polycarbonate lens shroud.",
          "Quick connect terminals for easy wiring setup."
        ],
        specs: [
          { key: "Operating Voltage", value: "220V AC" },
          { key: "Color", value: "Red / Orange" },
          { key: "Mounting Diameter", value: "10 mm" },
          { key: "Application", value: "Boilers, Ironing Tables, Control Panels" }
        ]
      }
    },
    {
      id: "kazan-rezistansi",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/kazan_rezistansi.png",
      tr: {
        title: "Buhar Kazanı Rezistansi",
        desc: "Sanayi tipi otomatik buhar kazanları için paslanmaz çelikten üretilmiş, pirinç flanşlı, yüksek ısıl verimliliğe ve uzun ömre sahip elektrikli ısıtıcı.",
        bullets: [
          "Yüksek kaliteli paslanmaz çelik tüp koruma malzemesi.",
          "Kireçlenmeye ve korozyona dayanıklı özel alaşım kaplama.",
          "Standart vidalı pirinç flanş ile kolay montaj imkanı."
        ],
        specs: [
          { key: "Güç Seçenekleri", value: "4.5 kW / 7.5 kW / 10 kW" },
          { key: "Malzeme", value: "Paslanmaz Çelik Tüp, Pirinç Flanş" },
          { key: "Çalışma Voltajı", value: "220V / 380V" },
          { key: "Bağlantı Tipi", value: "Dişli Vidalı" }
        ]
      },
      en: {
        title: "Steam Boiler Heating Element",
        desc: "Stainless steel electric heating element with brass flange, offering high thermal efficiency and long operational lifetime for industrial steam boilers.",
        bullets: [
          "High-quality stainless steel heating tube sheath.",
          "Anti-corrosion coating prevents mineral scale build-up.",
          "Easy installation with standard threaded brass flange."
        ],
        specs: [
          { key: "Power Options", value: "4.5 kW / 7.5 kW / 10 kW" },
          { key: "Material", value: "Stainless Steel Tube, Brass Flange" },
          { key: "Voltage", value: "220V / 380V" },
          { key: "Connection Thread", value: "Screwed Threaded Type" }
        ]
      }
    },
    {
      id: "kontaktor",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/kontaktor.png",
      tr: {
        title: "Elektrikli Kontaktör",
        desc: "Buhar kazanları ve paskaraların rezistans ve motor devrelerini güvenle açıp kapatan, yüksek akım korumalı endüstriyel AC kontaktör.",
        bullets: [
          "Rezistansların yüksek güç yüklerini güvenli bir şekilde anahtarlar.",
          "Uzun mekanik ve elektriksel ömre sahip dayanıklı kontak alaşımı.",
          "Kolay ray montajı ve pano içi düzenli kablolama imkanı."
        ],
        specs: [
          { key: "Bobin Voltajı", value: "220V AC" },
          { key: "Akım Değeri", value: "9A / 12A / 18A / 25A" },
          { key: "Kutup Sayısı", value: "3 Kutup (3P)" },
          { key: "Standart", value: "IEC / EN 60947" }
        ]
      },
      en: {
        title: "Electrical Contactor",
        desc: "Industrial AC contactor with high current capacity, designed to safely switch heater and motor circuits in steam boilers and ironing boards.",
        bullets: [
          "Safely switches high-power resistive loads of heating elements.",
          "Premium contact alloy ensures long mechanical and electrical service life.",
          "Easy DIN rail mounting and organized panel cabling."
        ],
        specs: [
          { key: "Coil Voltage", value: "220V AC" },
          { key: "Current Rating", value: "9A / 12A / 18A / 25A" },
          { key: "Number of Poles", value: "3 Poles (3P)" },
          { key: "Standard", value: "IEC / EN 60947" }
        ]
      }
    },
    {
      id: "paskara-rezistansi",
      category: "spare",
      katalogCategory: "yedek-parca",
      img: "assets/images/paskara_rezistansi.png",
      tr: {
        title: "Paskara Rezistansı",
        desc: "Ütü paskaralarının üst tablasını ısıtarak kumaşta nem birikmesini önleyen, özel U-formunda bükülmüş, homojen ısı dağılımlı endüstriyel tabla rezistansı.",
        bullets: [
          "Masa yüzeyinde homojen ısı dağılımı sağlayarak nem lekelerini engeller.",
          "Özel bükümlü paslanmaz yapısı ile paskaraların altına tam uyum sağlar.",
          "Hızlı ısınma süresi ile zamandan ve enerjiden tasarruf sağlar."
        ],
        specs: [
          { key: "Güç Değeri", value: "1000W / 1500W" },
          { key: "Çalışma Voltajı", value: "220V AC" },
          { key: "Malzeme", value: "Paslanmaz Çelik Tüp" },
          { key: "Kullanım Alanı", value: "Paskara Üst Tabla Isıtması" }
        ]
      },
      en: {
        title: "Ironing Table Heating Element",
        desc: "U-shaped industrial board heating element providing uniform heat distribution to keep table surfaces dry and prevent moisture accumulation in fabrics.",
        bullets: [
          "Prevents moisture stains by ensuring homogeneous heat distribution on the surface.",
          "Specially shaped stainless steel structure perfectly fits under the board.",
          "Fast heat-up time saves both work cycle time and energy consumption."
        ],
        specs: [
          { key: "Power Rating", value: "1000W / 1500W" },
          { key: "Operating Voltage", value: "220V AC" },
          { key: "Material", value: "Stainless Steel Tube" },
          { key: "Application", value: "Ironing Table Top Heating" }
        ]
      }
    },
    {
      id: "dikis-acma-paskarasi",
      category: "table",
      katalogCategory: "endustriyel",
      img: "assets/images/dikis_acma_paskarasi.png",
      tr: {
        title: "Dikiş Açma Paskarası",
        desc: "Pantolon, ceket ve palto dikişlerinin düzgün ve pürüzsüz açılması için özel olarak tasarlanmış, rezistans ısıtmalı dar üst tablaya sahip dikiş açma paskarası.",
        bullets: [
          "Dikiş açma işlemleri için özel dar ve ergonomik tabla tasarımı.",
          "Rezistans ısıtmalı tabla yüzeyin kuru kalmasını ve nemlenmesini önler.",
          "Endüstriyel atölyelerde seri üretim dikiş kırma adımlarına uygundur."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "230V / 380V" },
          { key: "Vakum Motoru Gücü", value: "0.37 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.5 kW" },
          { key: "Masa Ebatları", value: "140 x 40 cm" }
        ]
      },
      en: {
        title: "Seam Opening Ironing Table",
        desc: "Seam opening ironing table featuring a resistance-heated narrow top board, specially designed to open flat and smooth seams on trousers, jackets, and coats.",
        bullets: [
          "Special narrow and ergonomic board layout designed specifically for seam flattening.",
          "Resistance-heated board keeps the surface completely dry during operation.",
          "Perfectly suited for serial seam creasing steps in industrial garment workshops."
        ],
        specs: [
          { key: "Power Supply", value: "230V / 380V" },
          { key: "Vacuum Motor Power", value: "0.37 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Table Dimensions", value: "140 x 40 cm" }
        ]
      }
    },
    {
      id: "silter-210-el-utusu",
      category: "boiler-iron",
      katalogCategory: "utu-ve-masa",
      img: "assets/images/silter_210_el_utusu.png",
      tr: {
        title: "Silter-210 Buharlı Ağır El Ütüsü",
        desc: "Profesyonel kuru temizleme ve konfeksiyon atölyeleri için tasarlanmış, mantar saplı, kalın tabanlı ve güçlü buhar püskürtmeli ağır hizmet tipi sanayi ütüsü.",
        bullets: [
          "Ergonomik mantar sap tasarımı ile el yormayan konforlu çalışma sağlar.",
          "Kalın alüminyum tabanı ile mükemmel ısı koruması ve düzgün baskı sunar.",
          "Endüstriyel buhar kazanlarıyla uyumlu bağlantı tertibatı."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 50Hz" },
          { key: "Rezistans Gücü", value: "800W" },
          { key: "Taban Malzemesi", value: "Kalın Alüminyum Taban" },
          { key: "Sap Yapısı", value: "Isı Yalıtımlı Mantar Sap" },
          { key: "Ağırlık", value: "Yaklaşık 2.1 kg" }
        ]
      },
      en: {
        title: "Silter-210 Heavy Duty Steam Iron",
        desc: "Heavy-duty industrial steam iron designed for professional dry cleaners and garment workshops, equipped with a cork handle, thick soleplate, and strong steam spray.",
        bullets: [
          "Ergonomic cork handle design provides comfortable, fatigue-free operation.",
          "Thick aluminum soleplate offers excellent heat retention and flat pressing.",
          "Fully compatible connection assembly for industrial steam boilers."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 50Hz" },
          { key: "Heating Power", value: "800W" },
          { key: "Soleplate Material", value: "Thick Aluminum Soleplate" },
          { key: "Handle Structure", value: "Heat-Insulated Cork Handle" },
          { key: "Weight", value: "Approx. 2.1 kg" }
        ]
      }
    },
    {
      id: "silter-275-el-utusu",
      category: "boiler-iron",
      katalogCategory: "utu-ve-masa",
      img: "assets/images/silter_275_el_utusu.png",
      tr: {
        title: "Silter-275 Buharlı Hafif Ütü",
        desc: "Hassas kumaşlar için kolay hareket kabiliyeti sağlayan, mantar saplı, hafif ve ergonomik tasarıma sahip profesyonel buharlı el ütüsü.",
        bullets: [
          "Hafif yapısı sayesinde uzun süreli çalışmalarda kol yorgunluğunu önler.",
          "Hassas termostat kontrolü ile ipek, saten gibi kumaşlarda güvenli ütüleme.",
          "Mantar sap ısı yalıtımı sağlayarak konforu artırır."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 50Hz" },
          { key: "Rezistans Gücü", value: "800W" },
          { key: "Taban Malzemesi", value: "Alüminyum Taban" },
          { key: "Ağırlık", value: "Yaklaşık 1.6 kg" }
        ]
      },
      en: {
        title: "Silter-275 Light Steam Iron",
        desc: "Professional steam hand iron featuring a cork handle, lightweight and ergonomic design, ensuring easy movement when pressing delicate fabrics.",
        bullets: [
          "Lightweight structure prevents arm fatigue during long-duration shifts.",
          "Precise thermostat control for safe ironing on fabrics like silk and satin.",
          "Cork handle provides high heat insulation, enhancing user comfort."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 50Hz" },
          { key: "Heating Power", value: "800W" },
          { key: "Soleplate Material", value: "Aluminum Soleplate" },
          { key: "Weight", value: "Approx. 1.6 kg" }
        ]
      }
    },
    {
      id: "katlanabilir-fanli-kazanli-masa",
      category: "table",
      katalogCategory: "utu-ve-masa",
      img: "assets/images/katlanabilir_fanli_kazanli_masa.png",
      tr: {
        title: "Katlanabilir Fanlı ve Kazanlı Ütü Masası",
        desc: "Ev tipi butik atölyeler ve kuru temizleme dükkanları için katlanabilir, dahili buhar kazanlı ve emiş/üfleme fan motorlu profesyonel ütü masası.",
        bullets: [
          "Katlanabilir makas ayak sistemi ile kullanılmadığında kolayca saklanır.",
          "Dahili buhar kazanı ve el ütüsü çıkışı ile bağımsız paket sistem.",
          "Fanlı emiş/üfleme sistemi (hava yastığı) hassas ütülemede iz bırakmaz."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V" },
          { key: "Kazan Rezistans Gücü", value: "2.0 kW" },
          { key: "Fan Motoru Gücü", value: "0.1 kW" },
          { key: "Özellik", value: "Emişli & Üflemeli & Katlanabilir Mekanizma" }
        ]
      },
      en: {
        title: "Foldable Ironing Board with Fan and Boiler",
        desc: "Foldable professional ironing board with built-in steam boiler and suction/blowing fan motor, ideal for boutique tailor shops and home dry cleaners.",
        bullets: [
          "Foldable scissor legs design makes it easy to store when not in use.",
          "Self-contained package system with built-in boiler and hand iron outlet.",
          "Suction and blowing fan (air cushion) prevents traces on delicate garments."
        ],
        specs: [
          { key: "Power Supply", value: "220V" },
          { key: "Boiler Heating Power", value: "2.0 kW" },
          { key: "Fan Motor Power", value: "0.1 kW" },
          { key: "Feature", value: "Blowing & Suction & Foldable System" }
        ]
      }
    },
    {
      id: "dikis-acma-paskarasi-kazanli",
      category: "table",
      katalogCategory: "endustriyel",
      img: "assets/images/dikis_acma_paskarasi_kazanli.png",
      tr: {
        title: "Kendinden Kazanlı Dikiş Açma Paskarası",
        desc: "Dahili buhar kazanı, güçlü vakum motoru ve özel dar tabla formuyla harici buhar hattı olmayan konfeksiyonlarda dikiş açma işlemlerini kolaylaştıran paskara.",
        bullets: [
          "Dahili buhar kazanı sayesinde merkezi buhar kazanına ihtiyaç duymaz.",
          "Isıtmalı dar üst tablası nemi engeller ve kumaşın kırışmasını önler.",
          "Güçlü lokal vakum emişi nemi ve buharı anında tahliye eder."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "230V / 380V" },
          { key: "Masa Isıtıcı Gücü", value: "1.5 kW" },
          { key: "Kazan Isıtıcı Gücü", value: "3.0 kW" },
          { key: "Vakum Motoru Gücü", value: "0.37 kW" }
        ]
      },
      en: {
        title: "Self-Boiler Seam Opening Ironing Table",
        desc: "Vacuum seam opening board with built-in steam boiler, facilitating seam flattening in workshops without centralized steam lines.",
        bullets: [
          "Self-contained boiler design eliminates central steam boiler requirements.",
          "Heated narrow top board prevents condensation and keeps fabric flat.",
          "High-suction local vacuum extractor discharges steam and moisture instantly."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 380V" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Boiler Heating Power", value: "3.0 kW" },
          { key: "Vacuum Motor Power", value: "0.37 kW" }
        ]
      }
    },
    {
      id: "leke-paskarasi-kazanli",
      category: "table",
      katalogCategory: "leke-makinalari",
      img: "assets/images/leke_paskarasi_kazanli.jpg",
      tr: {
        title: "Kendinden Kazanlı Leke Çıkartma Paskarası",
        desc: "Dahili buhar kazanı, güçlü vakum motoru ve aydınlatma armatürlü gövdesiyle lekelerin buhar ve kimyasal püskürtme tabancalarıyla anında temizlenmesini sağlayan leke paskarası.",
        bullets: [
          "Dahili buhar jeneratörü sayesinde harici bir buhar hattına ihtiyaç duymaz.",
          "Güçlü lokal vakum emişi lekeli bölgedeki kimyasal buharı hızla uzaklaştırır.",
          "Leke püskürtme ve buhar tabancası ile lokal leke çıkarmada yüksek verim sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "230V / 380V" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Masa Rezistans Gücü", value: "1.5 kW" },
          { key: "Kazan Rezistans Gücü", value: "4.5 kW" },
          { key: "Tabanca Sistemi", value: "1x Buhar + 1x Kimyasal Leke Tabancası" }
        ]
      },
      en: {
        title: "Self-Boiler Stain Removal Table",
        desc: "Spotting table with built-in boiler, high-suction vacuum, and illumination arm, enabling instant spot cleaning using steam and chemical spray guns.",
        bullets: [
          "Equipped with its own steam generator, eliminating external line dependencies.",
          "Powerful local vacuum extraction quickly draws chemical vapors away.",
          "Ensures high efficiency in spotting with dedicated steam and spotting guns."
        ],
        specs: [
          { key: "Power Supply", value: "230V / 380V" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Boiler Heating Power", value: "4.5 kW" },
          { key: "Gun Systems", value: "1x Steam Gun + 1x Chemical Spotting Gun" }
        ]
      }
    },
    {
      id: "leke-paskarasi",
      category: "table",
      katalogCategory: "leke-makinalari",
      img: "assets/images/leke_paskarasi.png",
      tr: {
        title: "Kabinli Leke Çıkartma Paskarası",
        desc: "Kapalı paslanmaz çelik kabin yapısı, aydınlatma armatürü ve solvent emici aktif karbon filtre sistemleriyle profesyonel leke temizleme istasyonu.",
        bullets: [
          "Kapalı kabin tasarımı solvent buharlarını hapsederek sağlıklı çalışma alanı sunar.",
          "Güçlü vakum tahliyesi lekeli kimyasalları anında absorbe eder.",
          "Çift leke tabancası ve aydınlatmalı baca armatürü mevcuttur."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230Hz" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Kimyasal Tabancası", value: "2 Adet Pnömatik Tabanca" },
          { key: "Aydınlatma Tipi", value: "Dahili LED Armatürlü" },
          { key: "Masa Ebatları", value: "110 x 80 x 180 cm" }
        ]
      },
      en: {
        title: "Stain Removal Cabinet Table",
        desc: "Professional spotting station featuring an enclosed stainless steel cabinet, lighting, and high-performance carbon extraction filtration to capture solvent fumes.",
        bullets: [
          "Enclosed cabinet design traps chemical vapors, protecting operators.",
          "High-suction vacuum motor absorbs spotting chemicals instantly.",
          "Equipped with dual spotting guns and illuminated exhaust hood."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Spotting Guns", value: "2x Pneumatic Spray Guns" },
          { key: "Lighting Type", value: "Built-in LED Fixture" },
          { key: "Table Dimensions", value: "110 x 80 x 180 cm" }
        ]
      }
    },
    {
      id: "buhar-kazani-tek-cikisli",
      category: "boiler-iron",
      katalogCategory: "otomatik-kazanlar",
      img: "assets/images/buhar_kazani_tek_cikisli.jpg",
      tr: {
        title: "Tek Çıkışlı Otomatik Buhar Kazanı",
        desc: "Tekli profesyonel el ütüleri için otomatik su besleme ve emniyet ventilleriyle donatılmış, yüksek verimli ve kesintisiz buhar üreten kompakt buhar kazanı.",
        bullets: [
          "Otomatik pompa sistemi ile sürekli su beslemesi ve kesintisiz buhar sağlar.",
          "Yüksek güvenlikli emiş ve basınç limit kontrol ventilleri mevcuttur.",
          "Kompakt tasarımı ile küçük atölyelerde yer kaplamaz."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "220V / 50Hz" },
          { key: "Rezistans Gücü", value: "4.0 kW" },
          { key: "Çalışma Basıncı", value: "3.5 Bar" },
          { key: "Kazan Hacmi", value: "8 Litre" },
          { key: "Su Besleme", value: "Otomatik Pompa Sistemli" }
        ]
      },
      en: {
        title: "Single-Outlet Automatic Steam Boiler",
        desc: "High-efficiency compact steam boiler producing non-stop steam, equipped with automatic water feed and safety valves for single professional hand iron stations.",
        bullets: [
          "Ensures continuous steam generation with automatic water intake pump.",
          "Equipped with high-security safety valves and pressure limit controllers.",
          "Save space in compact workshops thanks to its ergonomic design."
        ],
        specs: [
          { key: "Power Supply", value: "220V / 50Hz" },
          { key: "Heating Power", value: "4.0 kW" },
          { key: "Working Pressure", value: "3.5 Bar" },
          { key: "Boiler Volume", value: "8 Liters" },
          { key: "Water Intake", value: "Automatic Pump System" }
        ]
      }
    },
    {
      id: "buhar-kazani-3-cikisli",
      category: "boiler-iron",
      katalogCategory: "otomatik-kazanlar",
      img: "assets/images/buhar_kazani_3_cikisli.jpg",
      tr: {
        title: "3 Çıkışlı Otomatik Buhar Kazanı",
        desc: "Aynı anda 3 adet profesyonel el ütüsünü besleyebilen, otomatik su besleme sistemi ve yüksek basınç koruma limitlerine sahip endüstriyel buhar jeneratörü.",
        bullets: [
          "3 farklı ütü istasyonuna eş zamanlı kesintisiz buhar desteği sunar.",
          "Otomatik su besleme sistemi ile işletmelerde iş kaybını önler.",
          "Paslanmaz çelik iç kazan yapısı ile uzun ömürlü kullanım sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Rezistans Gücü", value: "7.5 kW" },
          { key: "Çalışma Basıncı", value: "4 Bar" },
          { key: "Kazan Hacmi", value: "10 Litre" },
          { key: "Buhar Çıkış Sayısı", value: "3 Çıkışlı" }
        ]
      },
      en: {
        title: "3-Outlet Automatic Steam Boiler",
        desc: "Industrial steam generator capable of feeding up to 3 professional hand irons simultaneously, complete with automatic water intake and high pressure limits.",
        bullets: [
          "Supports 3 hand iron handles simultaneously with continuous dry steam.",
          "Automatic water feed system prevents operational delays in assembly lines.",
          "Stainless steel inner boiler tank guarantees long-lasting service life."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Power", value: "7.5 kW" },
          { key: "Working Pressure", value: "4 Bar" },
          { key: "Boiler Volume", value: "10 Liters" },
          { key: "No. of Outlets", value: "3 Outlets" }
        ]
      }
    },
    {
      id: "buhar-kazani-4-cikisli",
      category: "boiler-iron",
      katalogCategory: "otomatik-kazanlar",
      img: "assets/images/buhar_kazani_4_cikisli.jpg",
      tr: {
        title: "4 Çıkışlı Otomatik Buhar Kazanı",
        desc: "Orta ölçekli konfeksiyon atölyeleri için aynı anda 4 ütü istasyonunu besleyen, otomatik su pompası ve emniyet limit ventilli endüstriyel buhar kazanı.",
        bullets: [
          "4 adet el ütüsü çıkışı ile yoğun üretim hatlarında yüksek verim sunar.",
          "Gelişmiş basınç şalteri ve ikili emniyet ventili ile üst düzey güvenlik.",
          "Yoğun kullanıma uygun dayanıklı endüstriyel kabin yapısı."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 50Hz" },
          { key: "Rezistans Gücü", value: "10.0 kW" },
          { key: "Çalışma Basıncı", value: "4 Bar" },
          { key: "Kazan Hacmi", value: "12 Litre" },
          { key: "Buhar Çıkış Sayısı", value: "4 Çıkışlı" }
        ]
      },
      en: {
        title: "4-Outlet Automatic Steam Boiler",
        desc: "Industrial steam boiler feeding up to 4 ironing stations simultaneously, optimized for medium-scale garment workshops with auto water pump and safety limits.",
        bullets: [
          "Provides high efficiency in busy production lines with 4 steam outlets.",
          "Supreme security with advanced pressure switches and double safety valves.",
          "Durable industrial cabinet enclosure built for heavy-duty workloads."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Power", value: "10.0 kW" },
          { key: "Working Pressure", value: "4 Bar" },
          { key: "Boiler Volume", value: "12 Liters" },
          { key: "No. of Outlets", value: "4 Outlets" }
        ]
      }
    },
    {
      id: "buhar-kazani-50kw",
      category: "boiler-iron",
      katalogCategory: "otomatik-kazanlar",
      img: "assets/images/buhar_kazani_50kw.jpg",
      tr: {
        title: "50 KW Otomatik Buhar Kazanı (Merkezi Sistem)",
        desc: "Büyük tekstil fabrikaları ve konfeksiyon tesisleri için merkezi sistem buhar dağıtımı sağlayan, paslanmaz çelik rezistanslı yüksek kapasiteli buhar jeneratörü.",
        bullets: [
          "50 KW yüksek rezistans gücü ile saatte 70 kg kesintisiz kuru buhar üretir.",
          "Merkezi buhar dağıtım tesisatlarına bağlanabilen profesyonel altyapı.",
          "Otomatik su seviye kontrolü ve aşırı basınç koruma sistemleri."
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
        title: "50 KW Automatic Steam Boiler (Central System)",
        desc: "High-capacity steam generator supplying central steam distribution for large textile factories and garment plants, built with stainless elements.",
        bullets: [
          "Generates 70 kg of continuous dry steam per hour with 50 KW heating capacity.",
          "Professional infrastructure ready for central line piping connections.",
          "Automatic water level control and overpressure cutoff safety systems."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 50Hz" },
          { key: "Heating Power", value: "50 kW" },
          { key: "Steam Output", value: "70 kg / hour" },
          { key: "Boiler Volume", value: "65 Liters" },
          { key: "Working Pressure", value: "5 Bar" }
        ]
      }
    },
    {
      id: "tasarruflu-dar-paskara",
      category: "table",
      katalogCategory: "tasarruflu",
      img: "assets/images/tasarruflu_dar_paskara.jpg",
      tr: {
        title: "Tasarruflu Dar Paskara",
        desc: "Düşük enerji sarfiyatı sağlayan çevre dostu ısıtma rezistansları ve yüksek verimli vakum motoru ile hem bütçe hem çevre dostu dar ütü masası.",
        bullets: [
          "Gelişmiş termostat teknolojisi ile %30'a varan enerji tasarrufu sağlar.",
          "Yüksek verimli sessiz vakum motoru ile mükemmel buhar çekişi sunar.",
          "Dar yapısı ile gömlek, pantolon ve paça ütülemede yüksek ergonomi sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.37 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.0 kW" },
          { key: "Masa Ebatları", value: "135 x 40 cm" }
        ]
      },
      en: {
        title: "Eco-Friendly Narrow Ironing Table",
        desc: "Budget and environmentally friendly narrow ironing table with low energy consumption heating resistors and high-efficiency vacuum motor.",
        bullets: [
          "Saves up to 30% energy with its advanced thermostat technology.",
          "Delivers perfect steam extraction with a high-efficiency silent vacuum motor.",
          "Narrow structure offers high ergonomics for ironing shirts and pants cuffs."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.37 kW" },
          { key: "Table Heating Power", value: "1.0 kW" },
          { key: "Table Dimensions", value: "135 x 40 cm" }
        ]
      }
    },
    {
      id: "tasarruflu-genis-paskara-kollu",
      category: "table",
      katalogCategory: "tasarruflu",
      img: "assets/images/tasarruflu_genis_paskara_kollu.jpg",
      tr: {
        title: "Tasarruflu Geniş Paskara (Kollu)",
        desc: "Geniş çalışma yüzeyi, düşük enerji tüketimli ısıtma sistemi ve döner mafsallı kol aparatı ile ceket, kaban ve büyük ebatlı kumaşlar için optimum tasarruf.",
        bullets: [
          "Geniş tabla yüzeyi ve ısıtmalı dar kol aparatı maksimum verimlilik sunar.",
          "Özel yalıtımlı gövde yapısı sayesinde ısı kaybını minimuma indirir.",
          "Yüksek debili emiş motoru kumaşı hızlıca kurutur."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.8 kW" },
          { key: "Kol Isıtıcı Gücü", value: "0.4 kW" },
          { key: "Masa Ebatları", value: "150 x 80 cm" }
        ]
      },
      en: {
        title: "Eco-Friendly Wide Ironing Table with Sleeve Arm",
        desc: "Optimum savings for jackets, coats, and large fabrics with its wide working surface, low-energy consumption heating system, and rotating sleeve arm.",
        bullets: [
          "Offers maximum efficiency with a wide table surface and a heated narrow sleeve board.",
          "Minimizes heat loss thanks to its specially insulated body structure.",
          "High-flow suction motor dries the fabric quickly."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Table Heating Power", value: "1.8 kW" },
          { key: "Sleeve Heating Power", value: "0.4 kW" },
          { key: "Table Dimensions", value: "150 x 80 cm" }
        ]
      }
    },
    {
      id: "tasarruflu-genis-paskara",
      category: "table",
      katalogCategory: "tasarruflu",
      img: "assets/images/tasarruflu_genis_paskara.jpg",
      tr: {
        title: "Tasarruflu Geniş Paskara",
        desc: "Büyük parça ütüleme ihtiyaçlarında yüksek enerji verimliliği sağlayan, yalıtımlı rezistanslara sahip geniş vakumlu sanayi tipi ütü masası.",
        bullets: [
          "Yalıtımlı tabla rezistansları ile elektrik tüketimini en aza indirir.",
          "Geniş üst tabla yapısı çarşaf, perde ve nevresimler için idealdir.",
          "Çift vakum kanallı güçlü emiş sistemi nem kalıntısı bırakmaz."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.8 kW" },
          { key: "Masa Ebatları", value: "150 x 80 cm" }
        ]
      },
      en: {
        title: "Eco-Friendly Wide Ironing Table",
        desc: "Large vacuum industrial ironing table with insulated resistance elements, providing high energy efficiency for large-scale ironing needs.",
        bullets: [
          "Minimizes electricity consumption with insulated table heating resistors.",
          "Wide top board design is ideal for sheets, curtains, and linens.",
          "Double vacuum channel suction system leaves no moisture residue."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Table Heating Power", value: "1.8 kW" },
          { key: "Table Dimensions", value: "150 x 80 cm" }
        ]
      }
    },
    {
      id: "tasarruflu-dar-paskara-kollu",
      category: "table",
      katalogCategory: "tasarruflu",
      img: "assets/images/tasarruflu_dar_paskara_kollu.jpg",
      tr: {
        title: "Tasarruflu Dar Paskara (Kollu)",
        desc: "Düşük elektrik tüketimi, güçlü vakum motoru ve ısıtmalı dar kol aparatı ile konfeksiyonlarda dikiş açma ve hassas ütüleme işlemlerinde enerji tasarrufu sağlar.",
        bullets: [
          "Hassas termostatı sayesinde gereksiz elektrik tüketimini önler.",
          "Isıtmalı kol aparatı gömlek ve ceket kollarında mükemmel dikiş kırma sağlar.",
          "Vakumlu emiş gücü nem birikmesini engeller ve ütüleme kalitesini artırır."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.37 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.0 kW" },
          { key: "Kol Isıtıcı Gücü", value: "0.4 kW" },
          { key: "Masa Ebatları", value: "135 x 40 cm" }
        ]
      },
      en: {
        title: "Eco-Friendly Narrow Ironing Table with Sleeve Arm",
        desc: "Provides energy savings in garment workshops for seam flattening and precise ironing with low power consumption, strong vacuum, and heated narrow sleeve arm.",
        bullets: [
          "Prevents unnecessary electricity consumption thanks to its precise thermostat.",
          "Heated sleeve board provides perfect seam creasing on shirt and jacket sleeves.",
          "Vacuum suction prevents moisture build-up and enhances ironing quality."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.37 kW" },
          { key: "Table Heating Power", value: "1.0 kW" },
          { key: "Sleeve Heating Power", value: "0.4 kW" },
          { key: "Table Dimensions", value: "135 x 40 cm" }
        ]
      }
    },
    {
      id: "rezistansli-dar-paskara-kollu",
      category: "table",
      katalogCategory: "rezistanli",
      img: "assets/images/rezistansli_dar_paskara_kollu.jpg",
      tr: {
        title: "Rezistanslı Dar Paskara (Kollu)",
        desc: "Güçlü vakum sistemi, rezistans ısıtmalı üst tablası ve ısıtmalı dar kol aparatı sayesinde ceket, gömlek ve pantolon ütülemede pürüzsüz sonuçlar sağlar.",
        bullets: [
          "Rezistans ısıtmalı üst tabla ile yüzeyin her zaman kuru kalmasını sağlar.",
          "Isıtmalı dar kol paskara aparatı ile kol bölgelerinde kusursuz dikiş açma ve ütüleme sağlar.",
          "Güçlü vakum motoru nemi kumaştan hızlıca uzaklaştırır."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.5 kW" },
          { key: "Kol Isıtıcı Gücü", value: "0.5 kW" },
          { key: "Masa Ebatları", value: "135 x 40 cm" }
        ]
      },
      en: {
        title: "Resistor Narrow Ironing Table with Sleeve Arm",
        desc: "Ensures smooth ironing results for jackets, shirts, and trousers thanks to its strong vacuum system, resistance-heated top board, and heated narrow sleeve arm.",
        bullets: [
          "Resistance-heated board keeps the surface completely dry during operation.",
          "Heated narrow sleeve board attachment ensures perfect sleeve creasing and pressing.",
          "High-suction vacuum motor quickly removes moisture from the fabric."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Sleeve Heating Power", value: "0.5 kW" },
          { key: "Table Dimensions", value: "135 x 40 cm" }
        ]
      }
    },
    {
      id: "rezistansli-dar-paskara",
      category: "table",
      katalogCategory: "rezistanli",
      img: "assets/images/rezistansli_dar_paskara.jpg",
      tr: {
        title: "Rezistanslı Dar Paskara",
        desc: "Kompakt tasarımı, rezistans ısıtmalı üst tablası ve profesyonel vakum emişi ile tekstil atölyeleri ve kuru temizlemeciler için mükemmel ütü masası.",
        bullets: [
          "Elektrik rezistans ısıtmalı üst tabla sayesinde su yoğuşmasını önler.",
          "Güçlü vakumlu emiş sistemi ile kumaşı tabla üzerinde sabitler.",
          "Kompakt ve dar yapısı sayesinde küçük atölyelerde yer tasarrufu sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.5 kW" },
          { key: "Masa Ebatları", value: "135 x 40 cm" }
        ]
      },
      en: {
        title: "Resistor Narrow Ironing Table",
        desc: "Perfect ironing table for garment workshops and dry cleaners with its compact design, resistance-heated top board, and professional vacuum suction.",
        bullets: [
          "Electric resistance-heated board prevents condensation and water drop accumulation.",
          "High-performance vacuum suction holds the fabric securely on the table.",
          "Compact and narrow structure saves space in small workshops."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Table Dimensions", value: "135 x 40 cm" }
        ]
      }
    },
    {
      id: "rezistansli-genis-paskara",
      category: "table",
      katalogCategory: "rezistanli",
      img: "assets/images/rezistansli_genis_paskara.jpg",
      tr: {
        title: "Rezistanslı Geniş Paskara",
        desc: "Geniş çalışma alanı, homojen rezistans ısıtması ve yüksek debili vakum tahliyesi ile çarşaf, perde ve kaban gibi büyük ebatlı ürünler için tasarlanmıştır.",
        bullets: [
          "Geniş üst tabla yüzeyi ile büyük ebatlı tekstil ürünlerinde yüksek konfor ve hız sağlar.",
          "Rezistans ısıtmalı üst yüzey sayesinde nemsiz ve kuru ütüleme ortamı sunar.",
          "Güçlü vakum motoru büyük parçalarda buharın hızlı çekilmesini sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.75 kW" },
          { key: "Masa Isıtıcı Gücü", value: "2.5 kW" },
          { key: "Masa Ebatları", value: "150 x 80 cm" }
        ]
      },
      en: {
        title: "Resistor Wide Ironing Table",
        desc: "Designed for large-sized items such as sheets, curtains, and coats with its wide working area, homogeneous resistance heating, and high-flow vacuum extraction.",
        bullets: [
          "Wide table surface delivers high comfort and speed for large textile items.",
          "Resistance-heated surface provides a dry and moisture-free pressing environment.",
          "Powerful vacuum motor ensures quick steam extraction on large fabrics."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.75 kW" },
          { key: "Table Heating Power", value: "2.5 kW" },
          { key: "Table Dimensions", value: "150 x 80 cm" }
        ]
      }
    },
    {
      id: "rezistansli-genis-paskara-kollu",
      category: "table",
      katalogCategory: "rezistanli",
      img: "assets/images/rezistansli_genis_paskara_kollu.jpg",
      tr: {
        title: "Rezistanslı Geniş Paskara (Kollu)",
        desc: "Geniş çalışma yüzeyi, ısıtmalı kol aparatı ve güçlü vakumlu emiş sistemi ile büyük ebatlı kumaşlar ve detay gerektiren ceket ve palto kolları için idealdir.",
        bullets: [
          "Geniş tabla alanı ve ısıtmalı döner kol aparatı bir arada sunulmuştur.",
          "Rezistans ısıtmalı sistem su damlamasını engeller ve kumaşı kuru tutar.",
          "Endüstriyel kullanıma uygun yüksek vakum tahliyesi mevcuttur."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.75 kW" },
          { key: "Masa Isıtıcı Gücü", value: "2.5 kW" },
          { key: "Kol Isıtıcı Gücü", value: "0.5 kW" },
          { key: "Masa Ebatları", value: "150 x 80 cm" }
        ]
      },
      en: {
        title: "Resistor Wide Ironing Table with Sleeve Arm",
        desc: "Ideal for large fabrics as well as coat sleeves requiring details with its wide ironing surface, heated sleeve board, and strong vacuum suction system.",
        bullets: [
          "Combines a wide table area with a heated rotating sleeve board attachment.",
          "Resistance-heated system prevents water drops and keeps fabrics dry.",
          "Equipped with high-flow vacuum extraction suitable for industrial workloads."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.75 kW" },
          { key: "Table Heating Power", value: "2.5 kW" },
          { key: "Sleeve Heating Power", value: "0.5 kW" },
          { key: "Table Dimensions", value: "150 x 80 cm" }
        ]
      }
    },
    {
      id: "kendinden-kazanli-dar-paskara-kollu",
      category: "table",
      katalogCategory: "kendinden-kazanli",
      img: "assets/images/kendinden_kazanli_dar_paskara_kollu.jpg",
      tr: {
        title: "Kendinden Kazanlı Dar Paskara (Kollu)",
        desc: "Dahili buhar kazanı, güçlü vakum emişi ve ısıtmalı dar kol aparatı sayesinde ceket, gömlek ve pantolon ütülemede yüksek performans sağlar.",
        bullets: [
          "Dahili buhar kazanı ile harici buhar hattı gerektirmez.",
          "Isıtmalı dar kol paskara aparatı ile kol ütülemede kusursuz sonuç verir.",
          "Yüksek emiş gücüne sahip vakum motoru nem birikmesini önler."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.5 kW" },
          { key: "Kazan Isıtıcı Gücü", value: "3.0 kW" },
          { key: "Çalışma Basıncı", value: "4 Bar" }
        ]
      },
      en: {
        title: "Self-Boiler Narrow Ironing Table with Sleeve Arm",
        desc: "Provides high performance for jackets, shirts, and trousers thanks to its built-in steam boiler, strong vacuum suction, and heated narrow sleeve arm.",
        bullets: [
          "Equipped with built-in boiler, no external steam line required.",
          "Heated narrow sleeve board attachment for perfect sleeve creasing.",
          "High-suction vacuum motor prevents moisture build-up."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Boiler Heating Power", value: "3.0 kW" },
          { key: "Working Pressure", value: "4 Bar" }
        ]
      }
    },
    {
      id: "kendinden-kazanli-dar-paskara",
      category: "table",
      katalogCategory: "kendinden-kazanli",
      img: "assets/images/kendinden_kazanli_dar_paskara.jpg",
      tr: {
        title: "Kendinden Kazanlı Dar Paskara",
        desc: "Kompakt tasarımı, dahili buhar kazanı ve yüksek vakum performansı ile tekstil atölyeleri ve kuru temizlemeciler için ideal ütü masası.",
        bullets: [
          "Buhar kazanlı ve vakumlu kendinden sistemli tasarım.",
          "Hızlı buhar üretimi ve kesintisiz çalışma imkanı.",
          "Dar tabla yapısı ile pantolon ve gömlek ütülemede kolaylık sağlar."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.55 kW" },
          { key: "Masa Isıtıcı Gücü", value: "1.5 kW" },
          { key: "Kazan Isıtıcı Gücü", value: "3.0 kW" },
          { key: "Buhar Girişi", value: "G 1/2\"" }
        ]
      },
      en: {
        title: "Self-Boiler Narrow Ironing Table",
        desc: "Ideal ironing table for textile workshops and dry cleaners with its compact design, built-in steam boiler, and high vacuum performance.",
        bullets: [
          "Self-contained vacuum system with built-in steam boiler.",
          "Fast steam generation and continuous operation capability.",
          "Narrow table structure offers easy ironing of trousers and shirts."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.55 kW" },
          { key: "Table Heating Power", value: "1.5 kW" },
          { key: "Boiler Heating Power", value: "3.0 kW" },
          { key: "Steam Inlet", value: "G 1/2\"" }
        ]
      }
    },
    {
      id: "kendinden-kazanli-genis-paskara-kollu",
      category: "table",
      katalogCategory: "kendinden-kazanli",
      img: "assets/images/kendinden_kazanli_genis_paskara_kollu.jpg",
      tr: {
        title: "Kendinden Kazanlı Geniş Paskara (Kollu)",
        desc: "Geniş çalışma alanı, ısıtmalı dar kol aparatı ve dahili kazanıyla büyük ebatlı kumaşlar, ceketler ve kabanlar için mükemmel bir çözüm.",
        bullets: [
          "Geniş üst tabla yüzeyi ile geniş kumaşların kolayca ütülenmesini sağlar.",
          "Dahili buhar kazanı ve güçlü vakum tahliyesi.",
          "Döner mafsallı ve ısıtmalı kol paskarası mevcuttur."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.75 kW" },
          { key: "Masa Isıtıcı Gücü", value: "2.0 kW" },
          { key: "Kazan Isıtıcı Gücü", value: "4.5 kW" },
          { key: "Masa Ebatları", value: "135 x 65 cm" }
        ]
      },
      en: {
        title: "Self-Boiler Wide Ironing Table with Sleeve Arm",
        desc: "Perfect solution for large fabrics, coats, and jackets with its wide working area, heated narrow sleeve board, and built-in boiler.",
        bullets: [
          "Wide top board surface makes it easy to iron large pieces of fabric.",
          "Built-in steam boiler and high-performance vacuum extraction.",
          "Features a rotating joint and heated sleeve arm board."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.75 kW" },
          { key: "Table Heating Power", value: "2.0 kW" },
          { key: "Boiler Heating Power", value: "4.5 kW" },
          { key: "Table Dimensions", value: "135 x 65 cm" }
        ]
      }
    },
    {
      id: "kendinden-kazanli-genis-paskara",
      category: "table",
      katalogCategory: "kendinden-kazanli",
      img: "assets/images/kendinden_kazanli_genis_paskara.jpg",
      tr: {
        title: "Kendinden Kazanlı Geniş Paskara",
        desc: "Dahili buhar jeneratörü ve geniş tabla yüzeyi ile yüksek kapasiteli vakumlu endüstriyel ütü masası.",
        bullets: [
          "Geniş üst tabla sayesinde nevresim, çarşaf ve geniş tekstil ürünlerine uygun.",
          "Kesintisiz buhar beslemesi ve otomatik su pompası kontrolü.",
          "Vakumlu emiş sistemi ile nemi kumaştan hızlıca uzaklaştırır."
        ],
        specs: [
          { key: "Güç Kaynağı", value: "380V / 230v" },
          { key: "Vakum Motoru Gücü", value: "0.75 kW" },
          { key: "Masa Isıtıcı Gücü", value: "2.0 kW" },
          { key: "Kazan Isıtıcı Gücü", value: "4.5 kW" },
          { key: "Kazan Hacmi", value: "10 Litre" }
        ]
      },
      en: {
        title: "Self-Boiler Wide Ironing Table",
        desc: "High-capacity vacuum industrial ironing table with built-in steam generator and wide board surface.",
        bullets: [
          "Wide board surface suitable for bed sheets, linens, and large textile items.",
          "Continuous steam feed and automatic water pump control.",
          "Vacuum suction system quickly draws moisture away from the fabric."
        ],
        specs: [
          { key: "Power Supply", value: "380V / 230v" },
          { key: "Vacuum Motor Power", value: "0.75 kW" },
          { key: "Table Heating Power", value: "2.0 kW" },
          { key: "Boiler Heating Power", value: "4.5 kW" },
          { key: "Boiler Volume", value: "10 Liters" }
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
