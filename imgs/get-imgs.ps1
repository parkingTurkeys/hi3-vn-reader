# src=".*\.png
$char_data = Get-Content -Path "..\xml\ae\character_data.xml"
$char_data = -split $char_data
$image_urls = @($char_data -like "src='*.png'")
$percent_each = 100/$image_urls.length
$percent = 0

for ($i = 0; $i -lt $image_urls.length; $i++) {
    $percent = $i * $percent_each
    switch ($i % 3) {
        0 {Write-Progress -Activity "Adding up strings.  " -Status "$percent% Complete:" -PercentComplete $percent}
        1 {Write-Progress -Activity "Adding up strings.. " -Status "$percent% Complete:" -PercentComplete $percent}
        2 {Write-Progress -Activity "Adding up strings..." -Status "$percent% Complete:" -PercentComplete $percent}
    }
    $image_urls[$i] = $image_urls[$i] -split "'"
    $image_urls[$i] = "https://act-webstatic.mihoyo.com/event_bh3_com/avg-anti-entropy/static_CN/resources/chara/" + "$image_urls[$i][1]"
}
echo $image_urls
