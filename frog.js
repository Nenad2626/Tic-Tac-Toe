
var template=document.querySelector('h3');
var coloring1=[
      'brown',
      'deepskyblue', 
      'green',
      'yellow',
      'orange',
      'magenta',
      'white'

];


var x=document.querySelector('.X');
var o=document.querySelector('.O');

var x1=document.querySelector('.X').value;
var o1=document.querySelector('.O').value;


var one=document.querySelector('.one');
var two=document.querySelector('.two');
var three=document.querySelector('.three');
var four=document.querySelector('.four');
var five=document.querySelector('.five');
var six=document.querySelector('.six');
var seven=document.querySelector('.seven');
var eight=document.querySelector('.eight');
var nine=document.querySelector('.nine');

var ttt=document.querySelector('.ttt');
var ttt1=document.querySelector('.ttt1');
var ttt2=document.querySelector('.score');


function switchText() {

template.style.color=coloring1[Math.floor(Math.random()*7)];


}

var start=setInterval(switchText,1000);

var part=document.querySelectorAll('.tac');

var i=0;

var winning=[

1,2,3,4,5,6,7,8,9,10,
11,12,13,14,15,16,17,18,19,20,
21,22,23,24,25,26,27,28,29,30,
31,32,33,34,35,36,37,38,39,40,
41,42,43,44,45,46,47,48,49,50

];



var player1=document.querySelector('.a');
var player2=document.querySelector('.b');

function ex() {

if(o.enabled=true) {

o.disabled=true;
o.style.background='red';
template.style.color='orange';
clearInterval(start);

  }

if(x.disabled=true) {

ttt.innerHTML +='<p>Human is playing as X</p>';


  } else  {

ttt.innerHTML +='<p>Human is playing as O</p>';


  }

if(o.disabled=true) {

ttt1.innerHTML +='<p>Computer is playing as O</p>';


  } else  {

ttt1.innerHTML +='<p>Computer is playing as X</p>';


  }

}



function ox()  {

if(x.enabled=true) {

x.disabled=true;
x.style.background='red';
template.style.color='orange';
clearInterval(start);


  }

if(x.disabled=true) {

ttt1.innerHTML +='<p>Computer is playing as X</p>';


  } else  {

ttt1.innerHTML +='<p>Computer is playing as O</p>';


  }


if(o.disabled=true) {

ttt.innerHTML +='<p>Human is playing as O</p>';


  } else  {

ttt.innerHTML +='<p>Human is playing as X</p>';


  }
}


function hPlayer(square)  {

if(square.innerHTML==='' && o.enabled===true)  {

square.innerHTML=x1;
computer();
winner();

  } else if(square.innerHTML==='' && x.enabled===true)  {

square.innerHTML=o1;
computer();
victory();

}
   }



function computer()  {

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

five.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && two.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && four.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}


if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML===x1 && seven.innerHTML==='' && six.innerHTML==='' && four.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}


if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===x1 && four.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 && six.innerHTML==='' && two.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML===x1 && three.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && four.innerHTML===x1 && six.innerHTML===''  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML==='' && seven.innerHTML===x1 && six.innerHTML==='' && two.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML===o1 && three.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML===x1 && two.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML===o1 && eight.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && two.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML==='' && seven.innerHTML==='' && four.innerHTML==='' && two.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML==='' && six.innerHTML===o1 && four.innerHTML===x1 && two.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML===x1 && six.innerHTML===o1 && four.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML==='' && seven.innerHTML==='' && four.innerHTML==='' && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML==='' && two.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML===x1 && two.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && eight.innerHTML===x1 && seven.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}


if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML==='' && seven.innerHTML==='' && two.innerHTML==='' && six.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML==='' && two.innerHTML==='' && six.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML===x1 && two.innerHTML==='' && six.innerHTML===x1 && eight.innerHTML===x1 && three.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}


if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

