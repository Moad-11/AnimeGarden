import requests
import json
from bs4 import BeautifulSoup
from datetime import datetime

def fetch_anime_news():
    news_items = []
    
    try:
        # مثال لجلب أخبار من موقع عربي
        response = requests.get('https://anime4up.com')
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # استخراج العناوين (تعدل حسب هيكل الموقع)
        titles = soup.find_all('h2', class_='entry-title')[:6]
        
        for i, title in enumerate(titles):
            news_items.append({
                "id": i + 1,
                "title": title.get_text().strip(),
                "summary": "أحدث أخبار الأنمي - تلقائي",
                "source": "Anime4Up",
                "date": datetime.now().isoString(),
                "link": title.find('a')['href'] if title.find('a') else "#"
            })
            
    except Exception as e:
        print(f"Error: {e}")
        # بيانات افتراضية إذا فشل الجلب
        news_items = [{
            "id": 1,
            "title": "أخبار الأنمي اليومية",
            "summary": "يتم تحديث الأخبار تلقائياً يومياً",
            "source": "أنمي جاردن",
            "date": datetime.now().isoString(),
            "link": "#"
        }]
    
    # حفظ في ملف JSON
    with open('data/news.json', 'w', encoding='utf-8') as f:
        json.dump(news_items, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    fetch_anime_news()
