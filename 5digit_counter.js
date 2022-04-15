var numb, iter;

var btn = document.getElementById("counter-btn");

var ones, one, tens, ten, hunds, hund, thouss, thous, tthouss, tthous;

ones = document.getElementById('ones');
one = document.getElementById('one');
tens = document.getElementById('tens');
ten = document.getElementById('ten');
hunds = document.getElementById('hunds');
hund = document.getElementById('hunds');
thouss = document.getElementById('thouss');
thous = document.getElementById('thous');
tthouss = document.getElementById('tthouss');
tthous = document.getElementById('tthous');

var spano1, spano2, spante1, spante2, spanh1, spanh2, spanth1, spanth2, spantth1, spantth2;

spano1 = ones.children[0];
spano2 = one.children[0];
spante1 = tens.children[0];
spante2 = ten.children[0];
spanh1 = hunds.children[0];
spanh2 = hund.children[0];
spanth1 = thouss.children[0];
spanth2 = thous.children[0];
spantth1 = tthouss.children[0];
spantth2 = tthous.children[0];

function pullup(a, b) {
  let topl = 99;
  let interval2 = setInterval(
    function () {
      b.style.top = '0%';
      topl--;
      a.style.top = topl + "%";
      if (topl == 0) {
        clearInterval(interval2);
        return;
      }
    }, 10);
}

function addtens(c) {
  if (c % 2 == 1) {
    tens.style.zIndex = '1';
    spante1.innerText = (iter % 100 - iter % 10) / 10;
    pullup(tens, ten);
    ten.style.top = '100%';
  }
  else if (c % 2 == 0) {
    tens.style.zIndex = "";
    spante2.innerText = (iter % 100 - iter % 10) / 10;
    pullup(ten, tens);
    tens.style.top = '100%';
  }
}

function addhund(c) {
  if (c % 2 == 1) {
    hunds.style.zIndex = '1';
    spanh1.innerText = (iter % 1000 - iter % 100 - iter % 10) / 100;
    pullup(hunds, hund);
    hund.style.top = '100%';
  }
  else if (c % 2 == 0) {
    hunds.style.zIndex = "";
    spanh2.innerText = (iter % 1000 - iter % 100 - iter % 10) / 100;
    pullup(hund, hunds);
    hunds.style.top = '100%';
  }
}

function addthous(c) {
  if (c % 2 == 1) {
    thouss.style.zIndex = '1';
    spanth1.innerText = (iter % 10000 - iter % 1000) / 1000;
    pullup(thouss, thous);
    thous.style.top = '100%';
  }
  else if (c % 2 == 0) {
    thouss.style.zIndex = "";
    spanth2.innerText = (iter % 10000 - iter % 1000) / 1000;
    pullup(thous, thouss);
    thouss.style.top = '100%';
  }
}

function addtthous(c) {
  if (c % 2 == 1) {
    tthouss.style.zIndex = '1';
    spantth1.innerText = (iter % 100000 - iter % 10000) / 10000;
    pullup(tthouss, tthous);
    tthous.style.top = '100%';
  }
  else if (c % 2 == 0) {
    tthouss.style.zIndex = "";
    spantth2.innerText = (iter % 100000 - iter % 10000) / 10000;
    pullup(tthous, tthouss);
    tthouss.style.top = '100%';
  }
}

btn.addEventListener('click',
  function () {

    ones.style.top = '100%';

    spanh1.innerText = spanh2.innerText = spano1.innerText = spano2.innerText = spante1.innerText = spante2.innerText = spanth1.innerText = spanth2.innerText = spantth1.innerText = spantth2.innerText = '0';

    numb = document.getElementById('count').value;

    if (numb <= 0 || numb > 99999)
      window.alert("Range out of bounds");
    else {
      iter = 0;
      var flag = false;
      var tenflag = 1;
      var hundflag = 1;
      var thousflag = 1;
      var tthousflag = 1;
      var interval1 = setInterval(function () {
        if (iter == numb) {
          window.alert("Counter has stopped");
          clearInterval(interval1);
          return;
        }
        if (flag == true) {
          ones.style.zIndex = "";
          iter++;
          spano2.innerText = ((iter) % 10);
          if (iter / 10000 && !tthousflag) {
            addtthous((iter % 100000 - iter % 10000) / 10000);
          }
          if (iter / 1000 && !thousflag) {
            thousflag = 1;
            addthous((iter % 10000 - iter % 1000) / 1000);
          }
          if (iter / 100 && !hundflag) {
            hundflag = 1;
            addhund((iter % 1000 - iter % 100) / 100);
          }
          if (iter / 10 && !tenflag) {
            tenflag = 1;
            addtens((iter % 100 - iter % 10) / 10);
          }
          pullup(one, ones);
          flag = false;
          ones.style.position = 'absolute';
          ones.style.top = '100%';
        }
        else {
          ones.style.zIndex = '1';
          iter++;
          if (iter % 10 == 9)
            tenflag = 0;
          if (iter % 100 == 99)
            hundflag = 0;
          if (iter % 1000 == 999)
            thousflag = 0;
          if (iter % 10000 == 9999)
            tthousflag = 0;
          spano1.innerText = ((iter) % 10);
          pullup(ones, one);
          flag = true;
          one.style.top = '100%';
        }
      }, 1000);
    }
  }
);