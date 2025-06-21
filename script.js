let loaded = []

function generateBoxes(start, end) {
    for (i = start; i <= end; i++) {
        //for each box
        box_Id = "ch" + i + "-box"
        box_XML_Id = i + 9
        box_XML_Id = "log" + box_XML_Id.toString() + "01"
        //dbg(catalog_list.xml.getElementById(box_XML_Id).attributes["quotationThree"].value)
        // <div id = 'box_Id'><h2>Chapter i</h2><p><i>Part 1 </i>quotationOne<button onclick = 'goToScene(partOne)'>Go</button></p><p><i>Part 2 </i>quotationTwo<button onclick = 'goToScene(partTwo)'>Go</button></p><p><i>Part 3 </i>quotationThree<button onclick = 'goToScene(partThree)'>Go</button></div>
        box_HTML = "<div id = '" + box_Id + "'><h2>Chapter " + i + "</h2><p><i>Part 1 </i>" + catalog_list.xml.getElementById(box_XML_Id).attributes["quotationOne"].value + "<button onclick = 'goToScene(" + catalog_list.xml.getElementById(box_XML_Id).attributes["partOne"].value + ")'>Go</button>"
        try {box_HTML += "</h2><p><i>Part 2 </i>" + catalog_list.xml.getElementById(box_XML_Id).attributes["quotationTwo"].value + "<button onclick = 'goToScene(" + catalog_list.xml.getElementById(box_XML_Id).attributes["partTwo"].value + ")'>Go</button>" } catch {}
        try {box_HTML += "</h2><p><i>Part 3 </i>" + catalog_list.xml.getElementById(box_XML_Id).attributes["quotationThree"].value + "<button onclick = 'goToScene(" + catalog_list.xml.getElementById(box_XML_Id).attributes["partThree"].value + ")'>Go</button>"} catch {}
        box_HTML +=  + "</div>"
        document.getElementById("chapter-list").appendChild(elementify(box_HTML))
    }
}


function goToScene(ch, scene) {
    console.log(scene.toString())
}



function on_XML_load() {
    dbg("xml loaded!")
    generateBoxes(0,26)
}











//silly xml things
character_data = new XMLHttpRequest()
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
catalog_list.send()

function save_XML(event) {
    this.xml = this.responseXML
    //dbg(this.xml)
    loaded.push(1)
    //dbg(loaded)
    if (loaded.length == /*replace with as many as i'm loading*/ 3) {
        on_XML_load()
    }
}


