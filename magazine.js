var letterChecker = function(n, m) {
    var obj = {};
    for (var i = 0; i < m.length; i++) {
        if (m[i] in obj) {
            obj[m[i]]++;
        } else {
            obj[m[i]] = 1;
        }
    }
    for (var j = 0; j < n.length; j++) {
        if (!(n[j] in obj) || obj[n[j]] === 0) {
            return false;
        } else {
            obj[n[j]]--;
        }
    }
    return true;
}

console.log(letterChecker("hiX", "hi you"));