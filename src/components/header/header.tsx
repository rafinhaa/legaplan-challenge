import './styles.scss';
import { Logo } from './logo';

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1>Bem-vindo de volta, Marcus</h1>
      <p>Segunda, 01 de dezembro de 2025</p>
    </header>
  );
};

