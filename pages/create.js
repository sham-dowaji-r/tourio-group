import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form";
import { StyledLink } from "../components/StyledLink";

export default function CreatePage() {
  const router = useRouter();

  async function addPlace(place) {
    console.log("Submitting place:", place);
    const response = await fetch(`/api/places`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });
    if (response.ok) {
      router.push("/");
    } else {
      console.error("error creating places");
    }
  }

  return (
    <>
      <h2>Create a New Place</h2>
      <Form onSubmit={addPlace} formName="create-place" />
    </>
  );
}
