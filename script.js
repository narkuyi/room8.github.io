const state = {
  roommates: [],
  listings: [],
  filteredRoommates: [],
  filteredListings: [],
  currentLanguage: localStorage.getItem("language") || "ru",
};

const elements = {
  roommatesGrid: document.getElementById("roommatesGrid"),
  listingsContainer: document.getElementById("listingsContainer"),
  map: document.getElementById("listingsMap"),
  mapTooltip: document.getElementById("mapTooltip"),
  filtersForm: document.getElementById("filtersForm"),
  filterCity: document.getElementById("filterCity"),
  filterBudget: document.getElementById("filterBudget"),
  budgetValue: document.getElementById("budgetValue"),
  filterRoommates: document.getElementById("filterRoommates"),
  filterAgeMin: document.getElementById("filterAgeMin"),
  filterAgeMax: document.getElementById("filterAgeMax"),
  filterGender: document.getElementById("filterGender"),
  filterInterests: document.getElementById("filterInterests"),
  resetFilters: document.getElementById("resetFilters"),
  globalSearchForm: document.getElementById("globalSearchForm"),
  globalSearchInput: document.getElementById("globalSearchInput"),
  loginForm: document.getElementById("loginForm"),
  registerForm: document.getElementById("registerForm"),
  langRu: document.getElementById("langRu"),
  langEn: document.getElementById("langEn"),
};

const citiesKZ = [
  "Алматы",
  "Астана",
  "Шымкент",
  "Караганда",
  "Актобе",
  "Тараз",
  "Павлодар",
  "Усть-Каменогорск",
  "Семей",
  "Атырау",
  "Костанай",
  "Кызылорда",
  "Кокшетау",
  "Петропавл",
  "Уральск",
  "Туркестан",
  "Балхаш",
  "Жезказган",
  "Талдыкорган",
  "Экибастуз",
];

