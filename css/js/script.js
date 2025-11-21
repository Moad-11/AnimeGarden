// بيانات الأخبار (يمكن استبدالها بجلب بيانات من API)
const newsData = [
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
    },
    {
        id: 4,
        title: "استوديو MAPPA يعلن عن مشروع جديد",
        summary: "استوديو MAPPA يكشف النقاب عن مشروع أنمي جديد بعنوان 'Hell's Paradise' مقتبس من المانغا الشهيرة.",
        source: "أنمي لاست",
        date: "2024-01-12",
        link: "#"
    },
    {
        id: 5,
        title: "مسابقة أفضل أنمي لعام 2023",
        summary: "انطلاق التصويت لمسابقة أفضل أنمي لعام 2023 بمشاركة أكثر من 50 عمل أنمي من مختلف الفئات.",
        source: "أنمي كورنر",
        date: "2024-01-11",
        link: "#"
    },
    {
        id: 6,
        title: "إطلاق منصة أنمي عربية جديدة",
        summary: "تم إطلاق منصة بث جديدة مخصصة للأنمي في العالم العربي، تقدم محتوى مترجم بالعربية حصرياً.",
        source: "أنمي ورلد",
        date: "2024-01-10",
        link: "#"
    }
];

// عناصر DOM
const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-btn');

// وظيفة تحميل الأخبار
function loadNews() {
    // إخفاء رسالة الخطأ وإظهار التحميل
    errorMessage.classList.add('hidden');
    loadingElement.classList.remove('hidden');
    newsContainer.innerHTML = '';
    
    // محاكاة جلب البيانات (يمكن استبدالها بـ fetch حقيقي)
    setTimeout(() => {
        try {
            // محاكاة فشل عشوائي بنسبة 10% للاختبار
            if (Math.random() < 0.1) {
                throw new Error('فشل في جلب البيانات');
            }
            
            displayNews(newsData);
            loadingElement.classList.add('hidden');
        } catch (error) {
            console.error('خطأ في تحميل الأخبار:', error);
            loadingElement.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        }
    }, 1500);
}

// وظيفة عرض الأخبار
function displayNews(news) {
    if (news.length === 0) {
        newsContainer.innerHTML = `
            <div class="no-news">
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
}

// وظيفة تنسيق التاريخ
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', options);
}

// إضافة CSS للعناصر غير الموجودة
const style = document.createElement('style');
style.textContent = `
    .no-news {
        text-align: center;
        padding: 3rem;
        grid-column: 1 / -1;
    }
    
    .no-news h3 {
        color: var(--text-light);
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(style);

// أحداث
document.addEventListener('DOMContentLoaded', loadNews);
retryButton.addEventListener('click', loadNews);

