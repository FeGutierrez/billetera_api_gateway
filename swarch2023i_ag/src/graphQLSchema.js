import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	scheduledPaymentMutations,
	scheduledPaymentQueries,
	scheduledPaymentTypeDef
} from './swarch2023i/categories/typeDefs';

import categoryResolvers from './swarch2023i/categories/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		scheduledPaymentTypeDef
	],
	[
		scheduledPaymentQueries
	],
	[
		scheduledPaymentMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		categoryResolvers
	)
});
