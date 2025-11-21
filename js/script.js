// MyAnimeList API - مجاني ومسموح به
const MAL_API_URL = 'https://api.jikan.moe/v4';

// عناصر DOM
const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-btn');

// بيانات احتياطية جميلة
const fallbackNews = [
    {
        id: 1,
        title: "أحدث أنمي الموسم من MyAnimeList",
        summary: "تابع أحدث وأشهر مسلسلات الأنمي المعروضة هذا الموسم مع تقييمات الجمهور والتفاصيل الكاملة.",
        source: "MyAnimeList",
        date: new Date().toISOString().split('T')[0],
        link: "https://myanimelist.net",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        title: "تصنيف أفضل الأنمي حالياً",
        summary: "تعرف على أعلى الأنمي تقييماً هذا الأسبوع حسب تصويتات الملايين من المشاهدين حول العالم.",
        source: "MyAnimeList",
        date: new Date().toISOString().split('T')[0],
        link: "https://myanimelist.net/topanime.php",
        image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=250&fit=crop"
    },
    {
        id: 3,
        title: "أنمي جديدة تم الإعلان عنها",
        summary: "آخر الأخبار حول المسلسلات الجديدة التي تم الإعلان عنها للعرض في المواسم القادمة.",
        source: "MyAnimeList",
        date: new Date().toISOString().split('T')[0],
        link: "https://myanimelist.net/season",
        image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&h=250&fit=crop"
    },
    {
        id: 4,
        title: "أفلام أنمي قادمة",
        summary: "استعد لأقوى أفلام الأنمي التي ستعرض في السينمات العالمية قريباً بتقنيات متطورة.",
        source: "MyAnimeList",
        date: new Date().toISOString().split('T')[0],
        link: "https://myanimelist.net/anime.php?type=Movie",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
    },
    {
        id: 5,
        title: "أنمي كلاسيكية يجب مشاهدتها",
        summary: "رحلة إلى عالم الأنمي الكلاسيكي مع أفضل المسلسلات التي شكلت تاريخ الأنمي الحديث.",
        source: "MyAnimeList",
        date: new Date().toISOString().split('T')[0],
        link: "https://myanimelist.net/topanime.php?type=bypopularity",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=250&fit=crop"
    },
    {
        id: 6,
        title: "توقعات أنمي 2024",
        summary: "تعرف على أهم المسلسلات المتوقعة في عام 2024 وأكثر الأنمي ترقباً من الجمهور.",
        source: "MyAnimeList",
        date: new Date().toISOString().split('T')[0],
        link: "https://myanimelist.net/anime/season/2024",
        image: "https://images.unsplash.com/photo-1489599809505-7c8e1c50b488?w=400&h=250&fit=crop"
    }
];

