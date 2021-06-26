Vue.component("HomeComponent", {
    template: `<section class="container mt-5" >
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search for anime" aria-label="Search" v-on:keydown.13.stop.prevent="search" v-model="searchQuery">
            <button class="btn btn-outline-success" type="submit" v-on:click.prevent="search">Search</button>
        </form>
        <div id="results" v-if="results !== undefined" class="row">
            <router-link  v-for="item in results" :key="item.mal_id" :to="{name: 'detail', params: {id: item.mal_id}}" class="col-xsm-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <img :src="item.image_url" class="card-img-top" :alt="item.title">
                    <div class="card-body">
                        <p class="card-text"><strong>{{item.title}}</strong></p>
                        <p class="card-text">{{item.episodes}} episodes</p>
                    </div>
                </div>
            </router-link>
            <div v-if="results.length == 0">No result found</div>
        </div>
        <div id="error" v-if="error">Search failed</div>
    </section>`,
    data: function(){
        return{
            searchQuery: "",
            error: false,
            results: undefined,
        }
    },
    methods: {
        search: function() {
            this.results = undefined;
            this.error = false;

            const fetchPromise = fetch(`${BASE_URL}/search/anime?q=${this.searchQuery}`)

            fetchPromise.then(response => {
                if (response.ok === true) {
                    return response.json();
                } else {
                    this.results = [];
                }
            }).then(result => {
                if (result){
                    this.results = result['results'];
                    console.log(this.results);
                }
            }).catch(err => {
                this.error = true;
            });
        }
    }
})