import { cookies } from "next/headers";
import { Form } from "./form";

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
