var popup=document.querySelector(".search-hotel"),button=document.querySelector(".search-btn"),submit=popup.querySelector(".result-btn"),arrival=popup.querySelector("[name=arrival]"),depature=popup.querySelector("[name=departure]"),adults=popup.querySelector("[name=adults]"),children=popup.querySelector("[name=children]");button.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("search-close")}),button.addEventListener("click",function(e){popup.classList.contains("search-close")?(popup.classList.remove("search-open"),popup.classList.remove("search-error")):popup.classList.add("search-open")}),popup.addEventListener("submit",function(e){arrival.value&&departure.value&&adults.value&&children.value||(e.preventDefault(),popup.classList.remove("search-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("search-error"),console.log("Нужно заполнить все поля"))});