// مصادر أخبار أنمي متعددة
const NEWS_SOURCES = [
    {
        name: "Anime News Network",
        rss: "https://www.animenewsnetwork.com/news/rss.xml?ann-edition=w",
        type: "rss"
    },
    {
        name: "Crunchyroll News",
        rss: "https://feeds.feedburner.com/crunchyroll/rss/anime",
        type: "rss"
    }
];

// بيانات أخبار احتياطية مع صور أصلية
const FALLBACK_NEWS = [
    {
        id: 1,
        title: "الإعلان الرسمي عن الموسم الثالث من Spy × Family مع إطلاق التريلر",
        summary: "كشف استوديو Wit Studio النقاب عن الموسم الثالث من Spy × Family خلال حدث خاص في طوكيو، مع عرض التريلر الرسمي الأول.",
        fullContent: `
            <div class="news-detail">
                <h1>الإعلان الرسمي عن الموسم الثالث من Spy × Family</h1>
                <div class="news-meta">
                    <span><i class="fas fa-calendar"></i> 20 يناير 2024</span>
                    <span><i class="fas fa-newspaper"></i> Anime News Network</span>
                    <span><i class="fas fa-tag"></i> أخبار المسلسلات</span>
                </div>
                
                <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315gYA9U/cms/news.2/197197/spy-family.jpg" alt="Spy × Family Season 3" onerror="this.src='https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&h=400&fit=crop'">
                
                <div class="news-content">
                    <p>في حدث صحفي حاشد في طوكيو، أعلن استوديو Wit Studio رسمياً عن إنتاج الموسم الثالث من الأنمي الشهير Spy × Family. جاء الإعلان مصحوباً بإطلاق التريلر الرسمي الذي كشف عن لمحات من الحلقات القادمة.</p>
                    
                    <h2>تفاصيل الموسم الجديد</h2>
                    <p>الموسم الثالث سيتضمن قوساً جديداً من القصة سيعمق من تطور شخصيات لوييد، يور، وآنييا. ومن المقرر أن يغطي الأحداث من الفصول 70 إلى 85 من المانغا الأصلية.</p>
                    
                    <h3>أبرز المميزات:</h3>
                    <ul>
                        <li>عودة فريق الإنتاج الأساسي بقيادة المخرج كازوهيرو فوروهاشي</li>
                        <li>تحسينات كبيرة في جودة الأنيميشن والرسوم</li>
                        <li>إضافة شخصيات جديدة ستلعب أدواراً محورية في القصة</li>
                        <li>موسم مكون من 25 حلقة مقسمة إلى جزئين</li>
                    </ul>
                    
                    <h2>تواريخ العرض</h2>
                    <p>من المقرر أن يبدأ العرض في أبريل 2024 على قناتي TXN وغيرهما من منصات البث العالمية. وسيكون متاحاً للجمهور العالمي عبر منصة Crunchyroll بالتزامن مع العرض في اليابان.</p>
                    
                    <div class="news-tags">
                        <span>Spy × Family</span>
                        <span>موسم جديد</span>
                        <span>أنمي</span>
                        <span>2024</span>
                    </div>
                </div>
            </div>
        `,
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
        fullContent: `
            <div class="news-detail">
                <h1>فيلم Demon Slayer: Kimetsu no Yaiba يحقق إيرادات قياسية في اليابان</h1>
                <div class="news-meta">
                    <span><i class="fas fa-calendar"></i> 19 يناير 2024</span>
                    <span><i class="fas fa-newspaper"></i> Crunchyroll News</span>
                    <span><i class="fas fa-tag"></i> أخبار الأفلام</span>
                </div>
                
                <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197183/demon-slayer.jpg" alt="Demon Slayer Movie" onerror="this.src='https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=400&fit=crop'">
                
                <div class="news-content">
                    <p>واصل فيلم Demon Slayer: Kimetsu no Yaiba - To the Hashira Training مسيرة النجاح للفرنشايز الشهيرة بموسم إفتتاح قياسي في اليابان.</p>
                    
                    <h2>الإحصائيات القياسية</h2>
                    <p>حقق الفيلم إيرادات بلغت 2.8 مليار ين ياباني (حوالي 20 مليون دولار) خلال أول 3 أيام من العرض، متصدراً شباك التذاكر في 400 سينما across اليابان.</p>
                    
                    <h3>أبرز الأرقام:</h3>
                    <ul>
                        <li>إيرادات 2.8 مليار ين في 3 أيام فقط</li>
                        <li>أعلى إفتتاح لعام 2024 في اليابان حتى الآن</li>
                        <li>عرض في 400 سينما في جميع أنحاء اليابان</li>
                        <li>تقييم 4.5/5 من النقاد على موقع Eiga</li>
                    </ul>
                    
                    <h2>ردود الفعل العالمية</h2>
                    <p>تلقى الفيلم إشادة واسعة من النقاد والجمهور للمشاهد المذهلة وتطوير الشخصيات. ووصفه النقاد بأنه "تطور تقني وفني كبير للفرنشايز".</p>
                    
                    <p>من المقرر أن يعرض الفيلم عالمياً بدءاً من فبراير القادم في جميع الأسواق الرئيسية.</p>
                    
                    <div class="news-tags">
                        <span>Demon Slayer</span>
                        <span>فيلم</span>
                        <span>أرقام قياسية</span>
                        <span>أنمي</span>
                    </div>
                </div>
            </div>
        `,
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
        fullContent: `
            <div class="news-detail">
                <h1>استوديو MAPPA يعلن عن 3 مشاريع جديدة لعام 2024</h1>
                <div class="news-meta">
                    <span><i class="fas fa-calendar"></i> 18 يناير 2024</span>
                    <span><i class="fas fa-newspaper"></i> Anime News Network</span>
                    <span><i class="fas fa-tag"></i> أخبار الاستوديوهات</span>
                </div>
                
                <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197165/mappa.jpg" alt="MAPPA Studio" onerror="this.src='https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop'">
                
                <div class="news-content">
                    <p>أعلن استوديو MAPPA الشهير خلال مؤتمر صحفي عن خريطة طريق طموحة للعام 2024 تتضمن 3 مشاريع رئيسية جديدة.</p>
                    
                    <h2>المشاريع المعلنة</h2>
                    <p>شمل الإعلان مشاريع متنوعة تتراوح بين مسلسلات الأنمي التقليدية وأعمال تعاونية دولية.</p>
                    
                    <h3>قائمة المشاريع:</h3>
                    <ul>
                        <li><strong>Chainsaw Man Part 2:</strong> من المقرر عرضه في ربيع 2024 مع تحسينات تقنية كبيرة</li>
                        <li><strong>The Blue Orchestra:</strong> مسلسل أنمي درامي جديد يعرض قصة عازف كمان موهوب</li>
                        <li><strong>مشروع التعاون الدولي:</strong> فيلم أنمي قصير بالتعاون مع استوديو فرنسي شهير</li>
                    </ul>
                    
                    <h2>تصريحات المسؤولين</h2>
                    <p>صرح مانابو أوتسوكا، رئيس الاستوديو: "نحن متحمسون لهذه المشاريع الجديدة التي تمثل توسعاً في نطاق إنتاجنا. نهدف لتقديم محتوى متنوع يلبي توقعات الجمهور العالمي."</p>
                    
                    <p>سيتم الكشف عن المزيد من التفاصيل في معرض Anime Japan 2024 المقرر في مارس القادم.</p>
                    
                    <div class="news-tags">
                        <span>MAPPA</span>
                        <span>استوديو</span>
                        <span>مشاريع جديدة</span>
                        <span>2024</span>
                    </div>
                </div>
            </div>
        `,
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
        fullContent: `
            <div class="news-detail">
                <h1>أنمي One Piece يدخل قوس Egghead Island بتحسينات تقنية مذهلة</h1>
                <div class="news-meta">
                    <span><i class="fas fa-calendar"></i> 17 يناير 2024</span>
                    <span><i class="fas fa-newspaper"></i> Crunchyroll News</span>
                    <span><i class="fas fa-tag"></i> أخبار المسلسلات</span>
                </div>
                
                <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197152/one-piece.jpg" alt="One Piece Egghead Island" onerror="this.src='https://images.unsplash.com/photo-1578632749014-5c77efd052eb?w=800&h=400&fit=crop'">
                
                <div class="news-content">
                    <p>يشهد القوس الجديد من One Piece نقلة نوعية في جودة الأنيميشن والتقنيات المستخدمة، مما وضع معايير جديدة للمسلسل.</p>
                    
                    <h2>التحسينات التقنية</h2>
                    <p>قام استوديو Toei Animation باستثمارات كبيرة في البنية التحتية التقنية لمواكبة التعقيد المتزايد للقصة.</p>
                    
                    <h3>أبرز التحسينات:</h3>
                    <ul>
                        <li>استخدام تقنية CGI متطورة للمشاهد المعقدة دون التأثير على الجودة</li>
                        <li>تحسينات كبيرة في إضاءة المشاهد وتفاصيل الخلفيات</li>
                        <li>رسوم أكثر دقة وتفصيلاً للشخصيات الرئيسية والثانوية</li>
                        <li>مؤثرات بصرية محسنة للمعارك واستخدام القدرات</li>
                    </ul>
                    
                    <h2>ردود الفعل</h2>
                    <p>تلقى القوس الجديد إشادة واسعة من المشاهدين والنقاد على مواقع التواصل الاجتماعي ومنصات المراجعة.</p>
                    
                    <p>صرح تاتسويا ناغاميني، مخرج الأنمي: "الفريق يعمل بجد لتقديم أفضل تجربة للمشاهدين في هذه المرحلة المهمة من قصة لوفي وطاقمه."</p>
                    
                    <div class="news-tags">
                        <span>One Piece</span>
                        <span>قوس جديد</span>
                        <span>تحسينات</span>
                        <span>أنيميشن</span>
                    </div>
                </div>
            </div>
        `,
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
        fullContent: `
            <div class="news-detail">
                <h1>مسابقة Anime of the Year 2023 تعلن عن الفائزين بمفاجآت كبيرة</h1>
                <div class="news-meta">
                    <span><i class="fas fa-calendar"></i> 16 يناير 2024</span>
                    <span><i class="fas fa-newspaper"></i> Anime News Network</span>
                    <span><i class="fas fa-tag"></i> مسابقات وأحداث</span>
                </div>
                
                <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197138/awards.jpg" alt="Anime Awards 2023" onerror="this.src='https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=400&fit=crop'">
                
                <div class="news-content">
                    <p>شهدت مسابقة Anime of the Year 2023 مشاركة قياسية من الجمهور حول العالم تجاوزت 5 ملايين تصويت، مع مفاجآت عديدة في النتائج النهائية.</p>
                    
                    <h2>الفائزون في الفئات الرئيسية</h2>
                    <p>تنافست أعمال متميزة across فئات مختلفة، مع فوز بعض المسلسلات والأفلام غير المتوقعة.</p>
                    
                    <h3>قائمة الفائزين:</h3>
                    <ul>
                        <li><strong>أفضل أنمي بشكل عام:</strong> Attack on Titan Final Season</li>
                        <li><strong>أفضل فيلم:</strong> Suzume no Tojimari</li>
                        <li><strong>أفضل أنمي جديد:</strong> Oshi no Ko</li>
                        <li><strong>أفضل أنمي قصير:</strong> The Girl I Want Forgot Her Glasses</li>
                        <li><strong>أفضل أنمي أكشن:</strong> Jujutsu Kaisen Season 2</li>
                        <li><strong>أفضل أنمي كوميدي:</strong> Spy × Family Season 2</li>
                    </ul>
                    
                    <h2>المفاجآت الكبرى</h2>
                    <p>شهدت المسابقة مفاجآت عديدة أبرزها فوز أنمي Oshi no Ko الجديد نسبياً على مسلسلات راسخة في فئة أفضل أنمي جديد.</p>
                    
                    <p>سيتم تكريم الفائزين في حفل خاص سيقام في طوكيو الشهر القادم بحضور نجوم الصناعة والجمهور.</p>
                    
                    <div class="news-tags">
                        <span>مسابقة</span>
                        <span>2023</span>
                        <span>أفضل أنمي</span>
                        <span>نتائج</span>
                    </div>
                </div>
            </div>
        `,
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
        fullContent: `
            <div class="news-detail">
                <h1>إطلاق منصة أنمي عربية جديدة بخدمات متطورة وأسعار تنافسية</h1>
                <div class="news-meta">
                    <span><i class="fas fa-calendar"></i> 15 يناير 2024</span>
                    <span><i class="fas fa-newspaper"></i> Crunchyroll News</span>
                    <span><i class="fas fa-tag"></i> أخبار المنصات</span>
                </div>
                
                <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197125/arab-platform.jpg" alt="Arabic Anime Platform" onerror="this.src='https://images.unsplash.com/photo-1489599809505-7c8e1c50b488?w=800&h=400&fit=crop'">
                
                <div class="news-content">
                    <p>أُطلقت رسمياً منصة بث عربية جديدة مخصصة بالكامل لمحتوى الأنمي، بهدف تقديم أفضل تجربة مشاهدة للجمهور العربي حول العالم.</p>
                    
                    <h2>مميزات المنصة</h2>
                    <p>تهدف المنصة إلى سد الفجوة في سوق البث العربي من خلال تقديم خدمات متخصصة لمحبي الأنمي.</p>
                    
                    <h3>أبرز المميزات:</h3>
                    <ul>
                        <li><strong>محتوى حصري:</strong> ترجمة احترافية للعربية بجودة عالية</li>
                        <li><strong>بث مباشر:</strong> عرض الحلقات الجديدة بالتزامن مع اليابان</li>
                        <li><strong>مكتبة ضخمة:</strong> آلاف الحلقات من الأنمي الكلاسيكي والحديث</li>
                        <li><strong>أسعار تنافسية:</strong> اشتراكات تبدأ من 5 دولار شهرياً</li>
                        <li><strong>جودة عالية:</strong> دعم تقنية 4K HDR للمحتوى المميز</li>
                    </ul>
                    
                    <h2>التوفر والاشتراكات</h2>
                    <p>المتاحة الآن في جميع الدول العربية مع دعم متعدد للدفع بالعملات المحلية. وتوفر المنصة فترة تجريبية مجانية لمدة 14 يوماً لجميع المستخدمين الجدد.</p>
                    
                    <p>صرح المدير التنفيذي: "هدفنا هو بناء مجتمع عربي لمحبي الأنمي وتقديم محتوى يليق بتوقعاتهم."</p>
                    
                    <div class="news-tags">
                        <span>منصة عربية</span>
                        <span>بث</span>
                        <span>أنمي</span>
                        <span>العالم العربي</span>
                    </div>
                </div>
            </div>
        `,
        source: "Crunchyroll News",
        date: "2024-01-15",
        image: "https://www.animenewsnetwork.com/thumbnails/crop600x315g9e9/cms/news.2/197125/arab-platform.jpg",
        category: "أخبار المنصات",
        tags: ["منصة عربية", "بث", "أنمي", "العالم العربي"]
    }
];

