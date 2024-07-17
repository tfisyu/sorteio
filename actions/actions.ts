'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addParticipant(formData: FormData) {
	const name = formData.get('name') as string;
	const number = formData.get('number') as string;

	await prisma.participant.create({
		data: {
			name,
			number,
		},
	});

	revalidatePath('/participants');
	redirect('/');
}

export const deleteParticipant = async (id: number) => {
	try {
		await prisma.participant.delete({
			where: { id },
		});
	} catch (error) {
		return { message: 'nao deu pra excluir essa merda' };
	}

	revalidatePath('/participants');
};
