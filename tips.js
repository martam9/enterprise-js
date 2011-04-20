var tips = [];

tips.push({
	author: 'bentruyman',
	message: 'Never Using Literals or <em>Lazy</em> Shorthand',
	example: [
		'var integer = new Number(5);',
		'var myString = new String("Hello World");',
		'var foo = new Object();',
		'var arrayOfFoo = new Array(5);',
		'if (status === new Boolean(true)) {',
		' ...',
		'}'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Extremely Descriptive <em>Self-Documenting</em> Variable Names',
	example: [
		'function CatObjectThatInheritsAnimal() {',
		' this.yellowFurColorString = "yellow";',
		' this.animalsAgeInYears = 10;',
		'}',
		'',
		'CatObjectThatInheritsAnimal.prototype = new AnimalObjectThatInheritsNothing;'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Using Constants to Keep Everything <em>Abstract</em>',
	example: [
		'var FALSE = new Boolean(false);',
		'var TRUE = new Boolean(true);',
		'var ONE = new Number(1);',
		'',
		'function IF_STATEMENT(condition, callback) {',
		' if (condition == TRUE) {',
		'   callback.call(this);',
		' }',
		'}'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Ensuring Lines Are Terminated With Multiple Semicolons So the JavaScript Parser <em>Really Knows</em> when a Line Is Ending',
	example: [
		'var helloWorld = function (message) {',
		' if (!message) {',
		'   message = "Hello World";;;;;;',
		' }',
		'',
		' alert(message);;;;;;;;;;;;;;;;;;;',
		'',
		'};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Creating <em>Really</em> Random Numbers',
	example: [
		'var reallyRandom = Math.pow(Math.random(), Math.random());'
	]
});

tips.push({
	author: 'rwaldron',
	message: "Make sure you explicitly declare <em>EVERY VARIABLE</em> on its own line, that way your team will know they are all variables",
	example: [
		'var li = "<li></li>";',
		'var div = "<div>"+li+"</div>";',
		'var num1 = 4;',
		'var num2 = 5;',
		'var total = num1 + num2;',
		'var rounded = Math.round(total);'
	]
});

tips.push({
	author: 'paulca',
	message: "Use <em>HTML5</em> to link links to functions that link to links.",
	example: [
		'<a href="Javascript:openLink(\'homepage.aspx\',%20\'1\');">Homepage</a>'
	]
});

tips.push({
	author: 'karbassi',
	message: "Use <em>tabs and spaces</em> to indent your code.",
	example: [
		'var x =    3;', 
		'var y =    4;', 
		'var z =    0;',
		'   z = x+y;'
	]
});

tips.push({
	author: 'karbassi',
	message: "Use one space for <em>all</em> your indentation.",
	example: [
		'function(x,y){',
		' if(x=3)',
		'  if(y!=3)',
		'   if(y+x>3)',
		'    return true;',
		'}'
	]
});

tips.push({
	author: 'rwaldron',
	message: "Declaring your functions <em>globally</em> ensures they are accessible throughout your entire script. This ensures they always take precedence!",
	example: [
		'function postMessage(message) {', 
		' $.post("/helloworld.php", "message="+message)', 
		'};'
	]
});


tips.push({
	author: 'rwaldron',
	message: "Put your commas at the beginning of the line, because thats what they do in some other <em>Enterprise</em> languages",
	example: [
		'var CommaBomb = {', 
		' defaults: "" ', 
		' , options: "" ', 
		' , settings: "" ', 
		' , methods: { ', 
		'    getOptions: function () { ', 
		'    } ', 
		'    , setOptions: function () { ', 
		'    } ', 
		'    , getSettings: function () { ', 
		'    } ', 
		'    , setSettings: function () { ', 
		'    } ', 
		' }',
		'};'
	]
});

tips.push({
	author: 'erichynds',
	message: "For ultimate code reuse, declare a wrapper function for <em>everything</em>",
	example: [
		'function createInformationWindow(message){',
		'   alert(message);',
		'}',
		'',
		'function incrementVariable(variable,byHowMany){',
		'   return variable + byHowMany;',
		'}',
		'',
		'function alertIfOnePlusTwoEqualsThree(){',
		'   if( incrementVariable(1, 2) === 3 ){',
		'      createInformationWindow("LOLWAT?");',
		'   }',
		'}'
	]
});

tips.push({
	author: 'mrgnrdrck',
	message: "Use bitwise operators for array bounds checks",
	example: [
		'if (index !== +index >>> 0 || index >= elements.length){',
		'   alert("fail!")',
		'}'
	]
});

tips.push({
	author: 'rwaldron',
	message: "Wrap open source libraries in descriptive <em>'in-house namespaces'</em>.",
	example: [
		'var InitechCoreJQuery = jQuery',
		'',
		'InitechCoreJQuery( function () {', 
		' InitechCoreJQuery(document).click(function () {', 
		'  //... ',
		' })', 
		'})'
	]
});

tips.push({
	author: 'F1LT3R',
	message: "Always add <em>more comments</em>, especially where they are most important... in the middle of statements.",
	example: [
		'var myString = /* Setting of the string happens after this comment. */ "The string was set."; // The string was set before this comment.'
	]
});

tips.push({
	author: 'yonkeltron',
	message: 'Namespace code into a "proper package structure" to make backend devs feel at home.',
	example: [
		'var com = {,',
		'    AwesomeCo: {',
		'        util: {',
		'            info: function ( message) {',
		'                alert(message);',
		'                return message;',
		'            }',
		'        }',
		'    }',
		'};',
		'',
		'com.AwesomeCo.util.info("SRSLY!?");'
	]
});

tips.push({
	author: 'n1k0',
	message: 'Use a modern, multipurpose, introspection aware, evented debugging and notification system.',
	example: [
		'alert(foo);'
	]
});

tips.push({
	author: 'n1k0',
	message: 'Always name variables, objects, methods and every single piece of code in your mother language, in order to thwart any offshoring attempt and make the documentation actually scale.',
	example: [
		'var ModelisationDuProcessusDeFacturation = function() {',
		'	var facturerTousLesUtilisateursOuiMaisLesquels = function(utilisateurs) {',
		'		for (var utilisateur in utilisateurs) {',
		'			var facture = new FacturationUtilisateur(utilisateur);',
		'			facture.envoyerEtVerifierLesSous();',
		'		}',
		'	};',
		'};'
	]
});

tips.push({
	author: 'JakeWharton',
	message: 'A fully <em>dynamic</em> layout management framework',
	example: [
		'divErrors.style.top = 105;',
		'divErrors.style.left = 115;',
		'divErrors.style.width = 885;',
		'if (divErrors.offsetHeight <= 20) {',
		'	hdrStatus.style.top = 105;',
		'} else {',
		'	hdrStatus.style.top = divErrors.offsetTop + divErrors.offsetHeight + 20;',
		'}',
		'hdrStatus.style.left = divErrors.offsetLeft;',
		'hdrStatus.style.width = divErrors.offsetWidth;',
		'tblStatus.style.top = hdrStatus.offsetTop + hdrStatus.offsetHeight + 5;',
		'tblStatus.style.left = hdrStatus.offsetLeft;',
		'tblStatus.style.width = divErrors.offsetWidth;',
		'hdrKeyDates.style.top = tblStatus.offsetTop + tblStatus.offsetHeight + 5;',
		'hdrKeyDates.style.left = hdrStatus.offsetLeft;',
		'hdrKeyDates.style.width = hdrStatus.offsetWidth;',
		'tblKeyDates1.style.top = hdrKeyDates.offsetTop + hdrKeyDates.offsetHeight + 5;',
		'tblKeyDates2.style.top = hdrKeyDates.offsetTop + hdrKeyDates.offsetHeight + 5;',
		'tblKeyDates3.style.top = hdrKeyDates.offsetTop + hdrKeyDates.offsetHeight + 5;',
		'tblTransit.style.top = tblKeyDates1.offsetTop + tblKeyDates1.offsetHeight + 5;',
		'tblTransit.style.left = hdrStatus.offsetLeft;',
		'hdrShipParams.style.top = tblKeyDates1.offsetTop + tblKeyDates1.offsetHeight + 30;',
		'hdrShipParams.style.left = hdrStatus.offsetLeft;',
		'tblShipParams.style.top = hdrShipParams.offsetTop + hdrShipParams.offsetHeight + 5;',
		'tblShipParams.style.left = hdrShipParams.offsetLeft;',
		'tblShipParams.style.width = hdrShipParams.offsetWidth - 200;',
		'tblFormWidgets2.style.top = tblShipParams.offsetTop + tblShipParams.offsetHeight - 35;',
		'tblFormWidgets2.style.left = tblShipParams.offsetLeft + 680;',
		'tblFormWidgets2.style.width = 200;',
		'hdrSpecs.style.top = tblShipParams.offsetTop + tblShipParams.offsetHeight + 5;',
		'hdrSpecs.style.left = hdrStatus.offsetLeft;',
		'tblSpecsLeft.style.top = hdrSpecs.offsetTop + hdrSpecs.offsetHeight + 5;',
		'tblSpecsLeft.style.left = hdrSpecs.offsetLeft;',
		'tblSpecsRight.style.top = tblSpecsLeft.offsetTop',
		'tblSpecsRight.style.left = tblSpecsLeft.offsetLeft + tblSpecsLeft.offsetWidth + 25;',
		'tblSpecsRight.style.width = hdrSpecs.offsetLeft + hdrSpecs.offsetWidth - tblSpecsRight.offsetLeft;',
		'hdrServices.style.top = tblSpecsRight.offsetTop + tblSpecsRight.offsetHeight + 10;',
		'hdrServices.style.left = hdrStatus.offsetLeft;',
		'hdrServices.style.width = hdrSpecs.offsetWidth;',
		'tblServices.style.top = hdrServices.offsetTop + hdrServices.offsetHeight + 5;',
		'tblServices.style.left = hdrSpecs.offsetLeft;',
		'tblServices.style.width = hdrSpecs.offsetWidth;',
		'hdrAddresses.style.top = tblServices.offsetTop + tblServices.offsetHeight + 10;',
		'hdrAddresses.style.left = hdrStatus.offsetLeft;',
		'tblAddresses.style.top = hdrAddresses.offsetTop + hdrAddresses.offsetHeight + 10;',
		'tblAddresses.style.left = hdrAddresses.offsetLeft + 10;',
		'tblAddresses.style.width = hdrAddresses.offsetWidth - 10;',
		'hdrShipperInfo.style.top = tblAddresses.offsetTop + tblAddresses.offsetHeight + 25;',
		'tblShipperInfo.style.top = hdrShipperInfo.offsetTop + hdrShipperInfo.offsetHeight + 10;',
		'tblShipperInfo.style.left = tblAddresses.offsetLeft;',
		'tblShipperInfo.style.width = tblAddresses.offsetWidth;',
		'hdrPets.style.top = tblShipperInfo.offsetTop + tblShipperInfo.offsetHeight + 25;',
		'tblPets.style.top = hdrPets.offsetTop + hdrPets.offsetHeight + 10;',
		'tblPets.style.left = tblShipperInfo.offsetLeft;',
		'tblPets.style.width = tblShipperInfo.offsetWidth;',
		'divFooter.style.top = tblPets.offsetTop + tblPets.offsetHeight + 20;',
		'divFooter.style.left = tblPets.offsetLeft;'
	]
});

tips.push({
	author: 'restlessdesign',
	message: 'Handling your exception handling',
	example: [
		'try {',
		'   try {',
		'      myArray.push(el);',
		'   }',
		'   catch(e) {',
		'      alert(e.message)',
		'   }',
		'}',
		'catch (e) {',
		'   alert(\'Failed at trying\');',
		'}'
	]
});

tips.push({
	author: 'dansnetwork',
	message: '<em>Maintaining</em> a Sufficient Amount of Preceding White Space',
	example: [
		' ',
		' ',
		' // <- plenty of room for comments here',
		' ',
		' ',
		' ',
		' ',
		'function highleveluncompressedcorporatestuff(){document.getElementById(\'anchortag\').href="iheartie6.asp";}'
	]
});

tips.push({
	author: 'foobarfighter',
	message: 'Computer cycles are cheaper than developer cycles: Include your favorite javascript framework to <em>maximize productivity</em> regardless of whats already included on the page.',
	example: [
		'$.fail()'
	]
});

tips.push({
	author: 'KevBurnsJr',
	message: '<em>Initializing</em> your layout',
	example: [
		'var ops = {',
		'    layout : {',
		'        init : function() {',
		'            window.$layout = { ',
		'                win         : $(window),',
		'                head        : $(\'head\'),',
		'                body        : $(\'body\'),',
		'                a           : $(\'a\'),',
		'                cont        : $(\'#content\'),',
		'                wrapper     : $(\'div.wrapper\'),',
		'                wrappad     : $(\'div.wrapper-pad\'),',
		'                td          : $(\'div.td\'),',
		'                loader      : $(\'div.loader\'),',
		'                tog         : $(\'dt.tog\'),',
		'                prop        : $(\'.prop\'),',
		'                jmail       : $(\'.jmail\'),',
		'                fb          : $(\'.form-button\'),',
		'                items       : $(\'.items\'),',
		'                item        : $(\'.item\'),',
		'                price       : $(\'.price\'),',
		'                box_round   : $(\'.blue-box-full, .grey-box-full\'),',
		'                corners     : $(\'.error-box-full, dd.element-description span, .modal\'),',
		'                top_round   : $(\'.blue-box, .grey-box\'),',
		'                bot_round   : $(\'.blue-box-bottom, .grey-box-bottom\'),',
		'                bot         : $(\'.bottom\'),',
		'                mg          : $(\'.items\').find(\'.minigutter\'),',
		'                modal       : $(\'#modal\'),',
		'                tt          : $(\'#tooltip\'),',
		'                widget      : $(\'div.widget\'),',
		'                panes       : $(\'ul.panes\'),',
		'                panesli     : $(\'ul.panes li\'),',
		'                pane        : $(\'div.pane\'),',
		'                panea       : $(\'div.pane a\'),',
		'                truncrev    : $(\'.truncrev\'),',
		'                ctrev       : $(\'.click-truncrev\'),',
		'                oplayer     : $(\'a.overlay-player\'),',
		'                bundles     : $(\'tbody.bundles\'),',
		'                cform       : $(\'#contact_form\'),',
		'                pform       : $(\'#porder_form\'),',
		'                reset       : $(\'#reset\'),',
		'                confirm     : $(\'#confirm\'),',
		'                pconfirm    : $(\'#pconfirm\'),',
		'                ptotal      : $(\'#ptotal\'),',
		'                ntotal      : $(\'#ntotal\'),',
		'                tncs_label  : $(\'#tncs_cb-label\'),',
		'                tncscb      : $(\'#tncs_cb\'),',
		'                delight     : $(\'dd.element-description\'),',
		'                highlight   : $(\'.highlight\'),',
		'                selreveal   : $(\'.select-reveal\'),',
		'                cb          : $(\'.checkbox\'),',
		'                cbradio     : $(\'.cbradio\'),',
		'                crnrs       : $(\'.corners\'),',
		'                cccpng      : $(\'.cccpng\'),',
		'                cbupdate    : $(\'.cbupdate\'),',
		'                qty         : $(\'.qty\'),',
		'                is_default  : $(\'.is_default\'),',
		'                corners     : $(\'.text, .select, .textarea\')',
		'            };',
		'        }',
		'    }',
		'};',
		'',
		'ops.layout.init();'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Prefixing Variable Names With an <em>Abbreviation</em> of Their Type',
	example: [
		'var strFoo = \'foo\'',
		'var arrItems = [strFoo, \'bar\', \'baz\', \'qux\'];',
		'var objNamespace = {',
		'	items: arrItems',
		'};'
	]
});

tips.push({
	author: 'rmehner',
	message: 'Avoiding if / else under any circumstances',
	example: [
		'switch(true) {',
		'	case element.hasClass(\'foo\'):',
		'		foo();',
		'		break;',
		'	default:',
		'		bar();',
		'		break;',
		'}'
	]
});


tips.push({
	author: 'shazmoh',
	message: 'No more tabs. Use <em>contextual indentation</em>. That\'s what <em>FORTUNE 500</em> companies do.',
	example: [
		'$("#header").html("A Fortune 500 Company").show("slow").click(function () ',
		'                                                               {',
		'                                                                window.location="http://www.a-fortune-500-company.com/"',
		'                                                               });',
		'var isStandalone = checkIfStandalone();',
		'$("#modal").unbind("click").bind("click", function (e)',
		'                                           {',
		'                                            if(getConfig().attachCloseEvent)',
		'                                             {',
		'                                               var targetObj= $(e.target);',
		'                                               (isStandalone ? close({',
		'                                                                      element: args.element',
		'                                                                     }) : close();',
		'                                              }',
		'                                              return false;',
		'                                             });',
		'$("#overlay").unbind("keydown").bind("keydown", function (e)',
		'                                                 {',
		'                                                  if(e.keyCode === 27)',
		'                                                   {',
		'                                                    var targetObj= $(e.target);',
		'                                                    (isStandalone) ? close({',
		'                                                                            element: args.element',
		'                                                                           }) : close();',
		'                                                    return false;',
		'                                                  }',
		'                                                 });'
	]
});

tips.push({
	author: 'miketaylr',
	message: 'Using <em>agressive</em> caching methods on your jQuery selectors',
	example: [
		'var listContainer = \'#list\'; //cached',
		'',
		'for (var i = 0; i < 9001; i++) {',
		'	$(listContainer).append(\'<li>Product #\' + i + \'</li>\');',
		'}'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Utilizing vapor.js to Its <em>Fullest Extent</em>',
	example: ['']
});

tips.push({
	author: 'cowboy',
	message: 'Never, ever, EVER serializing <em>JSON</em> properly',
	example: [
		'function buildJSONObject( key, value ) {',
        '    return "{\\"" + key.replace(/"/g,"\\\\\\"") + "\\": \\"" + value.replace(/"/g,"\\\\\\"") + "\\"}";',
		'}'
	]
});

tips.push({
	author: 'mathias',
	message: 'Using <em>advanced</em> protection techniques to stop people from viewing the source code',
	example: [
		'window.oncontextmenu = function() {',
		'	alert(\'Copyright © 1990 Initech - All Rights Reserved\');',
		'	return false;',
		'};'
	]
});

tips.push({
	author: 'danheberden',
	message: 'When in Doubt, Wrap It in a Triple Self-Executing Function',
	example: [
		'(function() {',
		'	(function() {',
		'		(function() {',
		'			alert("Don\'t wanna pollute the global name space!");',
		'		})();',
		'	})();',
		'})();'
	]
});

tips.push({
	author: 'magcius',
	message: 'Require a StringBuffer class to be used for all string operations',
	example: [
		'function StringBuffer() {',
		'	this.strings = new Array([]);',
		'}',
		'StringBuffer.prototype.append = function(string) {',
		'	this.strings.push(string);',
		'	return this;',
		'}',
		'StringBuffer.prototype.toString = function() {',
		'	return this.strings.join("");',
		'}',
		'var html = new StringBuffer();',
		'html.append("<a id=\\"navigation_").append(page).append("\\" href=\\"").append(page).append(".html\\"</a>");',
		'document.all["NavigationDiv"].innerHTML = html.toString();'
	]
});

tips.push({
	author: 'OhaiBBQ',
	message: 'Function calls are expensive, <em>always eval</em> a function\'s code',
	example: [
		'function alertHello() {',
		'	alert("hello");',
		'}',
		'eval("(" + alertHello.toString() + ")()");'
	]
});

tips.push({
	author : 'rmurphey',
	message : 'Making really sure something exists before you use it',
	example : [
		"if (foo && foo != null && foo.length && foo.length > 0) {",
		" console.log('we have a winnar!');",
		"}"
	]
});

tips.push({
	author : 'bentruyman',
	message : '`break`ing even after you\'ve `return`ed',
	example : [
		'for (var i = 0; i < items.length; i++) {',
		'	if (items[i] === \'polyfill\') {',
		'		return items[i];',
		'		break;',
		'	}',
		'}'
	]
});

module.exports = tips;