const sampleData = {
  roommates: [
    {
      id: 1,
      firstName: "Аружан",
      lastName: "Садыкова",
      age: 22,
      university: "Назарбаев Университет",
      faculty: "Школа инженерии",
      immigrant: false,
      nationality: "Казахстан",
      gender: "женский",
      homeDuties: ["Уборка", "Готовка"],
      interests: ["Йога", "Волонтёрство", "Фотография"],
      city: "Астана",
      budget: 220000,
      bio: "Люблю порядок в доме и вечерние занятия йогой.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=12",
    },
    {
      id: 2,
      firstName: "Тимур",
      lastName: "Жумабеков",
      age: 24,
      university: "КБТУ",
      faculty: "Факультет информационных технологий",
      immigrant: false,
      nationality: "Казахстан",
      gender: "мужской",
      homeDuties: ["Оплата коммунальных", "Техническая помощь"],
      interests: ["Программирование", "Киберспорт", "Походы"],
      city: "Алматы",
      budget: 180000,
      bio: "Работаю над стартапом, ищу дружелюбных соседей.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=20",
    },
    {
      id: 3,
      firstName: "Милана",
      lastName: "Ахметова",
      age: 21,
      university: "КазГЮУ",
      faculty: "Юридический",
      immigrant: true,
      nationality: "Узбекистан",
      gender: "женский",
      homeDuties: ["Помощь с готовкой", "Полив растений"],
      interests: ["Чтение", "Фильм-клуб", "Пешие прогулки"],
      city: "Астана",
      budget: 200000,
      bio: "Люблю уют и совместные вечера за настольными играми.",
      languages: ["Русский", "Английский", "Узбекский"],
      avatar: "https://i.pravatar.cc/300?img=47",
    },
    {
      id: 4,
      firstName: "Али",
      lastName: "Нуртазин",
      age: 23,
      university: "SDU University",
      faculty: "Факультет бизнеса",
      immigrant: false,
      nationality: "Казахстан",
      gender: "мужской",
      homeDuties: ["Покупка продуктов", "Уборка"],
      interests: ["Баскетбол", "Путешествия", "Финансы"],
      city: "Алматы",
      budget: 160000,
      bio: "Спортсмен и молодой профессионал, ищу активных соседей.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=21",
    },
    {
      id: 5,
      firstName: "Асель",
      lastName: "Абдрахманова",
      age: 25,
      university: "КазНУ",
      faculty: "Факультет дизайна",
      immigrant: false,
      nationality: "Казахстан",
      gender: "женский",
      homeDuties: ["Декор интерьера", "Организация пространства"],
      interests: ["Дизайн", "Кофе", "Городские велопрогулки"],
      city: "Алматы",
      budget: 230000,
      bio: "Помогу сделать дом стильным и удобным.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=25",
    },
    {
      id: 6,
      firstName: "Марк",
      lastName: "Руденко",
      age: 24,
      university: "ENU",
      faculty: "Факультет энергетики",
      immigrant: true,
      nationality: "Украина",
      gender: "мужской",
      homeDuties: ["Ремонт техники", "Сборка мебели"],
      interests: ["Футбол", "Технологии", "Музыка"],
      city: "Астана",
      budget: 190000,
      bio: "Инженер-энергетик, люблю живую музыку и коворкинги.",
      languages: ["Русский", "Английский", "Украинский"],
      avatar: "https://i.pravatar.cc/300?img=22",
    },
    {
      id: 7,
      firstName: "Дана",
      lastName: "Омарова",
      age: 20,
      university: "КазНУ",
      faculty: "Факультет журналистики",
      immigrant: false,
      nationality: "Казахстан",
      gender: "женский",
      homeDuties: ["Уборка", "Покупка продуктов"],
      interests: ["Журналистика", "Кино", "Фотография"],
      city: "Алматы",
      budget: 170000,
      bio: "Студентка-журналистка, люблю творческую атмосферу.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=68",
    },
    {
      id: 8,
      firstName: "Ерлан",
      lastName: "Касымов",
      age: 23,
      university: "КБТУ",
      faculty: "Факультет информационных технологий",
      immigrant: false,
      nationality: "Казахстан",
      gender: "мужской",
      homeDuties: ["Техническая помощь", "Уборка"],
      interests: ["Программирование", "Игры", "Спорт"],
      city: "Алматы",
      budget: 175000,
      bio: "Разработчик, ценю тишину и порядок.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=23",
    },
    {
      id: 9,
      firstName: "Жанар",
      lastName: "Бекова",
      age: 22,
      university: "Назарбаев Университет",
      faculty: "Школа медицины",
      immigrant: false,
      nationality: "Казахстан",
      gender: "женский",
      homeDuties: ["Готовка", "Уборка"],
      interests: ["Медицина", "Йога", "Кулинария"],
      city: "Астана",
      budget: 210000,
      bio: "Будущий врач, люблю здоровый образ жизни.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=69",
    },
    {
      id: 10,
      firstName: "Айдар",
      lastName: "Сейтов",
      age: 24,
      university: "ENU",
      faculty: "Факультет экономики",
      immigrant: false,
      nationality: "Казахстан",
      gender: "мужской",
      homeDuties: ["Оплата коммунальных", "Покупка продуктов"],
      interests: ["Экономика", "Трейдинг", "Спорт"],
      city: "Астана",
      budget: 195000,
      bio: "Экономист, увлекаюсь финансовыми рынками.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=24",
    },
    {
      id: 11,
      firstName: "Сабина",
      lastName: "Исмаилова",
      age: 21,
      university: "КазГЮУ",
      faculty: "Юридический",
      immigrant: false,
      nationality: "Казахстан",
      gender: "женский",
      homeDuties: ["Уборка", "Организация пространства"],
      interests: ["Право", "Чтение", "Танцы"],
      city: "Алматы",
      budget: 185000,
      bio: "Студентка-юрист, активная и общительная.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=70",
    },
    {
      id: 12,
      firstName: "Данияр",
      lastName: "Абдуллаев",
      age: 25,
      university: "SDU University",
      faculty: "Факультет бизнеса",
      immigrant: false,
      nationality: "Казахстан",
      gender: "мужской",
      homeDuties: ["Техническая помощь", "Уборка"],
      interests: ["Бизнес", "Спорт", "Путешествия"],
      city: "Алматы",
      budget: 200000,
      bio: "Предприниматель, ищу единомышленников.",
      languages: ["Казахский", "Русский", "Английский"],
      avatar: "https://i.pravatar.cc/300?img=26",
    },
  ],
  listings: [
    {
      id: "ap1",
      title: "Sky Plaza Residence",
      city: "Астана",
      price: 250000,
      roommatesNeeded: 2,
      description:
        "Светлая квартира с панорамным видом, рядом с университетским кампусом и набережной Есиль.",
      advantages: ["Коворкинг в доме", "Консьерж-сервис", "Зал для йоги"],
      disadvantages: ["Оплата парковки отдельно"],
      preferences: ["internet", "security", "cleaning"],
      coordinates: { x: 62, y: 34 },
      address: "пр. Кабанбай батыра 45",
      photos: ["https://images.unsplash.com/photo-1505691723518-36a5ac3be353"],
    },
    {
      id: "ap2",
      title: "Loft Expo Boulevard",
      city: "Астана",
      price: 210000,
      roommatesNeeded: 3,
      description:
        "Современный лофт в районе Expo, идеален для студентов Nazarbayev University.",
      advantages: ["Высокоскоростной интернет", "Комната для переговоров"],
      disadvantages: ["Требуется разделять уборку"],
      preferences: ["internet", "parking"],
      coordinates: { x: 68, y: 28 },
      address: "улица 38, дом 2",
      photos: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"],
    },
    {
      id: "ap3",
      title: "Aurora Park Residence",
      city: "Алматы",
      price: 180000,
      roommatesNeeded: 2,
      description:
        "Квартира вблизи Ботанического сада, рядом с КБТУ и крупными бизнес-центрами.",
      advantages: ["Подземная парковка", "Система умного дома"],
      disadvantages: ["Без мебели на балконе"],
      preferences: ["parking", "security"],
      coordinates: { x: 49, y: 74 },
      address: "ул. Байтурсынова 128",
      photos: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
    },
    {
      id: "ap4",
      title: "Terrace Hills",
      city: "Алматы",
      price: 155000,
      roommatesNeeded: 1,
      description:
        "Уютная квартира в районе Медео, 15 минут до университета SDU Shuttle.",
      advantages: ["Зелёная терраса", "Включены коммунальные"],
      disadvantages: ["Нет лифта"],
      preferences: ["petFriendly"],
      coordinates: { x: 42, y: 81 },
      address: "ул. Горная 77",
      photos: ["https://images.unsplash.com/photo-1600607687920-4e2a07a3b21a"],
    },
    {
      id: "ap5",
      title: "Downtown Hub Apartments",
      city: "Шымкент",
      price: 130000,
      roommatesNeeded: 2,
      description:
        "Комфортная квартира в центре, рядом с кафе и коворкингами, быстрый доступ к автобусам.",
      advantages: ["Домашняя студия", "Склад для велосипедов"],
      disadvantages: ["Ограниченные парковочные места"],
      preferences: ["internet"],
      coordinates: { x: 33, y: 69 },
      address: "пр. Бауыржана Момышулы 11",
      photos: ["https://images.unsplash.com/photo-1523217582562-09d0def993a6"],
    },
  ],
};

