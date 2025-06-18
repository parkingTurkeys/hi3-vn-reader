# src=".*\.png
$char_data = Get-Content -Path "..\xml\ae\character_data.xml"
$char_data = -split $char_data
$image_urls = @($char_data -like 'src="*.png"')
echo $image_urls
# for ($i = 0; $i -lt $image_urls.length; $i++) {
    # $image_urls[$i] = $image_urls[$i] -split " "
    
# }
echo $image_urls
