export const users = [
    { id: "1", name: "Kanav Rana" },
    { id: "2", name: "John Doe" },
    { id: "3", name: "Jane Smith" },
    { id: "4", name: "Alice Johnson" },
    { id: "5", name: "Bob Brown" },
    { id: "6", name: "Charlie White" },
]
export async function GET() {
    return Response.json(users)
}
export async function POST(request: Request) {
    const user = await request.json();
    const newUser: { id: number, name: string } = {
        id: users.length + 1,
        name: user.name
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json",


        },
        status: 201,
    })



}
