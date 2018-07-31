function getEmployeesHTML(employee, id) {
    return `
       <div class="col-md-6">
          <div class="row emp-card" data-toggle="modal" data-target="#${id}">
             <div class="col-sm-4"><img class="" src="${employee.picture.large}"></img></div>
             <div class="col-sm-8">
                <h4 class="upper">${employee.name.first} ${employee.name.last}</h4>
                <p>${employee.email}</p>
                <p class="upper">${employee.location.city}</p>
             </div>
          </div>
       </div>
       <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" role="document">
             <div class="modal-content">
                <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                   </button>
                </div>
                <div class="modal-body emp-modal">
                   <img src="${employee.picture.large}"></img>
                   <h4 class="upper">${employee.name.first} ${employee.name.last}</h4>
                   <p>${employee.email}</p>
                   <p class="upper">${employee.location.city}</p>
                   <hr>
                   <p>${employee.phone}</p>
                   <p class="upper">${employee.location.street}, ${employee.location.state} ${employee.location.postcode}</p>
                   <p> Birthday: ${employee.dob.date.slice(0, 10)}</p>
                </div>
             </div>
          </div>
       </div>
    `
}

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function (data) {
    var employeesHTMLArray = []

    data.results.forEach(function (employee, id){
      employeesHTMLArray.push(getEmployeesHTML(employee, `employee-${id}`));
    })

    $('#users').append(`<div class="row">${employeesHTMLArray.join('')}</div>`);
  }
})
