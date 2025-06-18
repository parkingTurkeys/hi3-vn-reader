let loaded = []

function generateBoxes(start, end) {
    for (i = start; i <= end; i++) {
        //for each box
        box_Id = "ch" + i + "-box"
        box_XML_Id = i + 9
        box_XML_Id += "01"
        dbg(box_XML_Id)
        box_HTML = "<p><i>Part 1</i>" + catalog_list.xml.getElementById(box_XML_Id).quotationOne + "<button onclick = ''>Go</button><button onclick = ''></button><button onclick = ''></button>"
        document.getElementById("chapter-list").appendChild(elementify(box_HTML))
    }
}



function on_XML_load() {
    dbg("xml loaded!")
    generateBoxes(1,6)
}











//sily xml things
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
    if (loaded.length == /*replace with as many as you're loading*/ 3) {
        on_XML_load()
    }
}


