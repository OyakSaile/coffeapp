import { createServer, Model } from "miragejs";

export const generateServer = () => {
  createServer({
    models: {
      dashboardOrders: Model,
    },
    seeds(server) {
      server.db.loadData({
        dashboardOrders: {
          product: "Caramel Coffe",
          id: 1,
          total: 100,
          clientName: "Kayo",
          adress: "My Room, 123",
          telephone: "(21) 9999-9999",
        },
      });
    },
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
            "As one of the most popular drinks Starbucks sells, the caramel macchiato enjoys a consistently great reputation. And it's spawned a generation of imitation products, too–walk through any grocery store and you'll see caramel macchiato flavored creamers and even coffee pods.",

          coffeImage: "https://i.ibb.co/fpJt103/pngwing-com-3.png",
          estoque: 10,
        },
      ]);
      this.get("/dashboardOrders", () => {
        return this.schema.all("dashboardOrders");
      });
      this.post("/dashboardOrders", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("dashboardOrders", data);
      });
    },
  });
};