five.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && six.innerHTML==='' && four.innerHTML==='' && eight.innerHTML===x1 && seven.innerHTML==='' && five.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' && eight.innerHTML===x1 && six.innerHTML==='' && five.innerHTML===o1 && seven.innerHTML===x1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(seven.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' && eight.innerHTML===x1 && one.innerHTML===x1 && five.innerHTML===o1 && nine.innerHTML===o1  && o.enabled===true) {

six.innerHTML=o1;

}

if(seven.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' && eight.innerHTML===x1 && six.innerHTML===x1 && five.innerHTML===o1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}



if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

five.innerHTML=o1;

}


if(one.innerHTML==='' && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && three.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && five.innerHTML===o1 && eight.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && three.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && three.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(eight.innerHTML===o1 && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && three.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

one.innerHTML=o1;

}

if(four.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && four.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && five.innerHTML===o1 && eight.innerHTML==='' && four.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(three.innerHTML===o1 && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

one.innerHTML=o1;

}

if(three.innerHTML===o1 && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML===x1 && one.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1;

}

if(five.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

one.innerHTML=o1;

}

if(five.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && one.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1;

}

if(five.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 && one.innerHTML===o1 && eight.innerHTML==='' && six.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && one.innerHTML===o1 && seven.innerHTML===x1 && six.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}



if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

five.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && five.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(eight.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && five.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

one.innerHTML=o1;

}

if(eight.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && one.innerHTML===o1 && seven.innerHTML===x1 && five.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && five.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && nine.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && five.innerHTML===o1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===x1 && nine.innerHTML===o1 && three.innerHTML===x1 && two.innerHTML===o1 && six.innerHTML===x1 && four.innerHTML==='' && eight.innerHTML===x1 && five.innerHTML===o1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML==='' && six.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML==='' && six.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && two.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && six.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && four.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && nine.innerHTML===o1 && three.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && four.innerHTML===o1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML==='' && five.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML==='' && five.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && two.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && six.innerHTML==='' && nine.innerHTML===o1 && eight.innerHTML===x1 && two.innerHTML===o1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

five.innerHTML=o1;

}


if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===o1 && four.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(three.innerHTML===o1 && two.innerHTML==='' && five.innerHTML===o1 && four.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

one.innerHTML=o1;

}

if(three.innerHTML===o1 && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && one.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===o1 && four.innerHTML===x1 && six.innerHTML==='' && three.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===o1 && four.innerHTML===x1 && six.innerHTML==='' && three.innerHTML===x1 && eight.innerHTML===x1 && seven.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && nine.innerHTML===o1 && five.innerHTML===o1 && four.innerHTML===x1 && six.innerHTML==='' && three.innerHTML===x1 && eight.innerHTML===x1 && seven.innerHTML===o1  && o.enabled===true) {

two.innerHTML=o1;

}


if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 && six.innerHTML==='' && nine.innerHTML===x1 && two.innerHTML==='' && five.innerHTML===o1  && eight.innerHTML==='' && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML===x1 && two.innerHTML==='' && five.innerHTML===o1  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===x1 && six.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML===x1 && eight.innerHTML==='' && five.innerHTML===o1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && nine.innerHTML==='' && four.innerHTML===x1 && seven.innerHTML==='' && six.innerHTML===x1 && eight.innerHTML==='' && five.innerHTML===o1  && o.enabled===true) {

three.innerHTML=o1;

}

if(three.innerHTML===o1 && two.innerHTML==='' && nine.innerHTML==='' && four.innerHTML===x1 && seven.innerHTML===x1 && six.innerHTML===x1 && eight.innerHTML==='' && five.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(three.innerHTML===o1 && one.innerHTML===o1 && nine.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===x1 && six.innerHTML===x1 && eight.innerHTML==='' && five.innerHTML===o1  && o.enabled===true) {

two.innerHTML=o1;

}

if(five.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

one.innerHTML=o1;

}

if(five.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && one.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(five.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===x1 && eight.innerHTML===o1 && seven.innerHTML===x1 && one.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

five.innerHTML=o1;

}


if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===o1 && four.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}


if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && five.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && five.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML==='' && five.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && two.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && five.innerHTML===o1 && three.innerHTML==='' && nine.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && two.innerHTML===o1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && five.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===x1 && nine.innerHTML===o1 && eight.innerHTML===x1 && five.innerHTML===o1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && seven.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===x1 && nine.innerHTML===o1 && eight.innerHTML===x1 && five.innerHTML===o1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML===x1 && three.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(eight.innerHTML===o1 && two.innerHTML===x1 && five.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML===x1 && three.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

five.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && five.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && nine.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && five.innerHTML===o1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && four.innerHTML===o1 && nine.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && five.innerHTML===o1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && five.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML==='' && eight.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && five.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && four.innerHTML===o1 && eight.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && five.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

five.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && five.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' && seven.innerHTML===o1 && five.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1;

}

if(six.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===o1 && five.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

one.innerHTML=o1;

}


if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && five.innerHTML===x1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && five.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

five.innerHTML=o1;

}

if(eight.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && five.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && five.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && eight.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===x1 && five.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && eight.innerHTML===o1 && four.innerHTML===x1 && three.innerHTML===o1 && seven.innerHTML===x1 && five.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1;

}





if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

five.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && two.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && four.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}


