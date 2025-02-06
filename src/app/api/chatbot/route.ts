export async function POST(req: Request) {
    try
    {
        const { question, language } = await req.json();
        const res = await fetch("http://localhost:8080/v1/chatbot/talk", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, language }),
        });

        const data = await res.json();

        //return Response.json(data);
        return new Response(JSON.stringify(data), { status: 200 });   
    } catch(error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}