var a = 'a';

function urovenb() {
  var b = 'b';

  function urovenc() {
    var c = 'c';

    function urovend() {
      var d = 'd';

      console.log('urovend', a, b, c, d);
    }
    console.log('urovenc', a, b, c);
  }
  console.log('urovenb', a, b);
}
console.log('globalni', a);