// وظيفة تحميل الأخبار من MyAnimeList
async function loadNewsFromMAL() {
    console.log('جلب أخبار من MyAnimeList...');
    
    showLoading();
    
    try {
        // جلب الأنمي الأكثر شيوعاً هذا الموسم
        const response = await fetch(`${MAL_API_URL}/top/anime?filter=airing&limit=6`);
        
        if (!response.ok) {
            throw new Error(`خطأ في API: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            const translatedNews = translateAnimeToArabic(data.data);
            displayNews(translatedNews);
        } else {
            throw new Error('لا توجد بيانات');
        }
        
    } catch (error) {
        console.error('خطأ في جلب البيانات:', error);
        useFallbackNews();
    } finally {
        hideLoading();
    }
}

// ترجمة بيانات الأنمي إلى أخبار عربية
function translateAnimeToArabic(animeList) {
    return animeList.map((anime, index) => {
        const arabicTitle = translateToArabic(anime.title);
        return {
            id: anime.mal_id,
            title: `${arabicTitle} - أحدث الأخبار`,
            summary: generateArabicSummary(anime),
            source: "MyAnimeList",
            date: new Date().toISOString().split('T')[0],
            link: anime.url,
            image: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url || getDefaultImage(index)
        };
    });
}

// توليد ملخص عربي للأنمي
function generateArabicSummary(anime) {
    const episodes = anime.episodes ? ` • ${anime.episodes} حلقة` : '';
    const score = anime.score ? ` • التقييم: ${anime.score}/10` : '';
    const type = anime.type ? ` • النوع: ${translateType(anime.type)}` : '';
    const status = anime.status ? ` • الحالة: ${translateStatus(anime.status)}` : '';
    
    return `أنمي ${translateType(anime.type)}${episodes}${score}${type}${status}. تابع آخر التحديثات والمشاهدات على MyAnimeList.`;
}

// ترجمة الأنواع
function translateType(type) {
    const types = {
        'TV': 'مسلسل تلفزيوني',
        'Movie': 'فيلم',
        'OVA': 'OVA',
        'ONA': 'ONA', 
        'Special': 'خاص'
    };
    return types[type] || type;
}

// ترجمة الحالة
function translateStatus(status) {
    const statuses = {
        'Currently Airing': 'يعرض حالياً',
        'Finished Airing': 'منتهي',
        'Not yet aired': 'لم يعرض بعد'
    };
    return statuses[status] || status;
}

// ترجمة النصوص للعربية
function translateToArabic(text) {
    const commonTranslations = {
        'Attack on Titan': 'هجوم العمالقة',
        'One Piece': 'ون بيس',
        'Naruto': 'ناروتو',
        'Demon Slayer': 'قاتل الشياطين',
        'Jujutsu Kaisen': 'معركة السحر',
        'Spy × Family': 'سباي فاميلي',
        'Chainsaw Man': 'رجل المنشار',
        'My Hero Academia': 'أكاديمية الأبطال',
        'Dragon Ball': 'دراغون بول',
        'Tokyo Revengers': 'منتقو طوكيو',
        'One Punch Man': 'ون بانش مان',
        'Death Note': 'دفتر الموت',
        'Fullmetal Alchemist': 'الخيميائي المعدني',
        'Hunter x Hunter': 'هنتر x هنتر'
    };
    
    // البحث في الترجمة المعروفة أولاً
    for (const [eng, arb] of Object.entries(commonTranslations)) {
        if (text.includes(eng)) {
            return text.replace(eng, arb);
        }
    }
    
    // إذا لم نجد ترجمة، نستخدم النص الأصلي
    return text;
}

// وظيفة بديلة إذا فشل الاتصال
function useFallbackNews() {
    displayNews(fallbackNews);
}

// وظائف المساعدة
function showLoading() {
    errorMessage.classList.add('hidden');
    loadingElement.classList.remove('hidden');
    newsContainer.innerHTML = '';
}

function hideLoading() {
    loadingElement.classList.add('hidden');
}

function getDefaultImage(index) {
    const defaultImages = [
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=250&fit=crop',
        'https://images.unsplash.com/photo-1489599809505-7c8e1c50b488?w=400&h=250&fit=crop'
    ];
    return defaultImages[index % defaultImages.length];
}

// وظيفة عرض الأخبار
function displayNews(news) {
    console.log('عرض الأخبار:', news);
    
    if (!news || news.length === 0) {
        newsContainer.innerHTML = `
            <div class="no-news">
                <h3>لا توجد أخبار متاحة حالياً</h3>
                <p>يرجى المحاولة مرة أخرى لاحقاً</p>
            </div>
        `;
        return;
    }
    
    const newsHTML = news.map(item => `
        <article class="news-card">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="image-overlay">
                    <span>${item.source}</span>
                </div>
            </div>
            <div class="news-content">
                <div class="news-date">${formatDate(item.date)}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-summary">${item.summary}</p>
                <div class="news-meta">
                    <span class="news-source">${item.source}</span>
                    <a href="${item.link}" class="read-more" target="_blank" rel="noopener">
                        <i class="fas fa-external-link-alt"></i>
                        اذهب ل MyAnimeList
                    </a>
                </div>
            </div>
        </article>
    `).join('');
    
    newsContainer.innerHTML = newsHTML;
}

function formatDate(dateString) {
    try {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', options);
    } catch (error) {
        return dateString;
    }
}

// شريط التقدم
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + "%";
}

// التشغيل
document.addEventListener('DOMContentLoaded', function() {
    console.log('بدء تحميل أخبار الأنمي...');
    loadNewsFromMAL();
    
    // شريط التقدم
    window.addEventListener('scroll', updateProgressBar);
});

if (retryButton) {
    retryButton.addEventListener('click', loadNewsFromMAL);
}
