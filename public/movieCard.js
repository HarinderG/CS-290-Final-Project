(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movieCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\">\n  <img class=\"card-img-top\" src=\""
    + alias4(((helper = (helper = helpers.Poster || (depth0 != null ? depth0.Poster : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Poster","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":43}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":59}}}) : helper)))
    + "\">\n  <div class=\"card-body\">\n    <span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":38}}}) : helper)))
    + "</span>\n    <span class=\"card-genre\">"
    + alias4(((helper = (helper = helpers.Genre || (depth0 != null ? depth0.Genre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Genre","hash":{},"data":data,"loc":{"start":{"line":5,"column":29},"end":{"line":5,"column":38}}}) : helper)))
    + "</span>\n  </div>\n</div>\n";
},"useData":true});
})();