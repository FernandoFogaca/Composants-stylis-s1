// Arquivo Card.tsx
import React from 'react';
import { Container, Title, Description, Genre , SecondButton} from './styles';
import { ButtonContainer } from '../../../page/home/styles';
import { Button } from '../Button';

interface CardProps {
  title: string;
  description: string;
  genre: string;
}

export const Card: React.FC<CardProps> = ({ title, description, genre }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Genre>Genre:"{genre}"</Genre>

    <SecondButton>Détails...</SecondButton>






    </Container>
  );
};