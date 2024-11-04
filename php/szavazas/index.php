<?php

    // list of countries
    $countries = ["Görögország", "Spanyolország", "Olaszország", "Németország"];

    session_start();

    // Initialize vote array
    $vote = [0, 0, 0, 0];

    // Check if votes.txt file exists and load the data
    if (file_exists('votes.txt')) {
        $vote = json_decode(file_get_contents('votes.txt'), true); // Decode JSON as associative array
    }

    // Check if the user has submitted a vote
    if (isset($_POST['country']) && !isset($_SESSION['voted'])) {
        // Get the country index from the POST data
        $countryIndex = (int)$_POST['country'];

        // Increment the vote for the selected country
        $vote[$countryIndex]++;

        // Save updated votes back to the file
        file_put_contents('votes.txt', json_encode($vote, JSON_PRETTY_PRINT));

        // Store in session that the user has voted
        $_SESSION['voted'] = $countryIndex;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vote for Your Favorite Country</title>
    <style>
        /* Styles omitted for brevity */
        *, *::before, *::after {
            box-sizing: border-box;
        }

        body {
            margin: 0;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100dvh;
        }

        form {
            width: 600px;
            padding: 2rem 0 2rem 5rem;
            height: max-content;
            border-radius: 1rem;
            border: 1px solid black;
            background: greenyellow;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        #submitBtn {
            width: max-content;
            padding: .35rem .75rem;
            margin-left: 1.5rem;
            border: 1px solid black;
            border-radius: 1rem;
            background: white;
            cursor: pointer;
        }

        #submitBtn:hover {
            background: black;
            color: white;
        }

        .votesContainer {
            width: 500px;
            height: max-content;
            border: 1px solid black;
            border-radius: 1rem;
            padding: 2rem;
            background: greenyellow;
        }

        .votes {
            font-weight: 400;
            font-size: 1.1rem;
        }

        #yourVote {
            font-weight: bold;
            font-size: 1.5rem;
        }

        #vote {
            color: blueviolet;
        }

        .progress {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-weight: bold;
        }

    </style>
</head>
<body>
    <main class="container">
        <?php if (isset($_SESSION['voted'])): ?>
            <div class="votesContainer">
                <h1>Szavazatok:</h1>
                <div>
                    <?php foreach ($vote as $key => $value): ?>
                        <p class="votes"><?php echo $countries[$key]; ?>: <?php echo $value; ?> szavazat</p>
                        <div class="progress">
                            <span><?php echo round($value * 100 / array_sum($vote)); ?> %</span>
                            <div style="width: <?php echo round($value * 100 / array_sum($vote)); ?>%; height: 20px; background: blueviolet;"></div>
                        </div>
                    <?php endforeach; ?>
                    <div>
                        <p id="yourVote">A te szavazatod: <span id="vote"><?php echo $countries[$_SESSION['voted']]; ?></span></p>
                    </div>
                </div>
            </div>
        <?php else: ?>
            <form method="post">
                <?php foreach ($countries as $index => $country): ?>
                    <div>
                        <input type="radio" name="country" id="radio<?php echo $index; ?>" value="<?php echo $index; ?>">
                        <label for="radio<?php echo $index; ?>"><?php echo $country; ?></label>
                    </div>
                <?php endforeach; ?>
                <input type="submit" value="Szavazás" id="submitBtn">
            </form>
        <?php endif; ?>
    </main>
</body>
</html>
