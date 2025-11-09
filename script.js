// Sample Data
const listingsData = [
    {
        id: 1,
        name: "Анна Петрова",
        location: "Москва, Центральный район",
        price: 28000,
        image: "https://via.placeholder.com/400x200?text=Квартира+1",
        rating: 4.8,
        details: "2 комнаты, 45 м²",
        preferences: ["Не курящие", "Тишина"],
        avatar: "АП"
    },
    {
        id: 2,
        name: "Дмитрий Соколов",
        location: "Москва, СВАО",
        price: 32000,
        image: "https://via.placeholder.com/400x200?text=Квартира+2",
        rating: 4.6,
        details: "3 комнаты, 65 м²",
        preferences: ["С животными", "Активные"],
        avatar: "ДС"
    },
    {
        id: 3,
        name: "Елена Волкова",
        location: "Санкт-Петербург, Центр",
        price: 25000,
        image: "https://via.placeholder.com/400x200?text=Квартира+3",
        rating: 4.9,
        details: "2 комнаты, 50 м²",
        preferences: ["Не курящие", "Тишина"],
        avatar: "ЕВ"
    },
    {
        id: 4,
        name: "Игорь Морозов",
        location: "Москва, ЮАО",
        price: 35000,
        image: "https://via.placeholder.com/400x200?text=Квартира+4",
        rating: 4.7,
        details: "3 комнаты, 70 м²",
        preferences: ["С животными"],
        avatar: "ИМ"
    },
    {
        id: 5,
        name: "Ольга Новикова",
        location: "Москва, ЗАО",
        price: 30000,
        image: "https://via.placeholder.com/400x200?text=Квартира+5",
        rating: 4.5,
        details: "2 комнаты, 48 м²",
        preferences: ["Не курящие", "Тишина"],
        avatar: "ОН"
    },
    {
        id: 6,
        name: "Сергей Лебедев",
        location: "Москва, СЗАО",
        price: 27000,
        image: "https://via.placeholder.com/400x200?text=Квартира+6",
        rating: 4.4,
        details: "2 комнаты, 42 м²",
        preferences: ["Активные"],
        avatar: "СЛ"
    }
];

const applicationsData = [
    {
        id: 1,
        name: "Мария Козлова",
        location: "Москва, Центральный район",
        date: "2 дня назад",
        status: "На рассмотрении",
        avatar: "МК"
    },
    {
        id: 2,
        name: "Алексей Иванов",
        location: "Москва, СВАО",
        date: "3 дня назад",
        status: "На рассмотрении",
        avatar: "АИ"
    },
    {
        id: 3,
        name: "Татьяна Смирнова",
        location: "Москва, ЮАО",
        date: "5 дней назад",
        status: "На рассмотрении",
        avatar: "ТС"
    }
];

const meetingsData = [
    {
        id: 1,
        name: "Елена Волкова",
        location: "Санкт-Петербург, Центр",
        date: "15 марта, 14:00",
        type: "Просмотр квартиры",
        avatar: "ЕВ"
    },
    {
        id: 2,
        name: "Дмитрий Соколов",
        location: "Москва, СВАО",
        date: "17 марта, 16:00",
        type: "Встреча",
        avatar: "ДС"
    },
    {
        id: 3,
        name: "Ольга Новикова",
        location: "Москва, ЗАО",
        date: "18 марта, 12:00",
        type: "Просмотр квартиры",
        avatar: "ОН"
    }
];

const matchesData = [
    {
        id: 1,
        name: "Анна Петрова",
        location: "Москва, Центральный район",
        matchScore: 95,
        date: "Сегодня",
        avatar: "АП"
    },
    {
        id: 2,
        name: "Игорь Морозов",
        location: "Москва, ЮАО",
        matchScore: 88,
        date: "Вчера",
        avatar: "ИМ"
    },
    {
        id: 3,
        name: "Сергей Лебедев",
        location: "Москва, СЗАО",
        matchScore: 82,
        date: "2 дня назад",
        avatar: "СЛ"
    }
];

// Chart Data
const weekData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    values: [12, 19, 15, 25, 22, 18, 14]
};

const monthData = {
    labels: ['Нед 1', 'Нед 2', 'Нед 3', 'Нед 4'],
    values: [85, 92, 78, 95]
};

