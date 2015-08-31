(function(window) {
    'use strict';
    var document = window.document;

    // 滚动事件
    window.addEventListener('scroll', function() {
        var scroll = window.getScroll();
        document.body.setAttribute('data-scrolled', scroll.y > 0);
    });

})(window);
