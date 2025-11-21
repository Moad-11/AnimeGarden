// ===================================================================
// ==   NEW script.js - USES JIKAN API INSTEAD OF RSS FEEDS      ==
// ===================================================================

// بيانات أخبار احتياطية (للاستخدام في حال فشل API)
const FALLBACK_NEWS = [
    {
        id: 1,
        title: "الإعلان الرسمي عن الموسم الثالث من Spy × Family مع إطلاق التريلر",
        summary: "كشف استوديو Wit Studio النقاب عن الموسم الثالث من Spy × Family خلال حدث خاص في طوكيو، مع عرض التريلر الرسمي الأول.",
        source: "Anime News Network",
        date: "2024-01-20",
        image: "https://www.animenewsnetwork.com/thumbnails/crop600x315gYA9U/cms/news.2/197197/spy-family.jpg",
        category: "أخبار المسلسلات",
        tags: ["Spy × Family", "موسم جديد", "أنمي", "إعلان"]
    },
    {
        id: 2,
        title: "فيلم Demon Slayer: Kimetsu no Yaiba يحقق إيرادات قياسية في اليابان",
        summary: "فيلم Demon Slayer الجديد يحطم الأرقام القياسية بإيرادات تجاوزت 2.8 مليار ين ياباني خلال عطلة نهاية الأسبوع الأولى.",
        source: "Crunchyroll News",
        date: "2024-01-19",
        image: "https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197183/demon-slayer.jpg",
        category: "أخبار الأفلام",
        tags: ["Demon Slayer", "فيلم", "أرقام قياسية", "إيرادات"]
    },
    {
        id: 3,
        title: "استوديو MAPPA يعلن عن 3 مشاريع جديدة لعام 2024",
        summary: "كشف استوديو MAPPA عن خططه الطموحة لعام 2024 بمشاريع جديدة تشمل أنمي Chainsaw Man الجزء الثاني وتعاون دولي.",
        source: "Anime News Network",
        date: "2024-01-18",
        image: "https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197165/mappa.jpg",
        category: "أخبار الاستوديوهات",
        tags: ["MAPPA", "استوديو", "مشاريع جديدة", "Chainsaw Man"]
    }
];

// الحصول على عناصر الصفحة
const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-btn');

// متغير لتخزين الأخبار
let currentNews = [];

// وظيفة لتنسيق التاريخ
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (error) {
        return "تاريخ غير متوفر";
    }
}

// وظيفة عرض رسالة التحميل
function showLoading() {
    errorMessage.classList.add('hidden');
    loadingElement.classList.remove('hidden');
    newsContainer.innerHTML = '';
}

// وظيفة إخفاء رسالة التحميل
function hideLoading() {
    loadingElement.classList.add('hidden');
}

// وظيفة عرض رسالة الخطأ
function showError() {
    hideLoading();
    errorMessage.classList.remove('hidden');
}

// وظيفة عرض الأخبار
function displayNews(news) {
    newsContainer.innerHTML = ''; // مسح المحتوى القديم

    if (!news || news.length === 0) {
        newsContainer.innerHTML = `
            <div class="no-news">
                <h3>لا توجد أخبار متاحة حالياً</h3>
                <p>يرجى المحاولة مرة أخرى لاحقاً</p>
            </div>
        `;
        return;
    }

    // إنشاء وبناء كل بطاقة خبر باستخدام JavaScript
    news.forEach(item => {
        const article = document.createElement('article');
        article.className = 'news-card';
        article.dataset.newsId = item.id;

        article.innerHTML = `
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1541562232579-512a21360020?w=600&h=400&fit=crop'">
                <div class="news-category">${item.category}</div>
                <div class="image-overlay">
                    <span>${item.source}</span>
                </div>
            </div>
            <div class="news-content">
                <div class="news-date">
                    <i class="fas fa-calendar"></i>
                    ${formatDate(item.date)}
                </div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-summary">${item.summary}</p>
                <div class="news-tags">
                    ${item.tags.map(tag => `<span class="news-tag">${tag}</span>`).join('')}
                </div>
                <div class="news-meta">
                    <span class="news-source">
                        <i class="fas fa-newspaper"></i>
                        ${item.source}
                    </span>
                    <button class="read-more" onclick="showFullNews(${item.id})">
                        <i class="fas fa-book-open"></i>
                        اقرأ الخبر كاملاً
                    </button>
                </div>
            </div>
        `;
        newsContainer.appendChild(article);
    });
}

