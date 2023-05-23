//NO 1
const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const kelompokHewan = () => {
    let hewan = [...hewanBuas, ...hewanJinak];
    return hewan;
};


const makanan = () => {
    let [Fish, Carot, Rice] = hewanJinak;
    console.log(Fish);
    console.log(Carot);
    console.log(Rice);
};

console.log(kelompokHewan())
setTimeout(() => {
    makanan();
},5000);