if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML===o1 && seven.innerHTML==='' && six.innerHTML==='' && four.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}


if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML===o1 && four.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 && six.innerHTML==='' && two.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML===o1 && three.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && four.innerHTML===o1 && six.innerHTML===''  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML==='' && seven.innerHTML===o1 && six.innerHTML==='' && two.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML===x1 && three.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML===o1 && two.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML===x1 && eight.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && two.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML==='' && seven.innerHTML==='' && four.innerHTML==='' && two.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML==='' && six.innerHTML===x1 && four.innerHTML===o1 && two.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML===o1 && six.innerHTML===x1 && four.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML==='' && seven.innerHTML==='' && four.innerHTML==='' && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML==='' && two.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML===o1 && two.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && eight.innerHTML===o1 && seven.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}


if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML==='' && seven.innerHTML==='' && two.innerHTML==='' && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML==='' && two.innerHTML==='' && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===o1 && two.innerHTML==='' && six.innerHTML===o1 && eight.innerHTML===o1 && three.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}


if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

five.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && six.innerHTML==='' && four.innerHTML==='' && eight.innerHTML===o1 && seven.innerHTML==='' && five.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' && eight.innerHTML===o1 && six.innerHTML==='' && five.innerHTML===x1 && seven.innerHTML===o1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(seven.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' && eight.innerHTML===o1 && one.innerHTML===o1 && five.innerHTML===x1 && nine.innerHTML===x1  && x.enabled===true) {

six.innerHTML=x1;

}

if(seven.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' && eight.innerHTML===o1 && six.innerHTML===o1 && five.innerHTML===x1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}



if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

five.innerHTML=x1;

}


