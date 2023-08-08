import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import Input from '../src/components/Input/Input';
import {render, screen, waitFor } from '@testing-library/react'

describe("Testing Input", () => {
  test("Check placeholder In Input", () => {
    render(<Input placeholder="Hello world" />)
    expect(screen.getByPlaceholderText('Hello world')).toHaveAttribute('placeholder', 'Hello world');
  })
  test("renders Input component correctly", async () => {
    render(<Input placeholder="Navyget"/>);
    const inputNode = screen.getByPlaceholderText("Navyget") as HTMLInputElement;
    userEvent.type(inputNode, "Hello world!");
    await waitFor(() => expect(inputNode.value).toBe("Hello world!"));
  })
})