function formatCurrency(value) {
  return `${value.toLocaleString("ru-RU")} ₸`;
}

function initData() {
  state.roommates = sampleData.roommates;
  state.listings = sampleData.listings;
  state.filteredRoommates = [...state.roommates];
  state.filteredListings = [...state.listings];
}

function populateCities() {
  const uniqueCities = Array.from(
    new Set([...citiesKZ, ...state.listings.map((item) => item.city)])
  ).sort((a, b) => a.localeCompare(b, "ru"));
  elements.filterCity.innerHTML = `<option value="all">Все города Казахстана</option>`;
  uniqueCities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    elements.filterCity.append(option);
  });
}

function renderRoommates(roommates) {
  elements.roommatesGrid.innerHTML = "";
  if (roommates.length === 0) {
    elements.roommatesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #757575;">Сожители не найдены. Попробуйте изменить фильтры.</p>';
    return;
  }
  roommates.forEach((roommate) => {
    const card = document.createElement("article");
    card.className = "user-card";
    const genderIcon = roommate.gender === "женский" ? "♀" : "♂";
    card.innerHTML = `
      <div class="user-card__avatar">
        <img src="${roommate.avatar}" alt="${roommate.firstName} ${roommate.lastName}" />
        <span class="gender-badge">${genderIcon}</span>
      </div>
      <div class="user-card__header">
        <h3>${roommate.firstName} ${roommate.lastName}, ${roommate.age} лет</h3>
        <span class="tag">${roommate.city}</span>
      </div>
      <p class="user-card__university">${roommate.university}</p>
      <p class="user-card__faculty">${roommate.faculty}</p>
      <div class="user-card__info">
        <p><strong>Пол:</strong> ${roommate.gender === "женский" ? "Женский" : "Мужской"}</p>
        <p><strong>Нация:</strong> ${roommate.nationality}</p>
        <p><strong>Иммигрант:</strong> ${roommate.immigrant ? "Да" : "Нет"}</p>
        <p><strong>Бюджет:</strong> ${formatCurrency(roommate.budget)}</p>
      </div>
      <div class="user-card__duties">
        <strong>Обязанности:</strong>
        <div class="tag-list">
          ${roommate.homeDuties
            .map((duty) => `<span class="tag">${duty}</span>`)
            .join("")}
        </div>
      </div>
      <div class="user-card__interests">
        <strong>Интересы:</strong>
        <div class="tag-list">
          ${roommate.interests
            .map((interest) => `<span class="tag tag--interest">${interest}</span>`)
            .join("")}
        </div>
      </div>
      <button class="btn btn--primary view-profile" data-roommate-id="${
        roommate.id
      }">Просмотреть профиль</button>
    `;
    elements.roommatesGrid.append(card);
  });
}