if(one.innerHTML==='' && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && three.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && five.innerHTML===x1 && eight.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && three.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && three.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(eight.innerHTML===x1 && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && three.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

one.innerHTML=x1;

}

if(four.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && four.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && five.innerHTML===x1 && eight.innerHTML==='' && four.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(three.innerHTML===x1 && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

one.innerHTML=x1;

}

if(three.innerHTML===x1 && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML===o1 && one.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1;

}

if(five.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

one.innerHTML=x1;

}

if(five.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && one.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(five.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 && one.innerHTML===x1 && eight.innerHTML==='' && six.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && one.innerHTML===x1 && seven.innerHTML===o1 && six.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}



if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

five.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && five.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(eight.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && five.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

one.innerHTML=x1;

}

if(eight.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && one.innerHTML===x1 && seven.innerHTML===o1 && five.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && five.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && nine.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && five.innerHTML===x1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && nine.innerHTML===x1 && three.innerHTML===o1 && two.innerHTML===x1 && six.innerHTML===o1 && four.innerHTML==='' && eight.innerHTML===o1 && five.innerHTML===x1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML==='' && six.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && six.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && two.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && six.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && four.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && nine.innerHTML===x1 && three.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && four.innerHTML===x1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && five.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && five.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && two.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && six.innerHTML==='' && nine.innerHTML===x1 && eight.innerHTML===o1 && two.innerHTML===x1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

five.innerHTML=x1;

}


if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===x1 && four.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(three.innerHTML===x1 && two.innerHTML==='' && five.innerHTML===x1 && four.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

one.innerHTML=x1;

}

if(three.innerHTML===x1 && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && one.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===x1 && four.innerHTML===o1 && six.innerHTML==='' && three.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===x1 && four.innerHTML===o1 && six.innerHTML==='' && three.innerHTML===o1 && eight.innerHTML===o1 && seven.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && nine.innerHTML===x1 && five.innerHTML===x1 && four.innerHTML===o1 && six.innerHTML==='' && three.innerHTML===o1 && eight.innerHTML===o1 && seven.innerHTML===x1  && x.enabled===true) {

two.innerHTML=x1;

}


if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 && six.innerHTML==='' && nine.innerHTML===o1 && two.innerHTML==='' && five.innerHTML===x1  && eight.innerHTML==='' && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML===o1 && two.innerHTML==='' && five.innerHTML===x1  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && six.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML===o1 && eight.innerHTML==='' && five.innerHTML===x1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && nine.innerHTML==='' && four.innerHTML===o1 && seven.innerHTML==='' && six.innerHTML===o1 && eight.innerHTML==='' && five.innerHTML===x1  && x.enabled===true) {

three.innerHTML=x1;

}

if(three.innerHTML===x1 && two.innerHTML==='' && nine.innerHTML==='' && four.innerHTML===o1 && seven.innerHTML===o1 && six.innerHTML===o1 && eight.innerHTML==='' && five.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(three.innerHTML===x1 && one.innerHTML===x1 && nine.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML===o1 && six.innerHTML===o1 && eight.innerHTML==='' && five.innerHTML===x1  && x.enabled===true) {

two.innerHTML=x1;

}

if(five.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

one.innerHTML=x1;

}

if(five.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && one.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(five.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 && eight.innerHTML===x1 && seven.innerHTML===o1 && one.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

five.innerHTML=x1;

}


if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===x1 && four.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}


if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && five.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && five.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && five.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && two.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && five.innerHTML===x1 && three.innerHTML==='' && nine.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && two.innerHTML===x1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && five.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===o1 && nine.innerHTML===x1 && eight.innerHTML===o1 && five.innerHTML===x1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && seven.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' && six.innerHTML===o1 && nine.innerHTML===x1 && eight.innerHTML===o1 && five.innerHTML===x1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML===o1 && three.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(eight.innerHTML===x1 && two.innerHTML===o1 && five.innerHTML===x1 && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML===o1 && three.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

five.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && five.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && nine.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && five.innerHTML===x1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===x1 && nine.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && five.innerHTML===x1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && five.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML==='' && eight.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && five.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && four.innerHTML===x1 && eight.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && five.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

five.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && five.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' && seven.innerHTML===x1 && five.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(six.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML===x1 && five.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

one.innerHTML=x1;

}


if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && five.innerHTML===o1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && five.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

five.innerHTML=x1;

}

if(eight.innerHTML==='' && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && five.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML==='' && five.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && eight.innerHTML===x1 && four.innerHTML==='' && six.innerHTML==='' && seven.innerHTML===o1 && five.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && eight.innerHTML===x1 && four.innerHTML===o1 && three.innerHTML===x1 && seven.innerHTML===o1 && five.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}








if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1; 

}


if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===''&& seven.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}


if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML==='' && o.enabled===true) {

four.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1 && o.enabled===true) {

four.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1 && o.enabled===true) {

three.innerHTML=o1; 

}


if(one.innerHTML===x1 && two.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML==='' && three.innerHTML===x1 && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && nine.innerHTML===x1 && three.innerHTML===x1 && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1; 

}


if(one.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}


