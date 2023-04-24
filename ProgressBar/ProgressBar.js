window.addEventListener("scroll", function () {
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const percent = (scrollTop / (documentHeight - windowHeight)) * 100;
  document.getElementById("progress").style.width = percent + "%";
});
