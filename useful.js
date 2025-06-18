function dbg(msg) {
    console.log(msg)
}

function rand(max, min = 0) {
    //max will never be returned (i should have noticed this)
    return Math.floor(Math.random() * (max - min) + min)
}

function testRand(max, min) {
    stats = {
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
    }
    for (i = 0; i < 100000; i++) {
        switch (rand(max, min)) {
            case 5: 
                stats[5] += 1
                break;
            case 6: 
                stats[6] += 1
                break;
            case 7: 
                stats[7] += 1
                break;
            case 8: 
                stats[8] += 1
                break;
            case 9: 
                stats[9] += 1
                break;
            case 10: 
                stats[10] += 1
                break;
        }
    }
    console.log(stats)
}


//source: https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro

function elementify(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}