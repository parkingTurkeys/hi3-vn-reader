for ($n = 0; $n -lt 27; $n++) {
    echo "time to get the strings for chapter $n "
    $char_data = Get-Content -Path "..\xml\ae\ch$n.xml"
    $char_data = -split $char_data
    $image_urls = @($char_data -like 'src="*.mp3"')
    $percent_each = 100/$image_urls.length
    $percent = 0

    echo "time to add the strings for chapter $n"
    for ($i = 0; $i -lt $image_urls.length; $i++) {
        $percent = $i * $percent_each
        Write-Progress -Activity "Adding up strings..." -Status "$percent% Complete:" -PercentComplete $percent
        $image_urls[$i] = $image_urls[$i] -split '"'
        $image_urls[$i] = "https://act-webstatic.mihoyo.com/event_bh3_com/avg-anti-entropy/static_CN/resources/sound/" + $image_urls[$i][1]
    }
    # echo $image_urls
    echo "time to download the music for chapter $n"
    for ($i = 0; $i -lt $image_urls.length; $i++) {
        # echo $image_urls[$i]
        $percent = $i * $percent_each
        Write-Progress -Activity "Downloading files..." -Status "$percent% Complete:" -PercentComplete $percent
        $split_url = $image_urls[$i] -split "/"
        $file_name = $split_url[$split_url.length - 1]
        $download_url = $image_urls[$i]
        # echo $file_name
        try {(new-object System.Net.WebClient).DownloadFile( $image_urls[$i], "D:\projects\hi3-vn-reader\bgms\$file_name") } catch {}
    }
}