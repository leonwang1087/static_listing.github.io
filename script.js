// 全局变量
let currentImageIndex = 0;
const images = [
    'statics/images/IMG_9308.jpg',
    'statics/images/IMG_9310.jpg',
    'statics/images/IMG_9317.jpg',
    'statics/images/IMG_9318.jpg',
    'statics/images/IMG_9319.jpg',
    'statics/images/IMG_9325.jpg'
];

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 滚动到指定部分
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// 图片轮播
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function updateImage() {
    const currentImage = document.getElementById('currentImage');
    currentImage.src = images[currentImageIndex];
}

// 表单提交
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.elements['name'].value;
            const email = this.elements['email'].value;
            const phone = this.elements['phone'].value;
            const message = this.elements['message'].value;
            
            const mailtoLink = `mailto:haochen@gmail.com?subject=房产咨询&body=姓名: ${name}%0D%0A电子邮箱: ${email}%0D%0A电话: ${phone}%0D%0A留言: ${message}`;
            
            window.location.href = mailtoLink;
        });
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化Lucide图标
    lucide.createIcons();

    updateImage();
    updateLanguage();
});

// 社交分享功能
function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank');
}

function shareTwitter() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
}

function shareInstagram() {
    alert('Instagram不支持直接分享链接。请截图并在Instagram应用中分享。');
}

// 为社交分享按钮添加事件监听器
document.addEventListener('DOMContentLoaded', () => {
    const facebookButton = document.querySelector('button[aria-label="在Facebook上分享"]');
    const twitterButton = document.querySelector('button[aria-label="在Twitter上分享"]');
    const instagramButton = document.querySelector('button[aria-label="在Instagram上分享"]');

    if (facebookButton) facebookButton.addEventListener('click', shareFacebook);
    if (twitterButton) twitterButton.addEventListener('click', shareTwitter);
    if (instagramButton) instagramButton.addEventListener('click', shareInstagram);
});

// 添加到现有的script.js文件中

// 全局变量来跟踪Google Maps API的加载状态
let googleMapsLoaded = false;

// 动态加载Google Maps API
function loadGoogleMapsAPI() {
    if (window.google && window.google.maps) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        window.initMap = function() {
            resolve();
        };

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// 初始化地图
function initializeMap() {
    const mapOptions = {
        center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        zoom: 14
    };
    const map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
    
    // 添加标记
    new google.maps.Marker({
        position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        map: map,
        title: '房产位置'
    });
}

// 语言数据
const languages = {
    'zh': {
        'info': '信息',
        'photoPlayer': '照片播放器',
        'details': '详情',
        'video': '视频',
        'gallery': '图库',
        'contact': '联系',
        'map': '地图',
        'title': '15315 Santella Court Rancho Peñasquitos, San Diego, CA',
        'agentName': 'John Doe',
        'agentTitle': '房地产代理人',
        'propertyInfo': '欢迎来到这栋位于备受欢迎的Rancho Peñasquitos社区的令人惊叹的4卧3卫房屋。这处精心维护的房产提供宽敞的平面布局、更新的厨房和一个适合娱乐的大后院。',
        'bedrooms': '4 卧室',
        'bathrooms': '3 浴室',
        'area': '2,553 平方英尺',
        'features': [
            '更新的厨房配有不锈钢电器',
            '带步入式柜的大型主卧套房',
            '带露台区的宽敞后院',
            '双车库',
            '靠近优秀的学校和物中心'
        ],
        'sendMessage': '发送消息',
        'photoPlayerTitle': '照片播放器',
        'propertyDetailsTitle': '房产详情',
        'featuresTitle': '特色',
        'propertyVideoTitle': '房产视频',
        'photoGalleryTitle': '照片图库',
        'contactAgentTitle': '联系代理人',
        'locationTitle': '位置',
        'namePlaceholder': '您的姓名',
        'emailPlaceholder': '您的电子邮箱',
        'phonePlaceholder': '您的电话',
        'messagePlaceholder': '留言',
        'agentcompany': '房地产公司',
        'agentphone': '电话: 123-456-7890',
        'agentemail': '电子邮件: john.doe@example.com',
        'agentlicence': '执照号: 020222222',
        'price': '¥1,599,000',
        'address': '15315 Santella Court, Rancho Peñasquitos, San Diego, CA 92129'
    },
    'en': {
        'info': 'Info',
        'photoPlayer': 'Photo Player',
        'details': 'Details',
        'video': 'Video',
        'gallery': 'Gallery',
        'contact': 'Contact',
        'map': 'Map',
        'title': '15315 Santella Court Rancho Peñasquitos, San Diego, CA',
        'agentName': 'John Doe',
        'agentTitle': 'Real Estate Agent',
        'propertyInfo': 'Welcome to this stunning 4-bedroom, 3-bathroom home located in the highly sought-after Rancho Peñasquitos community. This well-maintained property offers a spacious floor plan, updated kitchen, and a large backyard perfect for entertaining.',
        'bedrooms': '4 Bedrooms',
        'bathrooms': '3 Bathrooms',
        'area': '2,553 sq ft',
        'features': [
            'Updated kitchen with stainless steel appliances',
            'Large master suite with walk-in closet',
            'Spacious backyard with patio area',
            'Two-car garage',
            'Close to excellent schools and shopping centers'
        ],
        'sendMessage': 'Send Message',
        'photoPlayerTitle': 'Photo Player',
        'propertyDetailsTitle': 'Property Details',
        'featuresTitle': 'Features',
        'propertyVideoTitle': 'Property Video',
        'photoGalleryTitle': 'Photo Gallery',
        'contactAgentTitle': 'Contact Agent',
        'locationTitle': 'Location',
        'namePlaceholder': 'Your Name',
        'emailPlaceholder': 'Your Email',
        'phonePlaceholder': 'Your Phone',
        'messagePlaceholder': 'Message',
        'agentcompany': 'Real Estate Company',
        'agentphone': 'Phone: 123-456-7890',
        'agentemail': 'Email: john.doe@example.com',
        'agentlicence': 'License: 020222222',
        'price': '$1,599,000',
        'address': '15315 Santella Court, Rancho Peñasquitos, San Diego, CA 92129'
    }
};

let currentLanguage = 'zh';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateLanguage();
    document.getElementById('languageToggle').textContent = currentLanguage === 'zh' ? 'EN' : '中文';
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (languages[currentLanguage][key]) {
            element.textContent = languages[currentLanguage][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (languages[currentLanguage][key]) {
            element.placeholder = languages[currentLanguage][key];
        }
    });

    // 更新特色列表
    const featuresList = document.querySelector('#details ul');
    if (featuresList) { // 添加这个检查
        featuresList.innerHTML = '';
        languages[currentLanguage].features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化Lucide图标
    lucide.createIcons();

    // 初始化语言
    updateLanguage();

    // 加载Google Maps API并初始化地图
    loadGoogleMapsAPI().then(() => {
        initializeMap();
    }).catch(error => {
        console.error('Failed to load Google Maps API:', error);
    });
});