if(one.innerHTML===x1 && two.innerHTML===o1 && eight.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML==='' && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && eight.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML===x1 && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML==='' &&  five.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===x1 &&  five.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 &&  five.innerHTML===o1 && four.innerHTML===o1 && nine.innerHTML==='' && eight.innerHTML===x1 && six.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===o1 && four.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && eight.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && four.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && eight.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && four.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && o.enabled===true) {

nine.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && seven.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1 && o.enabled===true) {

four.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && seven.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1 && o.enabled===true) {

four.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && o.enabled===true) {

nine.innerHTML=o1;

}


if(one.innerHTML===o1 && two.innerHTML===x1 && eight.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && nine.innerHTML===x1 && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && eight.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML===x1 && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===''&&  five.innerHTML===o1 && six.innerHTML===x1  && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1  && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1  && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1  && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1  && eight.innerHTML==='' && seven.innerHTML===x1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1  && eight.innerHTML===x1 && seven.innerHTML===x1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===''&&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===''&&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}


if(two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && nine.innerHTML===o1  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 &&  two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1; 

}

if(one.innerHTML===o1 &&  two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1; 

}

if(two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1; 

}

if(two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===''&& nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1;  

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1;  

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1;  

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && o.enabled===true) {

nine.innerHTML=o1;  

}

if(one.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 &&  nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 &&  nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===''&&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1  && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1; 

}

if(two.innerHTML==='' &&  three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML===x1 &&  three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(two.innerHTML===x1 &&  three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

three.innerHTML=o1;

}

if(two.innerHTML===o1 &&  three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML===o1 &&  three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}


if(one.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML===''  && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

one.innerHTML=o1;

}

if(one.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===x1 && two.innerHTML===''  && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1  && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===''  && four.innerHTML==='' &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}




if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1  && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {
 
three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1  && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 &&  three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && o.enabled===true) {

nine.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1 && o.enabled===true) {

four.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===''  && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1  && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && o.enabled===true) {

nine.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1 && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===''  && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 &&  three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1; 

}

if(one.innerHTML===o1  && three.innerHTML==='' && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1  && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

six.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

six.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1  && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1  && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1  && o.enabled===true) {

nine.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

eight.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1  && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1  && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1  && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1  && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1  && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1  && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1  && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1  && four.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1  && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1  && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

four.innerHTML=o1;

}

if(one.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && o.enabled===true) {

two.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && nine.innerHTML==='' && eight.innerHTML===x1 && o.enabled===true) {

seven.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1  && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && two.innerHTML===o1  && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML==='' && o.enabled===true) {

three.innerHTML=o1;

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

two.innerHTML=o1;

}




























if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}


if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===''&& seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}


if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML==='' && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1 && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1 && x.enabled===true) {

three.innerHTML=x1; 

}


if(one.innerHTML===o1 && two.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML==='' && three.innerHTML===o1 && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && nine.innerHTML===o1 && three.innerHTML===o1 && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1; 

}


if(one.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}


if(one.innerHTML===o1 && two.innerHTML===x1 && eight.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML==='' && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && eight.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML===o1 && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' &&  five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 &&  five.innerHTML===x1 && four.innerHTML===x1 && nine.innerHTML==='' && eight.innerHTML===o1 && six.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 &&  five.innerHTML===x1 && four.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && eight.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && four.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && eight.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && four.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && seven.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1 && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && seven.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1 && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && x.enabled===true) {

nine.innerHTML=x1;

}


if(one.innerHTML===x1 && two.innerHTML===o1 && eight.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && nine.innerHTML===o1 && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && eight.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML===o1 && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && seven.innerHTML===o1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML===o1 && seven.innerHTML===o1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}


if(two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===x1  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 &&  two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 &&  two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1; 

}

if(two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===''&& nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;  

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;  

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;  

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && x.enabled===true) {

nine.innerHTML=x1;  

}

if(one.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 &&  nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 &&  nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1  && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1; 

}

