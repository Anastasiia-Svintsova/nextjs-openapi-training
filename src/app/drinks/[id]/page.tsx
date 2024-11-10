import { singleDrinkUrl } from '@/app/constants';
import { Drink } from '@/shared';
import Image from 'next/image';
import Link from 'next/link';

const getSingleDrink = async (id: string): Promise<{ drinks: Drink[] }> => {
  const response = await fetch(`${singleDrinkUrl}${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch a drink...');
  }

  return response.json();
};

const SingleDrinkPage = async ({ params }: { params: { id: string } }) => {
  const data = await getSingleDrink(params.id);

  const { strDrink: title, strDrinkThumb: imgSrc } = data.drinks[0] || {};

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mb-12 mt-8">
        back to drinks
      </Link>

      <Image
        src={imgSrc}
        alt={title}
        className="mb-4 rounded-lg shadow-lg"
        priority
        width={192}
        height={192}
      />

      <h1 className="mb-8 text-4xl">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
