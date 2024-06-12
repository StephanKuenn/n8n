/* eslint-disable prettier/prettier */
import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class QontoApi implements ICredentialType {
    name = 'qontoApi';

    displayName = 'Qonto API';

    documentationUrl = ' ';

    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apikey',
            type: 'string',
			typeOptions: { password: true },
            default: '',
        },
    ];
    
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            qs: {
                'api_key': '={{$credentials.apiKey}}'
            }
        },
    };
}