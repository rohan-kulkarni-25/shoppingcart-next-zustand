// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(console.log);
}
