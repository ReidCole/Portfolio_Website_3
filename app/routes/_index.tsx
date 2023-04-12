import type { V2_MetaFunction } from '@remix-run/react';
import hrImg from '../../public/img/hr.webp';
import drinksImg from '../../public/img/drinks.webp';
import moviesImg from '../../public/img/movies.webp';
import notesImg from '../../public/img/notes.webp';

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Reid Cole - Portfolio' }];
};

export default function Index() {
	return (
		<div>
			<div className='p-4 flex flex-col gap-8 items-center md:items-start'>
				<div className='border-4 border-rose-900 rounded-xl p-4 w-max text-center bg-black bg-opacity-50'>
					<h1 className='font-bold text-3xl text-rose-600 rounded-lg w-max mb-1'>Reid Cole</h1>
					<p>Web Developer</p>
				</div>

				<div className='flex md:flex-row flex-col gap-8'>
					<div className='max-w-sm'>
						<h2 className='text-2xl mb-4'>Projects</h2>
						<div className='flex flex-col gap-6'>
							<Project
								title='HospitalRecruiting.com'
								href='https://hospitalrecruiting.com'
								imgSrc={hrImg}
								imgAlt='home page of HospitalRecruiting website'
								time={'August 2022 - Present'}
							/>
							<Project
								title='Simple Notes'
								href='https://simplenotes-rc.netlify.app'
								imgSrc={notesImg}
								imgAlt='editing a note on the simple notes website'
								time='June 2022'
							/>
							<Project
								title='Movie List Maker'
								href='https://client.movielistmakerserver.xyz/'
								imgSrc={moviesImg}
								imgAlt='creating a list on the movie list maker website'
								time='May 2022'
							/>
							<Project
								title="Reid's Drinks"
								href='https://reidsdrinks.netlify.app'
								imgSrc={drinksImg}
								imgAlt="home page of Reid's Drinks website"
								time='April 2022'
							/>
						</div>
					</div>

					<div>
						<h2 className='text-2xl mb-4'>Links</h2>
						<div className='flex flex-col gap-4 md:gap-0'>
							<a href='https://github.com/ReidCole/' className='text-rose-500 hover:underline w-max' target='_blank' rel='noreferrer'>
								GitHub
							</a>
							<a href='https://www.linkedin.com/in/reid-cole/' className='text-rose-500 hover:underline w-max' target='_blank' rel='noreferrer'>
								LinkedIn
							</a>
							<a href='mailto:reid-cole@outlook.com' className='text-rose-500 hover:underline w-max' rel='noreferrer'>
								Email
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Project({ title, imgSrc, imgAlt, href, time }: { title: string; imgSrc: string; imgAlt: string; href: string; time: string }) {
	return (
		<div>
			<a href={href} className='group flex flex-col gap-1 rounded-xl' target='_blank' rel='noreferrer'>
				<img src={imgSrc} alt={imgAlt} className='rounded-lg flex max-w-full h-auto w-auto' />
				<div className='flex flex-col text-lg'>
					<p className='text-rose-500 group-hover:underline'>{title}</p>
				</div>
			</a>
			<p>{time}</p>
		</div>
	);
}
