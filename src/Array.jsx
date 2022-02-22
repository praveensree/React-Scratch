import React, { useEffect, useState } from "react";

export default function Array() {
  return (
    <div>
      <EndlessUI id="random" />
    </div>
  );
}

export function EndlessUI({ id }) {
  const [data, setData] = useState();
  useEffect(() => {
    const URL = `https://cat-fact.herokuapp.com/facts/${id}`;
    fetch(URL)
      .then(response => response.json())
      .then(facts => {
        setData(facts.text);
      });
  }, [id, setData]);

  return <div>Cat Fact: {data}</div>;
}
