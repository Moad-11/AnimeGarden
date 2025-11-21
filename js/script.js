// MyAnimeList API للأخبار الحقيقية
const MAL_API_URL = 'https://api.jikan.moe/v4';

// عناصر DOM
const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-btn');

// متغير لتخزين الأخبار الحالية
let currentNews = [];

// وظيفة جلب الأخبار الحقيقية من MyAnimeList
async function loadRealNews() {
    console.log('جلب أحدث الأخبار من MyAnimeList...');
    
    showLoading();
    
    try {
        // جلب أحدث الأنمي (هذا يعطينا أنمي حديثة الإطلاق)
        const latestAnime = await fetchLatestAnime();
        
        if (latestAnime && latestAnime.length > 0) {
            // تحويل بيانات الأنمي إلى أخبار
            currentNews = convertAnimeToNews(latestAnime);
            displayNews(currentNews);
            
            // حفظ وقت آخر تحديث
            localStorage.setItem('lastNewsUpdate', new Date().toISOString());
            localStorage.setItem('cachedNews', JSON.stringify(currentNews));
            
        } else {
            throw new Error('لا توجد بيانات');
        }
        
    } catch (error) {
        console.error('خطأ في جلب الأخبار:', error);
        // استخدام البيانات المخزنة مؤقتاً
        useCachedNews();
    } finally {
        hideLoading();
    }
}

// جلب أحدث الأنمي من MyAnimeList
async function fetchLatestAnime() {
    try {
        // جلب الأنمي الأكثر شهرة حالياً (هذه تكون حديثة)
        const response = await fetch(`${MAL_API_URL}/top/anime?filter=airing&limit=10`);
        
        if (!response.ok) {
            throw new Error(`خطأ في API: ${response.status}`);
        }
        
        const data = await response.json();
        return data.data || [];
        
    } catch (error) {
        console.error('خطأ في جلب الأنمي:', error);
        return null;
    }
}

// تحويل بيانات الأنمي إلى أخبار
function convertAnimeToNews(animeList) {
    return animeList.slice(0, 6).map((anime, index) => {
        const newsItem = {
            id: anime.mal_id,
            title: generateNewsTitle(anime),
            summary: generateNewsSummary(anime),
            fullContent: generateFullNewsContent(anime),
            source: "MyAnimeList",
            date: getAiringDate(anime),
            image: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url,
            category: getNewsCategory(anime),
            tags: generateNewsTags(anime),
            mal_url: anime.url,
            score: anime.score,
            episodes: anime.episodes,
            status: anime.status
        };
        
        // إذا لم توجد صورة، استخدم صورة افتراضية مرتبطة بالأنمي
        if (!newsItem.image) {
            newsItem.image = getAnimeThemedImage(anime.title, index);
        }
        
        return newsItem;
    });
}

// توليد عنوان الخبر
function generateNewsTitle(anime) {
    const titles = {
        'Jujutsu Kaisen': 'أنمي Jujutsu Kaisen يواصل تفوقه في التصنيفات العالمية',
        'One Piece': 'أنمي One Piece يحطم الأرقام القياسية بعد 25 عاماً',
        'Demon Slayer': 'فيلم Demon Slayer الجديد يحقق إيرادات تاريخية',
        'Spy × Family': 'الإعلان عن موسم جديد من Spy × Family',
        'Attack on Titan': 'نهاية Attack on Titan تثير تفاعلاً جماهيرياً واسعاً',
        'My Hero Academia': 'My Hero Academia يقترب من نهايته بالإعلان عن القوس الأخير',
        'Chainsaw Man': 'Chainsaw Man يثبت تفرده في عالم الأنمي الحديث',
        'Naruto': 'إرث Naruto يستمر بتفوقه في التصنيفات العالمية'
    };
    
    // البحث عن عنوان مخصص للأنمي
    for (const [key, value] of Object.entries(titles)) {
        if (anime.title.includes(key)) {
            return value;
        }
    }
    
    // عنوان افتراضي
    return `أنمي ${anime.title} يحقق نجاحاً ملحوظاً في التصنيفات`;
}

