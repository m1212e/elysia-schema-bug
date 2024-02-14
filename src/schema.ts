import { Type, Static } from "@sinclair/typebox";

export const Resource = Type.Object(
	{
		id: Type.String(),
		app: Type.Object({
			id: Type.String(),
			name: Type.String(),
			authProviderId: Type.String(),
			domainId: Type.String(),
			allowedOrigins: Type.Array(Type.String()),
		}),
		domain: Type.Object({
			id: Type.String(),
			name: Type.String(),
			authProviderId: Type.String(),
		}),
		domainId: Type.String(),
		appId: Type.String(),
		authProviderId: Type.String(),
		associatedScopes: Type.Array(
			Type.Object(
				{
					id: Type.String(),
					appId: Type.String(),
					domainId: Type.String(),
					authProviderId: Type.String(),
					name: Type.String(),
				},
			),
		),
		name: Type.String(),
		appAccesses: Type.Array(
			Type.Object({
				id: Type.String(),
				domainId: Type.String(),
				appId: Type.String(),
				authProviderId: Type.String(),
			}),
		),
	},
);

export const Scope = Type.Object(
	{
		id: Type.String(),
		app: Type.Object({
			id: Type.String(),
			name: Type.String(),
			authProviderId: Type.String(),
			domainId: Type.String(),
			allowedOrigins: Type.Array(Type.String()),
		}),
		appId: Type.String(),
		domain: Type.Object({
			id: Type.String(),
			name: Type.String(),
			authProviderId: Type.String(),
		}),
		domainId: Type.String(),
		authProviderId: Type.String(),
		associatedResources: Type.Array(
			Type.Object(
				{
					id: Type.String(),
					domainId: Type.String(),
					appId: Type.String(),
					authProviderId: Type.String(),
					name: Type.String(),
				},
			),
		),
		name: Type.String(),
		appAccesses: Type.Array(
			Type.Object({
				id: Type.String(),
				domainId: Type.String(),
				appId: Type.String(),
				authProviderId: Type.String({
					description:
						"corresponds to the entity which is related to granting the access. Permissions in case of keycloak.",
				}),
			}),
		),
	},
	{
		description:
			'An operation of a protection rule. Can be something like "read", "write:profile", "farm:delete", "execute", etc.',
	},
);
