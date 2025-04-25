//el frntend de POST
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form";
import { StyledLink } from "../components/StyledLink";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const router = useRouter();
  async function addPlace(place) {
    const response = await fetch(`/api/places`, {
      method: "POST", //  crear un nuevo producto
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place), // convierte el objeto a JSON
    });
    if (response.ok) {
      router.push("/");
    } else {
      console.error("error creating places");
    }
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <StyledBackLink href="/">back</StyledBackLink>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
