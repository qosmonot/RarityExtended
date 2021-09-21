/******************************************************************************
**	@Author:				Rarity Extended
**	@Twitter:				@RXtended
**	@Date:					Tuesday September 21st 2021
**	@Filename:				items.js
******************************************************************************/

import	React						from	'react';
import	Image						from	'next/image';
import	ITEMS						from	'utils/codex/items';
import	THE_FOREST_LOOT				from	'utils/codex/theForestLoot.json';

function	Index() {
	const	allItems = [...ITEMS];

	function	renderTheForestLoot() {
		return Object.values(THE_FOREST_LOOT).map((item) => (
			<div className={'flex flex-row space-x-4 w-full tooltip cursor-help group'} key={`theForest_${item.name}`}>
				<div className={'w-16 h-16 bg-gray-principal dark:bg-dark-400 flex justify-center items-center item relative'}>
					<div className={`absolute ${item.levelClassName} left-0 top-0 w-2 h-1`} />
					<div className={`absolute ${item.levelClassName} left-0 top-0 w-1 h-2`} />
					<div className={`absolute ${item.levelClassName} right-0 top-0 w-2 h-1`} />
					<div className={`absolute ${item.levelClassName} right-0 top-0 w-1 h-2`} />
					<Image src={item.img} width={64} height={64} />
					<div className={`absolute ${item.levelClassName} left-0 bottom-0 w-2 h-1`} />
					<div className={`absolute ${item.levelClassName} left-0 bottom-0 w-1 h-2`} />
					<div className={`absolute ${item.levelClassName} right-0 bottom-0 w-2 h-1`} />
					<div className={`absolute ${item.levelClassName} right-0 bottom-0 w-1 h-2`} />
				</div>
				<div className={'text-left flex flex-col py-0.5'}>
					<p className={'text-xs'}>{item.name}</p>
				</div>
				<div className={'tooltiptext invisible group-hover:visible bg-white dark:bg-dark-600 border-4 border-black dark:border-dark-100'}>
					<div className={'p-4'}>
						<p className={'text-sx mb-2'}>{item.level}</p>
						{item.modifier.map((e, i) => (
							<p key={i} className={'text-megaxs'}>
								{`${e.name}: ${e.change > 0 ? `+${e.change}` : e.change}`}
							</p>
						))}
						<p className={'text-megaxs mt-4 text-gray-darker dark:text-white dark:text-opacity-60'}>{item.description}</p>
					</div>
				</div>
			</div>
		));
	}
	function	renderTheCellarLoot() {
		return (
			<div className={'flex flex-row space-x-4 w-full tooltip cursor-help group'}>
				<div className={'w-16 h-16 bg-gray-principal dark:bg-dark-400 flex justify-center items-center item relative'}>
					<div className={`absolute ${ITEMS[0].levelClassName} left-0 top-0 w-2 h-1`} />
					<div className={`absolute ${ITEMS[0].levelClassName} left-0 top-0 w-1 h-2`} />
					<div className={`absolute ${ITEMS[0].levelClassName} right-0 top-0 w-2 h-1`} />
					<div className={`absolute ${ITEMS[0].levelClassName} right-0 top-0 w-1 h-2`} />
					<Image src={ITEMS[0].img} width={64} height={64} />
					<div className={`absolute ${ITEMS[0].levelClassName} left-0 bottom-0 w-2 h-1`} />
					<div className={`absolute ${ITEMS[0].levelClassName} left-0 bottom-0 w-1 h-2`} />
					<div className={`absolute ${ITEMS[0].levelClassName} right-0 bottom-0 w-2 h-1`} />
					<div className={`absolute ${ITEMS[0].levelClassName} right-0 bottom-0 w-1 h-2`} />
				</div>
				<div className={'text-left flex flex-col py-0.5'}>
					<p className={'text-xs'}>{ITEMS[0].name}</p>
				</div>
				<div className={'tooltiptext invisible group-hover:visible bg-white dark:bg-dark-600 border-4 border-black dark:border-dark-100'}>
					<div className={'p-4'}>
						<p className={'text-sx mb-2'}>{ITEMS[0].level}</p>
						<p className={'text-megaxs mt-4 text-gray-darker dark:text-white dark:text-opacity-60'}>{ITEMS[0].description}</p>
					</div>
				</div>
			</div>
		);
	}
	function	renderInventory() {
		return (
			allItems.map((item, i) => {
				if (item.dungeon === 'The Forest') {
					return renderTheForestLoot();
				}
				return (
					<div className={'flex flex-row space-x-4 w-full tooltip cursor-help group'} key={`${item.id}_${i}`}>
						<div className={'w-16 h-16 bg-gray-principal dark:bg-dark-400 flex justify-center items-center item relative'}>
							<div className={`absolute ${item.levelClassName} left-0 top-0 w-2 h-1`} />
							<div className={`absolute ${item.levelClassName} left-0 top-0 w-1 h-2`} />
							<div className={`absolute ${item.levelClassName} right-0 top-0 w-2 h-1`} />
							<div className={`absolute ${item.levelClassName} right-0 top-0 w-1 h-2`} />
							<Image src={item.img} width={48} height={48} />
							<div className={`absolute ${item.levelClassName} left-0 bottom-0 w-2 h-1`} />
							<div className={`absolute ${item.levelClassName} left-0 bottom-0 w-1 h-2`} />
							<div className={`absolute ${item.levelClassName} right-0 bottom-0 w-2 h-1`} />
							<div className={`absolute ${item.levelClassName} right-0 bottom-0 w-1 h-2`} />
						</div>
						<div className={'text-left flex flex-col py-0.5'}>
							<p className={'text-xs'}>{item.name}</p>
						</div>
						<div className={'tooltiptext invisible group-hover:visible bg-white dark:bg-dark-600 border-4 border-black dark:border-dark-100'}>
							<div className={'p-4'}>
								<p className={'text-sx mb-2'}>{item.level}</p>
								<p className={'text-megaxs mt-4 text-gray-darker dark:text-white dark:text-opacity-60'}>{item.description}</p>
							</div>
						</div>
					</div>
				);
			})
		);
	}

	return (
		<section className={'mt-24 md:mt-12'}>
			<div className={'flex flex-col max-w-screen-lg w-full mx-auto'}>
				<h1 className={'text-black dark:text-white text-base'}>{'CODEX - ITEMS'}</h1>
				<div className={'w-full h-1 bg-black dark:bg-dark-100 mt-4 mb-10'}/>

				<h2 className={'text-black dark:text-white text-xs mb-6'}>{'The Cellar'}</h2>
				<div className={'w-full grid grid-cols-1 md:grid-cols-4 gap-6'}>
					{renderTheCellarLoot()}
				</div>

				<h2 className={'text-black dark:text-white text-xs mt-24 mb-6'}>{'The Forest'}</h2>
				<div className={'w-full grid grid-cols-1 md:grid-cols-4 gap-6'}>
					{renderTheForestLoot()}
				</div>

			</div>
		</section>
	);
}

export default Index;