let pixel_art_images = [
    {
        path: 'images/portfolio/portfolio pixelart (2).jpg',
        title: '',
        desc: '',
        date: ''
    },
    {
        path: 'images/portfolio/portfolio pixelart (3).jpg',
        title: '',
        desc: '',
        date: ''
    },
    {
        path: 'images/portfolio/portfolio pixelart (4).jpg',
        title: '',
        desc: '',
        date: ''
    },
    {
        path: 'images/portfolio/portfolio pixelart (6).jpg',
        title: '',
        desc: '',
        date: ''
    },
    {
        path: 'images/portfolio/portfolio pixelart (7).jpg',
        title: '',
        desc: '',
        date: ''
    },
    {
        path: 'images/portfolio/portfolio pixelart (8).jpg',
        title: '',
        desc: '',
        date: ''
    },
    {
        path: 'images/portfolio/portfolio pixelart (11).jpg',
        title: '',
        desc: '',
        date: ''
    }
]

window.onload = function () {
    
    var image_load = new Vue({
        el: '#images-container',
        data:{
            message: 'Hello! I am the World!! How can I call you??',
            images: pixel_art_images
        }
    });
}

