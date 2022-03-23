import { createServer } from "miragejs";
export const generateServer = () => {
  createServer({
    routes() {
      this.namespace = "api";
      this.get("/featured", () => [
        {
          id: 1,
          price: 13.5,
          coffeName: "Caramel Coffe",
          coffeDescription:
            "As one of the most popular drinks Starbucks sells, the caramel macchiato enjoys a consistently great reputation. And it's spawned a generation of imitation products, too–walk through any grocery store and you'll see caramel macchiato flavored creamers and even coffee pods.",
          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",
          estoque: 10,
        },

        {
          id: 2,
          price: 13.5,
          coffeName: "Caramel Coffe2",
          coffeDescription:
            "As one of the most popular drinks Starbucks sells, the caramel macchiato enjoys a consistently great reputation. And it's spawned a generation of imitation products, too–walk through any grocery store and you'll see caramel macchiato flavored creamers and even coffee pods.",
          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",

          estoque: 10,
        },

        {
          id: 3,
          price: 13.5,
          coffeName: "Caramel Coffe3",
          coffeDescription:
            "As one of the most popular drinks Starbucks sells, the caramel macchiato enjoys a consistently great reputation. And it's spawned a generation of imitation products, too–walk through any grocery store and you'll see caramel macchiato flavored creamers and even coffee pods.",
          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",

          estoque: 10,
        },

        {
          id: 2,
          price: 13.5,
          coffeName: "Caramel Coffe",
          coffeDescription:
            "As one of the most popular drinks Starbucks sells, the caramel macchiato enjoys a consistently great reputation. And it's spawned a generation of imitation products, too–walk through any grocery store and you'll see caramel macchiato flavored creamers and even coffee pods.",
          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",

          estoque: 10,
        },
      ]);
      this.get("/coffes", () => [
        {
          id: 1,
          price: 13.5,
          coffeName: "Product1",
          coffeDescription:
            "As one of the most popular drinks Starbucks sells, the caramel macchiato enjoys a consistently great reputation. And it's spawned a generation of imitation products, too–walk through any grocery store and you'll see caramel macchiato flavored creamers and even coffee pods.",
          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",
          estoque: 10,
        },

        {
          id: 2,
          price: 15.5,
          coffeName: "Product 2",
          coffeDescription:
            "The most commonly used and widely available bean, Arabica accounts for 60 percent of the world's coffee production. Originating hundreds of years ago in the highlands of Ethiopia, and likely popularized in 7th Century Arabia (hence the name), it's actually quite delicate and difficult to grow — meaning its prevalence doesn't necessarily translate to commodity prices. Often found under gourmet labels, high-quality Arabica is smooth and complex, with a notable lack of bitterness.",
          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",
          estoque: 10,
        },
        {
          id: 3,
          price: 25.9,
          coffeName: "Product 3",
          coffeDescription:
            "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.140 calories, 12g sugar, 5g fat.",
          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",
          estoque: 10,
        },

        {
          id: 4,
          price: 25.9,
          coffeName: "Product 4",
          coffeDescription:
            "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.140 calories, 12g sugar, 5g fat.",
          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",
          estoque: 10,
        },
      ]);
    },
  });
};
