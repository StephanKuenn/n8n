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
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
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
		],
	};
}
