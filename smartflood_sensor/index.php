<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>SmartFlood Sensor</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        body {
            background: linear-gradient(
        -45deg,
        #0d1f49,
        #102f86,
        #024362,
        #3490bb,
        #2563eb,
        #38bdf8
        );

        background-size: 400% 400%;
        animation: gradientMove 12s ease infinite;
                color: white;
        }

        .hero {
            height: 50vh;
            display: flex;
            align-items: center;
        }

        .card-feature {
            border: none;
            border-radius: 15px;
            transition: 0.3s;
        }

        .card-feature:hover {
            transform: scale(1.05);
        }

        @keyframes gradientMove {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    </style>
</head>

<body>

    <div class="container hero mt-5">

        <div class="row align-items-center">

            <!-- TEXT -->
            <div class="text-center mt-5 mb-5">
                <h1 class="fw-bold display-4">SmartFlood Sensor</h1>
                <p class="lead">
                    Sistem monitoring ketinggian air sungai berbasis web untuk mendukung Smart City
                    dalam mendeteksi potensi banjir secara cepat dan akurat. SmartFlood Sensor membantu memantau tinggi
                    muka air sungai
                    dengan data akurat dan notifikasi cepat untuk mitigasi banjir. Pantau kondisi sungai secara
                    real-time, dapatkan peringatan dini banjir,
                    dan tingkatkan kesiapsiagaan masyarakat dengan teknologi IoT modern.
                </p>

                <a href="login.php" class="btn btn-light btn-lg me-2">Login</a>
                <a href="register.php" class="btn btn-outline-light btn-lg">Register</a>
            </div>
        </div>

    </div>

    <!-- FEATURES -->
    <div class="container mb-5">

        <div class="row text-center">

            <div class="col-md-4">
                <div class="card card-feature p-4 m-3 shadow">
                    <h5>📊 Monitoring Real-time</h5>
                    <p>Input dan pantau data ketinggian air sungai dengan mudah.</p>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card card-feature p-4 m-3 shadow">
                    <h5>⚠️ Status Banjir</h5>
                    <p>Menentukan kondisi Aman, Waspada, atau Bahaya otomatis.</p>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card card-feature p-4 m-3 shadow">
                    <h5>📷 Bukti Lapangan</h5>
                    <p>Upload foto kondisi sungai sebagai dokumentasi.</p>
                </div>
            </div>

        </div>

    </div>

    <!-- FOOTER -->
    <footer class="text-center pb-3">
        <p>© <?= date("Y"); ?> SmartFlood Sensor | Web Programming</p>
    </footer>

</body>

</html>