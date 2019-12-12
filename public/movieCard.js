(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movieCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\" card-genre=\""
    + alias4(((helper = (helper = helpers.Genre || (depth0 != null ? depth0.Genre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Genre","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":39}}}) : helper)))
    + "\" card-rated=\""
    + alias4(((helper = (helper = helpers.Rated || (depth0 != null ? depth0.Rated : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Rated","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":62}}}) : helper)))
    + "\" card-metascore=\""
    + alias4(((helper = (helper = helpers.Metascore || (depth0 != null ? depth0.Metascore : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Metascore","hash":{},"data":data,"loc":{"start":{"line":1,"column":80},"end":{"line":1,"column":93}}}) : helper)))
    + "\">\r\n  <div class=\"card-contents\">\r\n    <div class=\"card-image-container\">\r\n		<a href=\"http://localhost:3000/"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":42}}}) : helper)))
    + "/info\">\r\n	      <img src=\""
    + alias4(((helper = (helper = helpers.Poster || (depth0 != null ? depth0.Poster : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Poster","hash":{},"data":data,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":27}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":43}}}) : helper)))
    + "\" >\r\n		</a>\r\n    </div>\r\n    <div class=\"card-info-container\">\r\n      <span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data,"loc":{"start":{"line":9,"column":31},"end":{"line":9,"column":40}}}) : helper)))
    + "</span>\r\n      <span class=\"card-year\">"
    + alias4(((helper = (helper = helpers.Year || (depth0 != null ? depth0.Year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Year","hash":{},"data":data,"loc":{"start":{"line":10,"column":30},"end":{"line":10,"column":38}}}) : helper)))
    + "</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();