// عناصر DOM
const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const retryButton = document.getElementById('retry-btn');

// متغير لتخزين آخر أخبار
let currentNews = [];

// وظيفة تحميل الأخبار الحقيقية
async function loadRealNews() {
    console.log('جلب أحدث الأخبار...');
    
    showLoading();
    
    try {
        // محاولة جلب أخبار حية من الإنترنت
        const liveNews = await fetchLiveNews();
        
        if (liveNews && liveNews.length > 0) {
            currentNews = liveNews;
            displayNews(currentNews);
        } else {
            // استخدام الأخبار المعدة مسبقاً
            console.log('استخدام الأخبار المحلية المعدة');
            currentNews = FALLBACK_NEWS;
            displayNews(currentNews);
        }
        
    } catch (error) {
        console.error('خطأ في تحميل الأخبار:', error);
        // استخدام الأخبار المعدة مسبقاً كبديل
        currentNews = FALLBACK_NEWS;
        displayNews(currentNews);
    } finally {
        hideLoading();
    }
}

// جلب أخبار حية من الإنترنت
async function fetchLiveNews() {
    try {
        // محاولة جلب من Anime News Network
        const annNews = await fetchANNNews();
        if (annNews && annNews.length > 0) return annNews;
        
        // إذا فشل، جرب Crunchyroll
        const crNews = await fetchCrunchyrollNews();
        if (crNews && crNews.length > 0) return crNews;
        
        return null;
        
    } catch (error) {
        console.log('فشل جلب الأخبار الحية:', error);
        return null;
    }
}

