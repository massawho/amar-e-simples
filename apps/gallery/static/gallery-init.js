/**
 * Created by massa on 19/04/15.
 */
elements = document.getElementsByClassName('blueimp-gallery-links');

for (var i = 0; i < elements.length; i+=1) {
	elements[i].onclick = function (event) {
		event = event || window.event;
		var target = event.target || event.srcElement,
		link = target.src ? target.parentNode : target,
			options = {index: link, event: event},
			links = this.getElementsByTagName('a');
		blueimp.Gallery(links, options);
	};
}