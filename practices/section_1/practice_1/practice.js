function collect_same_elements(collection_a, collection_b) {
	var new_collection = [];

	for(var i = 0; i < collection_a.length; i++){
		for(var j = 0; j < collection_b.length; j++){
			if(collection_a[i] == collection_b[j]){
				new_collection.push(collection_a[i]);
			}
		}
	}

	return new_collection;
}

module.exports = collect_same_elements;