function buildFeatureTags(features, type) {
  const palette = {
    advantages: { className: "tag tag--advantage" },
    disadvantages: { className: "tag tag--disadvantage" },
  };
  return features
    .map(
      (feature) =>
        `<span class="${palette[type].className}">${feature}</span>`
    )
    .join("");
}

function renderListings(listings) {
  elements.listingsContainer.innerHTML = "";
  listings.forEach((listing) => {
    const card = document.createElement("article");
    card.className = "listing-card";
    card.dataset.listingId = listing.id;
    const featureTags = buildFeatureTags(
      listing.advantages ?? [],
      "advantages"
    );
    const disadvantageTags = buildFeatureTags(
      listing.disadvantages ?? [],
      "disadvantages"
    );
    card.innerHTML = `
      <div class="listing-card__media">
        <img src="${listing.photos?.[0] ?? ""}" alt="Фотография ${
      listing.title
    }" loading="lazy" />
      </div>
      <div class="listing-card__content">
        <div class="listing-card__header">
          <h3 class="listing-card__title">${listing.title}</h3>
          <span class="listing-card__price">${formatCurrency(listing.price)}</span>
        </div>
        <div class="listing-card__meta">
          <span>${listing.city}</span>
          <span>${listing.address}</span>
          <span>Ищут: ${listing.roommatesNeeded} ${
      listing.roommatesNeeded > 1 ? "сожителей" : "сожителя"
    }</span>
        </div>
        <p class="listing-card__description">${listing.description}</p>
        <div class="tag-list">
          ${featureTags}
          ${disadvantageTags}
        </div>
        <div class="listing-card__footer">
          <button class="btn btn--primary" data-modal-target="bookingModal">Забронировать просмотр</button>
          <button class="btn btn--secondary" data-modal-target="messageModal">Связаться</button>
        </div>
      </div>
    `;
    elements.listingsContainer.append(card);
  });
}

function getSelectedPreferences() {
  return Array.from(
    elements.filtersForm.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);
}

