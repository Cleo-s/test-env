import { createAction } from "@reduxjs/toolkit";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
