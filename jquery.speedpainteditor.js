/*!
  jQuery SpeedPaintEditor plugin
  @name jquery.speedpainteditor.js
  @author CSSFly (www.cssfly.net)
  @version 1.0
  @date 01/01/2015
  @category jQuery Plugin
  @copyright (c) 2015 CSSFly
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.

  Credits:
    - https://github.com/jquery-boilerplate/jquery-boilerplate (JQuery Boilerplate)
    - http://www.queeky.com/tools/api (Queeky API)
*/

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined )
{
  "use strict";

    var pluginName = "speedPaintEditor",
        defaults = {
        querySelector : "img",                                /* @String class or tagname to get all images that should be editable */
        editLink      : "Edit in SpeedPaint",                 /* @String text of the link to edit  */
        apiLink       : "http://www.queeky.com/app/?image=",  /* @URL    valid link to Editor API */
        linkTarget    : "_blank",                             /* @String href link target  */
        cssClass      : "SpeedPaintEdit--link"                /* @String CSS class for the edit links */
    };

    function Plugin ( element, options )
    {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype,
    {
        init: function ()
        {
            this.createEditLinks();
        },
        createEditLinks: function ()
        {
            var $el, $els = this.element.find(defaults.querySelector),
                len = $els.length, i, editLink, href;

            for(i = 0; i < l; i++)
            {
              $el = $els[i];
              href = $el.attr('src');
              editLink = '<a class="' + defaults.cssClass +
                         '" href="'   + defaults.apiLink + href +
                         '" target="' + defaults.linkTarget +
                         '">'         + defaults.editLink +
                         '</a>';

              $el.append(editLink);
            }

        }
    });

    $.fn[ pluginName ] = function ( options )
    {
        return this.each(function()
        {
            if ( !$.data( this, "plugin_" + pluginName ) )
            {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
