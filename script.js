// DOM元素
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const backToTop = document.getElementById('backToTop');
const yearSpan = document.getElementById('year');

// 设置当前年份
yearSpan.textContent = new Date().getFullYear();

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('visible');
    }
});

// 移动端菜单切换
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击菜单项关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 返回顶部
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 考虑导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 视频播放控制
const videoWrapper = document.querySelector('.video-wrapper');
const video = document.querySelector('video');
const playButton = document.querySelector('.play-button');
const videoOverlay = document.querySelector('.video-overlay');

if (playButton && video) {
    playButton.addEventListener('click', () => {
        video.play();
        videoOverlay.style.display = 'none';
    });

    video.addEventListener('pause', () => {
        videoOverlay.style.display = 'flex';
    });

    video.addEventListener('ended', () => {
        videoOverlay.style.display = 'flex';
    });
}

// 滚动动画观察器
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.querySelectorAll('.feature-card, .team-card, .download-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 数字计数动画
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
}

// 当统计数字进入视口时开始动画
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^\d]/g, ''));
                if (number && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateCounter(stat, number);
                }
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stats, .about-stats').forEach(stats => {
    statsObserver.observe(stats);
});

// 表单验证和提交（如果有的话）
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 错误处理
window.addEventListener('error', (e) => {
    console.error('页面错误:', e.error);
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 预加载关键图片
    const criticalImages = [
        'img/back.png',
        'img/video-poster.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // 检查浏览器支持
    if (!window.IntersectionObserver) {
        // 为不支持 IntersectionObserver 的浏览器提供回退
        document.querySelectorAll('.feature-card, .team-card, .download-card').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}