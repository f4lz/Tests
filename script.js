window.addEventListener('DOMContentLoaded', () => {

  const tbody = document.querySelector('tbody'),
        button = document.querySelector('button');

  const id = document.querySelector('.id'),
        eventId = document.querySelector('.event_id'),
        eventDate = document.querySelector('.event_date'),
        ticketAdultPrice = document.querySelector('.ticket_adult_price'),
        ticketAdultQuantity = document.querySelector('.ticket_adult_quantity'),
        ticketKidPrice = document.querySelector('.ticket_kid_price'),
        ticketKidQuantity = document.querySelector('.ticket_kid_quantity'),
        barcode = document.querySelector('.barcode'),
        userId = document.querySelector('.user_id'),
        equalPrice = document.querySelector('.equal_price'),
        created = document.querySelector('.created'),
        ticketBenefitPrice = document.querySelector('.ticket_benefit_price'),
        ticketBenefitQuantity = document.querySelector('.ticket_benefit_quantity'),
        ticketGroupPrice = document.querySelector('.ticket_group_price'),
        ticketGroupQuantity = document.querySelector('.ticket_group_quantity');
        

  console.log(id, eventId, eventDate);

  button.addEventListener('click', () => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${id.value}</td>
       <td>${eventId.value}</td>
       <td>${eventDate.value}</td>
       <td>${ticketAdultPrice.value}</td>
       <td>${ticketAdultQuantity.value}</td>
       <td>${ticketKidPrice.value}</td>
       <td>${ticketKidQuantity.value}</td>
       <td>${barcode.value}</td>
       <td>${userId.value}</td>
       <td>${equalPrice.value}</td>
       <td>${created.value}</td>
       <td>${ticketBenefitPrice.value}</td>
       <td>${ticketBenefitQuantity.value}</td>
       <td>${ticketGroupPrice.value}</td>
       <td>${ticketGroupQuantity.value}</td> 
       `;
    tbody.appendChild(tr);
  });

  


});