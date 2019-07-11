const getLilHundreds =   document.getElementById('msHundreds');

getLilHundreds.textContent = 0;

const lilHundreds = setInterval(incLilHundreds, 10);

const incLilHundreds = (num) => {
  if (num>=0) {
    num++
  } else if (num==9) {
    return
  }
};

// const lilTens = setInterval(getLilTens, 100);
//
// const getLilTens = () => {};
//
// const bigOnes = setInterval(getBigOnes, 1000);
//
// const getBigOnes = () => {};
//
// const bigHundreds = setInterval(getBigTens, 10000);
//
// const getBigTens = () => {};
