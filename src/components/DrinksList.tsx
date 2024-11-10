import { Drink } from '@/src/shared';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

interface DrinksListProps {
  drinks: Drink[];
}

export const DrinksList: FC<DrinksListProps> = ({ drinks }) => {
  return (
    <ul className="mt-6 grid gap-6 sm:grid-cols-2">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative mb-4 h-48">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width:768px) 100vw (max-width:1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />
            </div>

            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
