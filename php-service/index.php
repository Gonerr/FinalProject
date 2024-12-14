<?php
// Адреса для получения данных
$moviesUrl = 'http://localhost:3000/api/movies';
$topMoviesUrl = 'http://localhost:3000/api/movies/top-grossing';
$reviewsUrl = 'http://localhost:3000/api/movies/%s/reviews';

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

// Обработка формы
$reviews = [];
$searchTitle = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['movie_title'])) {
    $searchTitle = trim($_POST['movie_title']);

    // Ищем фильм по названию
    $movie = array_filter($movies, function ($m) use ($searchTitle) {
        return stripos($m['title'], $searchTitle) !== false; // Поиск подстроки
    });

    if (!empty($movie)) {
        $movie = reset($movie); // Получаем первый найденный фильм
        $movieId = $movie['_id'];

        // Настройка HTTP-контекста
        $context = stream_context_create([
            'http' => [
                'method' => 'GET',
                'ignore_errors' => true, // Получаем контент даже при ошибках
            ],
        ]);

        // Выполняем запрос к API отзывов
        $reviewsResponse = file_get_contents(sprintf($reviewsUrl, $movieId), false, $context);

        // Проверяем код ответа
        $http_response_header_code = explode(' ', $http_response_header[0])[1];
        if ($http_response_header_code == 404) {
            $reviews = []; // Если отзывов нет, устанавливаем пустой массив
        } else {
            $reviews = json_decode($reviewsResponse, true);
        }

        if ($reviews === null) {
            echo "Ошибка при получении отзывов.";
            exit;
        }
    } else {
        $reviews = null; // Фильм не найден
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Фильмы</title>
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

    <h2>Поиск отзывов по названию фильма</h2>
    <form class="search-form" method="POST">
        <label for="movie_title">Введите название фильма:</label>
        <input type="text" id="movie_title" name="movie_title" value="<?php echo htmlspecialchars($searchTitle); ?>" required>
        <button type="submit">Найти отзывы</button>
    </form>

    <?php if ($_SERVER['REQUEST_METHOD'] === 'POST'): ?>
        <?php if ($reviews === null): ?>
            <p>Фильм с названием "<?php echo htmlspecialchars($searchTitle); ?>" не найден.</p>
        <?php elseif (empty($reviews)): ?>
            <p>Для фильма "<?php echo htmlspecialchars($searchTitle); ?>" нет отзывов.</p>
        <?php else: ?>
            <h3>Отзывы к фильму "<?php echo htmlspecialchars($searchTitle); ?>"</h3>
            <ul>
                <?php foreach ($reviews as $review): ?>
                    <li class="review">
                        <p><strong>Автор:</strong> <?php echo htmlspecialchars($review['source']); ?></p>
                        <p><strong>Отзыв:</strong> <?php echo htmlspecialchars($review['reviewText']); ?></p>
                        <p><strong>Дата:</strong> <?php echo htmlspecialchars($review['reviewDate']); ?></p>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
    <?php endif; ?>
</body>

</html>