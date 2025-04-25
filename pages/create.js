import { useRouter } from "next/navigation";
import Form from "@/components/Form";

export default function CreatePage() {
  const router = useRouter();

  async function addPlace(data) {
    const response = await fetch("/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <>
      <h2>Create a New Place</h2>
      <Form onSubmit={addPlace} formName="create-place" />
    </>
  );
}
