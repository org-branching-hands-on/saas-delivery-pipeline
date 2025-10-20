import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza título da lista", () => {
  render(<App />);
  expect(screen.getByText(/Lista de Itens/i)).toBeInTheDocument();
});