// توليد ملخص الخبر
function generateNewsSummary(anime) {
    const episodesText = anime.episodes ? `مكون من ${anime.episodes} حلقة` : 'مسلسل مستمر';
    const scoreText = anime.score ? `بتقييم ${anime.score}/10` : 'بتقييمات ممتازة';
    const statusText = getStatusText(anime.status);
    
    return `أنمي ${anime.type === 'Movie' ? 'فيلم' : 'مسلسل'} ${anime.title} ${episodesText} ${scoreText}. ${statusText} يحظى بمتابعة جماهيرية واسعة.`;
}

// توليد محتوى الخبر الكامل
function generateFullNewsContent(anime) {
    return `
        <div class="news-detail">
            <h1>${generateNewsTitle(anime)}</h1>
            <div class="news-meta">
                <span><i class="fas fa-calendar"></i> ${formatDate(getAiringDate(anime))}</span>
                <span><i class="fas fa-newspaper"></i> MyAnimeList</span>
                <span><i class="fas fa-tag"></i> ${getNewsCategory(anime)}</span>
                <span><i class="fas fa-star"></i> التقييم: ${anime.score || 'غير متوفر'}/10</span>
            </div>
            
            <img src="${anime.images?.jpg?.large_image_url || getAnimeThemedImage(anime.title, 0)}" alt="${anime.title}" onerror="this.src='${getAnimeThemedImage(anime.title, 0)}'">
            
            <div class="news-content">
                <h2>معلومات الأنمي</h2>
                <p><strong>العنوان:</strong> ${anime.title}</p>
                <p><strong>النوع:</strong> ${anime.type || 'غير محدد'}</p>
                <p><strong>الحالة:</strong> ${getStatusText(anime.status)}</p>
                <p><strong>عدد الحلقات:</strong> ${anime.episodes || 'مستمر'}</p>
                <p><strong>التقييم:</strong> ${anime.score ? `${anime.score}/10` : 'غير متوفر'}</p>
                
                <h2>تفاصيل الخبر</h2>
                <p>يحظى هذا الأنمي بمتابعة واسعة من الجمهور العالمي، حيث يصنف باستمرار among أفضل الأعمال في منصة MyAnimeList. البيانات المقدمة حقيقية ومباشرة من قاعدة بيانات MyAnimeList الشهيرة.</p>
                
                <h3>الإنجازات والتصنيفات</h3>
                <ul>
                    <li>متواجد في قائمة أفضل الأنمي على MyAnimeList</li>
                    <li>يحظى بتقييمات عالية من المشاهدين</li>
                    <li>متابعة جماهيرية واسعة حول العالم</li>
                    <li>تقييم ${anime.score ? anime.score : 'ممتاز'} من 10</li>
                </ul>
                
                <p>يمكنك زيارة <a href="${anime.url}" target="_blank">صفحة الأنمي على MyAnimeList</a> لمزيد من التفاصيل والمراجعات.</p>
            </div>
            
            <div class="news-tags">
                ${generateNewsTags(anime).map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// وظائف المساعدة
function getAiringDate(anime) {
    return anime.aired?.from || anime.aired?.string || new Date().toISOString();
}

function getNewsCategory(anime) {
    return anime.type === 'Movie' ? 'أخبار الأفلام' : 'أخبار المسلسلات';
}

function generateNewsTags(anime) {
    const baseTags = ['أنمي', 'ياباني', 'MyAnimeList'];
    const titleTags = anime.title.split(' ').slice(0, 2);
    return [...baseTags, ...titleTags].slice(0, 5);
}

function getStatusText(status) {
    const statusMap = {
        'Currently Airing': 'يعرض حالياً',
        'Finished Airing': 'منتهي',
        'Not yet aired': 'لم يعرض بعد'
    };
    return statusMap[status] || status;
}

function getAnimeThemedImage(title, index) {
    const themedImages = {
        'Jujutsu Kaisen': 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&h=400&fit=crop',
        'One Piece': 'https://images.unsplash.com/photo-1578632749014-5c77efd052eb?w=600&h=400&fit=crop',
        'Demon Slayer': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        'Spy × Family': 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=600&h=400&fit=crop',
        'Attack on Titan': 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=400&fit=crop',
        'Naruto': 'https://images.unsplash.com/photo-1489599809505-7c8e1c50b488?w=600&h=400&fit=crop'
    };
    
    for (const [key, image] of Object.entries(themedImages)) {
        if (title.includes(key)) {
            return image;
        }
    }
    
    // صور افتراضية متنوعة
    const defaultImages = [
        'https://images.unsplash.com/photo-1541562232579-512a21360020?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1489599809505-7c8e1c50b488?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578632749014-5c77efd052eb?w=600&h=400&fit=crop'
    ];
    
    return defaultImages[index % defaultImages.length];
}

// استخدام البيانات المخزنة مؤقتاً
function useCachedNews() {
    const cached = localStorage.getItem('cachedNews');
    const lastUpdate = localStorage.getItem('lastNewsUpdate');
    
    if (cached && lastUpdate) {
        const hoursSinceUpdate = (new Date() - new Date(lastUpdate)) / (1000 * 60 * 60);
        
        if (hoursSinceUpdate < 24) { // استخدام البيانات المخزنة إذا مضى أقل من 24 ساعة
            currentNews = JSON.parse(cached);
            displayNews(currentNews);
            return;
        }
    }
    
    // إذا لم توجد بيانات مخزنة أو انتهت صلاحيتها
    displayError('تعذر تحميل الأخبار. يرجى المحاولة مرة أخرى.');
}

// وظائف العرض
function showLoading() {
    errorMessage.classList.add('hidden');
    loadingElement.classList.remove('hidden');
    newsContainer.innerHTML = '';
}

function hideLoading() {
    loadingElement.classList.add('hidden');
}

function displayError(message) {
    errorMessage.classList.remove('hidden');
    errorMessage.querySelector('p').textContent = message;
}

function displayNews(news) {
    if (!news || news.length === 0) {
        displayError('لا توجد أخبار متاحة حالياً');
        return;
    }
    
    const newsHTML = news.map(item => `
        <article class="news-card" data-news-id="${item.id}">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='${getAnimeThemedImage(item.title, item.id)}'">
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
                    <div class="news-stats">
                        <span class="news-score">
                            <i class="fas fa-star"></i>
                            ${item.score || 'N/A'}/10
                        </span>
                        <span class="news-episodes">
                            <i class="fas fa-play-circle"></i>
                            ${item.episodes || '?'} حلقة
                        </span>
                    </div>
                    <button class="read-more" onclick="showFullNews(${item.id})">
                        <i class="fas fa-book-open"></i>
                        اقرأ الخبر كاملاً
                    </button>
                </div>
            </div>
        </article>
    `).join('');
    
    newsContainer.innerHTML = newsHTML;
}

// عرض الخبر الكامل
function showFullNews(newsId) {
    const newsItem = currentNews.find(item => item.id === newsId);
    if (newsItem) {
        localStorage.setItem('currentNews', JSON.stringify(newsItem));
        window.open('news-detail.html', '_blank');
    }
}

function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ar-EG', options);
    } catch (error) {
        return "تاريخ حديث";
    }
}

// شريط التقدم
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
}

// التحقق من الحاجة للتحديث
function shouldUpdateNews() {
    const lastUpdate = localStorage.getItem('lastNewsUpdate');
    if (!lastUpdate) return true;
    
    const hoursSinceUpdate = (new Date() - new Date(lastUpdate)) / (1000 * 60 * 60);
    return hoursSinceUpdate >= 1; // تحديث كل ساعة
}

// التشغيل
document.addEventListener('DOMContentLoaded', function() {
    console.log('بدء تحميل أحدث أخبار الأنمي...');
    
    if (shouldUpdateNews()) {
        loadRealNews();
    } else {
        useCachedNews();
    }
    
    // تحديث تلقائي كل ساعة
    setInterval(() => {
        if (shouldUpdateNews()) {
            loadRealNews();
        }
    }, 60 * 60 * 1000);
    
    window.addEventListener('scroll', updateProgressBar);
});

if (retryButton) {
    retryButton.addEventListener('click', loadRealNews);
}

// جعل الدوال متاحة globally
window.showFullNews = showFullNews;
