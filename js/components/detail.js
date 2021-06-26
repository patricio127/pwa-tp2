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
                            <p>Score: {{detail.score}}</p>
                            <a href="#">Agregar</a>
                        </div>
                    </div>
                    <div>
                        <p>Aired: {{detail.aired.string}}</p>
                        <p>Popularity: {{detail.popularity}}</p>
                    </div>
                    <div>
                        <p>{{detail.episodes}} episodes</p>
                        <p>Rated: {{detail.rating}}</p>
                    </div>
                    <div>
                        <h2>Synopsis</h2>
                        <p>{{detail.synopsis}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
    data: function(){
        return{
            detail: null,
            error: false,
        }
    },
    mounted() {
        const fetchPromise = fetch(`${BASE_URL}/anime/${this.$route.params.id}`)

        fetchPromise.then(response => {
            if (response.ok === true) {
                return response.json();
                
            }
        }).then(result => {
            this.detail = result;
            console.log(this.detail);
        }).catch(err => {
            this.error = true;
        });
    },
    methods: {
    }
})