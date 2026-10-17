const tenMon = document.getElementById("mon-yeu-thich");
const dem = document.getElementById("count");
let dsMonHoc = [
    {
        stt: "1", tenMon: "Toán"
    }, {
        stt: "2", tenMon: "Vật lý"
    }, {
        stt: "3", tenMon: "Tin học"
    }, {
        stt: "4", tenMon: "Tiếng Anh"
    }, {
        stt: "5", tenMon: "Thể dục"
    }
];
const themMon = { stt: "6", tenMon: "ntw" };
dsMonHoc.push(themMon);
dsMonHoc.pop();
for (let i = 0; i < dsMonHoc.length; i++) {
    tenMon.innerHTML += '<div class="khung" id="ds-mon-hoc>' +
        '<div id="mon-hoc-yeu-thich">' +
        '<p id="mon">' +
        dsMonHoc[i].stt + '. ' +
        dsMonHoc[i].tenMon +
        '</p>' +
        '</div>' +
        '</div>';
};


dem.innerText = `Tổng số các môn: ${dsMonHoc.length}`;