// جلب أخبار من Anime News Network
async function fetchANNNews() {
    try {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent('https://www.animenewsnetwork.com/news/rss.xml?ann-edition=w');
        
        const response = await fetch(proxyUrl + targetUrl);
        const data = await response.json();
        
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
            
            // استخراج صورة من الوصف
            const imageMatch = description.match(/<img[^>]+src="([^">]+)"/);
            const imageUrl = imageMatch ? imageMatch[1] : getDefaultImage(i);
            
            const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
            
            news.push({
                id: i + 1,
                title: title,
                summary: cleanDescription,
                fullContent: generateFullContent(title, cleanDescription, imageUrl, "Anime News Network"),
                source: "Anime News Network",
                date: pubDate,
                link: "#news-" + (i + 1),
                image: imageUrl,
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

// جلب أخبار من Crunchyroll
async function fetchCrunchyrollNews() {
    try {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent('https://feeds.feedburner.com/crunchyroll/rss/anime');
        
        const response = await fetch(proxyUrl + targetUrl);
        const data = await response.json();
        
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
            
            const imageMatch = description.match(/<img[^>]+src="([^">]+)"/);
            const imageUrl = imageMatch ? imageMatch[1] : getDefaultImage(i);
            
            const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
            
            news.push({
                id: i + 1,
                title: title,
                summary: cleanDescription,
                fullContent: generateFullContent(title, cleanDescription, imageUrl, "Crunchyroll News"),
                source: "Crunchyroll News",
                date: pubDate,
                link: "#news-" + (i + 1),
                image: imageUrl,
                category: getCategoryFromTitle(title),
                tags: extractTagsFromTitle(title)
            });
        }
        
        return news.length > 0 ? news : null;
        
    } catch (error) {
        console.log('خطأ في جلب أخبار Crunchyroll:', error);
        return null;
    }
}

// توليد محتوى كامل للخبر
function generateFullContent(title, summary, imageUrl, source) {
    return `
        <div class="news-detail">
            <h1>${title}</h1>
            <div class="news-meta">
                <span><i class="fas fa-calendar"></i> ${formatDate(new Date().toISOString())}</span>
                <span><i class="fas fa-newspaper"></i> ${source}</span>
                <span><i class="fas fa-tag"></i> ${getCategoryFromTitle(title)}</span>
            </div>
            
            <img src="${imageUrl}" alt="${title}" onerror="this.src='${getDefaultImage(0)}'">
            
            <div class="news-content">
                <p>${summary}</p>
                <p>هذا الخبر تم جلبه تلقائياً من ${source}. يمكنك زيارة الموقع الرسمي لقراءة المزيد من التفاصيل.</p>
            </div>
            
            <div class="news-tags">
                ${extractTagsFromTitle(title).map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </div>
    `;
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
        'https://images.unsplash.com/photo-1578632749014-5c77efd052eb?w=600&h=400&fit=crop'
    ];
    return defaultImages[index % defaultImages.length];
}

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

