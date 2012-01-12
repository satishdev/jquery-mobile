/*
* fallback transition for flip in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
define( [ "jquery.mobile.transition" ], function() {
//>>excludeEnd("jqmBuildExclude");
(function( $, window, undefined ) {

$.mobile.transitionFallbacks.flip = "fade";

})( jQuery, this );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");