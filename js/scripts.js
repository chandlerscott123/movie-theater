

function isPeak(time){

  let movieHour = parseInt(time.slice(0,2));

  if (movieHour === 4){
    let movieMinute = time.slice(3,5);
    if(parseInt(movieMinute) >= 0){
      let movieSecond = time.slice(-2);
      if (parseInt(movieSecond)>0){
        movieHour++;
      }
    }
  }

  if(parseInt(movieHour)<=4){
    return false;
  }

  return true;
}


function isFirstRelease(title){
  const firstReleases = ["terminator", "bladerunner"];

  if(firstReleases.includes(title)){
    return true;
  }
  return false;
}

function Ticket(title, time, age){
  this.title=title;
  this.time=time;
  this.age=age;
}


Ticket.prototype.getPrice = function (){
  const basePrice = 12.50;
  let total = basePrice;
  const peakCharge =3.5;
  const firstReleaseCharge = 3;

  if (this.age<60){

    if (isPeak(this.time)){
      total+=peakCharge;
    }
    if (isFirstRelease(this.title)){
      total+=firstReleaseCharge;
    }
    
  }

  return total.toFixed(2);
};


function displayTicket(ticket){

  let ticketDiv = document.querySelector("div#ticket");
  ticketDiv.innerText=null;
  const ul=document.createElement("ul");
  Object.keys(ticket).forEach(function(key){
    const li =  document.createElement("li");

    li.append(key +": " + ticket[key]);
    
    ul.append(li);
  });
  const price = ticket.getPrice()
  ul.append("price: " + price);
  ticketDiv.append(ul);

}

function handleTicketInput(event){
  event.preventDefault();
  const title = document.querySelector("input[name='title']:checked").value;
  const age = parseInt(document.querySelector("input#age").value);
  const time = document.querySelector("input[name='movie-time']:checked").value;
  const ticketObj = new Ticket(title, time, age);

  displayTicket(ticketObj);

  
  //I want to get the object attributes and display the price

}

/*
ticketForm -> user input for title, age, time
store input in new ticket obj
display ticket
*/







window.addEventListener("load", function(){

  const ticketForm =  document.getElementById("ticket-form");

  ticketForm.addEventListener("submit", handleTicketInput);




 });