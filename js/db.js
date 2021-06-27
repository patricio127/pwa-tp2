var db;

function initDB (){
  db = new Dexie("favs-dexie");

  db.version(1).stores({ fav: 'mal_id' })
  return db.open();
}

function update(elem) {
    return db.fav.update(elem.mal_id, elem);
}

function remove(elem) {
    return db.fav.where('mal_id').equals(elem.mal_id).delete();
}

function add(elem) {
    return db.fav.put(elem);
}

function getOne(mal_id) {
    return db.fav.get(mal_id);
}

function getAll() {
    return db.fav.toArray();
}
