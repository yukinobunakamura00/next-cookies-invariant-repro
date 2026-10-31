"use server";

export async function act(prev: { n: number }, _fd: FormData) {
  return { n: prev.n + 1 };
}
