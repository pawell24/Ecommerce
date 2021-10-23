export const fetchProducts = async () => {};

export class Requests {
  public API: string;

  constructor() {
    this.API = "https://fakestoreapi.com/";
  }
  async getAllProducts() {
    const response = await window.fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });

    return await response.json();
  }
}
