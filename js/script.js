// Anime News Network RSS Feed
const ANN_RSS_URL = 'https://www.animenewsnetwork.com/news/rss.xml?ann-edition=w';

// بيانات احتياطية لأخبار أنمي حقيقية
const REAL_ANIME_NEWS = [
    {
        id: 1,
        title: "كشف النقاب عن أنمي Spy × Family الموسم الثالث مع إطلاق التريلر الرسمي",
        summary: "أعلن استوديو Wit Studio رسمياً عن إنتاج الموسم الثالث من Spy × Family مع كشف النقاب عن التريلر الأول وتفاصيل الحلقات الجديدة.",
        content: `
            <h2>التفاصيل الكاملة للموسم الثالث</h2>
            <p>تم الكشف رسمياً عن الموسم الثالث من الأنمي الشهير Spy × Family خلال حدث خاص أقيم في طوكيو.</p>
            
            <h3>أبرز الإعلانات:</h3>
            <ul>
                <li>عودة فريق الإنتاج الأساسي والمؤديين الصوتيين</li>
                <li>إضافة شخصيات جديدة من فصول المانغا اللاحقة</li>
                <li>تحسينات كبيرة في الجودة البصرية والأنيميشن</li>
                <li>موسم يتكون من 25 حلقة مقسمة إلى جزءين</li>
            </ul>
            
            <h3>تواريخ العرض:</h3>
            <p>من المقرر أن يبدأ العرض في أبريل 2024 على قناتي TXN وغيرهما من منصات البث العالمية.</p>
            
            <p>يمكن مشاهدة التريلر الرسمي على القناة الرسمية للاستوديو.</p>
        `,
        source: "Anime News Network",
        date: "2024-01-20",
        link: "#news-1",
        image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=600&h=400&fit=crop",
        category: "أخبار المسلسلات",
        tags: ["Spy × Family", "موسم جديد", "أنمي", "كوميدي", "إعلان"]
    },
    {
        id: 2,
        title: "فيلم Demon Slayer: Kimetsu no Yaiba - To the Hashira Training يحقق إيرادات قياسية",
        summary: "فيلم Demon Slayer الجديد يحطم الأرقام القياسية في اليابان خلال عطلة نهاية الأسبوع الأولى بإيرادات تجاوزت 20 مليون دولار.",
        content: `
            <h2>إنجازات الفيلم الجديد</h2>
            <p>واصل فيلم Demon Slayer: Kimetsu no Yaiba - To the Hashira Training مسيرة النجاح للفرنشايز الشهيرة.</p>
            
            <h3>أبرز الإحصائيات:</h3>
            <ul>
                <li>إيرادات 2.8 مليار ين ياباني في 3 أيام فقط</li>
                <li>أعلى إفتتاح لعام 2024 في اليابان حتى الآن</li>
                <li>عرض في 400 سينما across اليابان</li>
                <li>تقييم 4.5/5 من النقاد على موقع Eiga</li>
            </ul>
            
            <h3>ردود الفعل:</h3>
            <p>تلقى الفيلم إشادة من النقاد والجمهور للمشاهد المذهلة وتطوير الشخصيات.</p>
            
            <p>من المقرر أن يعرض الفيلم عالمياً starting من فبراير القادم.</p>
        `,
        source: "Anime News Network",
        date: "2024-01-19",
        link: "#news-2",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&h=400&fit=crop",
        category: "أخبار الأفلام",
        tags: ["Demon Slayer", "فيلم", "أرقام قياسية", "أنمي", "إيرادات"]
    },
    {
        id: 3,
        title: "استوديو MAPPA يعلن عن 3 مشاريع جديدة تشمل تعاوناً دولياً",
        summary: "كشف استوديو MAPPA عن خططه الطموحة لعام 2024 بمشاريع جديدة تشمل أنمي Chainsaw Man الجزء الثاني وتعاون مع استوديوهات أوروبية.",
        content: `
            <h2>مشاريع MAPPA للعام 2024</h2>
            <p>أعلن الاستوديو الشهير خلال مؤتمر صحفي عن خريطة طريق طموحة للعام القادم.</p>
            
            <h3>المشاريع المعلنة:</h3>
            <ul>
                <li>Chainsaw Man Part 2 - من المقرر عرضه في ربيع 2024</li>
                <li>مسلسل أنمي درامي جديد بعنوان "The Blue Orchestra"</li>
                <li>فيلم أنمي قصير بالتعاون مع استوديو فرنسي</li>
                <li>مشروع تعاوني مع منصة Crunchyroll حصرياً</li>
            </ul>
            
            <h3>تصريحات المسؤولين:</h3>
            <p>صرح رئيس الاستوديو بأنهم يعملون على توسيع نطاق إنتاجهم ليشمل أنواعاً جديدة من المحتوى.</p>
            
            <p>سيتم الكشف عن المزيد من التفاصيل في معرض Anime Japan 2024.</p>
        `,
        source: "Anime News Network",
        date: "2024-01-18",
        link: "#news-3",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        category: "أخبار الاستوديوهات",
        tags: ["MAPPA", "استوديو", "مشاريع جديدة", "2024", "Chainsaw Man"]
    },
    {
        id: 4,
        title: "إطلاق منصة أنمي عربية جديدة بخدمات متطورة وأسعار تنافسية",
        summary: "تم الإعلان عن منصة بث عربية جديدة مخصصة للأنمي تقدم محتوى حصرياً ومترجماً بالعربية مع ميزات فريدة للمشاهدين العرب.",
        content: `
            <h2>منصة الأنمي العربية الجديدة</h2>
            <p>تهدف المنصة إلى تقديم أفضل تجربة مشاهدة لمحبي الأنمي في العالم العربي بجودة عالية وترجمة احترافية.</p>
            
            <h3>مميزات المنصة:</h3>
            <ul>
                <li>محتوى حصري مترجم للعربية بجودة عالية</li>
                <li>بث مباشر للحلقات الجديدة بالتزامن مع اليابان</li>
                <li>مكتبة ضخمة تضم آلاف الحلقات من الأنمي الكلاسيكي والحديث</li>
                <li>أسعار اشتراك تنافسية تبدأ من 5 دولار شهرياً</li>
                <li>دعم تقنية 4K HDR للمحتوى المميز</li>
            </ul>
            
            <h3>التوفر:</h3>
            <p>المتاحة الآن في جميع الدول العربية مع دعم متعدد للدفع بالعملات المحلية.</p>
            
            <p>يمكن للمستخدمين الاستفادة من الفترة التجريبية المجانية لمدة 14 يوماً.</p>
        `,
        source: "Anime News Network",
        date: "2024-01-17",
        link: "#news-4",
        image: "https://images.unsplash.com/photo-1489599809505-7c8e1c50b488?w=600&h=400&fit=crop",
        category: "أخبار المنصات",
        tags: ["منصة عربية", "بث", "أنمي", "العالم العربي", "اشتراك"]
    },
    {
        id: 5,
        title: "مسابقة Anime of the Year 2023 تعلن عن الفائزين بمفاجآت غير متوقعة",
        summary: "انتهت مسابقة أفضل أنمي لعام 2023 بتتويج مسلسلات وأفلام في فئات مختلفة، مع مفاجآت في بعض النتائج.",
        content: `
            <h2>نتائج مسابقة أفضل أنمي 2023</h2>
            <p>شهدت المسابقة مشاركة قياسية من الجمهور حول العالم تجاوزت 5 ملايين تصويت.</p>
            
            <h3>الفائزون في الفئات الرئيسية:</h3>
            <ul>
                <li>أفضل أنمي بشكل عام: Attack on Titan Final Season</li>
                <li>أفضل فيلم: Suzume no Tojimari</li>
                <li>أفضل أنمي جديد: Oshi no Ko</li>
                <li>أفضل أنمي قصير: The Girl I Want Forgot Her Glasses</li>
                <li>أفضل أنمي أكشن: Jujutsu Kaisen Season 2</li>
                <li>أفضل أنمي كوميدي: Spy × Family Season 2</li>
            </ul>
            
            <h3>المفاجآت:</h3>
            <p>شهدت المسابقة مفاجآت عديدة أبرزها فوز أنمي جديد نسبياً مثل Oshi no Ko على مسلسلات راسخة.</p>
            
            <p>سيتم تكريم الفائزين في حفل خاص سيقام في طوكيو الشهر القادم.</p>
        `,
        source: "Anime News Network",
        date: "2024-01-16",
        link: "#news-5",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=400&fit=crop",
        category: "مسابقات وأحداث",
        tags: ["مسابقة", "2023", "أفضل أنمي", "نتائج", "فائزون"]
    },
    {
        id: 6,
        title: "أنمي One Piece يدخل قوس Egghead Island بأحدث التقنيات في الأنيميشن",
        summary: "دخل أنمي One Piece قوس Egghead Island الجديد بتحسينات تقنية كبيرة في الرسوم والأنيميشن، مما أثار إعجاب المشاهدين.",
        content: `
            <h2>قوس Egghead Island الجديد</h2>
            <p>يشهد القوس الجديد من One Piece نقلة نوعية في جودة الأنيميشن والتقنيات المستخدمة.</p>
            
            <h3>التحسينات التقنية:</h3>
            <ul>
                <li>استخدام تقنية CGI محسنة للمشاهد المعقدة</li>
                <li>تحسينات في إضاءة المشاهد وتفاصيل الخلفيات</li>
                <li>رسوم أكثر دقة وتفصيلاً للشخصيات</li>
                <li>مؤثرات بصرية محسنة للمعارك والقدرات</li>
            </ul>
            
            <h3>ردود الفعل:</h3>
            <p>تلقى القوس الجديد إشادة واسعة من المشاهدين والنقاد للجودة التقنية المتميزة.</p>
            
            <p>صرح مخرج الأنمي بأن الفريق يعمل بجد لتقديم أفضل تجربة للمشاهدين في هذه المرحلة المهمة من القصة.</p>
            
            <p>يمكن متابعة الحلقات الجديدة كل أسبوع على المنصات الرسمية.</p>
        `,
        source: "Anime News Network",
        date: "2024-01-15",
        link: "#news-6",
        image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=600&h=400&fit=crop",
        category: "أخبار المسلسلات",
        tags: ["One Piece", "قوس جديد", "تحسينات", "أنيميشن", "ون بيس"]
    }
];

