UI.registerHelper('categoryLabel', function (categoryName) {

  switch(this.categoryName){
    case "Food & Drinks": return "food";
    case "Landmarks": return "landmark";
    case "Testing": return "testing";
    case 'Museum': return 'museums';
    case 'Nightlife': return 'nightlife';
    case 'Outdoors': return 'outdoors';
    case 'Sports': return 'sports';
  }
  return "food";

});
