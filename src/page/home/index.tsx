import { Title } from "../../components/title";
import { Button } from "../../components/title/Button";
import { Card } from "../../components/title/card";
import { ButtonContainer, CardContainer } from "./styles";

export const Home = () => {
    return (
        <div>
            <Title />
            <ButtonContainer>
                <Button >Cliquez</Button>
            </ButtonContainer>

            <CardContainer>
                <Card
                    title="Avont toi "
                    description="Tu sais le monde ne tournait pas rond
                                J'avais les mots mais pas la chanson
                                Tu sais l'amour, tu sais la passion
                                Oui, c'est écrit, c'était dit
                                Oui, c'est la vie
                                Avant toi, je n'avais rien
                                Avant toi, on n'm'a pas montré le chemin
                                Je sais, le ciel ne m'en veut pas
                                D'avoir posé les yeux sur toi
                                Avant toi, on n'm'a pas montré le chemin"
                    genre="Chanson "

                />
            </CardContainer>
        </div>
    );
};