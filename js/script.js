// ===================================================================
// ==   NEW AND CORRECTED script.js FILE - COPY EVERYTHING      ==
// ===================================================================

// بيانات أخبار احتياطية (ملاحظة: تمت إزالة 'fullContent' لأنه كان يسبب المشاكل)
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
    },
    {
        id: 4,
        title: "أنمي One Piece يدخل قوس Egghead Island بتحسينات تقنية مذهلة",
        summary: "دخل أنمي One Piece قوس Egghead Island الجديد بتحسينات تقنية كبيرة في الرسوم والأنيميشن أثارت إعجاب المشاهدين.",
        source: "Crunchyroll News",
        date: "2024-01-17",
        image: "https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197152/one-piece.jpg",
        category: "أخبار المسلسلات",
        tags: ["One Piece", "قوس جديد", "تحسينات", "أنيميشن"]
    },
    {
        id: 5,
        title: "مسابقة Anime of the Year 2023 تعلن عن الفائزين بمفاجآت كبيرة",
        summary: "انتهت مسابقة أفضل أنمي لعام 2023 بتتويج مسلسلات وأفلام في فئات مختلفة، مع مفاجآت في بعض النتائج.",
        source: "Anime News Network",
        date: "2024-01-16",
        image: "https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197138/awards.jpg",
        category: "مسابقات وأحداث",
        tags: ["مسابقة", "2023", "أفضل أنمي", "نتائج"]
    },
    {
        id: 6,
        title: "إطلاق منصة أنمي عربية جديدة بخدمات متطورة وأسعار تنافسية",
        summary: "تم الإعلان عن منصة بث عربية جديدة مخصصة للأنمي تقدم محتوى حصرياً ومترجماً بالعربية مع ميزات فريدة.",
        source: "Crunchyroll News",
        date: "2024-01-15",
        image: "https://images.unsplash.com/photo-1489599809505-7c8e1c50b488?w=800&h=400&fit=crop",
        category: "أخبار المنصات",
        tags: ["منصة عربية", "بث", "أنمي", "العالم العربي"]
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
        // حفظ الخبر في localStorage للوصول إليه في الصفحة الأخرى
        localStorage.setItem('currentNews', JSON.stringify(newsItem));
        
        // فتح صفحة جديدة لعرض الخبر الكامل
        const newWindow = window.open('news-detail.html', '_blank');
        if (!newWindow) {
            alert('يرجى السماح بالنوافذ المنبثقة لعرض الخبر الكامل');
        }
    }
}

// الوظيفة الرئيسية لتحميل الأخبار
async function loadNews() {
    console.log('بدء تحميل الأخبار...');
    showLoading();

    try {
        // نستخدم الأخبار الاحتياطية مباشرة لضمان عمل الموقع
        console.log('استخدام الأخبار المحلية المعدة.');
        currentNews = FALLBACK_NEWS;
        displayNews(currentNews);

    } catch (error) {
        console.error('حدث خطأ:', error);
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
