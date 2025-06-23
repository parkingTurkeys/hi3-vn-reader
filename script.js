let loaded = []
tag_Index = 0;
vn = false;
log = ""
bgm = document.getElementById("bgm")
sfx = document.getElementById("sfx")

//ch0 = "hello worldiot"

function generateBoxes(start, end) {
    for (i = start; i <= end; i++) {
        //for each box
        box_Id = "ch" + i + "-box"
        box_XML_Id = i + 9
        box_XML_Id = "log" + box_XML_Id.toString() + "01"
        //dbg(catalog_list.xml.getElementById(box_XML_Id).attributes["quotationThree"].value)
        // <div id = 'box_Id'><h2>Chapter i</h2><p><i>Part 1 </i>quotationOne<button onclick = 'goToScene(partOne)'>Go</button></p><p><i>Part 2 </i>quotationTwo<button onclick = 'goToScene(i, partTwo)'>Go</button></p><p><i>Part 3 </i>quotationThree<button onclick = 'goToScene(partThree)'>Go</button></div>
        box_HTML = "<div id = '" + box_Id + "'><h2>Chapter " + i + "</h2><p><i>Part 1 </i>" + catalog_list.xml.getElementById(box_XML_Id).attributes["quotationOne"].value + "<button onclick = 'goToScene(" + i.toString() + "," + catalog_list.xml.getElementById(box_XML_Id).attributes["partOne"].value + ")'>Go</button>"
        try {box_HTML += "</h2><p><i>Part 2 </i>" + catalog_list.xml.getElementById(box_XML_Id).attributes["quotationTwo"].value + "<button onclick = 'goToScene(" + i.toString() + "," + catalog_list.xml.getElementById(box_XML_Id).attributes["partTwo"].value + ")'>Go</button>" } catch {}
        try {box_HTML += "</h2><p><i>Part 3 </i>" + catalog_list.xml.getElementById(box_XML_Id).attributes["quotationThree"].value + "<button onclick = 'goToScene(" + i.toString() + "," + catalog_list.xml.getElementById(box_XML_Id).attributes["partThree"].value + ")'>Go</button>"} catch {}
        box_HTML +=  "</div>"
        document.getElementById("chapter-list").appendChild(elementify(box_HTML))
    }
}

function setActive(tag) {
    array = document.getElementsByClassName("chara-img")
    dbg(array)
    for (i = 0; i < 6; i++) {
        array[i].classList.remove("active")
        array[i].classList.add("inactive")
    }
    document.getElementById("character-" + tag.attributes["position"].value).classList.add("active")
}

function setInactive() {
    array = document.getElementsByClassName("chara-img")
    dbg(array)
    for (i = 0; i < 6; i++) {
        array[i].classList.remove("active")
        array[i].classList.add("inactive")
    }
}

var checkbox = document.getElementById("is-portrait")

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    document.querySelector("body").className = "portrait"
  } else {
    document.querySelector("body").className = ""
  }
  checkbox.blur()
});


function goToScene(ch, scene) {
    bgm.pause()
    vn = true;
    window.ch = ch
    window.scene = scene
    tag_Index = 0
    dbg(ch.toString() + scene.toString())
    document.getElementById("menu").className = "hide"
    document.getElementById("vn").className = ""
    //dbg("ch" + ch.toString())
    window.current_Scene = window["ch" + ch.toString()].xml.getElementById(scene);
    dbg(current_Scene)
    dbg(current_Scene.attributes["background"].value.includes("jpg"))
    if(current_Scene.attributes["background"].value.includes("jpg") === false) {document.getElementsByTagName("body")[0].style.backgroundColor = current_Scene.attributes["background"].value; document.querySelector("body").style.backgroundImage = 0} else {document.getElementsByTagName("body")[0].style.backgroundImage = "url(cgs/" + current_Scene.attributes["background"].value+ ")"}
    /*for (i = 0; i < current_Scene.children.length; i++) {
        processTag(current_Scene.children.item(i))
    }*/
}

