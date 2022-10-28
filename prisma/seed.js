const { PrismaClient } = require("@prisma/client");
const { productos } = require("./data/productos");
const { categorias } = require("./data/categorias");

const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.categoria.createMany({
      data: categorias,
    });
    await prisma.producto.createMany({
      data: productos,
    });
  } catch (err) {
    console.log(err);
  }
};

main();
