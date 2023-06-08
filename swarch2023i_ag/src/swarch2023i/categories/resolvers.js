import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allScheduledPayments: (_) =>
			getRequest(URL, ''),
		scheduledPaymentById: (_, { _id }) =>
			generalRequest(`${URL}/${_id}`, 'GET')	
	},
	Mutation: {
		createScheduledPayment: (_, scheduledPayment) => 
			generalRequest(`${URL}/`, 'POST', scheduledPayment),
		updateScheduledPayment: (_, { _id, scheduledPayment}) =>
			generalRequest(`${URL}/${_id}`, 'PUT', scheduledPayment),
		deleteScheduledPayment: (_, { _id }) =>
			generalRequest(`${URL}/${_id}`, 'DELETE')
	}
};

/*
const resolvers = {
	Query: {
		allCategories: (_) =>
			getRequest(URL, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		allScheduledPayments: (_) =>
			getRequest(URL, ''),
		scheduledPaymentById: (_, { _id }) =>
			generalRequest(`${URL}/${_id}`, 'GET')	
	},
	Mutation: {
		createCategory: (_, { category }) =>
			generalRequest(`${URL}/`, 'POST', category),
		updateCategory: (_, { id, category }) =>
			generalRequest(`${URL}/${id}`, 'PUT', category),
		deleteCategory: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};
*/

export default resolvers;
