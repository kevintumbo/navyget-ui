import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from '../src/components/Button/Button';

describe("Testing button", () => {
  test("Test that buttopn is disabled", () => {
    render(<Button text="Button test" disabled />)
    expect(screen.getByRole('button',{ name:"Button test"})).toBeDisabled();
  })
})