function applyFilters() {
  const cityValue = elements.filterCity.value;
  const budgetValue = Number(elements.filterBudget.value);
  const roommatesValue = elements.filterRoommates.value;
  const ageMin = Number(elements.filterAgeMin?.value || 18);
  const ageMax = Number(elements.filterAgeMax?.value || 25);
  const genderValue = elements.filterGender?.value || "all";
  const selectedInterests = Array.from(elements.filterInterests?.selectedOptions || []).map(opt => opt.value);
  const selectedPrefs = getSelectedPreferences();
  const searchQuery = elements.globalSearchInput.value.trim().toLowerCase();

  const cityFilter = (item) =>
    cityValue === "all" || item.city.toLowerCase() === cityValue.toLowerCase();

  const budgetFilter = (item) => item.price <= budgetValue;

  const roommatesFilter = (item) => {
    if (roommatesValue === "all") return true;
    if (roommatesValue === "4") return item.roommatesNeeded >= 4;
    return item.roommatesNeeded === Number(roommatesValue);
  };

  const preferencesFilter = (item) =>
    selectedPrefs.length === 0 ||
    selectedPrefs.every((pref) => item.preferences?.includes(pref));

  const searchFilterListings = (item) => {
    if (!searchQuery) return true;
    const haystack = [
      item.title,
      item.city,
      item.description,
      item.address,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(searchQuery);
  };

  const ageFilter = (roommate) => {
    return roommate.age >= ageMin && roommate.age <= ageMax;
  };

  const genderFilter = (roommate) => {
    if (genderValue === "all") return true;
    return roommate.gender === genderValue;
  };

  const interestsFilter = (roommate) => {
    if (selectedInterests.length === 0) return true;
    return selectedInterests.some(interest => 
      roommate.interests.some(rInterest => 
        rInterest.toLowerCase().includes(interest.toLowerCase())
      )
    );
  };

  const searchFilterRoommates = (roommate) => {
    if (!searchQuery) return true;
    const haystack = [
      roommate.firstName,
      roommate.lastName,
      roommate.university,
      roommate.faculty,
      roommate.city,
      ...roommate.interests,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(searchQuery);
  };

  state.filteredListings = state.listings
    .filter(cityFilter)
    .filter(budgetFilter)
    .filter(roommatesFilter)
    .filter(preferencesFilter)
    .filter(searchFilterListings);

  state.filteredRoommates = state.roommates
    .filter((item) => cityValue === "all" || item.city === cityValue)
    .filter((item) => item.budget <= budgetValue)
    .filter(ageFilter)
    .filter(genderFilter)
    .filter(interestsFilter)
    .filter(searchFilterRoommates);

  renderRoommates(state.filteredRoommates);
  renderListings(state.filteredListings);
  renderMapPins(state.filteredListings);
}

function updateBudgetValue(event) {
  const value = Number(event.target.value);
  elements.budgetValue.textContent = `${value.toLocaleString("ru-RU")} ₸`;
}

function resetFilters() {
  elements.filtersForm.reset();
  elements.filterBudget.value = 200000;
  elements.budgetValue.textContent = "200 000 ₸";
  if (elements.filterAgeMin) elements.filterAgeMin.value = 18;
  if (elements.filterAgeMax) elements.filterAgeMax.value = 25;
  if (elements.filterGender) elements.filterGender.value = "all";
  if (elements.filterInterests) {
    Array.from(elements.filterInterests.options).forEach(opt => opt.selected = false);
  }
  applyFilters();
}

function renderMapPins(listings) {
  elements.map.innerHTML = "";
  listings.forEach((listing) => {
    if (!listing.coordinates) return;
    const pin = document.createElement("button");
    pin.className = "map__pin";
    pin.type = "button";
    pin.style.left = `${listing.coordinates.x}%`;
    pin.style.top = `${listing.coordinates.y}%`;
    pin.title = `${listing.title} — ${formatCurrency(listing.price)}`;
    pin.dataset.listingId = listing.id;
    pin.addEventListener("click", () => handlePinClick(listing));
    elements.map.append(pin);
  });
}

function handlePinClick(listing) {
  const tooltip = elements.mapTooltip;
  tooltip.innerHTML = `
    <h4>${listing.title}</h4>
    <p><strong>${formatCurrency(listing.price)}</strong> — ${listing.city}</p>
    <p>${listing.address}</p>
    <p>Ищут: ${listing.roommatesNeeded} ${
    listing.roommatesNeeded > 1 ? "сожителей" : "сожителя"
  }</p>
    <button class="btn btn--primary" data-modal-target="bookingModal">Забронировать</button>
  `;
  tooltip.classList.add("map-tooltip--visible");
  tooltip.setAttribute("aria-hidden", "false");

  // Scroll listing into view
  const listingCard = elements.listingsContainer.querySelector(
    `[data-listing-id="${listing.id}"]`
  );
  if (listingCard) {
    listingCard.scrollIntoView({ behavior: "smooth", block: "center" });
    listingCard.classList.add("listing-card--active");
    setTimeout(() => listingCard.classList.remove("listing-card--active"), 1200);
  }
}

function hideTooltip() {
  elements.mapTooltip.classList.remove("map-tooltip--visible");
  elements.mapTooltip.setAttribute("aria-hidden", "true");
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("is-visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal.is-visible")) {
    document.body.style.overflow = "";
  }
}

function bindModalEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.closest("[data-modal-target]")) {
      const modalId = target.closest("[data-modal-target]").dataset.modalTarget;
      openModal(modalId);
    }

    if (target.matches("[data-close]")) {
      const modal = target.closest(".modal");
      if (modal) closeModal(modal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document
        .querySelectorAll(".modal.is-visible")
        .forEach((modal) => closeModal(modal));
    }
  });
}

