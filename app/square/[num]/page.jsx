export default async function Square({ params }) {
  console.log(params);
  const num = params.num;
  const response = await fetch(`http://localhost:3000/api/square/${num}`);
  const data = await response.json();
  console.log(data, "Hello World");
  return (
    <>
      <h1>Hello World</h1>
      <h1>{data.square}</h1>
    </>
  );
}
