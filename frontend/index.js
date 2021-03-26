$(document).foundation();

class RoastLevels{
	constructor(json){
		this.template = document.querySelector("#roast-levels-index").innerHTML;
		this.all = json.data;

		this.index;
	};

	get index() {
		index(this, this.template);

		this.bindShowLinks;
		this.populateFormSelect;
	};

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

	get populateFormSelect() {
		const formSelect = document.getElementById("bean-roast-level");

		for (let i = 0; i < this.all.length; i++){
			let opt = document.createElement('option');
	    opt.value = this.all[i].id;
	    opt.innerHTML = this.all[i].attributes.name;
	    formSelect.appendChild(opt);
		};
	};
};

class RoastLevel{
	constructor(json){
		this.template = document.querySelector("#show-roast-level").innerHTML;
		this.name = json.data.attributes.name
		this.id = json.data.id
		this.beans = json.included

		this.index
	};

	get index() {
		index(this, this.template);
		
		this.autoSelect;
	};

	get autoSelect() {
		const options = document.getElementById("bean-roast-level").options;

		for (let i = 0; i < options.length; i++) {
			if (this.id === options[i].value){
				options[i].selected = true;
				break;
			};
		};
	};
};

document.addEventListener('DOMContentLoaded', function(){
	// load data
	fetch('http://localhost:3000')
	    .then(function(response) {	return response.json();  })
	    .then( function(json) {	const roastLevels = new RoastLevels(json);   })
	    .catch(err => console.log('Request Failed', err));
});


// prevent default form action
document.getElementById("new-bean-form").addEventListener('submit', function(e){
		e.preventDefault();
		debugger;
		const data = {  bean: 
												   {  name: this[0].value,
															roast_level_id: this[1].value,
															tasting_notes: this[2].value,
															score: this[3].value,
															notes: this[4].value
														}
										};

		const configObj = {
												method: "POST",
											  headers: {
											    "Content-Type": "application/json",
											    "Accept": "application/json"
											  },
											  body: JSON.stringify(data)
											};

		fetch("http://localhost:3000/beans", configObj)
			  .then(function(response) {
			    return response.json();
			  })
			  .then(function(object) {
			    console.log(object);
			    $('new-bean-modal').foundation('close');
			  })
			  .catch(function(error) {
			    alert("Something bad happened :(");
			    console.log(error.message);
			  });
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