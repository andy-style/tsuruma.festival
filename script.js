document.getElementById("modalOpen").addEventListener("click",function(){
  document.getElementById("modal").classList.add("active");
  document.getElementById("mask").classList.add("active");
})

document.getElementById("modalClose").addEventListener("click",function(){
  document.getElementById("modal").classList.remove("active");
  document.getElementById("mask").classList.remove("active");
})