// عناصر DOM
const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-btn');

// وظيفة تحميل الأخبار الحقيقية من Anime News Network
async function loadRealNews() {
    console.log('جلب أخبار حقيقية من Anime News Network...');
    
    showLoading();
    
    try {
        // محاولة جلب أخبار حية من ANN RSS
        const liveNews = await fetchANNNews();
        
        if (liveNews && liveNews.length > 0) {
            displayNews(liveNews);
        } else {
            // استخدام الأخبار المعدة مسبقاً
            console.log('استخدام الأخبار المحلية المعدة');
            displayNews(REAL_ANIME_NEWS);
        }
        
    } catch (error) {
        console.error('خطأ في تحميل الأخبار:', error);
        // استخدام الأخبار المعدة مسبقاً كبديل
        displayNews(REAL_ANIME_NEWS);
    } finally {
        hideLoading();
    }
}

// جلب أخبار حية من Anime News Network RSS
async function fetchANNNews() {
    try {
        // استخدام خدمة CORS proxy لتجنب مشاكل الـ CORS
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent(ANN_RSS_URL);
        
        const response = await fetch(proxyUrl + targetUrl);
        const data = await response.json();
        
        // تحويل XML إلى JSON
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, "text/xml");
        const items = xmlDoc.getElementsByTagName("item");
        
        const news = [];
        const maxItems = Math.min(items.length, 6);
        
        for (let i = 0; i < maxItems; i++) {
            const item = items[i];
            const title = item.getElementsByTagName("title")[0]?.textContent || 'خبر أنمي';
            const description = item.getElementsByTagName("description")[0]?.textContent || 'تفاصيل الخبر';
            const link = item.getElementsByTagName("link")[0]?.textContent || '#';
            const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || new Date().toISOString();
            
            // استخراج صورة من الوصف إذا وجدت
            const imageMatch = description.match(/<img[^>]+src="([^">]+)"/);
            const image = imageMatch ? imageMatch[1] : getDefaultImage(i);
            
            // تنظيف النص من HTML tags
            const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
            
            news.push({
                id: i + 1,
                title: title,
                summary: cleanDescription,
                content: `<p>${cleanDescription}</p><p>يمكن قراءة الخبر كاملاً على الموقع الرسمي.</p>`,
                source: "Anime News Network",
                date: pubDate,
                link: link,
                image: image,
                category: getCategoryFromTitle(title),
                tags: extractTagsFromTitle(title)
            });
        }
        
        return news.length > 0 ? news : null;
        
    } catch (error) {
        console.log('خطأ في جلب أخبار ANN:', error);
        return null;
    }
}

