
let mode = () => {
    let switchElement = document.getElementById("switch").innerHTML;

    if (switchElement.includes("fa-toggle-off")) {
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-toggle-on"></i>'; 
        document.documentElement.style.setProperty("--maintextcolor", "#ffffff");
        document.documentElement.style.setProperty("--mainbagcolor","rgba(28, 26, 26, 0.87)");
        document.documentElement.style.setProperty("--mainpcolor","rgb(196, 193, 193) ");
        document.documentElement.style.setProperty("--hovertextcolor","#ffffff ");
    } else {
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.documentElement.style.setProperty("--maintextcolor", " #000000");
        document.documentElement.style.setProperty("--mainbagcolor"," #ffffff ");
        document.documentElement.style,setProperty("--mainpcolor","#000000a7")
        document.documentElement.style.setProperty("--hovertextcolor","#000000 ");
    }
};
document.getElementById("switch").addEventListener("click", mode);

