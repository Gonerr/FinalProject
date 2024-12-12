<?php
// Адреса для получения данных
$moviesUrl = 'http://localhost:3000/api/movies';
$topMoviesUrl = 'http://localhost:3000/api/movies/top-grossing';

// Получаем данные через HTTP-запросы
$moviesResponse = file_get_contents($moviesUrl);
$topMoviesResponse = file_get_contents($topMoviesUrl);

// Декодируем JSON-ответы в массивы
$movies = json_decode($moviesResponse, true);
$topMovies = json_decode($topMoviesResponse, true);

if ($movies === null || $topMovies === null) {
    echo "Ошибка при получении данных.";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Фильмы</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }

        header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h1 {
            margin: 0;
            font-size: 2.5em;
        }

        h2 {
            color: #4CAF50;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 5px;
            margin-bottom: 20px;
            margin-top: 30px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        li {
            flex: 1 1 calc(45% - 20px);
            margin-bottom: 20px;
            max-width: 45%;
        }

        .movie-card {
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .movie-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .movie-card h3 {
            background-color: #4CAF50;
            color: white;
            margin: 0;
            padding: 10px;
            font-size: 1.5em;
        }

        .movie-card p {
            margin: 10px;
            font-size: 1em;
            line-height: 1.5;
        }

        li strong {
            font-size: 1.2em;
            color: #4CAF50;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>

</head>

<body>
    <h2>Топ фильмов по продажам</h2>
    <ul>
        <?php foreach ($topMovies as $movie): ?>
            <li class="movie-card">
                <h3><?php echo htmlspecialchars($movie['title']); ?></h3>
                <p><strong>Рейтинг:</strong> <?php echo htmlspecialchars($movie['rating']); ?></p>
                <p><strong>Цена одного билета:</strong> <?php echo htmlspecialchars($movie['averagePrice']); ?></p>
                <p><strong>Билетов продано:</strong> <?php echo htmlspecialchars($movie['totalTickets']); ?></p>
                <p><strong>Общая выручка:</strong> <?php echo htmlspecialchars($movie['totalRevenue']); ?> ₽</p>
            </li>
        <?php endforeach; ?>
    </ul>

    <h2>Все фильмы</h2>
    <ul>
        <?php foreach ($movies as $movie): ?>
            <li class="movie-card">
                <h3><?php echo htmlspecialchars($movie['title']); ?></h3>
                <p><strong>Жанр:</strong> <?php echo htmlspecialchars($movie['genre']); ?></p>
                <p><strong>Год выпуска:</strong> <?php echo htmlspecialchars($movie['year']); ?></p>
                <p><strong>Рейтинг:</strong> <?php echo htmlspecialchars($movie['rating']); ?></p>
                <p><strong>Цена:</strong> <?php echo htmlspecialchars($movie['price']); ?> ₽</p>
            </li>
        <?php endforeach; ?>
    </ul>
</body>

</html>