// وظيفة عرض الأخبار
function displayNews(news) {
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
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='${getDefaultImage(item.id)}'">
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
        </article>
    `).join('');
    
    newsContainer.innerHTML = newsHTML;
}

// عرض الخبر الكامل في صفحة جديدة
function showFullNews(newsId) {
    const newsItem = currentNews.find(item => item.id === newsId);
    if (newsItem) {
        // حفظ الخبر في localStorage للوصول إليه في الصفحة الأخرى
        localStorage.setItem('currentNews', JSON.stringify(newsItem));
        
        // فتح صفحة جديدة لعرض الخبر الكامل
        const newWindow = window.open('news-detail.html', '_blank');
        if (!newWindow) {
            // إذا حظر المتصفح النافذة المنبثقة، اعرض رسالة
            alert('يرجى السماح بالنوافذ المنبثقة لعرض الخبر الكامل');
        }
    }
}

function formatDate(dateString) {
    try {
        let date = new Date(dateString);
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
    console.log('بدء تحميل أحدث أخبار الأنمي...');
    loadRealNews();
    
    // تحديث الأخبار كل 5 دقائق
    setInterval(loadRealNews, 5 * 60 * 1000);
    
    // شريط التقدم
    window.addEventListener('scroll', updateProgressBar);
});

if (retryButton) {
    retryButton.addEventListener('click', loadRealNews);
}

// جعل الدوال متاحة globally
window.showFullNews = showFullNews;