// وظيفة عرض الخبر الكامل في صفحة جديدة
function showFullNews(newsId) {
    const newsItem = currentNews.find(item => item.id === newsId);
    if (newsItem) {
        localStorage.setItem('currentNews', JSON.stringify(newsItem));
        const newWindow = window.open('news-detail.html', '_blank');
        if (!newWindow) {
            alert('يرجى السماح بالنوافذ المنبثقة لعرض الخبر الكامل');
        }
    }
}

// دالة جديدة لجلب الأخبار من Jikan API
async function fetchJikanNews() {
    console.log('محاولة جلب الأخبار من Jikan API...');
    try {
        const response = await fetch('https://api.jikan.moe/v4/news');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const newsFromAPI = data.data.slice(0, 6).map((item, index) => {
            return {
                id: index + 1,
                title: item.title,
                summary: item.excerpt,
                source: `MyAnimeList (${item.author_username})`,
                date: item.date,
                image: item.images.jpg.image_url || 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=600&h=400&fit=crop',
                category: getCategoryFromTitle(item.title),
                tags: extractTagsFromTitle(item.title),
                link: item.url
            };
        });

        return newsFromAPI;

    } catch (error) {
        console.error('فشل جلب الأخبار من Jikan API:', error);
        return null;
    }
}

// وظائف مساعدة
function getCategoryFromTitle(title) {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('film') || titleLower.includes('movie') || titleLower.includes('فيلم')) return "أخبار الأفلام";
    if (titleLower.includes('season') || titleLower.includes('موسم') || titleLower.includes('episode')) return "أخبار المسلسلات";
    if (titleLower.includes('studio') || titleLower.includes('استوديو')) return "أخبار الاستوديوهات";
    if (titleLower.includes('platform') || titleLower.includes('منصة')) return "أخبار المنصات";
    if (titleLower.includes('contest') || titleLower.includes('مسابقة') || titleLower.includes('award')) return "مسابقات وأحداث";
    return "أخبار عامة";
}

function extractTagsFromTitle(title) {
    const commonTags = ['أنمي', 'anime', 'ياباني'];
    const titleTags = title.toLowerCase().split(' ').slice(0, 3);
    return [...commonTags, ...titleTags].slice(0, 5);
}

// الوظيفة الرئيسية لتحميل الأخبار
async function loadNews() {
    console.log('بدء تحميل الأخبار...');
    showLoading();

    try {
        // 1. محاولة جلب الأخبار الحية من API
        const liveNews = await fetchJikanNews();
        
        if (liveNews && liveNews.length > 0) {
            console.log('نجح جلب الأخبار من Jikan API.');
            currentNews = liveNews;
        } else {
            // 2. إذا فشل API، استخدم الأخبار الاحتياطية
            console.log('فشل API، استخدام الأخبار المحلية المعدة.');
            currentNews = FALLBACK_NEWS;
        }
        
        displayNews(currentNews);

    } catch (error) {
        console.error('حدث خطأ عام:', error);
        showError();
    } finally {
        hideLoading();
    }
}

// عند اكتمال تحميل الصفحة، قم بتشغيل دالة تحميل الأخبار
document.addEventListener('DOMContentLoaded', function() {
    loadNews();

    // ربط زر إعادة المحاولة
    if (retryButton) {
        retryButton.addEventListener('click', loadNews);
    }
});

// جعل الدالة متاحة عالمياً
window.showFullNews = showFullNews;
