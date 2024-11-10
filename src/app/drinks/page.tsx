import DrinksList from '@/components/DrinksList';
import { drinksUrl } from '../constants';
import { Drink } from '@/shared';

const fetchDrinks = async (): Promise<{ drinks: Drink[] }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(drinksUrl);

  // throw error

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