function processTag(tag) {
    switch (tag.nodeName) {
        case "bgm":
            if (tag.attributes["status"].value == "start" ) {
                bgm.src = "bgm/" + tag.attributes["src"].value
                bgm.load()
                bgm.play()
            }
            //nextFrame()
            break;
        case "sound":
            sfx.src = "bgm/" + tag.attributes["src"].value
            sfx.load()
            sfx.play()
            break;
        case "text":
            document.getElementById("char_name").innerHTML = ""
            document.getElementById("dialogue").innerHTML = tag.innerHTML;
            document.getElementById("dialogue").style.color = "#ffffff"
            document.getElementById("char_name").style.color = "#ffffff"
            break;
        case "speak":
            document.getElementById("dialogue").innerHTML = tag.innerHTML;
            document.getElementById("dialogue").style.color = character_data.xml.getElementById(tag.attributes["chara"].value).attributes["color"].value
            document.getElementById("char_name").style.color = character_data.xml.getElementById(tag.attributes["chara"].value).attributes["color"].value
            document.getElementById("char_name").innerHTML = character_data.xml.getElementById(tag.attributes["chara"].value).attributes["name"].value
            if (tag.attributes["position"]) {
                document.getElementById("character-" + tag.attributes["position"].value).src = "imgs/" + character_data.xml.getElementById(tag.attributes["chara"].value).attributes["src"].value
                setActive(tag)
            } else {
                setInactive()
            }
            
            break;
        case "show":
            document.getElementById("character-" + tag.attributes["position"].value).src = "imgs/" + character_data.xml.getElementById(tag.attributes["chara"].value).attributes["src"].value
            break;
        case "hide":
            document.getElementById("character-" + tag.attributes["position"].value).src = ""
            break;
        case "goto":
            goToScene(ch,tag.attributes["goto"].value)
            break;
        case "end":
            if (ch !== 26) {goToScene(ch + 1, 0)} else {alert("you're done!")}
            break;
        default:
            dbg("OH NO... a new tag! the tag name is" + tag.nodeName)
    }
}


function on_XML_load() {
    dbg("xml loaded!")
    generateBoxes(0,26)
    goToScene(2, 0)
}

document.getElementsByTagName("body")[0].addEventListener("keydown", handleKeyPress)

function handleKeyPress(event) {
    switch (event.key) {
        case " ":
            nextFrame()
            break;
        case "Enter":
            nextFrame()
            break;
    }
}

function nextFrame() {
    processTag(current_Scene.children.item(tag_Index))
    tag_Index++
}



let xml;

function load_an_XML(file) {
    dbg(file)
    window[file] = new XMLHttpRequest()
    window[file].addEventListener("load", save_XML)
    window[file].open("GET", "xml/ae/" + file + ".xml")
    window[file].send()
}



//silly xml things
/*character_data = new XMLHttpRequest()
character_data.addEventListener("load", save_XML)
character_data.open("GET", "xml/ae/character_data.xml")
character_data.send()

cg_list = new XMLHttpRequest()
cg_list.addEventListener("load", save_XML)
cg_list.open("GET", "xml/ae/cg_list.xml")
cg_list.send()

catalog_list = new XMLHttpRequest()
catalog_list.addEventListener("load", save_XML)
catalog_list.open("GET", "xml/ae/catalog_list.xml")
catalog_list.send()*/

load_an_XML("character_data")
load_an_XML("cg_list")
load_an_XML("catalog_list")
load_an_XML("ch0")

for (i = 0; i <= 26; i++) {
    load_an_XML("ch" + i.toString())
    dbg("ch" + i.toString())
}

function save_XML(event) {
    this.xml = this.responseXML
    //dbg(this.xml)
    loaded.push(1)
    //dbg(loaded)
    if (loaded.length == /*replace with as many as i'm loading*/ 30) {
        on_XML_load()
    }
}