function handleRoommateProfile(event) {
  const button = event.target.closest(".view-profile");
  if (!button) return;
  const roommateId = Number(button.dataset.roommateId);
  const roommate = state.roommates.find((item) => item.id === roommateId);
  if (!roommate) return;

  const profileContainer = document.getElementById("profileContent");
  profileContainer.innerHTML = `
    <div class="profile">
      <div class="profile__header">
        <img src="${roommate.avatar}" alt="${roommate.firstName} ${
    roommate.lastName
  }" width="96" height="96" />
        <div>
          <h2>${roommate.firstName} ${roommate.lastName}, ${
    roommate.age
  } лет</h2>
          <p>${roommate.university}, ${roommate.faculty}</p>
          <p>${roommate.city} · Бюджет: ${formatCurrency(roommate.budget)}</p>
        </div>
      </div>
      <p>${roommate.bio}</p>
      <div class="profile__details">
        <div>
          <h3>Домашние обязанности</h3>
          <div class="tag-list">
            ${roommate.homeDuties
              .map((item) => `<span class="tag">${item}</span>`)
              .join("")}
          </div>
        </div>
        <div>
          <h3>Интересы</h3>
          <div class="tag-list">
            ${roommate.interests
              .map((item) => `<span class="tag">${item}</span>`)
              .join("")}
          </div>
        </div>
        <div>
          <h3>Языки</h3>
          <div class="tag-list">
            ${roommate.languages
              .map((item) => `<span class="tag">${item}</span>`)
              .join("")}
          </div>
        </div>
        <div>
          <h3>Статус</h3>
          <p>Иммигрант: ${roommate.immigrant ? "Да" : "Нет"}</p>
          <p>Национальность: ${roommate.nationality}</p>
        </div>
      </div>
      <div class="modal__actions">
        <button class="btn btn--primary" data-modal-target="messageModal">Отправить сообщение</button>
        <button class="btn btn--secondary" data-modal-target="bookingModal">Забронировать просмотр</button>
      </div>
    </div>
  `;
  openModal("profileModal");
}

function bindDynamicEvents() {
  elements.roommatesGrid.addEventListener("click", handleRoommateProfile);
  elements.listingsContainer.addEventListener("click", (event) => {
    const target = event.target.closest("[data-modal-target]");
    if (target) return;
    const listingCard = event.target.closest(".listing-card");
    if (listingCard) {
      const listingId = listingCard.dataset.listingId;
      const listing = state.listings.find((item) => item.id === listingId);
      if (listing) handlePinClick(listing);
    }
  });
  elements.map.addEventListener("mouseleave", hideTooltip);
  document.addEventListener("click", (event) => {
    if (!elements.map.contains(event.target)) {
      hideTooltip();
    }
  });
}

function initForms() {
  elements.filterBudget.addEventListener("input", updateBudgetValue);
  elements.filtersForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });
  elements.resetFilters.addEventListener("click", (event) => {
    event.preventDefault();
    resetFilters();
  });
  elements.filtersForm.addEventListener("change", (event) => {
    if (event.target.type === "checkbox" || event.target.tagName === "SELECT" || event.target.type === "number") {
      applyFilters();
    }
  });
  
  elements.filtersForm.addEventListener("input", (event) => {
    if (event.target.type === "number" && (event.target.id === "filterAgeMin" || event.target.id === "filterAgeMax")) {
      applyFilters();
    }
  });

  elements.globalSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });
}

