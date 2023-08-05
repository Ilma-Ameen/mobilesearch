let mobiles = {
    iphone: {
        iphone11pro:{
            name: "Iphone11pro",
            display: "6.1 inches, 90.3 cm2",
            camera: "12 MP, f/1.8, 26mm (wide), 1/2.55",
            ram:"64GB 4GB RAM",
            price: "150,000"
        },
        iphone12promax:{
            name: "Iphone12promax",
            display: "6.1 inch (diagonal) all screen OLED display",
            camera: "12 MP, f/1.8, 26mm (wide), 1/2.55",
            ram:"128GB RAM",
            price: "300,000"
        },
        iphone13promax:{
            name: "Iphone13promax",
            display: "6.1 inch (diagonal) all screen OLED display",
            camera: "12 MP, f/2.4, 120˚, 13mm (ultrawide)",
            ram:"128GB 4GB RAM",
            price: "400,000"
        }
    },
    samsung: {
        samsungS21:{
            name: "samsungS21",
            display: "6.8 inch 75.6x165.1x8.9mm",
            camera: "108MP Wide 12MP Ultra wide",
            ram:"256 GB",
            price:"40,000"
        },
        samsungZfold:{
            name: "samsungS22",
            display: "6.1 inches, 90.1 cm2",
            camera: "10 MP, f/2.2, 26mm (wide)",
            ram:"128GB 8GB RAM",
            price:"400,000"

        },
        samsungS23ultra:{
            name: "samsungS23",
            display: "6.1 inches, 90.1 cm2",
            camera: "12 MP, f/2.2, 26mm (wide)",
            ram:"128GB 8GB RAM",
            price: "500,000"
        }
    },
    xiomi: {
        redmiNote10: {
            name: "Redmi Note 10",
            display: "6.43 inches, 99.8 cm2",
            camera: "48 MP, f/1.8, 26mm (wide)",
            ram: "64GB 4GB RAM",
            price: "15,000"
        },
        mi11xPro: {
            name: "Mi 11X Pro",
            display: "6.67 inches, 107.4 cm2",
            camera: "108 MP, f/1.8, 26mm (wide)",
            ram: "128GB 8GB RAM",
            price: "25,000"
        },
        pocoF3: {
            name: "Poco F3",
            display: "6.67 inches, 107.4 cm2",
            camera: "48 MP, f/1.8, 26mm (wide)",
            ram: "256GB 8GB RAM",
            price: "20,000"
        }
    },
    oppo: {
        oppoA93: {
            name: "Oppo A93",
            display: "6.43 inches, 99.8 cm2",
            camera: "48 MP, f/1.7, 26mm (wide)",
            ram: "128GB 8GB RAM",
            price: "18,000"
        },
        oppoReno6: {
            name: "Oppo Reno 6",
            display: "6.43 inches, 99.8 cm2",
            camera: "64 MP, f/1.7, 26mm (wide)",
            ram: "128GB 8GB RAM",
            price: "22,000"
        },
        oppoF19: {
            name: "Oppo F19",
            display: "6.43 inches, 99.8 cm2",
            camera: "48 MP, f/1.7, 26mm (wide)",
            ram: "128GB 6GB RAM",
            price: "16,000"
        }
    },
};

var filterOption = document.getElementById("filterOption").value;
var filterValue = document.getElementById("filterValue").value.toLowerCase();
var para = document.getElementById("showSpecification");

function filterMobiles() {
    var filteredMobiles = [];
    for (var company in mobiles) {
        var models = Object.keys(mobiles[company]).map(model => {
            return {
                company: company,
                model: model,
                ...mobiles[company][model]
            };
        });

        filteredMobiles.push(...models.filter(mobile => {
            return mobile[filterOption].toLowerCase().includes(filterValue);
        }));
    }

    displayFilteredMobiles(filteredMobiles);
}

function displayFilteredMobiles(filteredMobiles) {
    para.innerHTML = "";

    if (filteredMobiles.length === 0) {
        para.innerHTML = "No matching mobiles found.";
    } else {
        filteredMobiles.forEach(mobile => {
            para.innerHTML += `
                <p>
                    Company: ${mobile.company}, Model: ${mobile.name}, 
                    display: ${mobile.display}, RAM: ${mobile.ram}, Price: ${mobile.price}, Camera: ${mobile.camera}
                </p>
            `;
        });
    }
}


