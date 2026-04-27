export interface Color {
  id: number;
  title: string;
  color: string;
}

// tipo para los productos de la API
interface Product {
  id: number;
  title: string;
}

export const ColorAPI = {
  async getColors(): Promise<Color[]> {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) throw new Error("Error al obtener datos");

      const data = await res.json();

      // función para generar color HEX válido (6 dígitos)
      const getRandomColor = (): string => {
        return "#" + Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
      };

      const colors: Color[] = data.products
        .slice(0, 10)
        .map((item: Product) => ({
          id: item.id,
          title: item.title,
          color: getRandomColor(),
        }));

      return colors;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  },
};