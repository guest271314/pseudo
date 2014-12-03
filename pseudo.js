/*!pseudo.js Copyright (c) 2014 guest271314 
 * License BSD-2-Clause http://opensource.org/licenses/BSD-2-Clause 
 * get, set css pseudo
 */  
(function($) {
  jQuery.fn.extend({
    getPseudo: function(pseudo, prop) {
      var props = window.getComputedStyle(
        $(this).get(0), pseudo
      ).getPropertyValue(prop);
      return String(props);
    },
    setPseudo: function(_pseudo, _prop, newprop) {
      var elem = $(this);
      var s = $("style");
      var p = elem.getPseudo(_pseudo, _prop);
      var r = p !== "" ? new RegExp(p) : false;
      var selector = $.map(elem, function(val, key) {
        return [val.tagName
                , val.id 
                  ? "#" + val.id : null
                , val.className ? "." + val.className : null]
      });
      var _setProp = "\n" + selector.join("")
        .toLowerCase()
        .concat(_pseudo)
        .concat("{")
        .concat(_prop + ":")
        .concat(newprop + "};");
      console.log(_setProp, p, r);
      return ((!!r ? r.test($(s).text()) : r) ? $(s)
        .text(function(index, prop) {
          return prop.replace(r, newprop)
        }) : $(s).append(_setProp)
      );
    }
  })
})(jQuery);