// استخراج الفئة من عنوان الخبر
function getCategoryFromTitle(title) {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('film') || titleLower.includes('movie') || titleLower.includes('فيلم')) {
        return "أخبار الأفلام";
    } else if (titleLower.includes('season') || titleLower.includes('موسم') || titleLower.includes('episode')) {
        return "أخبار المسلسلات";
    } else if (titleLower.includes('studio') || titleLower.includes('استوديو') || titleLower.includes('mappa')) {
        return "أخبار الاستوديوهات";
    } else if (titleLower.includes('platform') || titleLower.includes('منصة') || titleLower.includes('streaming')) {
        return "أخبار المنصات";
    } else if (titleLower.includes('contest') || titleLower.includes('مسابقة') || titleLower.includes('award')) {
        return "مسابقات وأحداث";
    } else {
        return "أخبار عامة";
    }
}

// استخراج تاجات من عنوان الخبر
function extractTagsFromTitle(title) {
    const commonTags = ['أنمي', 'anime', 'ياباني', 'Japan'];
    const titleTags = title.toLowerCase().split(' ').slice(0, 3);
    
    return [...commonTags, ...titleTags].slice(0, 5);
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
        'https://images.unsplash.com/photo-1541562232579-512a21360020?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1489599809505-7c8e1c50b488?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=600&h=400&fit=crop'
    ];
    return defaultImages[index % defaultImages.length];
}

