import type {
	IExecuteFunctions,
	IHookFunctions,
	IDataObject,
	ILoadOptionsFunctions,
	JsonObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

/**
 * Make an "authenticated" API request to Qonto-REST-Api.
 */
export async function qontoApiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	qs: IDataObject,
	body: IDataObject,
	option: IDataObject = {},
) {
	const options: IHttpRequestOptions = {
		headers: {
			'user-agent': 'n8n',
			'Content-Type': 'application/json',
		},
		method,
		url: 'http://mock-server-prism:4010/v2/organization',
		qs,
		body,
		json: true,
	};

	if (!Object.keys(body).length) {
		delete options.body;
	}

	if (!Object.keys(qs).length) {
		delete options.qs;
	}

	if (Object.keys(option).length !== 0) {
		Object.assign(options, option);
	}

	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return await this.helpers.requestOAuth2.call(this, 'qontoOAuth2Api', options, {
			includeCredentialsOnRefreshOnBody: true,
		});
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}
