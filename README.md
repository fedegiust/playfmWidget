play.fm Widget jQuery plugin
============================

It's a simple jQuery plugin that helps you add a play.fm widget into your website the easy way.

Requirements
============
- jQuery

How to use it?
==============

Include jQuery on your html page:
```
 	<script type="text/javascript" src="js/jquery.1.10.2.min.js"></script>
```
You can include the plugin after that:
```
	  <script type="text/javascript" src="js/playfmwidget.js"></script>
```
Both of this should be included in your head section or right after the body tag.

Create a div container where you want to locate the widget:
```
   <div id="playfmWidget"></div>
```
After the body tag and all includes add this code:
```
<script type="text/javascript">

	$('#playfmWidget').playfmWidget({artistName: 'Federico Giust'});

</script>
```
Options available:

|Option       |Default Value | Description                                                        |
|-------------|--------------|--------------------------------------------------------------------|
|artistName   |none          |Name of the artist you want to create the widget for                |
|showPic      |true          |Show the mix picture if there is any available (true/false)         |
|sortBy       |chrono        |How would you like the results to be sorted (chrono/total/popindex) |

This is distributed under WTFPL lincense.

http://www.wtfpl.net