let currentChartPeriod = 'week';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderListings();
    renderApplications();
    renderMeetings();
    renderMatches();
    initChart();
    initFilters();
    initModals();
});

// Render Listings
function renderListings(filteredData = listingsData) {
    const grid = document.getElementById('listingsGrid');
    grid.innerHTML = '';
    
    filteredData.forEach(listing => {
        const card = document.createElement('div');
        card.className = 'listing-card';
        card.innerHTML = `
            <div class="listing-image">${listing.image ? `<img src="${listing.image}" alt="${listing.name}" style="width: 100%; height: 100%; object-fit: cover;">` : '<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: #F5F5F7; color: #777;">Фото</div>'}</div>
            <div class="listing-content">
                <div class="listing-header">
                    <div>
                        <div class="listing-title">${listing.name}</div>
                        <div class="listing-location">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            ${listing.location}
                        </div>
                    </div>
                    <div class="listing-price">${listing.price.toLocaleString()} ₽</div>
                </div>
                <div class="listing-details">
                    <div class="listing-detail">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${listing.details}
                    </div>
                </div>
                <div class="listing-footer">
                    <div class="listing-rating">
                        <span class="rating-badge">${listing.rating}</span>
                        <span style="font-size: 12px; color: #777;">Рейтинг</span>
                    </div>
                    <div class="listing-actions">
                        <button class="action-button" onclick="openProfileModal('${listing.name}', '${listing.location}', '${listing.avatar}', ${listing.rating})" title="Профиль">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>
                        <button class="action-button" onclick="openMessageModal('${listing.name}')" title="Сообщение">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </button>
                        <button class="action-button" onclick="openBookingModal('${listing.name}')" title="Забронировать">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render Applications
function renderApplications() {
    const list = document.getElementById('applicationsList');
    list.innerHTML = '';
    
    applicationsData.forEach(app => {
        const card = document.createElement('div');
        card.className = 'application-card';
        card.innerHTML = `
            <div class="card-avatar">${app.avatar}</div>
            <div class="card-content">
                <div class="card-name">${app.name}</div>
                <div class="card-info">${app.location}</div>
                <div class="card-meta">${app.date} • ${app.status}</div>
            </div>
            <div class="card-actions">
                <button class="action-button" onclick="openProfileModal('${app.name}', '${app.location}', '${app.avatar}', 4.5)" title="Профиль">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
                <button class="action-button" onclick="openMessageModal('${app.name}')" title="Сообщение">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            </div>
        `;
        list.appendChild(card);
    });
}

// Render Meetings
function renderMeetings() {
    const list = document.getElementById('meetingsList');
    list.innerHTML = '';
    
    meetingsData.forEach(meeting => {
        const card = document.createElement('div');
        card.className = 'meeting-card';
        card.innerHTML = `
            <div class="card-avatar">${meeting.avatar}</div>
            <div class="card-content">
                <div class="card-name">${meeting.name}</div>
                <div class="card-info">${meeting.location}</div>
                <div class="card-meta">${meeting.date} • ${meeting.type}</div>
            </div>
            <div class="card-actions">
                <button class="action-button" onclick="openProfileModal('${meeting.name}', '${meeting.location}', '${meeting.avatar}', 4.7)" title="Профиль">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
                <button class="action-button" onclick="openMessageModal('${meeting.name}')" title="Сообщение">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            </div>
        `;
        list.appendChild(card);
    });
}

// Render Matches
function renderMatches() {
    const list = document.getElementById('matchesList');
    list.innerHTML = '';
    
    matchesData.forEach(match => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `
            <div class="card-avatar">${match.avatar}</div>
            <div class="card-content">
                <div class="card-name">${match.name}</div>
                <div class="card-info">${match.location}</div>
                <div class="card-meta">Совпадение: ${match.matchScore}% • ${match.date}</div>
            </div>
            <div class="card-actions">
                <button class="action-button" onclick="openProfileModal('${match.name}', '${match.location}', '${match.avatar}', 4.6)" title="Профиль">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
                <button class="action-button" onclick="openMessageModal('${match.name}')" title="Сообщение">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            </div>
        `;
        list.appendChild(card);
    });
}

// Initialize Chart
function initChart() {
    const canvas = document.getElementById('activityChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    drawChart(ctx, canvas, currentChartPeriod);
    
    // Chart tabs
    document.querySelectorAll('.chart-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentChartPeriod = this.dataset.period;
            drawChart(ctx, canvas, currentChartPeriod);
        });
    });
}

function drawChart(ctx, canvas, period) {
    const data = period === 'week' ? weekData : monthData;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw bars
    const barWidth = chartWidth / data.values.length * 0.6;
    const barSpacing = chartWidth / data.values.length;
    const maxValue = Math.max(...data.values);
    
    ctx.fillStyle = '#1A73E8';
    data.values.forEach((value, index) => {
        const barHeight = (value / maxValue) * chartHeight;
        const x = padding + index * barSpacing + (barSpacing - barWidth) / 2;
        const y = height - padding - barHeight;
        
        // Draw bar
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw value label
        ctx.fillStyle = '#111111';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(value, x + barWidth / 2, y - 5);
        ctx.fillStyle = '#1A73E8';
        
        // Draw label
        ctx.fillStyle = '#777777';
        ctx.font = '11px Inter';
        ctx.fillText(data.labels[index], x + barWidth / 2, height - padding + 20);
        ctx.fillStyle = '#1A73E8';
    });
}

// Initialize Filters
function initFilters() {
    const cityFilter = document.getElementById('cityFilter');
    const budgetFilter = document.getElementById('budgetFilter');
    const preferencesFilter = document.getElementById('preferencesFilter');
    
    [cityFilter, budgetFilter, preferencesFilter].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
}

function applyFilters() {
    const city = document.getElementById('cityFilter').value;
    const budget = document.getElementById('budgetFilter').value;
    const preferences = document.getElementById('preferencesFilter').value;
    
    let filtered = listingsData.filter(listing => {
        if (city && !listing.location.toLowerCase().includes(city)) {
            return false;
        }
        
        if (budget) {
            const price = listing.price;
            if (budget === 'low' && price > 15000) return false;
            if (budget === 'medium' && (price < 15000 || price > 30000)) return false;
            if (budget === 'high' && (price < 30000 || price > 50000)) return false;
            if (budget === 'premium' && price < 50000) return false;
        }
        
        if (preferences) {
            const prefMap = {
                'non-smoking': 'Не курящие',
                'pets-ok': 'С животными',
                'quiet': 'Тишина',
                'active': 'Активные'
            };
            if (!listing.preferences.includes(prefMap[preferences])) return false;
        }
        
        return true;
    });
    
    renderListings(filtered);
}

// Initialize Modals
function initModals() {
    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Close modals on close button
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}

// Modal Functions
function openProfileModal(name, location, avatar, rating) {
    const modal = document.getElementById('profileModal');
    const modalAvatar = modal.querySelector('.modal-avatar');
    const modalName = modal.querySelector('.modal-name');
    const modalLocation = modal.querySelector('.modal-location');
    const modalRating = modal.querySelector('.rating-badge');
    
    modalAvatar.textContent = avatar;
    modalName.textContent = name;
    modalLocation.textContent = location;
    modalRating.textContent = rating;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openMessageModal(name) {
    const modal = document.getElementById('messageModal');
    const recipient = document.getElementById('messageRecipient');
    recipient.textContent = name;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus on textarea
    setTimeout(() => {
        modal.querySelector('.message-input').focus();
    }, 100);
}

function openBookingModal(name) {
    const modal = document.getElementById('bookingModal');
    const recipient = document.getElementById('bookingRecipient');
    recipient.textContent = `с ${name}`;
    
    // Set minimum date to today
    const dateInput = document.getElementById('bookingDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function sendMessage() {
    const textarea = document.querySelector('#messageModal .message-input');
    const message = textarea.value.trim();
    
    if (message) {
        alert('Сообщение отправлено!');
        textarea.value = '';
        closeModal('messageModal');
    } else {
        alert('Пожалуйста, введите сообщение');
    }
}

function confirmBooking() {
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    
    if (!date || !time) {
        alert('Пожалуйста, выберите дату и время');
        return;
    }
    
    alert('Просмотр забронирован!');
    document.getElementById('bookingDate').value = '';
    document.getElementById('bookingTime').value = '';
    closeModal('bookingModal');
}

// Resize chart on window resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        const canvas = document.getElementById('activityChart');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            drawChart(ctx, canvas, currentChartPeriod);
        }
    }, 250);
});

