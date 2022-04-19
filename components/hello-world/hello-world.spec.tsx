import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./hello-world.component";

describe("<HelloWorld />", () => {
  test("should render 'hello world' text", () => {
    render(<HelloWorld />);
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });
});
