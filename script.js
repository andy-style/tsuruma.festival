document.getElementById("modalOpen").addEventListener("click",function(){
  document.getElementById("modal").classList.add("active");
  document.getElementById("mask").classList.add("active");
})

document.getElementById("modalClose").addEventListener("click",function(){
  document.getElementById("modal").classList.remove("active");
  document.getElementById("mask").classList.remove("active");
})

// 以下、改善の余地あり  ↓↓
document.getElementById("modal_btn1").addEventListener("click",function(){
  document.getElementById("modal").classList.remove("active");
  document.getElementById("mask").classList.remove("active");
})

document.getElementById("modal_btn2").addEventListener("click",function(){
  document.getElementById("modal").classList.remove("active");
  document.getElementById("mask").classList.remove("active");
})

document.getElementById("modal_btn3").addEventListener("click",function(){
  document.getElementById("modal").classList.remove("active");
  document.getElementById("mask").classList.remove("active");
})

document.getElementById("modal_btn4").addEventListener("click",function(){
  document.getElementById("modal").classList.remove("active");
  document.getElementById("mask").classList.remove("active");
})
// ↑↑   ↑↑
