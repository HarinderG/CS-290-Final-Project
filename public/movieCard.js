(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movieCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\">\n  <div class=\"card-contents\">\n    <div class=\"card-image-container\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.Poster || (depth0 != null ? depth0.Poster : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Poster","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":26}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":42}}}) : helper)))
    + "\">\n    </div>\n    <div class=\"card-info-container\">\n      <span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":40}}}) : helper)))
    + "</span>\n      <span class=\"card-year\">"
    + alias4(((helper = (helper = helpers.Year || (depth0 != null ? depth0.Year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Year","hash":{},"data":data,"loc":{"start":{"line":8,"column":30},"end":{"line":8,"column":38}}}) : helper)))
    + "</span>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();