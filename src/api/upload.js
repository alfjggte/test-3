export default ({ $axios }, inject) => {

    // 上传文章内容图片(编辑器中上传)
    inject('uploadArticleImg', data => $axios.$post('/article/upload/article', data))
}
