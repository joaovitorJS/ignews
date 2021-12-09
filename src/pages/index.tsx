import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
    <Head>
        <title>Home | ig.news</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br/>
          <span>for {product.amount} month</span>
        </p>

        <SubscribeButton priceId={product.priceId} />
      </section>

      <img src="/images/avatar.svg" alt="Girl codding" />
    </main>

    </>
  );
}

// Servidor Next.js (Camada do next)
export const getServerSideProps: GetServerSideProps = async () => {
  // Prince de um produto, 'price_1K4pwjFvSm04yL3otOXOkxd9' é o API ID do produto, para consultar basta ver produtos no site Stripe
  const price = await stripe.prices.retrieve('price_1K4pwjFvSm04yL3otOXOkxd9');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100), 
  }
  
  return {
    props: {
      product
    }
  }
}
