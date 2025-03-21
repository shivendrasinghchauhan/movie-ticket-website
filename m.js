let fetchData = async () => {
    let url = "http://localhost:3000/movie";
    let res = await fetch(url, { method: "GET" });

    let data = await res.json();
    console.log(data);

    Datashow(data);
};

let searchh = async () => {
    let searchinp = document.querySelector("#searchinp").value.toLowerCase();
    let url = "http://localhost:3000/movie";
    let res = await fetch(url, { method: "GET" });
    let data = await res.json();
    let FilterData = data.filter((e) => {
        return e.name.toLowerCase().includes(searchinp) || e.city.toLowerCase().includes(searchinp);
    });

    Datashow(FilterData);
};

let Datashow = (data) => {
    let display = document.querySelector("#dataDisplay");
    display.innerHTML="";
    data.map((e) => {
        display.innerHTML += `
        <tr>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.city}</td>
            <td>${e.tiket}</td>
            <td>${e.number}</td>
            <td>${e.price}</td>
            <td>${e.tiket * e.price}</td>
            <td onclick="deletee('${e.id}')">cancel</td>
        </tr>
        `;
    });
};

let deletee = (id) => {
    let url = `http://localhost:3000/movie/${id}`;
    fetch(url, { method: "DELETE" });
};

let ins = () => {
    let inpname = document.querySelector("#name").value;
    let inpage = document.querySelector("#age").value;
    let inpcity = document.querySelector("#city").value;
    let inptiket = document.querySelector("#tiket").value;
    let inpmobile = document.querySelector("#mobile").value;
    let inpdate = document.querySelector("#date").value;

    let url = 'http://localhost:3000/movie';

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inpname,
            age: inpage,
            city: inpcity,
            tiket: inptiket,
            mobile: inpmobile,
            date: inpdate,
            price: 200
        })
    });
    return false;
};