function initCharts() {
  const activityCtx = document.getElementById("activityChart");
  const interestsCtx = document.getElementById("interestsChart");

  if (!activityCtx || !interestsCtx) return;

  new Chart(activityCtx, {
    type: "line",
    data: {
      labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      datasets: [
        {
          label: "Отклики",
          data: [120, 145, 180, 210, 260, 240, 190],
          borderColor: "#42A5F5",
          backgroundColor: "rgba(66, 165, 245, 0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            color: "#757575",
          },
          grid: {
            color: "rgba(0,0,0,0.05)",
          },
        },
        x: {
          ticks: {
            color: "#757575",
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  new Chart(interestsCtx, {
    type: "doughnut",
    data: {
      labels: ["Спорт", "Технологии", "Дизайн", "Путешествия", "Кулинария"],
      datasets: [
        {
          data: [28, 22, 18, 16, 12],
          backgroundColor: [
            "#1E88E5",
            "#42A5F5",
            "#90CAF9",
            "#0D1B2A",
            "#B0BEC5",
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#424242",
          },
        },
      },
    },
  });
}

function enhanceTagStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .tag--advantage {
      background-color: rgba(66, 165, 245, 0.12);
      color: #1E88E5;
    }
    .tag--disadvantage {
      background-color: rgba(13, 27, 42, 0.08);
      color: #0D1B2A;
      opacity: 0.8;
    }
    .listing-card--active {
      outline: 2px solid #42A5F5;
      transition: outline 200ms ease;
    }
    .profile {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .profile__header {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .profile__header img {
      border-radius: 20px;
      object-fit: cover;
    }
    .profile__details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }
  `;
  document.head.append(style);
}

const translations = {
  ru: {
    "login.title": "Войти",
    "login.email": "Электронная почта",
    "login.password": "Пароль",
    "login.submit": "Войти",
    "login.cancel": "Отмена",
    "register.title": "Регистрация",
    "register.firstName": "Имя",
    "register.lastName": "Фамилия",
    "register.email": "Электронная почта",
    "register.phone": "Номер телефона",
    "register.university": "Университет",
    "register.preferences": "Предпочтения",
    "register.hobbies": "Хобби",
    "register.password": "Пароль",
    "register.submit": "Зарегистрироваться",
    "register.cancel": "Отмена",
  },
  en: {
    "login.title": "Sign In",
    "login.email": "Email",
    "login.password": "Password",
    "login.submit": "Sign In",
    "login.cancel": "Cancel",
    "register.title": "Register",
    "register.firstName": "First Name",
    "register.lastName": "Last Name",
    "register.email": "Email",
    "register.phone": "Phone Number",
    "register.university": "University",
    "register.preferences": "Preferences",
    "register.hobbies": "Hobbies",
    "register.password": "Password",
    "register.submit": "Register",
    "register.cancel": "Cancel",
  },
};

function updateLanguage(lang) {
  state.currentLanguage = lang;
  localStorage.setItem("language", lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  if (elements.langRu && elements.langEn) {
    elements.langRu.classList.toggle("active", lang === "ru");
    elements.langEn.classList.toggle("active", lang === "en");
  }
}

function initLanguage() {
  if (elements.langRu && elements.langEn) {
    elements.langRu.addEventListener("click", () => updateLanguage("ru"));
    elements.langEn.addEventListener("click", () => updateLanguage("en"));
    updateLanguage(state.currentLanguage);
  }
}

function initAuthForms() {
  if (elements.loginForm) {
    elements.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      console.log("Login attempt:", { email, password });
      alert("Функция входа будет реализована на бэкенде");
      closeModal(document.getElementById("loginModal"));
    });
  }

  if (elements.registerForm) {
    elements.registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        firstName: document.getElementById("regFirstName").value,
        lastName: document.getElementById("regLastName").value,
        email: document.getElementById("regEmail").value,
        phone: document.getElementById("regPhone").value,
        university: document.getElementById("regUniversity").value,
        preferences: document.getElementById("regPreferences").value,
        hobbies: document.getElementById("regHobbies").value,
        password: document.getElementById("regPassword").value,
      };
      console.log("Registration data:", formData);
      alert("Регистрация успешна! Данные будут отправлены на сервер.");
      closeModal(document.getElementById("registerModal"));
      elements.registerForm.reset();
    });
  }
}

function initialize() {
  initData();
  populateCities();
  renderRoommates(state.roommates);
  renderListings(state.listings);
  renderMapPins(state.listings);
  initForms();
  bindModalEvents();
  bindDynamicEvents();
  initCharts();
  enhanceTagStyles();
  initLanguage();
  initAuthForms();
}

document.addEventListener("DOMContentLoaded", initialize);

