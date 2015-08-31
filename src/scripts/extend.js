'use strict';
/**
 * 获取窗体滚动信息
 * @return {Object} 包含滚动信息的对象
 */
Window.prototype.getScroll = function() {
    return {
        x: (this.pageXOffset !== undefined) ? this.pageXOffset : (this.document.documentElement || this.document.body.parentNode || this.document.body).scrollLeft,
        y: (this.pageYOffset !== undefined) ? this.pageYOffset : (this.document.documentElement || this.document.body.parentNode || this.document.body).scrollTop
    };
};
