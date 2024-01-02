currentTime = setInterval(function() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDate();
  
    let a = document.getElementById("hour");
    a.innerHTML = (h < 10 ? "0" : "") + h
    let b = document.getElementById("min");
    b.innerHTML = (m < 10 ? "0" : "") + m
    let c = document.getElementById("sec");
    c.innerHTML = (s < 10 ? "0" : "") + s
  }, 1000);
  