if(two.innerHTML==='' &&  three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 &&  three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(two.innerHTML===o1 &&  three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

three.innerHTML=x1;

}

if(two.innerHTML===x1 &&  three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===x1 &&  three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}


if(one.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===''  && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===''  && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1  && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===''  && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}




if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1  && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {
 
three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1  && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 &&  three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1 && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===''  && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1  && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1  && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1 && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===''  && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 &&  three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===x1  && three.innerHTML==='' && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1  && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1  && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1  && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1  && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1 

}

if(one.innerHTML===x1 && two.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===x1  && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1  && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1  && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1  && four.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1  && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1  && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && five.innerHTML===o1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && nine.innerHTML==='' && eight.innerHTML===o1 && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1  && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===x1  && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML==='' && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}


























if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}


if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===''&& seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}


if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML==='' && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1 && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1 && x.enabled===true) {

three.innerHTML=x1; 

}


if(one.innerHTML===o1 && two.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML==='' && three.innerHTML===o1 && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && nine.innerHTML===o1 && three.innerHTML===o1 && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1; 

}


if(one.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1;

}


if(one.innerHTML===o1 && two.innerHTML===x1 && eight.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML==='' && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && eight.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML===o1 && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' &&  five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 &&  five.innerHTML===x1 && four.innerHTML===x1 && nine.innerHTML==='' && eight.innerHTML===o1 && six.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 &&  five.innerHTML===x1 && four.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && eight.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && four.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && eight.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && four.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && seven.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1 && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && seven.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1 && x.enabled===true) {

four.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && eight.innerHTML===o1 && x.enabled===true) {

nine.innerHTML=x1;

}


if(one.innerHTML===x1 && two.innerHTML===o1 && eight.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && nine.innerHTML===o1 && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && eight.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && nine.innerHTML===o1 && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML==='' && seven.innerHTML===o1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1  && eight.innerHTML===o1 && seven.innerHTML===o1  && x.enabled===true) {

nine.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}


if(two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && nine.innerHTML===x1  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===''  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML==='' && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 &&  two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===x1 &&  two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1  && x.enabled===true) {

nine.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1; 

}

if(two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===''&& nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;  

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;  

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML==='' && x.enabled===true) {

nine.innerHTML=x1;  

}

if(one.innerHTML===x1 && two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && x.enabled===true) {

nine.innerHTML=x1;  

}

if(one.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 &&  nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 &&  nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===''&&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

seven.innerHTML=x1; 

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML==='' && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1  && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1;

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===''  && x.enabled===true) {

three.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1; 

}

if(two.innerHTML==='' &&  three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===o1 &&  three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(two.innerHTML===o1 &&  three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML==='' && nine.innerHTML===o1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

three.innerHTML=x1;

}

if(two.innerHTML===x1 &&  three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===x1 &&  three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}


if(one.innerHTML==='' && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===x1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

eight.innerHTML=x1; 

}

if(two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML===''  && three.innerHTML===o1 && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(two.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

one.innerHTML=x1;

}

if(one.innerHTML==='' && three.innerHTML==='' && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML==='' && three.innerHTML==='' && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

two.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML==='' && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

six.innerHTML=x1; 

}

if(one.innerHTML===o1 && two.innerHTML===''  && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1  && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML==='' && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===''  && four.innerHTML==='' &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

three.innerHTML=x1;

}

if(one.innerHTML==='' && two.innerHTML===o1 && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}

if(one.innerHTML===o1 && two.innerHTML==='' && three.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

four.innerHTML=x1;

}





if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===x1) {

one.style.color='lightblue';
two.style.color='lightblue';
three.style.color='lightblue';

one.style.background='black';
two.style.background='black';
three.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);
  
  }

