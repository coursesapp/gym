(function () {
  const AR_COUNTRIES = [
    "AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","MR","OM","PS","QA","SA","SD","SY","TN","YE","SO"
  ];

  let currentLang = null;

  // ===== Translations =====
  const tCommon = {
    ar: {
      theme_dark: "الوضع الليلي",
      theme_light: "الوضع النهاري",
      contact_heading: "تواصل معنا",
      email_label: "📧 البريد:",
      instagram_label: "📸 انستجرام:",
      tiktok_label: "🎵 تيك توك:",
      facebook_label: "📘 فيسبوك:",
      youtube_label: "▶️ يوتيوب:",
      telegram_label: "✈️ تيليجرام:",
      order_now: "اطلب الآن",
      features_title: "المميزات",
      lang_button_label: "EN"
    },
    en: {
      theme_dark: "Dark mode",
      theme_light: "Light mode",
      contact_heading: "Contact us",
      email_label: "📧 Email:",
      instagram_label: "📸 Instagram:",
      tiktok_label: "🎵 TikTok:",
      facebook_label: "📘 Facebook:",
      youtube_label: "▶️ YouTube:",
      telegram_label: "✈️ Telegram:",
      order_now: "Order now",
      features_title: "Features",
      lang_button_label: "AR"
    }
  };

  const tIndex = {
    ar: {
      site_name: "محمود لبيب",
      nav_plans: "الباقات",
      nav_results: "نتائج عملائنا",
      nav_about: "المدرب",
      header_subtitle: "مدرب معتمد | خبير تغذية | بطل فيزيك",
      cta_whatsapp: "💬 احجز على واتساب",
      about_heading: "عن المدرب",
      about_desc: "محمود لبيب، مدرب شخصي معتمد من NASM، وخبير تغذية رياضية، وبطل فيزيك لعام 2024. بخبرة قوية في تصميم خطط التدريب والكورسات الدقيقة، يقدم محمود خدمات مخصصة لتحقيق نتائج حقيقية.",
      about_li_1: "📍 العمر: 23 سنة",
      about_li_2: "🌍 العمل: أونلاين داخل وخارج مصر",
      about_li_3: "🗣️ اللغات: العربية – الإنجليزية (جيد جدًا)",
      about_li_4: "🥇 المركز الأول – بطولة فيزيك 2024",
      about_li_5: "🏅 المركز الرابع – فئة مختلفة",
      premium_heading: "الباقات المميزة",
      badge_popular: "الأكثر طلبًا",
      card1_title: "باقات المتابعة",
      card1_desc: "أكل + تمرين + مكملات",
      card2_title: "الباقة الذهبية",
      card2_desc: "متابعة خاصة ونتائج مضمونة",
      card3_title: "التخسيس المكثف",
      card3_desc: "بديل آمن لعمليات التكميم",
      card4_title: "باقة الاستشارة",
      card4_desc: "مكالمة 30 دقيقة مع المدرب",
      results_heading: "نتائج عملائنا",
      testimonials_heading: "آراء عملائنا",
      test_1_text: "💬 \"النتائج كانت مذهلة! شكراً على الدعم.\"",
      test_1_name: "– ندى، مصر",
      test_2_text: "💬 \"أقوى برنامج مشيت عليه. متابعة دقيقة.\"",
      test_2_name: "– فهد، السعودية",
      test_3_text: "💬 \"برنامج متكامل ونتائجه واضحة من أسبوعين بس!\"",
      test_3_name: "– هالة، الكويت",
      contact_heading: tCommon.ar.contact_heading,
      email_label: tCommon.ar.email_label,
      instagram_label: tCommon.ar.instagram_label,
      footer_text: "© 2025 محمود لبيب. لا أعذار، فقط نتائج."
    },
    en: {
      site_name: "Mahmoud Labib",
      nav_plans: "Plans",
      nav_results: "Client Results",
      nav_about: "Coach",
      header_subtitle: "Certified Coach | Nutrition Expert | Physique Champion",
      cta_whatsapp: "💬 Book on WhatsApp",
      about_heading: "About the Coach",
      about_desc: "Mahmoud Labib is a NASM-certified personal trainer, sports nutrition expert, and 2024 Physique champion. With strong expertise in tailored programs, he delivers personalized services for real results.",
      about_li_1: "📍 Age: 23",
      about_li_2: "🌍 Work: Online inside and outside Egypt",
      about_li_3: "🗣️ Languages: Arabic – English (very good)",
      about_li_4: "🥇 1st Place – Physique Championship 2024",
      about_li_5: "🏅 4th Place – different category",
      premium_heading: "Premium Packages",
      badge_popular: "Most popular",
      card1_title: "Follow-up Packages",
      card1_desc: "Diet + Training + Supplements",
      card2_title: "Gold Package",
      card2_desc: "Private follow-up and guaranteed results",
      card3_title: "Intensive Weight Loss",
      card3_desc: "Safe alternative to gastric sleeve",
      card4_title: "Consultation Package",
      card4_desc: "30-min call with the coach",
      results_heading: "Client Results",
      testimonials_heading: "Client Testimonials",
      test_1_text: "💬 \"Amazing results! Thanks for the support.\"",
      test_1_name: "– Nada, Egypt",
      test_2_text: "💬 \"The best program I’ve followed. Precise follow-up.\"",
      test_2_name: "– Fahd, KSA",
      test_3_text: "💬 \"Comprehensive program with visible results in just two weeks!\"",
      test_3_name: "– Hala, Kuwait",
      contact_heading: tCommon.en.contact_heading,
      email_label: tCommon.en.email_label,
      instagram_label: tCommon.en.instagram_label,
      footer_text: "© 2025 Mahmoud Labib. No excuses, only results."
    }
  };

  const plansShared = {
    ar: {
      nav_about: "من نحن",
      nav_consult: "طلب استشارة",
      nav_reviews: "اراء العملاء",
      header_title: "مرحبًا بك في باقاتنا",
      header_subtitle: "اختر الباقة التي تناسبك وابدأ رحلتك نحو هدفك",
      contact_heading: tCommon.ar.contact_heading,
      email_label: tCommon.ar.email_label,
      instagram_label: tCommon.ar.instagram_label,
      order_now: tCommon.ar.order_now,
      features_title: tCommon.ar.features_title
    },
    en: {
      nav_about: "About us",
      nav_consult: "Request consultation",
      nav_reviews: "Client reviews",
      header_title: "Welcome to our packages",
      header_subtitle: "Choose the plan that suits you and start your journey",
      contact_heading: tCommon.en.contact_heading,
      email_label: tCommon.en.email_label,
      instagram_label: tCommon.en.instagram_label,
      order_now: tCommon.en.order_now,
      features_title: tCommon.en.features_title
    }
  };

  const packagesByPage = {
    "plans-details": {
      ar: [
        {
          title: "باقة شهر ونص (6 أسابيع)",
          price: 1500,
          currency: "جنيه",
          features: [
            "نظام غذائي مخصص بيتجدد أسبوعيًا",
            "جدول تمارين حسب هدفك ومستواك",
            "خطة مكملات مناسبة لميزانيتك",
            "متابعة يومية على واتساب (أسئلة – تقييم – تعديل)",
            "تعديل التمرين والنظام حسب تطورك"
          ]
        },
        {
          title: "باقة 3 شهور",
          price: 3000,
          currency: "جنيه",
          features: [
            "نظام غذائي بيتجدد أسبوعيًا",
            "جدولين تمرين (تجديد بعد أول شهر ونص)",
            "خطة مكملات حسب المراحل",
            "متابعة يومية شخصية على واتساب",
            "مراجعة أسبوعية كاملة وتعديل عند الحاجة"
          ]
        },
        {
          title: "باقة 6 شهور",
          price: 6000,
          currency: "جنيه",
          features: [
            "4 جداول تمرين متدرجة حسب تطورك",
            "نظام غذائي مرن بيتحدث أسبوعيًا",
            "خطة مكملات مفصلة (أساسية + اختيارية)",
            "تقييم شامل كل أسبوع",
            "مكالمتين شهريًا صوت أو فيديو للمراجعة",
            "أولوية في الرد والدعم اليومي"
          ]
        }
      ],
      en: [
        {
          title: "1.5-Month Plan (6 weeks)",
          price: 130,
          currency: "USD",
          features: [
            "Custom diet updated weekly",
            "Workout plan based on your goal and level",
            "Supplement plan within your budget",
            "Daily WhatsApp follow-up (questions – review – adjustments)",
            "Adjust training and diet as you progress"
          ]
        },
        {
          title: "3-Month Plan",
          price: 240,
          currency: "USD",
          features: [
            "Diet updated weekly",
            "Two workout programs (refresh after first 6 weeks)",
            "Phase-based supplement plan",
            "Daily personal follow-up on WhatsApp",
            "Full weekly review with adjustments when needed"
          ]
        },
        {
          title: "6-Month Plan",
          price: 450,
          currency: "USD",
          features: [
            "4 progressive workout programs",
            "Flexible diet updated weekly",
            "Detailed supplement plan (core + optional)",
            "Comprehensive weekly evaluation",
            "Two monthly calls (voice or video) for review",
            "Priority support and daily follow-up"
          ]
        }
      ]
    },
    "gold-plans": {
      ar: [
        {
          title: "الباقة الذهبية (3 شهور)",
          price: 4000,
          currency: "جنيه",
          features: [
            "خطة تمرين متخصصة ومحسوبة بدقة حسب المرحلة (Off-season / Pre-contest)",
            "خطة تغذية تفصيلية مع حساب دقيق للماكروز والسعرات، تتغير أسبوعيًا حسب الاستجابة",
            "متابعة شبه يومية / 5 مرات أسبوعيًا على واتساب (صوت أو ڤويس أو رسالة)",
            "تعديل الخطة أسبوعيًا أو حسب الحاجة بناء على الصور والوزن والشكل",
            "خطة مكملات محسوبة بعناية",
            "خطة هرمونات مخصصة للبطولة (إذا كان العميل بياخد كورسات)",
            "فيديو كول شهري لمدة 45 دقيقة لتحليل شامل للجسم، الوقفة، التحكيم، ونقاش التطور",
            "تحليل وضع البوزينج + مساعدات بالفيديوهات أو كول مباشر (لو متاح)",
            "تحليل دم قبل وأثناء التحضير وتوجيهات لتصحيح أي خلل",
            "الدعم النفسي والذهني خلال مرحلة التنشيف أو الضغط"
          ]
        }
      ],
      en: [
        {
          title: "Gold Package (3 months)",
          price: 450,
          currency: "USD",
          features: [
            "Specialized training plan tailored to the phase (Off-season / Pre-contest)",
            "Detailed nutrition plan with precise macros/calories, updated weekly based on response",
            "Near-daily follow-up (5x/week) on WhatsApp (voice/text)",
            "Weekly or as-needed adjustments based on photos, weight and look",
            "Carefully calculated supplement plan",
            "Contest-focused hormone plan (if the client is on cycles)",
            "Monthly 45-min video call for full physique analysis and progress review",
            "Posing analysis + support via videos or live call (if available)",
            "Blood work analysis before/during prep with corrective guidance",
            "Mental support throughout cutting or stressful phases"
          ]
        }
      ]
    },
    "weight": {
      ar: [
        {
          title: "باقة التخسيس المكثف – شهر ونص (6 أسابيع)",
          price: 2000,
          currency: "جنيه",
          features: [
            "💡 مناسبة لـ: أي شخص وزنه زايد جدًا (سمنة مفرطة)، اللي كانوا بيفكروا في التكميم أو عاملين دايت وفشل معاهم، الناس اللي بيحسوا بالجوع المستمر أو عندهم مشاكل في الالتزام",
            " نظام غذائي مرن وسهل الالتزام بيه (بدون حرمان)",
            " تعديل النظام أسبوعيًا حسب قياسات الجسم والمجهود",
            " تدريج في النشاط البدني من مستوى مبتدئ جدًا (حتى بدون جيم)",
            " خطة مكملات تساعد على سد الشهية وتنشيط الحرق",
            " دعم نفسي وتشجيع يومي على الواتساب",
            " متابعة يومية بالتفصيل (أكل – وزن – مزاج – التزام)",
            " خطة خاصة لإدارة الجوع والانتكاسات",
            " تعليم أسلوب حياة مش بس دايت"
          ]
        },
        {
          title: "باقة التخسيس المكثف – 3 شهور",
          price: 4000,
          currency: "جنيه",
          features: [
            "💡 مناسبة لـ: أي شخص وزنه زايد جدًا (سمنة مفرطة)، اللي كانوا بيفكروا في التكميم أو عاملين دايت وفشل معاهم، الناس اللي بيحسوا بالجوع المستمر أو عندهم مشاكل في الالتزام",
            " نظام غذائي مرن وسهل الالتزام بيه (بدون حرمان)",
            " تعديل النظام أسبوعيًا حسب قياسات الجسم والمجهود",
            " تدريج في النشاط البدني من مستوى مبتدئ جدًا (حتى بدون جيم)",
            " خطة مكملات تساعد على سد الشهية وتنشيط الحرق",
            " دعم نفسي وتشجيع يومي على الواتساب",
            " متابعة يومية بالتفصيل (أكل – وزن – مزاج – التزام)",
            " خطة خاصة لإدارة الجوع والانتكاسات",
            " تعليم أسلوب حياة مش بس دايت"
          ]
        },
        {
          title: "باقة التخسيس المكثف – 6 شهور",
          price: 8000,
          currency: "جنيه",
          features: [
            "💡 مناسبة لـ: أي شخص وزنه زايد جدًا (سمنة مفرطة)، اللي كانوا بيفكروا في التكميم أو عاملين دايت وفشل معاهم، الناس اللي بيحسوا بالجوع المستمر أو عندهم مشاكل في الالتزام",
            " نظام غذائي مرن وسهل الالتزام بيه (بدون حرمان)",
            " تعديل النظام أسبوعيًا حسب قياسات الجسم والمجهود",
            " تدريج في النشاط البدني من مستوى مبتدئ جدًا (حتى بدون جيم)",
            " خطة مكملات تساعد على سد الشهية وتنشيط الحرق",
            " دعم نفسي وتشجيع يومي على الواتساب",
            " متابعة يومية بالتفصيل (أكل – وزن – مزاج – التزام)",
            " خطة خاصة لإدارة الجوع والانتكاسات",
            " تعليم أسلوب حياة مش بس دايت"
          ]
        }
      ],
      en: [
        {
          title: "Intensive Weight Loss – 1.5 months (6 weeks)",
          price: 150,
          currency: "USD",
          features: [
            "💡 Suitable for: severe overweight/obesity, people who considered sleeve surgery or failed diets, constant hunger, or low adherence",
            " Flexible, easy-to-follow diet (no deprivation)",
            " Weekly adjustments based on measurements and activity",
            " Gradual activity progression from very beginner level (even without a gym)",
            " Supplement plan to reduce appetite and boost metabolism",
            " Daily mental support and motivation on WhatsApp",
            " Detailed daily follow-up (food – weight – mood – adherence)",
            " Special plan to manage hunger and relapses",
            " Teaching a lifestyle, not just a diet"
          ]
        },
        {
          title: "Intensive Weight Loss – 3 months",
          price: 280,
          currency: "USD",
          features: [
            "💡 Suitable for: severe overweight/obesity, people who considered sleeve surgery or failed diets, constant hunger, or low adherence",
            " Flexible, easy-to-follow diet (no deprivation)",
            " Weekly adjustments based on measurements and activity",
            " Gradual activity progression from very beginner level (even without a gym)",
            " Supplement plan to reduce appetite and boost metabolism",
            " Daily mental support and motivation on WhatsApp",
            " Detailed daily follow-up (food – weight – mood – adherence)",
            " Special plan to manage hunger and relapses",
            " Teaching a lifestyle, not just a diet"
          ]
        },
        {
          title: "Intensive Weight Loss – 6 months",
          price: 500,
          currency: "USD",
          features: [
            "💡 Suitable for: severe overweight/obesity, people who considered sleeve surgery or failed diets, constant hunger, or low adherence",
            " Flexible, easy-to-follow diet (no deprivation)",
            " Weekly adjustments based on measurements and activity",
            " Gradual activity progression from very beginner level (even without a gym)",
            " Supplement plan to reduce appetite and boost metabolism",
            " Daily mental support and motivation on WhatsApp",
            " Detailed daily follow-up (food – weight – mood – adherence)",
            " Special plan to manage hunger and relapses",
            " Teaching a lifestyle, not just a diet"
          ]
        }
      ]
    },
    "consultation": {
      ar: [
        {
          title: "باقة الاستشارة",
          price: 150,
          currency: "جنيه",
          features: [
            "🕒 المدة: مكالمة صوت أو ڤيديو لمدة نصف ساعة (30 دقيقة)",
            "السعر: 150 جنيه فقط",
            "تقييم حالتك (وزن – هدف – طبيعة الجسم – التمرين – الأكل)",
            "مراجعة خطة تمرين أو دايت شغال بيه",
            "رأيي في كورس أو مكملات بتاخدها أو ناوي تبدأها",
            "نصائح للتخسيس أو الضخامة حسب حالتك",
            "التعامل مع إصابة أو مشكلة صحية بسيطة",
            "ترتيب خطواتك الجاية لو حاسس إنك تايه",
            "مناسبة لأي حد محتاج توجيه واضح قبل ما يبدأ باقة كاملة"
          ]
        }
      ],
      en: [
        {
          title: "Consultation Package",
          price: 150,
          currency: "USD",
          features: [
            "🕒 Duration: 30-minute voice or video call",
            "Price: 150",
            "Assess your case (weight – goal – body type – training – diet)",
            "Review a current workout or diet plan",
            "Opinion on a course/supplements you take or plan to start",
            "Cutting or bulking tips based on your case",
            "Handle a minor injury or simple health concern",
            "Plan your next steps if you feel lost",
            "Ideal for anyone needing clear guidance before starting a full plan"
          ]
        }
      ]
    }
  };

  const tOrder = {
    ar: {
      restart_btn: "إعادة",
      next_btn: "التالي",
      greeting: "مرحبًا 👋، أنا هنا لمساعدتك في طلب الباقة.",
      select_file_alert: "يرجى اختيار ملف.",
      required_alert: "من فضلك أدخل البيانات المطلوبة.",
      finished: "✅ تم جمع بياناتك بنجاح! سيتم التواصل معك قريبًا.",
      selected_plan_label: "الخطة المختارة:",
      steps: {
        name: "ما اسمك الكامل؟",
        gender: "ما نوعك؟",
        gender_options: ["ذكر", "أنثى"],
        age: "كم عمرك؟",
        phone: "رقم هاتفك؟",
        email: "بريدك الإلكتروني؟",
        location: "مكان إقامتك الحالي؟",
        height: "ما طولك بالسنتيمتر؟",
        weight: "ووزنك بالكيلوجرام؟",
        job: "ما طبيعة عملك؟",
        best_time: "ما هو أنسب وقت للتمرين؟",
        training_place: "أين تفضل التمرين؟",
        level: "ما هو مستواك التدريبي؟",
        level_options: ["مبتدئ", "متوسط", "متقدم"],
        used_supplements: "هل استخدمت مكملات من قبل؟",
        used_supplements_options: ["نعم", "لا"],
        used_hormones: "هل استخدمت هرمونات من قبل؟",
        used_hormones_options: ["نعم", "لا"],
        injuries: "هل لديك إصابات؟",
        health_status: "تفاصيل عن حالتك الصحية؟",
        medical_tests: "ارفع صورة تحاليل إن وجدت",
        front_image: "ارفع صورة أمامية لجسمك",
        side_image: "ارفع صورة جانبية لجسمك",
        back_image: "ارفع صورة خلفية لجسمك",
        goal: "ما هو هدفك من التمرين؟"
      }
    },
    en: {
      restart_btn: "Restart",
      next_btn: "Next",
      greeting: "Hello 👋, I’m here to help you request a package.",
      select_file_alert: "Please choose a file.",
      required_alert: "Please enter the required data.",
      finished: "✅ Your data has been collected! We will contact you soon.",
      selected_plan_label: "Selected plan:",
      steps: {
        name: "What is your full name?",
        gender: "What is your gender?",
        gender_options: ["Male", "Female"],
        age: "How old are you?",
        phone: "Your phone number?",
        email: "Your email?",
        location: "Where do you currently live?",
        height: "Your height in cm?",
        weight: "Your weight in kg?",
        job: "What is your job/activity?",
        best_time: "What is the best time for you to train?",
        training_place: "Where do you prefer to train?",
        level: "What is your training level?",
        level_options: ["Beginner", "Intermediate", "Advanced"],
        used_supplements: "Have you used supplements before?",
        used_supplements_options: ["Yes", "No"],
        used_hormones: "Have you used hormones before?",
        used_hormones_options: ["Yes", "No"],
        injuries: "Do you have any injuries?",
        health_status: "Details about your health condition?",
        medical_tests: "Upload lab tests if available",
        front_image: "Upload a front photo of your body",
        side_image: "Upload a side photo of your body",
        back_image: "Upload a back photo of your body",
        goal: "What is your training goal?"
      }
    }
  };

  // ===== Helpers =====
  function setLangAttributes(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  function text(elId, value) {
    const el = document.getElementById(elId);
    if (el) el.textContent = value;
  }

  function applyStaticTranslations(page, lang) {
    if (page === "index") {
      const t = tIndex[lang];
      text("site-name", t.site_name);
      text("nav-plans", t.nav_plans);
      text("nav-results", t.nav_results);
      text("nav-about", t.nav_about);
      text("header-subtitle", t.header_subtitle);
      text("cta-whatsapp", t.cta_whatsapp);
      text("about-heading", t.about_heading);
      text("about-desc", t.about_desc);
      text("about-li-1", t.about_li_1);
      text("about-li-2", t.about_li_2);
      text("about-li-3", t.about_li_3);
      text("about-li-4", t.about_li_4);
      text("about-li-5", t.about_li_5);
      text("premium-heading", t.premium_heading);
      text("badge-popular", t.badge_popular);
      text("card1-title", t.card1_title);
      text("card1-desc", t.card1_desc);
      text("card2-title", t.card2_title);
      text("card2-desc", t.card2_desc);
      text("card3-title", t.card3_title);
      text("card3-desc", t.card3_desc);
      text("card4-title", t.card4_title);
      text("card4-desc", t.card4_desc);
      text("results-heading", t.results_heading);
      text("testimonials-heading", t.testimonials_heading);
      text("test-1-text", t.test_1_text);
      text("test-1-name", t.test_1_name);
      text("test-2-text", t.test_2_text);
      text("test-2-name", t.test_2_name);
      text("test-3-text", t.test_3_text);
      text("test-3-name", t.test_3_name);
      text("contact-heading", t.contact_heading);
      text("email-label", tCommon[lang].email_label);
      text("instagram-label", tCommon[lang].instagram_label);
      text("tiktok-label", tCommon[lang].tiktok_label);
      text("facebook-label", tCommon[lang].facebook_label);
      text("youtube-label", tCommon[lang].youtube_label);
      text("telegram-label", tCommon[lang].telegram_label);
      text("footer-text", t.footer_text);
    } else if (page === "plans-details" || page === "gold-plans" || page === "weight") {
      const t = plansShared[lang];
      text("nav-about", t.nav_about);
      text("nav-consult", t.nav_consult);
      text("nav-reviews", t.nav_reviews);
      text("header-title", t.header_title);
      text("header-subtitle", t.header_subtitle);
      text("contact-heading", t.contact_heading);
      text("email-label", t.email_label);
      text("instagram-label", t.instagram_label);
      text("tiktok-label", tCommon[lang].tiktok_label);
      text("facebook-label", tCommon[lang].facebook_label);
      text("youtube-label", tCommon[lang].youtube_label);
      text("telegram-label", tCommon[lang].telegram_label);
    } else if (page === "about") {
      const t = plansShared[lang];
      text("nav-about", t.nav_about);
      text("nav-consult", t.nav_consult);
      text("nav-reviews", t.nav_reviews);
      // Use index about translations
      const tAbout = tIndex[lang];
      text("about-heading", tAbout.about_heading);
      text("about-desc", tAbout.about_desc);
      text("about-li-1", tAbout.about_li_1);
      text("about-li-2", tAbout.about_li_2);
      text("about-li-3", tAbout.about_li_3);
      text("about-li-4", tAbout.about_li_4);
      text("about-li-5", tAbout.about_li_5);
    } else if (page === "results") {
      const t = plansShared[lang];
      text("nav-about", t.nav_about);
      text("nav-consult", t.nav_consult);
      text("nav-reviews", t.nav_reviews);
      const tIdx = tIndex[lang];
      text("results-heading", tIdx.results_heading);
      text("testimonials-heading", tIdx.testimonials_heading);
    } else if (page === "consultation") {
      const t = plansShared[lang];
      text("nav-about", t.nav_about);
      text("nav-consult", t.nav_consult);
      text("nav-reviews", t.nav_reviews);
      // Header
      text("header-title", lang === "ar" ? "الاستشارة" : "Consultation");
      // Contact block
      text("contact-heading", t.contact_heading);
      text("email-label", t.email_label);
      text("instagram-label", t.instagram_label);
      text("tiktok-label", tCommon[lang].tiktok_label);
      text("facebook-label", tCommon[lang].facebook_label);
      text("youtube-label", tCommon[lang].youtube_label);
      text("telegram-label", tCommon[lang].telegram_label);
    } else if (page === "order") {
      // Buttons may exist
      const t = tOrder[lang];
      const restartBtn = document.getElementById("restartBtn");
      const nextBtn = document.getElementById("nextBtn");
      if (restartBtn) restartBtn.textContent = t.restart_btn;
      if (nextBtn) nextBtn.textContent = t.next_btn;
      const selectedPlanLabel = document.getElementById("selected-plan-label");
      if (selectedPlanLabel) selectedPlanLabel.textContent = t.selected_plan_label;
    }

    // Update language toggle button label
    const langBtn = document.getElementById("lang-toggle") || document.getElementById("langBtn");
    if (langBtn) langBtn.textContent = tCommon[lang].lang_button_label;
  }

  function getSavedLanguage() {
    return localStorage.getItem("lang") || null;
  }

  function detectLanguageSync() {
    const saved = getSavedLanguage();
    if (saved) return saved;
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return nav && nav.toLowerCase().startsWith("ar") ? "ar" : "en";
  }

  async function detectLanguageBestEffort() {
    const initial = detectLanguageSync();
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1500);
      const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
      clearTimeout(timeout);
      if (res.ok) {
        const data = await res.json();
        const cc = (data && data.country) || (data && data.country_code);
        if (cc && AR_COUNTRIES.includes(String(cc).toUpperCase())) return "ar";
      }
    } catch (_) {}
    return initial;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    setLangAttributes(lang);

    const page = (document.body && document.body.getAttribute("data-page")) || "";
    applyStaticTranslations(page, lang);
    updateThemeToggleText();

    // Re-render dynamic parts if available
    if (typeof window.renderPackages === "function") window.renderPackages();
    if (typeof window.renderOrder === "function") window.renderOrder();
  }

  function initLanguage() {
    const initial = detectLanguageSync();
    applyLanguage(initial);
    // async refine
    detectLanguageBestEffort().then((detected) => {
      if (detected && detected !== currentLang) {
        applyLanguage(detected);
      }
    });
  }

  function t(key) {
    const page = (document.body && document.body.getAttribute("data-page")) || "";
    if (page === "plans-details" || page === "gold-plans" || page === "weight") {
      const map = plansShared[currentLang];
      return (map && map[key]) || key;
    }
    const mapCommon = tCommon[currentLang] || {};
    const mapIndex = tIndex[currentLang] || {};
    return mapIndex[key] || mapCommon[key] || key;
  }

  function getPackages(pageKey) {
    const byPage = packagesByPage[pageKey];
    if (!byPage) return [];
    return byPage[currentLang] || [];
  }

  function getOrderTexts() {
    return tOrder[currentLang] || tOrder.en;
  }

  function getCurrency() {
    return currentLang === "en" ? "USD" : "جنيه";
  }

  // ===== Public API =====
  window.I18N = {
    getLanguage: () => currentLang,
    setLanguage: applyLanguage,
    init: initLanguage,
    t,
    getPackages,
    getOrderTexts,
    getCurrency
  };

  window.toggleLanguage = function () {
    const next = currentLang === "ar" ? "en" : "ar";
    applyLanguage(next);
  };

  window.updateThemeToggleText = function () {
    const themeText = document.getElementById("theme-text");
    if (!themeText) return;
    if (!currentLang) {
      currentLang = detectLanguageSync();
    }
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const common = tCommon[currentLang] || tCommon.en;
    themeText.textContent = isDark ? common.theme_light : common.theme_dark;
  };
})(); 


server {
    server_name mahmoud-labib.genuisweb.com;

    root /home/username/mahmoud-labib;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/mahmoud-labib.genuisweb.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/mahmoud-labib.genuisweb.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = mahmoud-labib.genuisweb.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name mahmoud-labib.genuisweb.com;
    return 404;

}