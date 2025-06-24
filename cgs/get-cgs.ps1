# src=".*\.png
<#
$char_data = Get-Content -Path "..\xml\ae\cg_list.xml"
$char_data = $char_data.replace("<", ">")
$char_data = $char_data -split  ">"
$image_urls = @($char_data -like "*.jpg")
$percent_each = 100/$image_urls.length
$percent = 0

echo $image_urls.length
for ($i = 0; $i -lt $image_urls.length; $i++) {
    $percent = $i * $percent_each
    Write-Progress -Activity "Adding up strings..." -Status "$percent% Complete:" -PercentComplete $percent
    $image_urls[$i] = "https://act-webstatic.mihoyo.com/event_bh3_com/avg-anti-entropy/static_CN/resources/background/" + $image_urls[$i]
}
# echo $image_urls

for ($i = 0; $i -lt $image_urls.length; $i++) {
    echo $image_urls[$i]
    $percent = $i * $percent_each
    Write-Progress -Activity "Downloading files..." -Status "$percent% Complete:" -PercentComplete $percent
    $split_url = $image_urls[$i] -split "/"
    $file_name = $split_url[$split_url.length - 1]
    $download_url = $image_urls[$i]
    # echo $file_name
    (new-object System.Net.WebClient).DownloadFile( $image_urls[$i], "D:\projects\hi3-vn-reader\cgs\$file_name") 
} #>

for ($n = 0; $n -lt 27; $n++) {
    echo "time to get the strings for chapter $n "
    $char_data = Get-Content -Path "..\xml\ae\ch$n.xml"
    $char_data = -split $char_data
    $image_urls = @($char_data -like 'background="*.jpg"')
    #$image_urls_backup =  @($char_data -like 'background="*.jpg"')
    
    # $percent_each = 100/$image_urls.length
    # $percent = 0

    echo "time to add the strings for chapter $n"
    for ($i = 0; $i -lt $image_urls.length; $i++) {
        #$percent = $i * $percent_each
        #Write-Progress -Activity "Adding up strings..." -Status "$percent% Complete:" -PercentComplete $percent
        $image_urls[$i] = $image_urls[$i] -split '"'
        #$image_urls_backup[$i] = $image_urls[$i][1]
        $image_urls[$i] = "https://act-webstatic.mihoyo.com/event_bh3_com/avg-anti-entropy/static_CN/resources/background/" + $image_urls[$i][1]
    }
    # echo $image_urls
    echo "time to download the backgrounds for chapter $n"
    for ($i = 0; $i -lt $image_urls.length; $i++) {
        # echo $image_urls[$i]
        #$percent = $i * $percent_each
        #Write-Progress -Activity "Downloading files..." -Status "$percent% Complete:" -PercentComplete $percent
        $split_url = $image_urls[$i] -split "/"
        $file_name = $split_url[$split_url.length - 1]
        $download_url = $image_urls[$i]
        # echo $file_name
        try {(new-object System.Net.WebClient).DownloadFile( $image_urls[$i], "D:\projects\hi3-vn-reader\cgs\$file_name") } catch {
            #try {(new-object System.Net.WebClient).DownloadFile( "https://act-webstatic.mihoyo.com/event_bh3_com/avg-anti-entropy/static_CN/resources/cg/" + $image_urls_backup[$i] , "D:\projects\hi3-vn-reader\cgs\$file_name")
             #   echo "used other url :3c"
            #} catch{}
            }
    }
}