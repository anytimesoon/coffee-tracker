$(document).foundation();

class RoastLevels{
	constructor(json){
		this.template = document.querySelector("#roast-levels-index").innerHTML;
		this.all = json.data;

		this.index;
	}

	get index() {
		index(this, this.template);
		this.bindShowLinks;
	}

	get bindShowLinks(){
		const elements = document.getElementsByClassName("show-roast-level");

		const all = this.all;

		for (let i = 0; i < elements.length; i++) {
		    elements[i].addEventListener('click', function(e){
					    	const id = this.getAttribute("id");
					    	e.preventDefault();
			    	    
					    	fetch('http://localhost:3000/roast_levels/' + id)
							    .then(function(response) {	return response.json();  })
							    .then( function(json) {	new RoastLevel(json);   })
							    .catch(err => console.log('Request Failed', err));
								    }, true);
		};
	};
}

class RoastLevel{
	constructor(json){
		this.name = json.attributes.name
		this.beans = json.included
	}
}

document.addEventListener('DOMContentLoaded', function(){
	fetch('http://localhost:3000')
	    .then(function(response) {	return response.json();  })
	    .then( function(json) {	new RoastLevels(json);   })
	    .catch(err => console.log('Request Failed', err));
});

function index(data, template){
  // compile it using Handlebars
  const compiledTemplate = Handlebars.compile(template);

  let html = compiledTemplate(data);

  const destination = document.querySelector("#content");
  // set the new HTML
  destination.innerHTML = html;

  let elem = new Foundation.Accordion($('#form-accordion'));
};