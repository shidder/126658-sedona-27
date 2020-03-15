var button=document.querySelector(".search-btn");var popup=document.querySelector(".search-hotel");button.addEventListener("click",function(evt){evt.preventDefault();popup.classList.toggle("search-close")});button.addEventListener("click",function(evt){if(!popup.classList.contains("search-close")){popup.classList.add("search-open")}
else{popup.classList.remove("search-open")}})
