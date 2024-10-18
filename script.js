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
    updateImage();
    lucide.createIcons();
});

// 社交分享功能
function shareFacebook() {
    // 实现Facebook分享逻辑
}

function shareTwitter() {
    // 实现Twitter分享逻辑
}

function shareInstagram() {
    // 实现Instagram分享逻辑
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

function initMap() {
    // 房产的经纬度坐标
    const propertyLocation = { lat: 32.9631, lng: -117.1261 }; // 这是San Diego的大致坐标,请替换为实际地址的坐标

    // 创建地图
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 15,
        center: propertyLocation,
    });

    // 在地图上添加标记
    const marker = new google.maps.Marker({
        position: propertyLocation,
        map: map,
        title: "15315 Santella Court Rancho Peñasquitos, San Diego, CA"
    });
}
