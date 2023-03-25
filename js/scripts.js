

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

  return total;
};

