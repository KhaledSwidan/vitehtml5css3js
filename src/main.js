import Footer from './components/Footer.js';
import Header from './components/Header.js';
import router from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('header').appendChild(Header()); // وضع الهيدر في مكانه
  document.getElementById('footer').appendChild(Footer()); // وضع الفوتر في مكانه

  router.resolve(); // تشغيل الراوتر عند تحميل الصفحة

  // ✅ عند تغيير العنوان أو الرجوع للخلف، يتم تحديث المحتوى بدون إعادة تحميل الصفحة
  window.addEventListener('popstate', () => {
    router.resolve();
  });
});
