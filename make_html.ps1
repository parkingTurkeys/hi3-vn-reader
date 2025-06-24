for ($i = 0; $i -lt 27; $i++) {
    $ch_data = Get-Content -Path "xml\ae\ch$i.xml"
    $data_string = $ch_data 
    #data_string = $data_string[0] -split "<data>"
    echo $data_string
    #$data_string = $data_string[0] -split "</data>"
    #$data_string = $data_string[0] -split "</story>"
    #$data_string = $data_string[0] -split '<story title="1">'
    
    $html_string = $html_string + "<div id = 'ch$i'>" + $data_string + "</div>"
}

Out-File -FilePath out.html -InputObject $html_string -Encoding utf8