import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "../../component";
import "@testing-library/jest-dom";
describe("Input", () => {
  test("renders input with label", () => {
    const { getByText, getByPlaceholderText } = render(
      <Input label="Username" placeholder="Enter your username" />
    );

    const labelElement = getByText("Username");
    const inputElement = getByPlaceholderText("Enter your username");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onValueChange when input value changes", () => {
    const onValueChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        label="Username"
        placeholder="Enter your username"
        onValueChange={onValueChangeMock}
      />
    );

    const inputElement = getByPlaceholderText("Enter your username");
    fireEvent.change(inputElement, { target: { value: "testuser" } });

    expect(onValueChangeMock).toHaveBeenCalledWith("testuser");
  });

  test("displays error message when error prop is provided", () => {
    const { getByText } = render(
      <Input
        label="Username"
        placeholder="Enter your username"
        error="Username is required"
      />
    );

    const errorElement = getByText("Username is required");

    expect(errorElement).toBeInTheDocument();
  });
});
