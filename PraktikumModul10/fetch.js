//Praktikum 18 Fetch Data dari API
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Data dari API:", data);
    });

//PRAKTIKUM 19 FETCH ARROW FUNCTION
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => console.log("Arrow Fetch:", data));


//PRAKTIKUM 20 Error Fetch
fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then(res => {
        if (!res.ok) {
            throw new Error("Request gagal");
        }
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Fetch error:", error.message));