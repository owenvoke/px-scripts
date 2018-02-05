<?php

/*
 *
 * Title:   WorldWideTorrents RSS Reader
 * Author:  PXgamer
 * Version: 1.0
 *
 */

?>
<!DOCTYPE html>
<html lang="en">
    <head itemscope itemtype="http://schema.org/WebSite">
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale=1.0,width=device-width">
        <meta name="HandheldFriendly" content="true"/>
        <title>KatRevive</title>
        <meta name="theme-color" content="#594c2d">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" type="text/javascript"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" type="text/javascript"></script>
    </head>
    <body>
        <?php

            date_default_timezone_set("UTC");

            $rss = simplexml_load_file("http://feeds.feedburner.com/WorldwideTorrents");

            $i = 0;
        if ($rss) {
            $items = $rss->channel->item;
            echo "<table class=\"table table-hover\">
						<tr><th>Title</th><th>Category</th><th colspan=\"2\">Download</th><th>Publish Date</th></tr>";
            foreach ($items as $item) {
                echo "<tr><td>$item->title</td><td>";
                echo "$item->category</td><td>";
                echo "<a href=\"".$item->enclosure[0]["url"] . "\">MG</a></td><td>";
                echo "<a href=\"".$item->enclosure[1]["url"] . "\">DL</a></td><td>";
                echo date("H:m:s dS M Y", strtotime($item->pubDate[0])) . "</td></tr>";
            }
        }
            
        ?>
    </body>
</html>