// الإصدار المحسن - يجرب مصادر متعددة تلقائياً
class NewsFetcher {
    constructor() {
        this.sources = [
            this.fetchFromRSS.bind(this),
            this.fetchFromAPI.bind(this),
            this.useLocalNews.bind(this)
        ];
    }
    
    async fetchNews() {
        for (const source of this.sources) {
            try {
                const news = await source();
                if (news && news.length > 0) {
                    console.log(`تم جلب ${news.length} خبر من ${source.name}`);
                    return news;
                }
            } catch (error) {
                console.log(`فشل المصدر ${source.name}:`, error);
                continue;
            }
        }
        return this.getFallbackNews();
    }
    
    async fetchFromRSS() {
        // استخدام خدمة rss2json المجانية
        const rssUrl = 'https://anime4up.com/feed';
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();
        
        return data.items.slice(0, 6).map((item, index) => ({
            id: index + 1,
            title: this.cleanText(item.title),
            summary: this.cleanText(item.description).substring(0, 120) + '...',
            source: 'Anime4Up',
            date: new Date().toISOString().split('T')[0],
            link: item.link
        }));
    }
    
    async fetchFromAPI() {
        // بيانات تجريبية - يمكن استبدالها بـ API حقيقي
        return [
            {
                id: 1,
                title: "أنمي جديد يعلن عنه هذا الأسبوع",
                summary: "تم الإعلان عن سلسلة أنمي جديدة من استوديو مشهور",
                source: "المصدر الخارجي",
                date: new Date().toISOString().split('T')[0],
                link: "#"
            },
            {
                id: 2,
                title: "حلقات جديدة تُعرض هذا الشهر",
                summary: "تعرف على أهم الحلقات الجديدة التي ستعرض هذا الشهر",
                source: "المصدر الخارجي", 
                date: new Date().toISOString().split('T')[0],
                link: "#"
            }
        ];
    }
    
    async useLocalNews() {
        try {
            const response = await fetch('./data/news.json');
            return await response.json();
        } catch (error) {
            return null;
        }
    }
    
    getFallbackNews() {
        return [{
            id: 1,
            title: "مرحباً بموقع أنمي جاردن",
            summary: "سيتم عرض أحدث أخبار الأنمي هنا تلقائياً قريباً",
            source: "أنمي جاردن",
            date: new Date().toISOString().split('T')[0],
            link: "#"
        }];
    }
    
    cleanText(text) {
        return text ? text.replace(/<[^>]*>/g, '').trim() : 'لا يوجد نص';
    }
}

// استخدام الكود
const newsFetcher = new NewsFetcher();

async function loadNews() {
    showLoading();
    
    try {
        const news = await newsFetcher.fetchNews();
        displayNews(news);
    } catch (error) {
        console.error('خطأ في تحميل الأخبار:', error);
        showError();
    } finally {
        hideLoading();
    }
}

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('news-container').innerHTML = '';
    document.getElementById('error-message').classList.add('hidden');
}

function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

function showError() {
    document.getElementById('error-message').classList.remove('hidden');
}

// الباقي من الكود السابق يبقى كما هو...
function displayNews(news) {
    // نفس دالة displayNews السابقة
    const newsContainer = document.getElementById('news-container');
    
    if (!news || news.length === 0) {
        newsContainer.innerHTML = '<p>لا توجد أخبار متاحة حالياً</p>';
        return;
    }
    
    const newsHTML = news.map(item => `
        <article class="news-card">
            <div class="news-image">
                <i>🎌</i>
            </div>
            <div class="news-content">
                <div class="news-date">${formatDate(item.date)}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-summary">${item.summary}</p>
                <div class="news-meta">
                    <span class="news-source">${item.source}</span>
                    <a href="${item.link}" class="read-more" target="_blank">قراءة المزيد</a>
                </div>
            </div>
        </article>
    `).join('');
    
    newsContainer.innerHTML = newsHTML;
}

function formatDate(dateString) {
    // نفس دالة formatDate السابقة
    try {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', options);
    } catch (error) {
        return dateString;
    }
}

// التشغيل
document.addEventListener('DOMContentLoaded', loadNews);
document.getElementById('retry-btn')?.addEventListener('click', loadNews);
