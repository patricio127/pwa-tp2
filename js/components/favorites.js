Vue.component("FavoritesComponent", {
    template: `<section class="container mt-5" >
        <div id="favorite" v-if="favorite !== undefined" class="row">
            <router-link  v-for="item in favorites" :key="item.mal_id" :to="{name: 'detail', params: {id: item.mal_id}}" class="col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <img :src="item.image_url" class="card-img-top" :alt="item.title">
                    <div class="card-body">
                        <p class="card-text"><strong>{{item.title}}</strong></p>
                        <p class="card-text">{{item.episodes}} episodes</p>
                    </div>
                </div>
            </router-link>
            <div v-if="favorite.length == 0">There are no favorites</div>
        </div>
    </section>`,
    data: function(){
        return{
            favorites: undefined,
        }
    },
    methods: {
        favorite: function() {
        }
    }
})