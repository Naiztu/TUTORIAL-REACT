import { sum, estaAprobado } from "./ExampleV09";

describe("Pruebas del componente ExampleV09", () => {
  describe("Pruebas de sum", () => {
    test("Suma de dos numeros", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });

    it("Suma erronea", () => {
      const result = sum(1, 2);
      expect(result).not.toBe(6);
    });
  });

  describe("Pruebas de EstaAprobado", () => {
    it("Aprobo con 80", () => {
      const result = estaAprobado(80);
      expect(result).toBeTruthy();
    });

    it("Aprobo con 70", () => {
      const result = estaAprobado(70);
      expect(result).toBeTruthy();
    });

    it("No aprobo con 50", () => {
      const result = estaAprobado(50);
      expect(result).toBeFalsy();
    });

    it("No esta dentro del rango +", () => {
      const result = estaAprobado(150);
      expect(result).toBeNull();
    });
    it("No esta dentro del rango -", () => {
      const result = estaAprobado(-15);
      expect(result).toBeNull();
    });
  });
});
