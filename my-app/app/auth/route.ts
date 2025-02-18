export async function POST(req) {
  const data = await req.json();

  if (data.email === "admin" && data.password === "password") {
    return Response.json({ message: "Hello World" });
  }

  return Response.json({ error: "Internal Server Error" }, { status: 500 });
}
