import React from "react";
import Seo from "../components/Seo";

const SSRPage = ({ serverData }) => {
  return (
    <>
      <h1 className="text-xl">SSR Page with Dogs</h1>
      <img className="h-auto w-80" alt="Happy dog" src={serverData.message} />
    </>
  );
};

export const Head = () => <Seo title="Using Server-side Rendering (SSR)" />;

export default SSRPage;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
