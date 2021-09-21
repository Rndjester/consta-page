import React from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "./MainPage";

test("Renders title", () => {
    render(<MainPage />);
    const linkElement = screen.getByText("Главная страница");
    expect(linkElement).toBeInTheDocument();
});
