import { cookies } from "next/headers";
import { Form } from "./form";

// Needed so that `next build` accepts the blocking cookies() read.
// The dev error also happens without this line.
export const instant = false;

export default async function Page() {
  const v = (await cookies()).get("x")?.value ?? "none";
  return (
    <main>
      <p>cookie:{v}</p>
      <Form />
    </main>
  );
}
