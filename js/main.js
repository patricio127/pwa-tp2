const BASE_URL= 'https://api.jikan.moe/v3';

const home = {template: `<home-component></home-component>`};
const detail = {template: `<detail-component></detail-component>`};
const favorites = {template: `<favorites-component></favorites-component>`};

const routes = [
    {path: '/', component: home, name :"home" },
    {path: '/detail/:id', component: detail, name :"detail" },
    {path: '/favorites', component: favorites, name :"favorites" },
    {path: '*', redirect: '/' },
];



window.onload = function(){
    initDB().then(()=> {
        const router = new VueRouter ({
            routes
        });
        const app = new Vue({
            el: '#app',
            router,
        })
    });
};

