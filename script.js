for(i = 99; i>=2; i--)
{   var r = i - 1
  display.innerHTML += `<p>${i} cartons of biscuit on the wall, ${i} cartons of biscuit. take one down and pass it around, ${r} cartons of biscuit on the wall</p>`;
  if(i==2 && r==1){
    display.innerHTML += `<p>1 cartons of biscuit on the wall, 1 cartons of biscuit. take one down and pass it around, no cartons of biscuit on the wall</p>`;
    display.innerHTML += `<p>No more cartons of biscuit on the wall, no more cartons of biscuit. go to the store and buy some more, 99 carton of biscuit on the wall</p>`;
  }
}