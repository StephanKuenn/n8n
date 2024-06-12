import type {
	//IExecuteFunctions,
	//IDataObject,
	//INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	//JsonObject,
	//IRequestOptions,
} from 'n8n-workflow';
//import { NodeApiError, NodeOperationError } from 'n8n-workflow';

import { qontoApiRequest } from './GenericFunctions';

export class Qonto implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Qonto',
		name: 'qonto',
		icon: 'file:qontodummy.svg',
		group: ['input'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'A Node to link your workflow with your bank account at Qonto',
		defaults: {
			name: 'Qonto',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'qontoApi',
				required: false,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{	//giving 2 resources to choose from.
						name: 'Test1',
						value: 'test1',
						description: 'Dummy to make it run 1',
						action: 'return 1',
					},
					{
						name: 'Test2',
						value: 'test2',
						description: 'Dummy to make it run 2',
						action: 'return 2',
					},
				],
				default: 'test2',
			},
			{	// setting up 2 diffrent operations to interact with the Api
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['test1'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get the balance', //might need to fit into Qonto-Api
						description: '1st try to get the balance',
						routing: {
							request: {
								method: 'GET',
								url: '/balance', //needs to fit into Qonto-Api
							},
						},
					},
				],
				default: 'get',
			},
			{	// setting up 2 diffrent operations to interact with the Api
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['test2'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get the balance', //might need to fit into Qonto-Api
						description: '1st try to get the balance',
						routing: {
							request: {
								method: 'GET',
								url: '/balance', //needs to fit into Qonto-Api
							},
						},
					},
				],
				default: 'get',
			},
		],
	};
}
