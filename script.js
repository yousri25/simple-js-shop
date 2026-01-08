let totalitems = "*";
let totalprice = 0;

if (totalprice <= 0) {
    totalprice = 0;
}

function ajout(ch, x) {
    totalprice += x;
    totalitems += ch + "*";

    let msg = traiter(totalitems);

    document.getElementById("totalprice").innerHTML = totalprice + " DT";
    document.getElementById("totalitems").innerHTML = msg;
}

function traiter(ch) {
    let deja = [];
    let msg = "";
    let k = 0;
    let i = 0;

    while (i < ch.length - 1) {
        let start = ch.indexOf("*", i) + 1;
        let end = ch.indexOf("*", start);
        let currword = ch.substring(start, end);

        if (!exist(currword, deja)) {
            deja[k] = currword;
            k++;
            msg += conter(currword, ch) + "x" + currword + " ; ";
        }
        i = end;
    }
    return msg;
}

function totalwords(ch) {
    let nb = 0;
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] == "*") nb++;
    }
    return nb - 1;
}

function conter(word, ch) {
    let nb = 0;
    let i = 0;

    while (i < ch.length - 1) {
        let start = ch.indexOf("*", i) + 1;
        let end = ch.indexOf("*", start);
        let curr = ch.substring(start, end);

        if (curr === word) nb++;
        i = end;
    }
    return nb;
}

function exist(ch, t) {
    for (let i = 0; i < t.length; i++) {
        if (t[i] === ch) return true;
    }
    return false;
}

function cleartotal() {
    totalitems = "*";
    totalprice = 0;
    document.getElementById("totalprice").innerHTML = "0 DT";
    document.getElementById("totalitems").innerHTML = "";
}

function removee(ch, x) {
    if (!found(ch, totalitems)) {
        alert("You need to add it first");
        return false;
    }

    totalprice -= x;
    if (totalprice < 0) totalprice = 0;

    totalitems = deletee(ch, totalitems);

    document.getElementById("totalprice").innerHTML = totalprice + " DT";
    document.getElementById("totalitems").innerHTML = traiter(totalitems);
}

function found(ch1, ch) {
    let i = 0;
    while (i < ch.length - 1) {
        let start = ch.indexOf("*", i) + 1;
        let end = ch.indexOf("*", start);
        let curr = ch.substring(start, end);

        if (curr === ch1) return true;
        i = end;
    }
    return false;
}

function deletee(ch1, ch) {
    let i = 0;
    let done = false;
    let res = "*";

    while (i < ch.length - 1) {
        let start = ch.indexOf("*", i) + 1;
        let end = ch.indexOf("*", start);
        let curr = ch.substring(start, end);

        if (curr === ch1 && !done) {
            done = true;
        } else {
            res += curr + "*";
        }
        i = end;
    }
    return res;
}