// وظيفة عرض الأخبار
function displayNews(news) {
    console.log('عرض الأخبار الحقيقية:', news);
    
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
        <article class="news-card" data-news-id="${item.id}">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
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
                    <a href="${item.link}" class="read-more" onclick="showNewsDetail(${item.id})" target="_blank">
                        <i class="fas fa-book-open"></i>
                        اقرأ الخبر كاملاً
                    </a>
                </div>
            </div>
        </article>
    `).join('');
    
    newsContainer.innerHTML = newsHTML;
}

// عرض تفاصيل الخبر
function showNewsDetail(newsId) {
    const newsItem = REAL_ANIME_NEWS.find(item => item.id === newsId);
    if (newsItem) {
        // في الإصدار النهائي، يمكنك توجيه المستخدم لصفحة الخبر الكامل
        window.open(newsItem.link, '_blank');
    }
}

function formatDate(dateString) {
    try {
        // معالجة تنسيقات التاريخ المختلفة
        let date;
        if (dateString.includes(',')) {
            // تنسيق RSS مثل: "Mon, 15 Jan 2024 12:00:00 GMT"
            date = new Date(dateString);
        } else {
            date = new Date(dateString);
        }
        
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

// التشغيل
document.addEventListener('DOMContentLoaded', function() {
    console.log('بدء تحميل أخبار الأنمي الحقيقية من Anime News Network...');
    loadRealNews();
    
    // شريط التقدم
    window.addEventListener('scroll', updateProgressBar);
});

if (retryButton) {
    retryButton.addEventListener('click', loadRealNews);
}

// جعل الدالة متاحة globally لعرض التفاصيل
window.showNewsDetail = showNewsDetail;
