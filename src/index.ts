import { Elysia, t } from "elysia";
import { Resource, Scope } from "./schema";

/*
Start the server and send a POST request to http://localhost:1234/test with the following body:

Success (but should fail):
{"name":"string","associatedScopes":[{"id":"a9f10990-2593-45cf-9876-95d75649afc6","blahhh":"adawdwad"}]}

Bad Request (as expected):
{"name":"string","associatedScopes":[{"id":"a9f10990-2593-45cf-9876-95d75649afc6"}],"blahhh":"adawdwad"}
*/

const app = new Elysia()
	.post(
		"/test",
		({ body }) => {
			console.log(body);
		},
		{
			body: t.Composite([
				t.Pick(Resource, ["name"]),
				t.Object({
					associatedScopes: t.Optional(t.Array(t.Pick(Scope, ["id"]))),
				}),
			]),
		},
	)
	.listen(1234);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
