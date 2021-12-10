import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton ({ priceId }: SubscribeButtonProps) {
  const {data: session} = useSession();
  
  function handleSubscribe() {
    // Caso não estiver logado
    if(!session) {
      signIn('github');
      return;
    }

    // Criação da checkout session
    
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}