class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = libros),
      (this.mascotas = mascotas);
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(nombre) {
    this.mascotas.push(nombre);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombreLibro, autor) {
    this.libros.push({ nombreLibro, autor });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombreLibro);
  }
}

let Karina = new Usuario(
  "Karina",
  "Mastbaum",
  [
    { nombreLibro: "Orgullo y prejuicio", autor: "Jane Austen" },
    {
      nombreLibro: "Outlander",
      autor: "Diana Gabaldon",
    },
  ],
  ["Milo"]
);

karina.getFullName();
karina.addMascota("Paz");
karina.countMascotas();
karina.addBook("El psicoanalista", "John Katzenbach");
karina.getBookNames();
console.log(Karina);
