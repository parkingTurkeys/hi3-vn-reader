function generateBoxes(start, end) {
    for (i = start; i <= end; i++) {
        //for each box
        boxId = "ch" + i + "-box"
        boxHTML = "<p><i>Part 1</i>" + /*put flavor text here*/ "<button onclick = ''>Go</button><button onclick = ''></button><button onclick = ''></button>"
        //add a div with id boxId and innerHTML boxHTML :)
    }
}

generateBoxes(1,6)













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
catalog_list.open("GET", "xml/ae/cg_list.xml")
catalog_list.send()

function save_XML(event) {
    this.xml = this.responseXML
    console.log(this.xml)
}