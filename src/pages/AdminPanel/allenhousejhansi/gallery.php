<?php
$mediaId = $_GET['id'] ?? null;
$type = $_GET['type'] ?? null;

if (!$mediaId || !$type) {
    echo "Missing required parameters.";
    exit;
}
$apiUrl = "https://allenhouseadmin.fastranking.tech/api/$type/SCLID000004"; // Full gallery

$json = file_get_contents($apiUrl);
$data = json_decode($json, true);

// Filter gallery by ID
$gallery = array_filter($data['data'], function ($item) use ($mediaId) {
    return $item['id'] == $mediaId;
});

if (empty($gallery)) {
    echo "No gallery found.";
    exit;
}

$galleryItem = array_values($gallery)[0]; // Get the matched item
?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllenHouse Jhansi| Gallery</title>
    <?php include "includes/head.php" ?>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
</head>

<body>

    <?php include "includes/header.php" ?>

    <div class="main relative sm:top-[20px] mb-[40px] sm:mb-[120px]">
        <div class="bg-center flex items-center text-center h-[300px] job-opening-bg common-banner">
            <div>
                <h1
                    class="text-[32px] sm:hidden block font-[700] text-white text-center mb-5 sm:mb-8 hr-line relative leading-9">
                    Gallery
                </h1>
            </div>

            <div class="md:w-[100%]">
                <h1
                    class="sm:text-[32px] sm:block hidden font-[700] text-white text-center sm:mb-1 hr-line relative leading-9">
                    Gallery
                </h1>
            </div>
        </div>
        <div class="sm:w-full sm:max-w-screen-xl sm:mx-auto mx-3 mt-5 mb-10">
            <div id="photoGallerys" class="grid gap-2 grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2">
                <?php
                $medias = [];

                if (!empty($galleryItem['medias']) && is_array($galleryItem['medias'])) {
                    $medias = $galleryItem['medias'];
                } elseif (!empty($galleryItem['media'])) {
                    // wrap single media into an array so foreach works
                    $medias = [$galleryItem['media']];
                }
                ?>

                <?php foreach ($medias as $media): ?>
                    <a href="<?= $media['urls'] ?>" data-fancybox="gallery">
                        <img src="<?= $media['urls'] ?>" alt="Photo" class="rounded shadow-lg h-[250px] w-[100%] object-cover">
                    </a>
                <?php endforeach; ?>
            </div>
        </div>


    </div>
    <?php include "includes/footer.php" ?>
    <?php include "includes/foot.php" ?>

    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
    <script>
        Fancybox.bind("[data-fancybox]", {
            buttons: [
                "slideShow",
                "thumbs",
                "zoom",
                "fullScreen",
                "share",
                "close"
            ],
            loop: false,
            protect: true
        });
    </script>
</body>

</html>