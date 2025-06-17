# src=".*\.png
$char_data = Get-Content -Path "..\xml\ae\character_data.xml"
$char_data = -split $char_data
$image_urls = @($char_data -like '*.png')
echo $char_data
