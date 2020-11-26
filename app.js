

$(function(){

fetch('http://localhost:3050/customers').then(response => response.json())
  .then(function(fact){
      const data = fact;

      let template = '';
      data.forEach( data=>{
	  	template += `	<div class="box-part text-center">
                        
					      <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>        
								<div class="title">
								<h4>${data.name}</h4>
								<h4>${data.last_name}</h4>
								</div>
                        
						<div class="text">
								<span>${data.city}</span>
						</div>               
								<a href="#">${data.id}</a>    
						</div>		      
		    `
      });
     	$('#mostrar').html(template); 
  })
  
})








