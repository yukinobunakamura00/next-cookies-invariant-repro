"use client";
import { useActionState } from "react";
import { act } from "./actions";

export function Form() {
  const [s, f] = useActionState(act, { n: 0 });
  return (
    <form action={f}>
      <button>go</button>
      <span>{s.n}</span>
    </form>
  );
}
