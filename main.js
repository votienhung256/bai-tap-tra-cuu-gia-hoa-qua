function xemGia() {
    let trai = document.getElementById("fruit").value
    let gia
    console.log(trai)
    switch (trai) {
        case "Oi":
            gia = 20000
            break
        case "DuaHau":
            gia = 20000
            break
        case "Tao":
            gia = 30000
            break
        case "Xoai":
            gia = 30000
            break
        case "Cam":
            gia = 40000
            break
        case "ChomChom":
            gia = 40000
            break
        case "MangCut":
            gia = 50000
            break
    }
    document.getElementById("ketQua").innerHTML = `${gia} VNĐ/kg`
}