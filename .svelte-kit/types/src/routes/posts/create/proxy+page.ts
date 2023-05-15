// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async () => {
	// throw new Error('Yikes !');
	throw error(404, { message: 'Yike!' });
};
;null as any as PageLoad;