if(four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===x1) {

four.style.color='lightblue';
five.style.color='lightblue';
six.style.color='lightblue';

four.style.background='black';
five.style.background='black';
six.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===x1) {

seven.style.color='lightblue';
eight.style.color='lightblue';
nine.style.color='lightblue';

seven.style.background='black';
eight.style.background='black';
nine.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(one.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===x1) {

one.style.color='lightblue';
four.style.color='lightblue';
seven.style.color='lightblue';

one.style.background='black';
four.style.background='black';
seven.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(two.innerHTML===x1 && five.innerHTML===x1 && eight.innerHTML===x1) {

two.style.color='lightblue';
five.style.color='lightblue';
eight.style.color='lightblue';

two.style.background='black';
five.style.background='black';
eight.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(three.innerHTML===x1 && six.innerHTML===x1 && nine.innerHTML===x1) {

three.style.color='lightblue';
six.style.color='lightblue';
nine.style.color='lightblue';

three.style.background='black';
six.style.background='black';
nine.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }


if(one.innerHTML===x1 && five.innerHTML===x1 && nine.innerHTML===x1) {

one.style.color='lightblue';
five.style.color='lightblue';
nine.style.color='lightblue';

one.style.background='black';
five.style.background='black';
nine.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(three.innerHTML===x1 && five.innerHTML===x1 && seven.innerHTML===x1) {

three.style.color='lightblue';
five.style.color='lightblue';
seven.style.color='lightblue';

three.style.background='black';
five.style.background='black';
seven.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }


if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===o1) {

one.style.color='lightblue';
two.style.color='lightblue';
three.style.color='lightblue';

one.style.background='black';
two.style.background='black';
three.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===o1) {

four.style.color='lightblue';
five.style.color='lightblue';
six.style.color='lightblue';

four.style.background='black';
five.style.background='black';
six.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===o1) {

seven.style.color='lightblue';
eight.style.color='lightblue';
nine.style.color='lightblue';

seven.style.background='black';
eight.style.background='black';
nine.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(one.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML===o1) {

one.style.color='lightblue';
four.style.color='lightblue';
seven.style.color='lightblue';

one.style.background='black';
four.style.background='black';
seven.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(two.innerHTML===o1 && five.innerHTML===o1 && eight.innerHTML===o1) {

two.style.color='lightblue';
five.style.color='lightblue';
eight.style.color='lightblue';

two.style.background='black';
five.style.background='black';
eight.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(three.innerHTML===o1 && six.innerHTML===o1 && nine.innerHTML===o1) {

three.style.color='lightblue';
six.style.color='lightblue';
nine.style.color='lightblue';

three.style.background='black';
six.style.background='black';
nine.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }


if(one.innerHTML===o1 && five.innerHTML===o1 && nine.innerHTML===o1) {

one.style.color='lightblue';
five.style.color='lightblue';
nine.style.color='lightblue';

one.style.background='black';
five.style.background='black';
nine.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(three.innerHTML===o1 && five.innerHTML===o1 && seven.innerHTML===o1) {

three.style.color='lightblue';
five.style.color='lightblue';
seven.style.color='lightblue';

three.style.background='black';
five.style.background='black';
seven.style.background='black';

player2.innerHTML=i+1;
i++;

ttt2.innerHTML='COMPUTER WINS THIS TIME';

setInterval(gamers, 2000);

  }


if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1&&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1&&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 &&  five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 &&  five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);

}












if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);
}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===x1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);
}

if(one.innerHTML===o1 && two.innerHTML===x1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);
}

if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===x1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===x1  && o.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);
}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===x1 && four.innerHTML===x1 && five.innerHTML===o1 && six.innerHTML===o1 && seven.innerHTML===o1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);
}

if(one.innerHTML===x1 && two.innerHTML===o1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);
}

if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===o1 && four.innerHTML===o1 && five.innerHTML===o1 && six.innerHTML===x1 && seven.innerHTML===x1 && eight.innerHTML===o1 && nine.innerHTML===o1  && x.enabled===true) {

ttt2.innerHTML='TIE SCORE THIS TIME';

setInterval(gamers, 2000);
}

}

