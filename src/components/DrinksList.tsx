import { Drink } from '@/shared';
import Link from 'next/link';
import { FC } from 'react';

interface DrinksListProps {
  drinks: Drink[];
}

export const DrinksList: FC<DrinksListProps> = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
