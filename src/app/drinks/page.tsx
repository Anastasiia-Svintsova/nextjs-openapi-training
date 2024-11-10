import DrinksList from '@/components/DrinksList';
import { drinksUrl } from '../constants';
import { Drink } from '@/shared';

const fetchDrinks = async (): Promise<{ drinks: Drink[] }> => {
  const response = await fetch(drinksUrl);

  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }

  const data = await response.json();

  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
