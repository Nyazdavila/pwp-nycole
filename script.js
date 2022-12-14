document.addEventListener('DOMContentLoaded', () => {
    console.log("js loaded")
    var images = Object.values( document.getElementsByClassName('modalPic'))
    const lb = document.getElementById('lightbox');
    const lb_img = document.getElementById('lightbox_img');
    console.log(images)
    console.log(lb)
    console.log(lb_img)
    if (images) {
        images.forEach(el => {
            el.addEventListener('click', () => {
                lb_img.src = el.getAttribute('src');
                lb.classList.add('is-active');
                document.body.classList.add('is-clipped');
                console.log("img clicked")
            })
        })
    }
    var close = document.querySelector('.modal-close');
    if (close) {
        close.addEventListener('click', () => {
            lb.classList.remove('is-active');
            document.body.classList.remove('is-clipped');
        })
    }
})