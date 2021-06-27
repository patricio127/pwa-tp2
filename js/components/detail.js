Vue.component("DetailComponent", {
    template: `<section class="container mt-5" >
        <div class="container-fluid">
            <div v-if="detail" class="row">
                <div class="col-sm-12 col-md-6 col-lg-4" id="detalle-img">
                    <img :src="detail.image_url" :alt="detail.title">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-8" id="detalle-body">
                    <div id="detalle-title">
                        <h1>{{detail.title}}</h1>
                        <div>
                            <p><span>Score:</span> <span>{{detail.score}}</span></p>
                            <a href="#" id="icono-favorito" v-on:click.prevent="favorite" v-bind:class="{ active: isFav }">Agregar</a>
                        </div>
                    </div>
                    <div id="detalle-fecha">
                        <p>Aired: {{detail.aired.string}}</p>
                        <p><span>Popularity:</span> <span>{{detail.popularity}}</span></p>
                    </div>
                    <div id="detalle-rated">
                        <p>{{detail.episodes}} episodes</p>
                        <p><span>Rated:</span> <span>{{detail.rating}}</span></p>
                        <a :href="detail.trailer_url" target="_blank"><span v-if="detail.trailer_url">Trailer</span></a>
                    </div>
                    <div>
                        <h2>Synopsis</h2>
                        <p>{{detail.synopsis}}</p>
                    </div>
                </div>
            </div>
            <div v-if="error">
                Couldn't load anime data.
            </div>
        </div>
    </section>`,
    data: function(){
        return{
            detail: null,
            isFav: false,
            error: false,
        }
    },

    mounted() {
        if (navigator.onLine) {
            const fetchPromise = fetch(`${BASE_URL}/anime/${this.$route.params.id}`);
    
            fetchPromise.then(response => {
                if (response.ok === true) {
                    return response.json();
                    
                }
            }).then(result => {
                this.detail = result;
                getOne(this.detail.mal_id).then(fav =>{
                    if(fav){
                        this.isFav = true;
                        update(this.detail);
                    }
                })
            }).catch(err => {
                this.error = true;
            });

        } else {
            getOne(this.$route.params.id).then(fav =>{
                if(fav){
                    this.detail = fav;
                    this.isFav = true;
                } else {
                    this.error = true;
                }
            })
        }
        
    },
    methods: {
        favorite: function() {
            if(this.isFav) {
                remove(this.detail).then(()=> {
                    this.isFav = false;
                })
            } else {
                add(this.detail).then(() => {
                    this.isFav = true;
                });
            }
            
        }
    }
})