let utilities = {
  mean: function () { },
  max: function () { },
  min: function () { },
  variation: function () { },

  resize: function (d, s) {
    let [w, h] = s;
    h = h || 1;
    if (d.length !== w * h) {
      throw new TypeError('');
    }
    var r = Array(w);
    for (let i = 0; i < w; i++) {
      r[i] = Array(h);
      for (let j = 0; j < h; j++) {
        r[i][j] = d[i * h + j];
      }
    }
    return r;
  },
  combine: function (d, p) {
    var k = d.length / p;
    if (Math.floor(k) !== k) {
      throw new TypeError('');
    }
    var r = Array(k);
    for (let i = 0; i < k; i++){
      r[i] = d.slice(i * k, i * k + p);
    }
    return r;
  },
  safe: function (f) {
    try {
      var r = f();
      return r;
    } catch (_) { }
  }
}
let frame = function (arr, size) {
  this.image = utilities.resize(arr, size);
}
let effect = function (frame, network) {
  
}
