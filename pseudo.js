/*!pseudo.js Copyright (c) 2014 guest271314 
 * License BSD-2-Clause http://opensource.org/licenses/BSD-2-Clause 
 * get, set css pseudo
 */  
(function($) {
jQuery.fn.extend({
    getPseudo : function (pseudo, prop ) {
      var props = window.getComputedStyle (
	  $(this).get(0), pseudo
      ).getPropertyValue(prop);
      return String(props);
    },
    setPseudo : function (_pseudo, _prop, newprop) {
      var s = $("style");
      var p = $(this).getPseudo(_pseudo, _prop);
      var r = new RegExp(p);
      return (r.test($(s).text()) 
              ? $(s)
                .text(function (index, prop) {
                return prop.replace(r, newprop)
                }) 
              : prop 
             );
    }
})
})(jQuery);
