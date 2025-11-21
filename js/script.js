// بيانات الأخبار (سيتم استخدامها إذا فشل جلب الملف)
const fallbackNews = [
    {
        id: 1,
        title: "الإعلان عن الموسم الثاني لأنمي Jujutsu Kaisen",
        summary: "تم الإعلان رسمياً عن إنتاج الموسم الثاني لأنمي Jujutsu Kaisen الذي سيعرض في عام 2024، مع كشف النقاب عن التريلر الرسمي.",
        source: "أنمي نيوز",
        date: "2024-01-15",
        link: "#"
    },
    {
        id: 2,
        title: "فيلم Demon Slayer يحطم الأرقام القياسية",
        summary: "فيلم Demon Slayer: Kimetsu no Yaiba - To the Swordsmith Village يحقق إيرادات قياسية في اليابان والعالم خلال عطلة نهاية الأسبوع الأولى.",
        source: "أنمي تايمز",
        date: "2024-01-14",
        link: "#"
    },
    {
        id: 3,
        title: "أنمي Spy × Family يحصل على موسم جديد",
        summary: "تم الإعلان عن إنتاج جزء جديد لأنمي Spy × Family الشهير، مع عودة فريق الإنتاج الأساسي والمؤديين الصوتيين.",
        source: "كرانشي رول",
        date: "2024-01-13",
        link: "#"
    }
];

// عناصر DOM
const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-btn');

// وظيفة تحميل الأخبار
async function loadNews() {
    console.log('بدء تحميل الأخبار...');
    
    // إخفاء رسالة الخطأ وإظهار التحميل
    errorMessage.classList.add('hidden');
    loadingElement.classList.remove('hidden');
    newsContainer.innerHTML = '';
    
    try {
        // محاولة جلب البيانات من ملف JSON
        const response = await fetch('./data/news.json');
        
        if (!response.ok) {
            throw new Error(`خطأ في HTTP: ${response.status}`);
        }
        
        const newsData = await response.json();
        console.log('تم جلب البيانات:', newsData);
        
        if (newsData && newsData.length > 0) {
            displayNews(newsData);
        } else {
            throw new Error('لا توجد بيانات في الملف');
        }
        
    } catch (error) {
        console.warn('لا يمكن جلب الملف، استخدام البيانات الافتراضية:', error);
        // استخدام البيانات الافتراضية إذا فشل جلب الملف
        displayNews(fallbackNews);
    } finally {
        loadingElement.classList.add('hidden');
    }
}

// وظيفة عرض الأخبار
function displayNews(news) {
    console.log('عرض الأخبار:', news);
    
    if (!news || news.length === 0) {
        newsContainer.innerHTML = `
            <div class="no-news" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>لا توجد أخبار متاحة حالياً</h3>
                <p>يرجى التحقق مرة أخرى لاحقاً</p>
            </div>
        `;
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
    console.log('تم عرض الأخبار بنجاح');
}

// وظيفة تنسيق التاريخ
function formatDate(dateString) {
    try {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', options);
    } catch (error) {
        return dateString;
    }
}

// أحداث
document.addEventListener('DOMContentLoaded', function() {
    console.log('الصفحة محملة، بدء تحميل الأخبار...');
    loadNews();
});

if (retryButton) {
    retryButton.addEventListener('click', loadNews);
}

// إظهار رسالة في الكونسول للمساعدة في التصحيح
console.log('تم تحميل script.js بنجاح');
