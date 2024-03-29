import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("ct01-verificar a integração na consulta", () => {
  //dado que o componente foi renderizado
  render(<App />);
  //quando consulto se o titulo foi renderizado
  const textElement = screen.getByText(/consulta catalogo/i);
  //entao o titulo esta no documento
  expect(textElement).toBeInTheDocument();
});
test("ct02 - verificar a integracao no resultado da consulta", async () => {
  render(<App />);
  await waitFor(
    () => {
      const txtLabel = screen.getByText(/eletrobomba/i);
      expect(txtLabel).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
});
test("ct03 - verificar a quantidade de linhas na tabela de produtos", async () => {
  //dado que o componente foi renderizado
  render(<App />);

  // quando consulto o catalogo de produtos
  await waitFor(() => {
    const tabelaProdutos = screen.getByRole("table");
    const linhasProdutos = tabelaProdutos.querySelectorAll("tbody > tr");

    // então a quantidade de linhas e três
    expect(linhasProdutos.length).toBe(3);
  });
});
