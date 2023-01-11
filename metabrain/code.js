var hierarchy = document.getElementById("hierarchy");
hierarchy.addEventListener("click", function(event){
    var elem = event.target;
    if(elem.tagName.toLowerCase() == "span" && elem !== event.currentTarget)
    {
        var type = elem.classList.contains("folder") ? "folder" : "file";
        if(type=="file")
        {
            alert("File accessed");
        }
        if(type=="folder")
        {
            var isexpanded = elem.dataset.isexpanded=="true";
            if(isexpanded)
            {
                elem.classList.remove("fol-o");
                elem.classList.add("fol-c");
            }
            else
            {
                elem.classList.remove("fol-c");
                elem.classList.add("fol-o");
            }
            elem.dataset.isexpanded = !isexpanded;

            var toggleelems = [].slice.call(elem.parentElement.children);
            var classnames = "file,foldercontainer,noitems".split(",");

            toggleelems.forEach(function(element){
                if(classnames.some(function(val){return element.classList.contains(val);}))
                element.style.display = isexpanded ? "none":"flex";
            });
        }
    }
});