function winner() {


if(one.innerHTML===x1 && two.innerHTML===x1 && three.innerHTML===x1) {

one.style.color='lightblue';
two.style.color='lightblue';
three.style.color='lightblue';

one.style.background='black';
two.style.background='black';
three.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(four.innerHTML ===x1 && five.innerHTML===x1 && six.innerHTML===x1) {

four.style.color='lightblue';
five.style.color='lightblue';
six.style.color='lightblue';

four.style.background='black';
five.style.background='black';
six.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(seven.innerHTML===x1 && eight.innerHTML===x1 && nine.innerHTML===x1) {

seven.style.color='lightblue';
eight.style.color='lightblue';
nine.style.color='lightblue';

seven.style.background='black';
eight.style.background='black';
nine.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(one.innerHTML===x1 && four.innerHTML===x1 && seven.innerHTML===x1) {

one.style.color='lightblue';
four.style.color='lightblue';
seven.style.color='lightblue';

one.style.background='black';
four.style.background='black';
seven.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(two.innerHTML===x1 && five.innerHTML===x1 && eight.innerHTML===x1) {

two.style.color='lightblue';
five.style.color='lightblue';
eight.style.color='lightblue';

two.style.background='black';
five.style.background='black';
eight.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(three.innerHTML===x1 && six.innerHTML===x1 && nine.innerHTML===x1) {

three.style.color='lightblue';
six.style.color='lightblue';
nine.style.color='lightblue';

three.style.background='black';
six.style.background='black';
nine.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }


if(one.innerHTML===x1 && five.innerHTML===x1 && nine.innerHTML===x1) {

one.style.color='lightblue';
five.style.color='lightblue';
nine.style.color='lightblue';

one.style.background='black';
five.style.background='black';
nine.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(three.innerHTML===x1 && five.innerHTML===x1 && seven.innerHTML===x1) {

three.style.color='lightblue';
five.style.color='lightblue';
seven.style.color='lightblue';

three.style.background='black';
five.style.background='black';
seven.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

}


function victory() {


if(one.innerHTML===o1 && two.innerHTML===o1 && three.innerHTML===o1) {

one.style.color='lightblue';
two.style.color='lightblue';
three.style.color='lightblue';

one.style.background='black';
two.style.background='black';
three.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(four.innerHTML ===o1 && five.innerHTML===o1 && six.innerHTML===o1) {

four.style.color='lightblue';
five.style.color='lightblue';
six.style.color='lightblue';

four.style.background='black';
five.style.background='black';
six.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);
  }

if(seven.innerHTML===o1 && eight.innerHTML===o1 && nine.innerHTML===o1) {

seven.style.color='lightblue';
eight.style.color='lightblue';
nine.style.color='lightblue';

seven.style.background='black';
eight.style.background='black';
nine.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(one.innerHTML===o1 && four.innerHTML===o1 && seven.innerHTML===o1) {

one.style.color='lightblue';
four.style.color='lightblue';
seven.style.color='lightblue';

one.style.background='black';
four.style.background='black';
seven.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);
  }

if(two.innerHTML===o1 && five.innerHTML===o1 && eight.innerHTML===o1) {

two.style.color='lightblue';
five.style.color='lightblue';
eight.style.color='lightblue';

two.style.background='black';
five.style.background='black';
eight.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(three.innerHTML===o1 && six.innerHTML===o1 && nine.innerHTML===o1) {

three.style.color='lightblue';
six.style.color='lightblue';
nine.style.color='lightblue';

three.style.background='black';
six.style.background='black';
nine.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }


if(one.innerHTML===o1 && five.innerHTML===o1 && nine.innerHTML===o1) {

one.style.color='lightblue';
five.style.color='lightblue';
nine.style.color='lightblue';

one.style.background='black';
five.style.background='black';
nine.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

if(three.innerHTML===o1 && five.innerHTML===o1 && seven.innerHTML===o1) {

three.style.color='lightblue';
five.style.color='lightblue';
seven.style.color='lightblue';

three.style.background='black';
five.style.background='black';
seven.style.background='black';

player1.innerHTML=i+1;
i++;

ttt2.innerHTML='HUMAN WINS THIS TIME';

setInterval(gamers, 2000);

  }

}



function gamers() {

location.reload();

}

